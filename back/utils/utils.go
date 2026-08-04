package utils

import (
    "fmt"
    "io"
    "os"
)

func ReadFile(filePath string) ([]byte, error) {
    // Open the file
    file, err := os.Open(filePath)
    if err != nil {
        return nil, fmt.Errorf("failed to open file: %w", err)
    }
    defer file.Close()

    // Read the file content
    content, err := io.ReadAll(file)
    if err != nil {
        return nil, fmt.Errorf("failed to read file: %w", err)
    }

    return content, nil
}
