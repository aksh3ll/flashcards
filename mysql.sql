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
) ENGINE=InnoDB AUTO_INCREMENT=2496 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

