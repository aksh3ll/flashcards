package collection

import (
	"encoding/json"
	"fmt"
	"strconv"
	"net/http"
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

// FromByteArray unmarshals a byte array into a Collection struct
func FromByteArray(data []byte) (*Collection, error) {
	var collection Collection
	err := json.Unmarshal(data, &collection)
	if err != nil {
		return nil, err
	}
	return &collection, nil
}

func (c *Collection) ToByteArray() ([]byte, error) {
	return json.Marshal(c)
}

func (c *Collection) ToJsonString() (string, error) {
	data, err := c.ToByteArray()
	if err != nil {
		return "", err
	}
	return string(data), nil
}

func (c *Collection) PrintInfo() {
	// we print out the collection ID, order, and name as just an example
	fmt.Println("Collection ID: " + c.Id)
	fmt.Println("Collection Order: " + strconv.Itoa(c.Order))
	fmt.Println("Collection Name (FR): " + c.Name.Fr)
	fmt.Println("Collection Name (EN): " + c.Name.En)
	fmt.Println("Collection Name (JA): " + c.Name.Ja)
}

func GetCollectionsHandler(res http.ResponseWriter, req *http.Request) {
	// Example implementation: return an empty JSON array
	res.Header().Set("Content-Type", "application/json")
	res.Write([]byte("[]"))
}
