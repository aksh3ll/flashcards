Generate a comprehensive JSON dataset for the following 16 Japanese sentences: `作文の発表会。`, `昔話の絵本を見る。`, `秋田県に遊びに行く。`, `有名人が来る。`, `多数決をする。`, `カードを表にする。`, `氷の上を歩く。`, `一分は六十秒です。`, `農作物を育てる。`, `次回お楽しみに。`, `野球の球を拾う。`, `ゆうびん局に行く。`, `話し合いで決める。`, `本を整理する。`, `洋服を着る。`, `木の実が落ちる。`.

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