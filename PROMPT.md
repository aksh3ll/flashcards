Generate a comprehensive JSON dataset for the following 16 Japanese sentences: `白ちょうがとぶ。`, `休日をすごす。`, `白いはなをかざる。`, `村人をたずねる。`, `手をあげる。`, `きれいな花がさく。`, `学校を休む。`, `夕がたまでにかえる。`, `千円のかいもの。`, `お金をはらう。`, `土をたいらにする。`, `糸をまく。`, `目がさめる。`, `金よう日。`, `百円玉。`, `土よう日。`.

The output must follow the template
`{
    "id": "rei",
    "name": { "en": "example", "fr": "exemple", "ja": "例" },
    "sentences": [
      { "id": "s1", "display": "これは例です。", "hiragana": "これはれいです。", "fr": "Ceci est un exemple.", "en": "This is an example."}
    ],
    "words": [
      { "id": "w1", "sentenceIds": ["s1"], "display": "例", "hiragana": "れい", "en": "example", "fr": "exemple" },
      { "id": "w2", "sentenceIds": ["s1"], "display": "書く", "hiragana": "かく", "en": "to write", "fr": "écrire" }
      
    ],
    "kanjis": [
      { "id": "k1", "wordIds": ["w1"], "kanji": "考", "readings": ["れい", "たと"], "en": "example", "fr": "exemple" },
      { "id": "k2", "wordIds": ["w2"], "kanji": "書", "readings": ["か", "しょ"], "en": "write", "fr": "écrire" }
    ]
}`

1.  **Sentence Objects**: For each sentence, create an object with:
    *   `id`: String in format `s` + sentence number (e.g., "s1").
    *   `display`: The original Japanese sentence.
    *   `hiragana`: The sentence converted to hiragana.
    *   `fr`: French translation.
    *   `en`: English translation.

2.  **Word Objects**: For every unique whole word with kanji appearing in the sentences, if the word is a verb replace it by its u-form example `生まれた` become `生まれる`, `行きます` become `行く`, if the word is an i-adjective use the i form, if the word is an na-adjective use the normal form, then create an object with:
    *   `id`: String in format `w` + sequential number starting from 1.
    *   `sentenceIds`: A list of string IDs from the sentence objects above where this specific kanji appears.
    *   `display`: The word with kanji.
    *   `hiragana`: The word written in hiragana.
    *   `en`: A comprehensive list of the most common English meanings for this word, covering all usages, not just context-specific ones, as one string comma separated.
    *   `fr`: A comprehensive list of the most common French meanings for this word, covering all usages, not just context-specific ones, as one string comma separated.

3.  **Kanji Objects**: For every unique kanji appearing in the sentences, create an object with:
    *   `id`: String in format `k` + sequential number starting from 1.
    *   `wordIds`: A list of string IDs from the word objects above where this specific kanji appears.
    *   `kanji`: The single kanji character.
    *   `readings`: A comprehensive list of all possible readings in hiragana only for this kanji, not limited to those used in the provided sentences.
    *   `en`: A comprehensive list of the most common English meanings for this kanji, covering all usages, not just context-specific ones, as one string comma separated.
    *   `fr`: A comprehensive list of the most common French meanings for this kanji, covering all usages, not just context-specific ones, as one string comma separated.

Return the result as a valid JSON file.