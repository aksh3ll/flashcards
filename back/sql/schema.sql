CREATE DATABASE flashcards;

CREATE USER 'flashcards'@'localhost' IDENTIFIED BY 'S3ns31';
GRANT ALL PRIVILEGES ON flashcards.* TO 'flashcards'@'localhost';

-- flashcards.KANJI definition

CREATE TABLE `KANJI` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `KANJI` varchar(1) NOT NULL,
  `onyomi_katakana` varchar(150) DEFAULT NULL,
  `onyomi_romaji` varchar(150) DEFAULT NULL,
  `kunyomi_hiragana` varchar(150) DEFAULT NULL,
  `kunyomi_romaji` varchar(150) DEFAULT NULL,
  `meaning_en` varchar(150) DEFAULT NULL,
  `meaning_fr` varchar(150) DEFAULT NULL,
  `level` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `KANJI_UNIQUE` (`KANJI`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- flashcards.COLLECTION definition

CREATE TABLE `COLLECTION` (
  `id` varchar(100) NOT NULL,
  `name_fr` varchar(150) DEFAULT NULL,
  `name_en` varchar(150) DEFAULT NULL,
  `name_ja` varchar(150) DEFAULT NULL,
  `order` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- flashcards.SENTENCE definition

CREATE TABLE `SENTENCE` (
  `id` varchar(100) NOT NULL,
  `collection_id` varchar(100) NOT NULL,
  `display` varchar(255) NOT NULL,
  `hiragana` varchar(255) DEFAULT NULL,
  `en` varchar(255) DEFAULT NULL,
  `fr` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`, `collection_id`),
  KEY `SENTENCE_COLLECTION_idx` (`collection_id`),
  CONSTRAINT `SENTENCE_COLLECTION` FOREIGN KEY (`collection_id`) REFERENCES `COLLECTION` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- flashcards.WORD definition

CREATE TABLE `WORD` (
  `id` varchar(100) NOT NULL,
  `collection_id` varchar(100) NOT NULL,
  `display` varchar(150) NOT NULL,
  `hiragana` varchar(150) DEFAULT NULL,
  `en` varchar(150) DEFAULT NULL,
  `fr` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`, `collection_id`),
  KEY `WORD_COLLECTION_idx` (`collection_id`),
  CONSTRAINT `WORD_COLLECTION` FOREIGN KEY (`collection_id`) REFERENCES `COLLECTION` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- flashcards.WORD_SENTENCE definition
-- join table for the words <-> sentences many-to-many relation (Word.sentenceIds)

CREATE TABLE `WORD_SENTENCE` (
  `word_id` varchar(100) NOT NULL,
  `sentence_id` varchar(100) NOT NULL,
  `collection_id` varchar(100) NOT NULL,
  PRIMARY KEY (`word_id`, `sentence_id`, `collection_id`),
  KEY `WORD_SENTENCE_SENTENCE_idx` (`sentence_id`, `collection_id`),
  CONSTRAINT `WORD_SENTENCE_WORD` FOREIGN KEY (`word_id`, `collection_id`) REFERENCES `WORD` (`id`, `collection_id`) ON DELETE CASCADE,
  CONSTRAINT `WORD_SENTENCE_SENTENCE` FOREIGN KEY (`sentence_id`, `collection_id`) REFERENCES `SENTENCE` (`id`, `collection_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
