package main

import (
	"fmt"
    "log"
    "net/http"
	"flashcards/collection"
	"flashcards/utils"
)

var DEFAULT_COLLECTION_FILE = "collection.json"

func serveStaticFile(path string, filePath string) {
	http.HandleFunc(path, func(res http.ResponseWriter, req *http.Request) {
		http.ServeFile(res, req, filePath)
	})
}

func serveFavicon(res http.ResponseWriter, req *http.Request) {
    http.ServeFile(res, req, "./static/favicon.ico")
}

func serveJsonFile(res http.ResponseWriter, req *http.Request) {
	data, err := utils.ReadFile(DEFAULT_COLLECTION_FILE)
	if err != nil {
		fmt.Println("Error reading file:", err)
		return
	}

	collectionPtr, err := collection.FromByteArray(data)
	if err != nil {
		fmt.Println("Error unmarshalling JSON:", err)
		return
	}
	collectionPtr.PrintInfo()
	res.Header().Set("Content-Type", "application/json")
	res.Write(data)
}

func main() {
    http.Handle("/", http.FileServer(http.Dir("../front/")))
    serveStaticFile("/favicon.ico", "./static/favicon.ico")
	http.HandleFunc("/api/v1/collections", collection.GetCollectionsHandler)
	http.HandleFunc("/api/v1/test.json", serveJsonFile)
	serveStaticFile("/api/v1/data.json", "../front/data.json")
    log.Fatal(http.ListenAndServeTLS(":8081", "certs/server.crt", "certs/server.key", nil))
}
