package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strconv"
)

// Name struct which contains a name in French, English, and Japanese
type Name struct {
	Fr string `json:"fr"`
	En string `json:"en"`
	Ja string `json:"ja"`
}

// Collection struct which contains a name an order and a list of sentences
type Collection struct {
	Id        string     `json:"id"`
	Name      Name       `json:"name"`
	Order     int        `json:"order"`
	Sentences []Sentence `json:"sentences"`
	Words     []Word     `json:"words"`
	Kanjis    []Kanji    `json:"kanjis"`
}

// Sentence struct which contains a sentence definition
type Sentence struct {
	Id       string `json:"id"`
	Display  string `json:"display"`
	Hiragana string `json:"hiragana"`
	En       string `json:"en"`
	Fr       string `json:"fr"`
}

// Word struct which contains a word definition and a list of sentence ids
type Word struct {
	Id          string   `json:"id"`
	SentenceIds []string `json:"sentenceIds"`
	Display     string   `json:"display"`
	Hiragana    string   `json:"hiragana"`
	En          string   `json:"en"`
	Fr          string   `json:"fr"`
}

// Kanji struct which contains a kanji definition and a list of readings
type Kanji struct {
	Id       string   `json:"id"`
	WordIds  []string `json:"wordIds"`
	Kanji    string   `json:"kanji"`
	Readings []string `json:"readings"`
	En       string   `json:"en"`
	Fr       string   `json:"fr"`
}

func main() {
	// Open our jsonFile
	jsonFile, err := os.Open("collection.json")
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Successfully Opened collection.json")
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	// read our opened jsonFile as a byte array.
	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Println("Error reading file:", err)
		return
	}

	// we initialize our Collection struct
	var collection Collection

	// we unmarshal our byteArray which contains our
	// jsonFile's content into 'collection' which we defined above
	err = json.Unmarshal(byteValue, &collection)
	if err != nil {
		fmt.Println("Error unmarshalling JSON:", err)
		return
	}

	// we print out the collection ID, order, and name as just an example
	fmt.Println("Collection ID: " + collection.Id)
	fmt.Println("Collection Order: " + strconv.Itoa(collection.Order))
	fmt.Println("Collection Name (FR): " + collection.Name.Fr)
	fmt.Println("Collection Name (EN): " + collection.Name.En)
	fmt.Println("Collection Name (JA): " + collection.Name.Ja)
}
