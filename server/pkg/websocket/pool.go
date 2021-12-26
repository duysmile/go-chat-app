package websocket

import "log"

type Pool struct {
	Register   chan *Client
	Unregister chan *Client
	Clients    map[*Client]bool
	Broadcast  chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[*Client]bool),
		Broadcast:  make(chan Message),
	}
}

func (p *Pool) Start() {
	for {
		select {
		case client := <-p.Register:
			p.Clients[client] = true
			log.Println("size of connection pool: ", len(p.Clients))
			for client := range p.Clients {
				log.Println(client)
				client.Conn.WriteJSON(Message{
					Type: 1,
					Body: "new user joined",
				})
			}
		case client := <-p.Unregister:
			delete(p.Clients, client)
			log.Println("size of connection pool: ", len(p.Clients))
			for client := range p.Clients {
				log.Println(client)
				client.Conn.WriteJSON(Message{
					Type: 1,
					Body: "user disconnected",
				})
			}
		case message := <-p.Broadcast:
			log.Println("sending message to all clients in pool")
			for client := range p.Clients {
				if err := client.Conn.WriteJSON(message); err != nil {
					log.Println(err)
					return
				}
			}
		}
	}
}
