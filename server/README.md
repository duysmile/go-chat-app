# Go Chat App - Text + Voice

### Step by step
1. Download package for gRPC:
```bash
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

2. Install protoc
```bash
brew install protobuf
```

3. Init go module
```bash
go mod init github.com/duysmile/go-chat-app
```

4. Create Makefile to automate your work:
- generate: generate proto to go protobuf

5. Install packages:
```bash
go get google.golang.org/grpc
go get github.com/grpc-ecosystem/grpc-gateway
```

6. Build simple server with gRPC
- Follow this tutorial: https://grpc-ecosystem.github.io/grpc-gateway/docs/tutorials/adding_annotations/

