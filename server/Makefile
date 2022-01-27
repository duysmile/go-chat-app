generate:
	protoc -I ./proto \
	--go_out ./pb --go_opt paths=source_relative \
	--go-grpc_out ./pb --go-grpc_opt paths=source_relative \
	--grpc-gateway_out ./pb --grpc-gateway_opt paths=source_relative \
	./proto/*.proto

install:
	go get \
		github.com/gogo/protobuf/protoc-gen-gogo \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger \
		github.com/mwitkow/go-proto-validators/protoc-gen-govalidators \
		github.com/rakyll/statik