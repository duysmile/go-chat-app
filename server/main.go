package main

import (
	"fmt"
	"go-chat-app/pkg/websocket"
	"net/http"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("Socket connected from:", r.Host)

	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
		return
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(rw, "Simple server")
	})

	pool := websocket.NewPool()
	go pool.Start()
	http.HandleFunc("/ws", func(rw http.ResponseWriter, r *http.Request) {
		serveWs(pool, rw, r)
	})
}

func main() {
	fmt.Println("Chat App Server")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
