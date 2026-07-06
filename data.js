// ============================================================
// DEFAULT COLLECTIONS
// Each collection contains:
//   sentences : display (kanji), hiragana, en, fr
//   words     : display (kanji), hiragana, sentenceIds[], en, fr
//   kanjis    : kanji character, readings[], wordIds[], en, fr
//               (kanjis are DEDUPLICATED per collection)
// ============================================================

const DEFAULT_COLLECTIONS = [
  {
    id: "coll-1",
    name: "Étudier le japonais",
    sentences: [
      {
        id: "s1",
        display: "日本語を勉強しています",
        hiragana: "にほんごをべんきょうしています",
        en: "I am studying Japanese",
        fr: "J'étudie le japonais"
      },
      {
        id: "s2",
        display: "今日はいい天気ですね",
        hiragana: "きょうはいいてんきですね",
        en: "The weather is nice today, isn't it",
        fr: "Il fait beau aujourd'hui, n'est-ce pas"
      },
      {
        id: "s3",
        display: "明日も頑張りましょう",
        hiragana: "あしたもがんばりましょう",
        en: "Let's do our best tomorrow too",
        fr: "Faisons de notre mieux demain aussi"
      }
    ],
    words: [
      { id: "w1", sentenceIds: ["s1"], display: "日本語", hiragana: "にほんご", en: "Japanese language", fr: "la langue japonaise" },
      { id: "w2", sentenceIds: ["s1"], display: "勉強", hiragana: "べんきょう", en: "study", fr: "étude, étudier" },
      { id: "w3", sentenceIds: ["s2"], display: "今日", hiragana: "きょう", en: "today", fr: "aujourd'hui" },
      { id: "w4", sentenceIds: ["s2"], display: "天気", hiragana: "てんき", en: "weather", fr: "météo, temps" },
      { id: "w5", sentenceIds: ["s3"], display: "明日", hiragana: "あした", en: "tomorrow", fr: "demain" },
      { id: "w6", sentenceIds: ["s3"], display: "頑張る", hiragana: "がんばる", en: "to do one's best", fr: "faire de son mieux" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1", "w3", "w5"], kanji: "日", readings: ["にち", "じつ", "ひ", "か"], en: "sun, day", fr: "soleil, jour" },
      { id: "k2",  wordIds: ["w1"],              kanji: "本", readings: ["ほん", "もと"],            en: "book, origin, true", fr: "livre, origine, vrai" },
      { id: "k3",  wordIds: ["w1"],              kanji: "語", readings: ["ご", "かた"],              en: "language, word", fr: "langue, mot" },
      { id: "k4",  wordIds: ["w2"],              kanji: "勉", readings: ["べん"],                   en: "diligence, effort", fr: "zèle, effort" },
      { id: "k5",  wordIds: ["w2"],              kanji: "強", readings: ["きょう", "ごう", "つよ"],  en: "strong, force", fr: "fort, force" },
      { id: "k6",  wordIds: ["w3"],              kanji: "今", readings: ["こん", "きん", "いま"],    en: "now, present", fr: "maintenant, présent" },
      { id: "k7",  wordIds: ["w4"],              kanji: "天", readings: ["てん", "あま"],            en: "heaven, sky", fr: "ciel, paradis" },
      { id: "k8",  wordIds: ["w4"],              kanji: "気", readings: ["き", "け"],               en: "spirit, energy", fr: "esprit, énergie" },
      { id: "k9",  wordIds: ["w5"],              kanji: "明", readings: ["めい", "みょう", "あ"],    en: "bright, light, clear", fr: "lumineux, clair" },
      { id: "k10", wordIds: ["w6"],              kanji: "頑", readings: ["がん"],                   en: "stubborn, determined", fr: "têtu, déterminé" },
      { id: "k11", wordIds: ["w6"],              kanji: "張", readings: ["ちょう", "は"],            en: "stretch, spread", fr: "tendre, étendre" }
    ]
  },
  {
    id: "coll-2",
    name: "Se présenter",
    sentences: [
      {
        id: "s1",
        display: "私の名前は山田太郎です",
        hiragana: "わたしのなまえはやまだたろうです",
        en: "My name is Yamada Taro",
        fr: "Mon nom est Yamada Taro"
      },
      {
        id: "s2",
        display: "私は大学生です",
        hiragana: "わたしはだいがくせいです",
        en: "I am a university student",
        fr: "Je suis étudiant(e) à l'université"
      },
      {
        id: "s3",
        display: "毎日日本語を練習しています",
        hiragana: "まいにちにほんごをれんしゅうしています",
        en: "I practice Japanese every day",
        fr: "Je pratique le japonais tous les jours"
      }
    ],
    words: [
      { id: "w1", sentenceIds: ["s1", "s2"], display: "私",     hiragana: "わたし",   en: "I, me",                    fr: "moi, je" },
      { id: "w2", sentenceIds: ["s1"],        display: "名前",   hiragana: "なまえ",   en: "name",                     fr: "prénom, nom" },
      { id: "w3", sentenceIds: ["s1"],        display: "山田",   hiragana: "やまだ",   en: "Yamada (surname)",          fr: "Yamada (nom de famille)" },
      { id: "w4", sentenceIds: ["s1"],        display: "太郎",   hiragana: "たろう",   en: "Taro (given name)",         fr: "Taro (prénom masculin)" },
      { id: "w5", sentenceIds: ["s2"],        display: "大学生", hiragana: "だいがくせい", en: "university student",    fr: "étudiant(e) à l'université" },
      { id: "w6", sentenceIds: ["s3"],        display: "毎日",   hiragana: "まいにち", en: "every day",                fr: "tous les jours" },
      { id: "w7", sentenceIds: ["s3"],        display: "日本語", hiragana: "にほんご", en: "Japanese language",        fr: "la langue japonaise" },
      { id: "w8", sentenceIds: ["s3"],        display: "練習",   hiragana: "れんしゅう", en: "practice",              fr: "pratique, entraînement" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],        kanji: "私", readings: ["わたし", "わたくし", "し"], en: "I, private, personal", fr: "moi, privé, personnel" },
      { id: "k2",  wordIds: ["w2"],        kanji: "名", readings: ["めい", "みょう", "な"],     en: "name, famous",          fr: "nom, célèbre" },
      { id: "k3",  wordIds: ["w2"],        kanji: "前", readings: ["ぜん", "まえ"],             en: "before, front",         fr: "avant, devant" },
      { id: "k4",  wordIds: ["w3"],        kanji: "山", readings: ["さん", "やま"],             en: "mountain",              fr: "montagne" },
      { id: "k5",  wordIds: ["w3"],        kanji: "田", readings: ["でん", "た"],               en: "rice field",            fr: "champ de riz" },
      { id: "k6",  wordIds: ["w4"],        kanji: "太", readings: ["たい", "た", "ふと"],        en: "thick, large, bold",    fr: "épais, grand, gras" },
      { id: "k7",  wordIds: ["w4"],        kanji: "郎", readings: ["ろう"],                     en: "son, young man",        fr: "fils, jeune homme" },
      { id: "k8",  wordIds: ["w5"],        kanji: "大", readings: ["だい", "たい", "おお"],      en: "big, large",            fr: "grand, large" },
      { id: "k9",  wordIds: ["w5"],        kanji: "学", readings: ["がく", "まな"],              en: "study, learning",       fr: "étude, apprentissage" },
      { id: "k10", wordIds: ["w5"],        kanji: "生", readings: ["せい", "しょう", "い", "なま"], en: "life, birth",        fr: "vie, naissance" },
      { id: "k11", wordIds: ["w6"],        kanji: "毎", readings: ["まい"],                     en: "every",                 fr: "chaque, tous les" },
      { id: "k12", wordIds: ["w6", "w7"],  kanji: "日", readings: ["にち", "じつ", "ひ", "か"], en: "day, sun",              fr: "jour, soleil" },
      { id: "k13", wordIds: ["w7"],        kanji: "本", readings: ["ほん", "もと"],             en: "book, origin, true",    fr: "livre, origine, vrai" },
      { id: "k14", wordIds: ["w7"],        kanji: "語", readings: ["ご", "かた"],               en: "language, word",        fr: "langue, mot" },
      { id: "k15", wordIds: ["w8"],        kanji: "練", readings: ["れん"],                     en: "practice, knead",       fr: "pratiquer, pétrir" },
      { id: "k16", wordIds: ["w8"],        kanji: "習", readings: ["しゅう", "なら"],            en: "learn, habit",          fr: "apprendre, habitude" }
    ]
  },
  {
    id: "2nensei-yomitori-11",
    name: "2年生 よみとり 11",
    sentences: [
      {
        id: "s1",
        display: "町まで遠い。",
        hiragana: "まちまでとおい。",
        en: "It's far to the town.",
        fr: "C'est loin jusqu'à la ville."
      },
      {
        id: "s2",
        display: "風が強い。",
        hiragana: "かぜがつよい。",
        en: "The wind is strong.",
        fr: "Le vent est fort."
      },
      {
        id: "s3",
        display: "音楽の天才。",
        hiragana: "おんがくのてんさい。",
        en: "A musical genius.",
        fr: "Un génie musical."
      },
      {
        id: "s4",
        display: "学校の正門。",
        hiragana: "がっこうのせいもん。",
        en: "The main gate of the school.",
        fr: "La porte principale de l'école.",
      },
      {
        id: "s5",
        display: "弓矢を引く。",
        hiragana: "ゆみやをひく。",
        en: "To draw a bow and arrow.",
        fr: "Tirer à l'arc et à la flèche."
      },
      {
        id: "s6",
        display: "ちかくの交番。",
        hiragana: "ちかくのこうばん。",
        en: "A nearby police box.",
        fr: "Un poste de police à proximité."
      },
      {
        id: "s7",
        display: "計算が合う。",
        hiragana: "けいさんがあう。",
        en: "The calculation matches.",
        fr: "Le calcul correspond."
      },
      {
        id: "s8",
        display: "ふかい谷がある。",
        hiragana: "ふかいたにがある。",
        en: "There is a deep valley.",
        fr: "Il y a une vallée profonde."
      },
      {
        id: "s9",
        display: "北風がつめたい。",
        hiragana: "きたかぜがつめたい。",
        en: "The north wind is cold.",
        fr: "Le vent du nord est froid."
      },
      {
        id: "s10",
        display: "牛肉を食べる。",
        hiragana: "ぎゅうにくをたべる。",
        en: "To eat beef.",
        fr: "Manger du bœuf."
      },
      {
        id: "s11",
        display: "字を書き直す。",
        hiragana: "じをかきなおす。",
        en: "To rewrite a character.",
        fr: "Réécrire un caractère."
      },
      {
        id: "s12",
        display: "台風が弱まる。",
        hiragana: "たいふうがよわまる。",
        en: "The typhoon weakens.",
        fr: "Le typhon s'affaiblit."
      },
      {
        id: "s13",
        display: "本を売る。",
        hiragana: "ほんをうる。",
        en: "To sell a book.",
        fr: "Vendre un livre."
      },
      {
        id: "s14",
        display: "時間を計る。",
        hiragana: "じかんをはかる。",
        en: "To measure time.",
        fr: "Mesurer le temps."
      },
      {
        id: "s15",
        display: "遠足に行く。",
        hiragana: "えんそくにいく。",
        en: "To go on a field trip.",
        fr: "Partir en excursion."
      },
      {
        id: "s16",
        display: "正直に話す。",
        hiragana: "しょうじきにはなす。",
        en: "To speak honestly.",
        fr: "Parler honnêtement."
      }
    ],
    words: [
      { id: "w1",  sentenceIds: ["s1"],  display: "町",     hiragana: "まち",       en: "town",            fr: "ville, bourg" },
      { id: "w2",  sentenceIds: ["s1"],  display: "遠い",   hiragana: "とおい",     en: "far, distant",    fr: "loin, éloigné" },
      { id: "w3",  sentenceIds: ["s2"],  display: "風",     hiragana: "かぜ",       en: "wind",            fr: "vent" },
      { id: "w4",  sentenceIds: ["s2"],  display: "強い",   hiragana: "つよい",     en: "strong",          fr: "fort, puissant" },
      { id: "w5",  sentenceIds: ["s3"],  display: "音楽",   hiragana: "おんがく",   en: "music",           fr: "musique" },
      { id: "w6",  sentenceIds: ["s3"],  display: "天才",   hiragana: "てんさい",   en: "genius",          fr: "génie" },
      { id: "w7",  sentenceIds: ["s4"],  display: "学校",   hiragana: "がっこう",   en: "school",          fr: "école" },
      { id: "w8",  sentenceIds: ["s4"],  display: "正門",   hiragana: "せいもん",   en: "main gate",       fr: "porte principale" },
      { id: "w9",  sentenceIds: ["s5"],  display: "弓矢",   hiragana: "ゆみや",     en: "bow and arrow",   fr: "arc et flèche" },
      { id: "w10", sentenceIds: ["s5"],  display: "引く",   hiragana: "ひく",       en: "to draw, to pull", fr: "tirer, attirer" },
      { id: "w11", sentenceIds: ["s6"],  display: "交番",   hiragana: "こうばん",   en: "police box",      fr: "poste de police" },
      { id: "w12", sentenceIds: ["s7"],  display: "計算",   hiragana: "けいさん",   en: "calculation",     fr: "calcul" },
      { id: "w13", sentenceIds: ["s7"],  display: "合う",   hiragana: "あう",       en: "to match, to fit", fr: "correspondre, coïncider" },
      { id: "w14", sentenceIds: ["s8"],  display: "谷",     hiragana: "たに",       en: "valley",          fr: "vallée" },
      { id: "w15", sentenceIds: ["s9"],  display: "北風",   hiragana: "きたかぜ",   en: "north wind",      fr: "vent du nord" },
      { id: "w16", sentenceIds: ["s10"], display: "牛肉",   hiragana: "ぎゅうにく", en: "beef",            fr: "bœuf" },
      { id: "w17", sentenceIds: ["s10"], display: "食べる", hiragana: "たべる",     en: "to eat",          fr: "manger" },
      { id: "w18", sentenceIds: ["s11"], display: "字",     hiragana: "じ",         en: "character, letter", fr: "caractère, lettre" },
      { id: "w19", sentenceIds: ["s11"], display: "書き直す", hiragana: "かきなおす", en: "to rewrite",    fr: "réécrire" },
      { id: "w20", sentenceIds: ["s12"], display: "台風",   hiragana: "たいふう",   en: "typhoon",         fr: "typhon" },
      { id: "w21", sentenceIds: ["s12"], display: "弱まる", hiragana: "よわまる",   en: "to weaken",       fr: "s'affaiblir" },
      { id: "w22", sentenceIds: ["s13"], display: "本",     hiragana: "ほん",       en: "book",            fr: "livre" },
      { id: "w23", sentenceIds: ["s13"], display: "売る",   hiragana: "うる",       en: "to sell",         fr: "vendre" },
      { id: "w24", sentenceIds: ["s14"], display: "時間",   hiragana: "じかん",     en: "time",            fr: "temps, durée" },
      { id: "w25", sentenceIds: ["s14"], display: "計る",   hiragana: "はかる",     en: "to measure",      fr: "mesurer" },
      { id: "w26", sentenceIds: ["s15"], display: "遠足",   hiragana: "えんそく",   en: "field trip",      fr: "excursion" },
      { id: "w27", sentenceIds: ["s15"], display: "行く",   hiragana: "いく",       en: "to go",           fr: "aller" },
      { id: "w28", sentenceIds: ["s16"], display: "正直",   hiragana: "しょうじき", en: "honesty, honest", fr: "honnêteté, honnête" },
      { id: "w29", sentenceIds: ["s16"], display: "話す",   hiragana: "はなす",     en: "to speak",        fr: "parler" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],        kanji: "町", readings: ["ちょう", "まち"],             en: "town",             fr: "ville, bourg" },
      { id: "k2",  wordIds: ["w2", "w26"], kanji: "遠", readings: ["えん", "とお"],               en: "far, distant",     fr: "loin, éloigné" },
      { id: "k3",  wordIds: ["w3", "w15", "w20"], kanji: "風", readings: ["ふう", "かぜ"],        en: "wind",             fr: "vent" },
      { id: "k4",  wordIds: ["w4"],        kanji: "強", readings: ["きょう", "ごう", "つよ"],     en: "strong",           fr: "fort, puissant" },
      { id: "k5",  wordIds: ["w5"],        kanji: "音", readings: ["おん", "いん", "おと"],       en: "sound",            fr: "son, bruit" },
      { id: "k6",  wordIds: ["w5"],        kanji: "楽", readings: ["がく", "らく", "たの"],       en: "music, comfort",   fr: "musique, plaisir" },
      { id: "k7",  wordIds: ["w6"],        kanji: "天", readings: ["てん", "あま"],               en: "heaven, sky",      fr: "ciel, paradis" },
      { id: "k8",  wordIds: ["w6"],        kanji: "才", readings: ["さい"],                       en: "talent",           fr: "talent, génie" },
      { id: "k9",  wordIds: ["w7"],        kanji: "学", readings: ["がく", "まな"],               en: "study, learning",  fr: "étude, apprentissage" },
      { id: "k10", wordIds: ["w7"],        kanji: "校", readings: ["こう"],                       en: "school",           fr: "école" },
      { id: "k11", wordIds: ["w8", "w28"], kanji: "正", readings: ["せい", "しょう", "ただ"],     en: "correct, right",   fr: "correct, juste" },
      { id: "k12", wordIds: ["w8"],        kanji: "門", readings: ["もん", "かど"],               en: "gate",             fr: "porte, portail" },
      { id: "k13", wordIds: ["w9"],        kanji: "弓", readings: ["きゅう", "ゆみ"],             en: "bow",              fr: "arc" },
      { id: "k14", wordIds: ["w9"],        kanji: "矢", readings: ["し", "や"],                   en: "arrow",            fr: "flèche" },
      { id: "k15", wordIds: ["w10"],       kanji: "引", readings: ["いん", "ひ"],                 en: "pull, draw",       fr: "tirer, attirer" },
      { id: "k16", wordIds: ["w11"],       kanji: "交", readings: ["こう", "まじ"],               en: "intersect, mix",   fr: "croiser, mélanger" },
      { id: "k17", wordIds: ["w11"],       kanji: "番", readings: ["ばん"],                       en: "number, watch",    fr: "numéro, garde" },
      { id: "k18", wordIds: ["w12", "w25"],kanji: "計", readings: ["けい", "はか"],               en: "measure, plan",    fr: "mesure, calculer" },
      { id: "k19", wordIds: ["w12"],       kanji: "算", readings: ["さん"],                       en: "calculate",        fr: "calculer, compter" },
      { id: "k20", wordIds: ["w13"],       kanji: "合", readings: ["ごう", "がっ", "あ"],         en: "fit, match",       fr: "correspondre, convenir" },
      { id: "k21", wordIds: ["w14"],       kanji: "谷", readings: ["こく", "たに"],               en: "valley",           fr: "vallée" },
      { id: "k22", wordIds: ["w15"],       kanji: "北", readings: ["ほく", "きた"],               en: "north",            fr: "nord" },
      { id: "k23", wordIds: ["w16"],       kanji: "牛", readings: ["ぎゅう", "うし"],             en: "cow, ox",          fr: "vache, bœuf" },
      { id: "k24", wordIds: ["w16"],       kanji: "肉", readings: ["にく"],                       en: "meat, flesh",      fr: "viande, chair" },
      { id: "k25", wordIds: ["w17"],       kanji: "食", readings: ["しょく", "じき", "た"],       en: "eat, food",        fr: "manger, nourriture" },
      { id: "k26", wordIds: ["w18"],       kanji: "字", readings: ["じ"],                         en: "character, letter", fr: "caractère, lettre" },
      { id: "k27", wordIds: ["w19"],       kanji: "書", readings: ["しょ", "か"],                 en: "write",            fr: "écrire" },
      { id: "k28", wordIds: ["w19", "w28"],kanji: "直", readings: ["ちょく", "じき", "なお"],     en: "straight, fix",    fr: "droit, corriger" },
      { id: "k29", wordIds: ["w20"],       kanji: "台", readings: ["だい", "たい"],               en: "stand, platform",  fr: "socle, typhon" },
      { id: "k30", wordIds: ["w21"],       kanji: "弱", readings: ["じゃく", "よわ"],             en: "weak",             fr: "faible" },
      { id: "k31", wordIds: ["w22"],       kanji: "本", readings: ["ほん", "もと"],               en: "book, origin",     fr: "livre, origine" },
      { id: "k32", wordIds: ["w23"],       kanji: "売", readings: ["ばい", "う"],                 en: "sell",             fr: "vendre" },
      { id: "k33", wordIds: ["w24"],       kanji: "時", readings: ["じ", "とき"],                 en: "time, hour",       fr: "heure, temps" },
      { id: "k34", wordIds: ["w24"],       kanji: "間", readings: ["かん", "けん", "ま", "あいだ"], en: "interval, between", fr: "intervalle, entre" },
      { id: "k35", wordIds: ["w26"],       kanji: "足", readings: ["そく", "あし"],               en: "foot, leg",        fr: "pied, jambe" },
      { id: "k36", wordIds: ["w27"],       kanji: "行", readings: ["こう", "ぎょう", "い", "おこな"], en: "go, conduct",  fr: "aller, conduire" },
      { id: "k37", wordIds: ["w29"],       kanji: "話", readings: ["わ", "はな"],                 en: "speak, story",     fr: "parler, histoire" }
    ]
  },
  {
    id: "2nensei-yomitori-10",
    name: "2年生 よみとり 10",
    sentences: [
      {
        id: "s1",
        display: "戸じまりをする。",
        hiragana: "とじまりをする。",
        en: "To lock up the doors.",
        fr: "Verrouiller les portes."
      },
      {
        id: "s2",
        display: "おいしい麦茶。",
        hiragana: "おいしいむぎちゃ。",
        en: "Delicious barley tea.",
        fr: "Délicieux thé d'orge."
      },
      {
        id: "s3",
        display: "地図を見る。",
        hiragana: "ちずをみる。",
        en: "To look at a map.",
        fr: "Regarder une carte."
      },
      {
        id: "s4",
        display: "自分のもちもの。",
        hiragana: "じぶんのもちもの。",
        en: "One's own belongings.",
        fr: "Ses propres affaires."
      },
      {
        id: "s5",
        display: "教科書をひらく。",
        hiragana: "きょうかしょをひらく。",
        en: "To open a textbook.",
        fr: "Ouvrir un manuel scolaire."
      },
      {
        id: "s6",
        display: "市場で買いものをする。",
        hiragana: "いちばでかいものをする。",
        en: "To shop at the market.",
        fr: "Faire ses achats au marché."
      },
      {
        id: "s7",
        display: "きれいな歌声。",
        hiragana: "きれいなうたごえ。",
        en: "A beautiful singing voice.",
        fr: "Une belle voix chantante."
      },
      {
        id: "s8",
        display: "心をこめる。",
        hiragana: "こころをこめる。",
        en: "To put one's heart into it.",
        fr: "Mettre du cœur à l'ouvrage."
      },
      {
        id: "s9",
        display: "はっきり答える。",
        hiragana: "はっきりこたえる。",
        en: "To answer clearly.",
        fr: "Répondre clairement."
      },
      {
        id: "s10",
        display: "うつくしい星空。",
        hiragana: "うつくしいほしぞら。",
        en: "A beautiful starry sky.",
        fr: "Un beau ciel étoilé."
      },
      {
        id: "s11",
        display: "野原でかけまわる。",
        hiragana: "のはらでかけまわる。",
        en: "To run around in the field.",
        fr: "Courir dans les champs."
      },
      {
        id: "s12",
        display: "冬になると雪がふる。",
        hiragana: "ふゆになるとゆきがふる。",
        en: "When winter comes, it snows.",
        fr: "Quand l'hiver arrive, il neige."
      },
      {
        id: "s13",
        display: "ごはんが少ない。",
        hiragana: "ごはんがすくない。",
        en: "There is little rice.",
        fr: "Il y a peu de riz."
      },
      {
        id: "s14",
        display: "元気よく走る。",
        hiragana: "げんきよくはしる。",
        en: "To run energetically.",
        fr: "Courir avec entrain."
      },
      {
        id: "s15",
        display: "みんなで交わる。",
        hiragana: "みんなでまじわる。",
        en: "To mingle with everyone.",
        fr: "Se mêler avec tout le monde."
      },
      {
        id: "s16",
        display: "野さいを食べる。",
        hiragana: "やさいをたべる。",
        en: "To eat vegetables.",
        fr: "Manger des légumes."
      }
    ],
    words: [
      { id: "w1",  sentenceIds: ["s1"],       display: "戸",     hiragana: "と",         en: "door",             fr: "porte" },
      { id: "w2",  sentenceIds: ["s2"],       display: "麦茶",   hiragana: "むぎちゃ",   en: "barley tea",       fr: "thé d'orge" },
      { id: "w3",  sentenceIds: ["s3"],       display: "地図",   hiragana: "ちず",       en: "map",              fr: "carte" },
      { id: "w4",  sentenceIds: ["s3"],       display: "見る",   hiragana: "みる",       en: "to see, to look",  fr: "voir, regarder" },
      { id: "w5",  sentenceIds: ["s4"],       display: "自分",   hiragana: "じぶん",     en: "oneself",          fr: "soi-même" },
      { id: "w6",  sentenceIds: ["s5"],       display: "教科書", hiragana: "きょうかしょ", en: "textbook",       fr: "manuel scolaire" },
      { id: "w7",  sentenceIds: ["s6"],       display: "市場",   hiragana: "いちば",     en: "market",           fr: "marché" },
      { id: "w8",  sentenceIds: ["s6"],       display: "買いもの", hiragana: "かいもの", en: "shopping",         fr: "courses, achats" },
      { id: "w9",  sentenceIds: ["s7"],       display: "歌声",   hiragana: "うたごえ",   en: "singing voice",    fr: "voix chantante" },
      { id: "w10", sentenceIds: ["s8"],       display: "心",     hiragana: "こころ",     en: "heart, mind",      fr: "cœur, esprit" },
      { id: "w11", sentenceIds: ["s9"],       display: "答える", hiragana: "こたえる",   en: "to answer",        fr: "répondre" },
      { id: "w12", sentenceIds: ["s10"],      display: "星空",   hiragana: "ほしぞら",   en: "starry sky",       fr: "ciel étoilé" },
      { id: "w13", sentenceIds: ["s11"],      display: "野原",   hiragana: "のはら",     en: "field, plain",     fr: "champ, plaine" },
      { id: "w14", sentenceIds: ["s12"],      display: "冬",     hiragana: "ふゆ",       en: "winter",           fr: "hiver" },
      { id: "w15", sentenceIds: ["s12"],      display: "雪",     hiragana: "ゆき",       en: "snow",             fr: "neige" },
      { id: "w16", sentenceIds: ["s13"],      display: "少ない", hiragana: "すくない",   en: "few, little",      fr: "peu, rare" },
      { id: "w17", sentenceIds: ["s14"],      display: "元気",   hiragana: "げんき",     en: "energy, health",   fr: "énergie, forme" },
      { id: "w18", sentenceIds: ["s14"],      display: "走る",   hiragana: "はしる",     en: "to run",           fr: "courir" },
      { id: "w19", sentenceIds: ["s15"],      display: "交わる", hiragana: "まじわる",   en: "to mingle, mix",   fr: "se mêler, se croiser" },
      { id: "w20", sentenceIds: ["s16"],      display: "野さい", hiragana: "やさい",     en: "vegetables",       fr: "légumes" },
      { id: "w21", sentenceIds: ["s16"],      display: "食べる", hiragana: "たべる",     en: "to eat",           fr: "manger" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],        kanji: "戸", readings: ["こ", "と"],                   en: "door",             fr: "porte" },
      { id: "k2",  wordIds: ["w2"],        kanji: "麦", readings: ["ばく", "むぎ"],               en: "wheat, barley",    fr: "blé, orge" },
      { id: "k3",  wordIds: ["w2"],        kanji: "茶", readings: ["ちゃ", "さ"],                 en: "tea",              fr: "thé" },
      { id: "k4",  wordIds: ["w3"],        kanji: "地", readings: ["ち", "じ"],                   en: "ground, earth",    fr: "sol, terre" },
      { id: "k5",  wordIds: ["w3"],        kanji: "図", readings: ["ず", "と"],                   en: "map, diagram",     fr: "carte, schéma" },
      { id: "k6",  wordIds: ["w4"],        kanji: "見", readings: ["けん", "み"],                 en: "see, look",        fr: "voir, regarder" },
      { id: "k7",  wordIds: ["w5"],        kanji: "自", readings: ["じ", "みずか"],               en: "self",             fr: "soi, auto-" },
      { id: "k8",  wordIds: ["w5"],        kanji: "分", readings: ["ぶん", "ふん", "わ"],         en: "part, minute",     fr: "partie, minute" },
      { id: "k9",  wordIds: ["w6"],        kanji: "教", readings: ["きょう", "おし"],             en: "teach, education", fr: "enseigner, éducation" },
      { id: "k10", wordIds: ["w6"],        kanji: "科", readings: ["か"],                         en: "subject, course",  fr: "matière, discipline" },
      { id: "k11", wordIds: ["w6"],        kanji: "書", readings: ["しょ", "か"],                 en: "write, book",      fr: "écrire, livre" },
      { id: "k12", wordIds: ["w7"],        kanji: "市", readings: ["し", "いち"],                 en: "city, market",     fr: "ville, marché" },
      { id: "k13", wordIds: ["w7"],        kanji: "場", readings: ["じょう", "ば"],               en: "place, scene",     fr: "lieu, scène" },
      { id: "k14", wordIds: ["w8"],        kanji: "買", readings: ["ばい", "か"],                 en: "buy",              fr: "acheter" },
      { id: "k15", wordIds: ["w9"],        kanji: "歌", readings: ["か", "うた"],                 en: "song, sing",       fr: "chanson, chanter" },
      { id: "k16", wordIds: ["w9"],        kanji: "声", readings: ["せい", "こえ"],               en: "voice",            fr: "voix" },
      { id: "k17", wordIds: ["w10"],       kanji: "心", readings: ["しん", "こころ"],             en: "heart, mind",      fr: "cœur, esprit" },
      { id: "k18", wordIds: ["w11"],       kanji: "答", readings: ["とう", "こた"],               en: "answer",           fr: "répondre, réponse" },
      { id: "k19", wordIds: ["w12"],       kanji: "星", readings: ["せい", "ほし"],               en: "star",             fr: "étoile" },
      { id: "k20", wordIds: ["w12"],       kanji: "空", readings: ["くう", "そら", "から"],       en: "sky, empty",       fr: "ciel, vide" },
      { id: "k21", wordIds: ["w13", "w20"],kanji: "野", readings: ["や", "の"],                   en: "field, wild",      fr: "champ, sauvage" },
      { id: "k22", wordIds: ["w13"],       kanji: "原", readings: ["げん", "はら"],               en: "plain, origin",    fr: "plaine, origine" },
      { id: "k23", wordIds: ["w14"],       kanji: "冬", readings: ["とう", "ふゆ"],               en: "winter",           fr: "hiver" },
      { id: "k24", wordIds: ["w15"],       kanji: "雪", readings: ["せつ", "ゆき"],               en: "snow",             fr: "neige" },
      { id: "k25", wordIds: ["w16"],       kanji: "少", readings: ["しょう", "すく", "すこ"],     en: "few, little",      fr: "peu, rare" },
      { id: "k26", wordIds: ["w17"],       kanji: "元", readings: ["げん", "がん", "もと"],       en: "origin, health",   fr: "origine, santé" },
      { id: "k27", wordIds: ["w17"],       kanji: "気", readings: ["き", "け"],                   en: "spirit, energy",   fr: "esprit, énergie" },
      { id: "k28", wordIds: ["w18"],       kanji: "走", readings: ["そう", "はし"],               en: "run",              fr: "courir" },
      { id: "k29", wordIds: ["w19"],       kanji: "交", readings: ["こう", "まじ"],               en: "mix, intersect",   fr: "croiser, mélanger" },
      { id: "k30", wordIds: ["w21"],       kanji: "食", readings: ["しょく", "じき", "た"],       en: "eat, food",        fr: "manger, nourriture" }
    ]
  },
  {
    id: "2nensei-yomitori-9",
    name: "２年生 よみとり 9",
    sentences: [
      {
        id: "s1",
        display: "新しい本を買う。",
        hiragana: "あたらしいほんをかう。",
        en: "To buy a new book.",
        fr: "Acheter un nouveau livre."
      },
      {
        id: "s2",
        display: "ふみ台をつかう。",
        hiragana: "ふみだいをつかう。",
        en: "To use a step stool.",
        fr: "Utiliser un marchepied."
      },
      {
        id: "s3",
        display: "船で海をわたる。",
        hiragana: "ふねでうみをわたる。",
        en: "To cross the sea by boat.",
        fr: "Traverser la mer en bateau."
      },
      {
        id: "s4",
        display: "お米がおいしい。",
        hiragana: "おこめがおいしい。",
        en: "The rice is delicious.",
        fr: "Le riz est délicieux."
      },
      {
        id: "s5",
        display: "秋風がつめたい。",
        hiragana: "あきかぜがつめたい。",
        en: "The autumn wind is cold.",
        fr: "Le vent d'automne est froid."
      },
      {
        id: "s6",
        display: "時計を合わせる。",
        hiragana: "とけいをあわせる。",
        en: "To set a clock.",
        fr: "Régler une horloge."
      },
      {
        id: "s7",
        display: "理科のじっけん。",
        hiragana: "りかのじっけん。",
        en: "A science experiment.",
        fr: "Une expérience de sciences."
      },
      {
        id: "s8",
        display: "馬にのる。",
        hiragana: "うまにのる。",
        en: "To ride a horse.",
        fr: "Monter à cheval."
      },
      {
        id: "s9",
        display: "首かざりをつける。",
        hiragana: "くびかざりをつける。",
        en: "To put on a necklace.",
        fr: "Mettre un collier."
      },
      {
        id: "s10",
        display: "夕食を作る。",
        hiragana: "ゆうしょくをつくる。",
        en: "To make dinner.",
        fr: "Préparer le dîner."
      },
      {
        id: "s11",
        display: "一つに合体する。",
        hiragana: "ひとつにがったいする。",
        en: "To combine into one.",
        fr: "Se combiner en un seul."
      },
      {
        id: "s12",
        display: "細いまがり角。",
        hiragana: "ほそいまがりかど。",
        en: "A narrow bend.",
        fr: "Un virage étroit."
      },
      {
        id: "s13",
        display: "画用紙に絵をかく。",
        hiragana: "がようしにえをかく。",
        en: "To draw a picture on drawing paper.",
        fr: "Dessiner sur du papier à dessin."
      },
      {
        id: "s14",
        display: "作文を書く。",
        hiragana: "さくぶんをかく。",
        en: "To write a composition.",
        fr: "Écrire une rédaction."
      },
      {
        id: "s15",
        display: "三角形。",
        hiragana: "さんかくけい。",
        en: "Triangle.",
        fr: "Triangle."
      },
      {
        id: "s16",
        display: "竹で細工する。",
        hiragana: "たけでさいくする。",
        en: "To do bamboo craftwork.",
        fr: "Travailler le bambou."
      }
    ],
    words: [
      { id: "w1",  sentenceIds: ["s1"],        display: "新しい",  hiragana: "あたらしい", en: "new",              fr: "nouveau, neuf" },
      { id: "w2",  sentenceIds: ["s1"],        display: "本",      hiragana: "ほん",       en: "book",             fr: "livre" },
      { id: "w3",  sentenceIds: ["s1"],        display: "買う",    hiragana: "かう",       en: "to buy",           fr: "acheter" },
      { id: "w4",  sentenceIds: ["s2"],        display: "ふみ台",  hiragana: "ふみだい",   en: "step stool",       fr: "marchepied" },
      { id: "w5",  sentenceIds: ["s3"],        display: "船",      hiragana: "ふね",       en: "boat, ship",       fr: "bateau, navire" },
      { id: "w6",  sentenceIds: ["s3"],        display: "海",      hiragana: "うみ",       en: "sea, ocean",       fr: "mer, océan" },
      { id: "w7",  sentenceIds: ["s4"],        display: "米",      hiragana: "こめ",       en: "rice",             fr: "riz" },
      { id: "w8",  sentenceIds: ["s5"],        display: "秋風",    hiragana: "あきかぜ",   en: "autumn wind",      fr: "vent d'automne" },
      { id: "w9",  sentenceIds: ["s6"],        display: "時計",    hiragana: "とけい",     en: "clock, watch",     fr: "horloge, montre" },
      { id: "w10", sentenceIds: ["s6"],        display: "合わせる",hiragana: "あわせる",   en: "to set, adjust",   fr: "régler, ajuster" },
      { id: "w11", sentenceIds: ["s7"],        display: "理科",    hiragana: "りか",       en: "science",          fr: "sciences naturelles" },
      { id: "w12", sentenceIds: ["s8"],        display: "馬",      hiragana: "うま",       en: "horse",            fr: "cheval" },
      { id: "w13", sentenceIds: ["s9"],        display: "首かざり",hiragana: "くびかざり", en: "necklace",         fr: "collier" },
      { id: "w14", sentenceIds: ["s10"],       display: "夕食",    hiragana: "ゆうしょく", en: "dinner, supper",   fr: "dîner, souper" },
      { id: "w15", sentenceIds: ["s10"],       display: "作る",    hiragana: "つくる",     en: "to make, create",  fr: "faire, créer" },
      { id: "w16", sentenceIds: ["s11"],       display: "一つ",    hiragana: "ひとつ",     en: "one",              fr: "un, une" },
      { id: "w17", sentenceIds: ["s11"],       display: "合体",    hiragana: "がったい",   en: "combination, fusion", fr: "combinaison, fusion" },
      { id: "w18", sentenceIds: ["s12"],       display: "細い",    hiragana: "ほそい",     en: "thin, narrow",     fr: "fin, étroit" },
      { id: "w19", sentenceIds: ["s12"],       display: "まがり角",hiragana: "まがりかど", en: "corner, bend",     fr: "virage, coin" },
      { id: "w20", sentenceIds: ["s13"],       display: "画用紙",  hiragana: "がようし",   en: "drawing paper",    fr: "papier à dessin" },
      { id: "w21", sentenceIds: ["s13"],       display: "絵",      hiragana: "え",         en: "picture, drawing", fr: "dessin, tableau" },
      { id: "w22", sentenceIds: ["s14"],       display: "作文",    hiragana: "さくぶん",   en: "composition, essay", fr: "rédaction, composition" },
      { id: "w23", sentenceIds: ["s14"],       display: "書く",    hiragana: "かく",       en: "to write",         fr: "écrire" },
      { id: "w24", sentenceIds: ["s15"],       display: "三角形",  hiragana: "さんかくけい", en: "triangle",       fr: "triangle" },
      { id: "w25", sentenceIds: ["s16"],       display: "竹",      hiragana: "たけ",       en: "bamboo",           fr: "bambou" },
      { id: "w26", sentenceIds: ["s16"],       display: "細工",    hiragana: "さいく",     en: "craftwork",        fr: "artisanat, ouvrage" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],             kanji: "新", readings: ["しん", "あたら"],              en: "new",              fr: "nouveau, neuf" },
      { id: "k2",  wordIds: ["w2"],             kanji: "本", readings: ["ほん", "もと"],               en: "book, origin",     fr: "livre, origine" },
      { id: "k3",  wordIds: ["w3"],             kanji: "買", readings: ["ばい", "か"],                 en: "buy",              fr: "acheter" },
      { id: "k4",  wordIds: ["w4"],             kanji: "台", readings: ["だい", "たい"],               en: "stand, platform",  fr: "socle, support" },
      { id: "k5",  wordIds: ["w5"],             kanji: "船", readings: ["せん", "ふね"],               en: "boat, ship",       fr: "bateau, navire" },
      { id: "k6",  wordIds: ["w6"],             kanji: "海", readings: ["かい", "うみ"],               en: "sea, ocean",       fr: "mer, océan" },
      { id: "k7",  wordIds: ["w7"],             kanji: "米", readings: ["べい", "まい", "こめ"],       en: "rice",             fr: "riz" },
      { id: "k8",  wordIds: ["w8"],             kanji: "秋", readings: ["しゅう", "あき"],             en: "autumn",           fr: "automne" },
      { id: "k9",  wordIds: ["w8"],             kanji: "風", readings: ["ふう", "かぜ"],               en: "wind",             fr: "vent" },
      { id: "k10", wordIds: ["w9"],             kanji: "時", readings: ["じ", "とき"],                 en: "time, hour",       fr: "heure, temps" },
      { id: "k11", wordIds: ["w9"],             kanji: "計", readings: ["けい", "はか"],               en: "measure, plan",    fr: "mesure, calculer" },
      { id: "k12", wordIds: ["w10", "w17"],     kanji: "合", readings: ["ごう", "がっ", "あ"],         en: "fit, match",       fr: "correspondre, convenir" },
      { id: "k13", wordIds: ["w11"],            kanji: "理", readings: ["り"],                         en: "reason, science",  fr: "raison, science" },
      { id: "k14", wordIds: ["w11"],            kanji: "科", readings: ["か"],                         en: "subject, course",  fr: "matière, discipline" },
      { id: "k15", wordIds: ["w12"],            kanji: "馬", readings: ["ば", "うま"],                 en: "horse",            fr: "cheval" },
      { id: "k16", wordIds: ["w13"],            kanji: "首", readings: ["しゅ", "くび"],               en: "neck",             fr: "cou" },
      { id: "k17", wordIds: ["w14"],            kanji: "夕", readings: ["せき", "ゆう"],               en: "evening",          fr: "soir" },
      { id: "k18", wordIds: ["w14"],            kanji: "食", readings: ["しょく", "じき", "た"],       en: "eat, food",        fr: "manger, nourriture" },
      { id: "k19", wordIds: ["w15", "w22"],     kanji: "作", readings: ["さく", "つく"],               en: "make, create",     fr: "faire, créer" },
      { id: "k20", wordIds: ["w16"],            kanji: "一", readings: ["いち", "いつ", "ひと"],       en: "one",              fr: "un" },
      { id: "k21", wordIds: ["w17"],            kanji: "体", readings: ["たい", "からだ"],             en: "body",             fr: "corps" },
      { id: "k22", wordIds: ["w18", "w26"],     kanji: "細", readings: ["さい", "ほそ"],               en: "thin, detailed",   fr: "fin, détaillé" },
      { id: "k23", wordIds: ["w19", "w24"],     kanji: "角", readings: ["かく", "かど"],               en: "corner, angle",    fr: "coin, angle" },
      { id: "k24", wordIds: ["w20"],            kanji: "画", readings: ["が", "かく"],                 en: "picture, draw",    fr: "dessin, tableau" },
      { id: "k25", wordIds: ["w20"],            kanji: "用", readings: ["よう"],                       en: "use, purpose",     fr: "usage, utilité" },
      { id: "k26", wordIds: ["w20"],            kanji: "紙", readings: ["し", "かみ"],                 en: "paper",            fr: "papier" },
      { id: "k27", wordIds: ["w21"],            kanji: "絵", readings: ["かい", "え"],                 en: "picture, drawing", fr: "dessin, tableau" },
      { id: "k28", wordIds: ["w22"],            kanji: "文", readings: ["ぶん", "もん", "ふみ"],       en: "writing, sentence", fr: "écriture, phrase" },
      { id: "k29", wordIds: ["w23"],            kanji: "書", readings: ["しょ", "か"],                 en: "write",            fr: "écrire" },
      { id: "k30", wordIds: ["w24"],            kanji: "三", readings: ["さん", "み"],                 en: "three",            fr: "trois" },
      { id: "k31", wordIds: ["w24"],            kanji: "形", readings: ["けい", "ぎょう", "かたち"],   en: "shape, form",      fr: "forme, figure" },
      { id: "k32", wordIds: ["w25"],            kanji: "竹", readings: ["ちく", "たけ"],               en: "bamboo",           fr: "bambou" },
      { id: "k33", wordIds: ["w26"],            kanji: "工", readings: ["こう", "く"],                 en: "craft, work",      fr: "artisanat, travail" }
    ]
  },
  {
    id: "2nensei-yomitori-8",
    name: "２年生よみとり 8",
    sentences: [
      {
        id: "s1",
        display: "家に帰る。",
        hiragana: "いえにかえる。",
        en: "To return home.",
        fr: "Rentrer à la maison."
      },
      {
        id: "s2",
        display: "何回も話す。",
        hiragana: "なんかいもはなす。",
        en: "To speak many times.",
        fr: "Parler plusieurs fois."
      },
      {
        id: "s3",
        display: "山里でくらす。",
        hiragana: "やまざとでくらす。",
        en: "To live in a mountain village.",
        fr: "Vivre dans un village de montagne."
      },
      {
        id: "s4",
        display: "たくさん食べる。",
        hiragana: "たくさんたべる。",
        en: "To eat a lot.",
        fr: "Manger beaucoup."
      },
      {
        id: "s5",
        display: "明るい声で話す。",
        hiragana: "あかるいこえではなす。",
        en: "To speak in a cheerful voice.",
        fr: "Parler d'une voix joyeuse."
      },
      {
        id: "s6",
        display: "池に水を入れる。",
        hiragana: "いけにみずをいれる。",
        en: "To put water in the pond.",
        fr: "Mettre de l'eau dans l'étang."
      },
      {
        id: "s7",
        display: "今週の天気。",
        hiragana: "こんしゅうのてんき。",
        en: "This week's weather.",
        fr: "La météo de cette semaine."
      },
      {
        id: "s8",
        display: "そうじの当番。",
        hiragana: "そうじのとうばん。",
        en: "Cleaning duty.",
        fr: "Tour de nettoyage."
      },
      {
        id: "s9",
        display: "せまい道を歩く。",
        hiragana: "せまいみちをあるく。",
        en: "To walk a narrow path.",
        fr: "Marcher sur un chemin étroit."
      },
      {
        id: "s10",
        display: "東京に行く。",
        hiragana: "とうきょうにいく。",
        en: "To go to Tokyo.",
        fr: "Aller à Tokyo."
      },
      {
        id: "s11",
        display: "古いお寺。",
        hiragana: "ふるいおてら。",
        en: "An old temple.",
        fr: "Un vieux temple."
      },
      {
        id: "s12",
        display: "夕日が西にしずむ。",
        hiragana: "ゆうひがにしにしずむ。",
        en: "The evening sun sinks in the west.",
        fr: "Le soleil du soir se couche à l'ouest."
      },
      {
        id: "s13",
        display: "水道を止める。",
        hiragana: "すいどうをとめる。",
        en: "To turn off the water.",
        fr: "Couper l'eau."
      },
      {
        id: "s14",
        display: "工場ではたらく。",
        hiragana: "こうじょうではたらく。",
        en: "To work at a factory.",
        fr: "Travailler dans une usine."
      },
      {
        id: "s15",
        display: "電池をかえる。",
        hiragana: "でんちをかえる。",
        en: "To replace a battery.",
        fr: "Changer une pile."
      },
      {
        id: "s16",
        display: "雨で中止になる。",
        hiragana: "あめでちゅうしになる。",
        en: "To be cancelled due to rain.",
        fr: "Être annulé à cause de la pluie."
      }
    ],
    words: [
      { id: "w1",  sentenceIds: ["s1"],        display: "家",     hiragana: "いえ",       en: "house, home",      fr: "maison" },
      { id: "w2",  sentenceIds: ["s1"],        display: "帰る",   hiragana: "かえる",     en: "to return home",   fr: "rentrer, retourner" },
      { id: "w3",  sentenceIds: ["s2"],        display: "何回",   hiragana: "なんかい",   en: "how many times",   fr: "combien de fois" },
      { id: "w4",  sentenceIds: ["s2", "s5"],  display: "話す",   hiragana: "はなす",     en: "to speak",         fr: "parler" },
      { id: "w5",  sentenceIds: ["s3"],        display: "山里",   hiragana: "やまざと",   en: "mountain village", fr: "village de montagne" },
      { id: "w6",  sentenceIds: ["s4"],        display: "食べる", hiragana: "たべる",     en: "to eat",           fr: "manger" },
      { id: "w7",  sentenceIds: ["s5"],        display: "明るい", hiragana: "あかるい",   en: "bright, cheerful", fr: "lumineux, joyeux" },
      { id: "w8",  sentenceIds: ["s5"],        display: "声",     hiragana: "こえ",       en: "voice",            fr: "voix" },
      { id: "w9",  sentenceIds: ["s6"],        display: "池",     hiragana: "いけ",       en: "pond",             fr: "étang" },
      { id: "w10", sentenceIds: ["s6"],        display: "水",     hiragana: "みず",       en: "water",            fr: "eau" },
      { id: "w11", sentenceIds: ["s6"],        display: "入れる", hiragana: "いれる",     en: "to put in",        fr: "mettre dans" },
      { id: "w12", sentenceIds: ["s7"],        display: "今週",   hiragana: "こんしゅう", en: "this week",        fr: "cette semaine" },
      { id: "w13", sentenceIds: ["s7"],        display: "天気",   hiragana: "てんき",     en: "weather",          fr: "météo, temps" },
      { id: "w14", sentenceIds: ["s8"],        display: "当番",   hiragana: "とうばん",   en: "duty, shift",      fr: "tour de garde" },
      { id: "w15", sentenceIds: ["s9"],        display: "道",     hiragana: "みち",       en: "road, path",       fr: "chemin, route" },
      { id: "w16", sentenceIds: ["s9"],        display: "歩く",   hiragana: "あるく",     en: "to walk",          fr: "marcher" },
      { id: "w17", sentenceIds: ["s10"],       display: "東京",   hiragana: "とうきょう", en: "Tokyo",            fr: "Tokyo" },
      { id: "w18", sentenceIds: ["s10"],       display: "行く",   hiragana: "いく",       en: "to go",            fr: "aller" },
      { id: "w19", sentenceIds: ["s11"],       display: "古い",   hiragana: "ふるい",     en: "old, ancient",     fr: "vieux, ancien" },
      { id: "w20", sentenceIds: ["s11"],       display: "寺",     hiragana: "てら",       en: "temple",           fr: "temple" },
      { id: "w21", sentenceIds: ["s12"],       display: "夕日",   hiragana: "ゆうひ",     en: "evening sun",      fr: "soleil du soir" },
      { id: "w22", sentenceIds: ["s12"],       display: "西",     hiragana: "にし",       en: "west",             fr: "ouest" },
      { id: "w23", sentenceIds: ["s13"],       display: "水道",   hiragana: "すいどう",   en: "water supply, tap", fr: "robinet, eau courante" },
      { id: "w24", sentenceIds: ["s13"],       display: "止める", hiragana: "とめる",     en: "to stop, turn off", fr: "arrêter, couper" },
      { id: "w25", sentenceIds: ["s14"],       display: "工場",   hiragana: "こうじょう", en: "factory",          fr: "usine" },
      { id: "w26", sentenceIds: ["s15"],       display: "電池",   hiragana: "でんち",     en: "battery",          fr: "pile, batterie" },
      { id: "w27", sentenceIds: ["s16"],       display: "雨",     hiragana: "あめ",       en: "rain",             fr: "pluie" },
      { id: "w28", sentenceIds: ["s16"],       display: "中止",   hiragana: "ちゅうし",   en: "cancellation",     fr: "annulation" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],             kanji: "家", readings: ["か", "いえ"],                   en: "house, home",      fr: "maison" },
      { id: "k2",  wordIds: ["w2"],             kanji: "帰", readings: ["き", "かえ"],                   en: "return home",      fr: "rentrer" },
      { id: "k3",  wordIds: ["w3"],             kanji: "何", readings: ["か", "なに", "なん"],           en: "what, how many",   fr: "quoi, combien" },
      { id: "k4",  wordIds: ["w3"],             kanji: "回", readings: ["かい", "まわ"],                 en: "times, turn",      fr: "fois, tour" },
      { id: "k5",  wordIds: ["w4"],             kanji: "話", readings: ["わ", "はな"],                   en: "speak, story",     fr: "parler, histoire" },
      { id: "k6",  wordIds: ["w5"],             kanji: "山", readings: ["さん", "やま"],                 en: "mountain",         fr: "montagne" },
      { id: "k7",  wordIds: ["w5"],             kanji: "里", readings: ["り", "さと"],                   en: "village, hometown", fr: "village, pays natal" },
      { id: "k8",  wordIds: ["w6"],             kanji: "食", readings: ["しょく", "じき", "た"],         en: "eat, food",        fr: "manger, nourriture" },
      { id: "k9",  wordIds: ["w7"],             kanji: "明", readings: ["めい", "みょう", "あか", "あ"], en: "bright, clear",    fr: "lumineux, clair" },
      { id: "k10", wordIds: ["w8"],             kanji: "声", readings: ["せい", "こえ"],                 en: "voice",            fr: "voix" },
      { id: "k11", wordIds: ["w9", "w26"],      kanji: "池", readings: ["ち", "いけ"],                   en: "pond",             fr: "étang" },
      { id: "k12", wordIds: ["w10", "w23"],     kanji: "水", readings: ["すい", "みず"],                 en: "water",            fr: "eau" },
      { id: "k13", wordIds: ["w11"],            kanji: "入", readings: ["にゅう", "い", "はい"],         en: "enter, put in",    fr: "entrer, mettre" },
      { id: "k14", wordIds: ["w12"],            kanji: "今", readings: ["こん", "きん", "いま"],         en: "now, present",     fr: "maintenant, présent" },
      { id: "k15", wordIds: ["w12"],            kanji: "週", readings: ["しゅう"],                       en: "week",             fr: "semaine" },
      { id: "k16", wordIds: ["w13"],            kanji: "天", readings: ["てん", "あま"],                 en: "heaven, sky",      fr: "ciel, paradis" },
      { id: "k17", wordIds: ["w13"],            kanji: "気", readings: ["き", "け"],                     en: "spirit, energy",   fr: "esprit, énergie" },
      { id: "k18", wordIds: ["w14"],            kanji: "当", readings: ["とう", "あ"],                   en: "hit, current",     fr: "toucher, actuel" },
      { id: "k19", wordIds: ["w14"],            kanji: "番", readings: ["ばん"],                         en: "number, watch",    fr: "numéro, garde" },
      { id: "k20", wordIds: ["w15", "w23"],     kanji: "道", readings: ["どう", "みち"],                 en: "road, way",        fr: "route, chemin" },
      { id: "k21", wordIds: ["w16"],            kanji: "歩", readings: ["ほ", "ある"],                   en: "walk, step",       fr: "marcher, pas" },
      { id: "k22", wordIds: ["w17"],            kanji: "東", readings: ["とう", "ひがし"],               en: "east",             fr: "est" },
      { id: "k23", wordIds: ["w17"],            kanji: "京", readings: ["きょう", "けい", "みやこ"],     en: "capital city",     fr: "capitale" },
      { id: "k24", wordIds: ["w18"],            kanji: "行", readings: ["こう", "ぎょう", "い", "おこな"], en: "go, conduct",    fr: "aller, conduire" },
      { id: "k25", wordIds: ["w19"],            kanji: "古", readings: ["こ", "ふる"],                   en: "old, ancient",     fr: "vieux, ancien" },
      { id: "k26", wordIds: ["w20"],            kanji: "寺", readings: ["じ", "てら"],                   en: "temple",           fr: "temple" },
      { id: "k27", wordIds: ["w21"],            kanji: "夕", readings: ["せき", "ゆう"],                 en: "evening",          fr: "soir" },
      { id: "k28", wordIds: ["w21"],            kanji: "日", readings: ["にち", "じつ", "ひ", "か"],     en: "sun, day",         fr: "soleil, jour" },
      { id: "k29", wordIds: ["w22"],            kanji: "西", readings: ["せい", "にし"],                 en: "west",             fr: "ouest" },
      { id: "k30", wordIds: ["w24", "w28"],     kanji: "止", readings: ["し", "と"],                     en: "stop",             fr: "arrêter, stopper" },
      { id: "k31", wordIds: ["w25"],            kanji: "工", readings: ["こう", "く"],                   en: "craft, industry",  fr: "artisanat, industrie" },
      { id: "k32", wordIds: ["w25"],            kanji: "場", readings: ["じょう", "ば"],                 en: "place, scene",     fr: "lieu, scène" },
      { id: "k33", wordIds: ["w26"],            kanji: "電", readings: ["でん"],                         en: "electricity",      fr: "électricité" },
      { id: "k34", wordIds: ["w27"],            kanji: "雨", readings: ["う", "あめ"],                   en: "rain",             fr: "pluie" },
      { id: "k35", wordIds: ["w28"],            kanji: "中", readings: ["ちゅう", "なか"],               en: "middle, inside",   fr: "milieu, intérieur" }
    ]
  },
  {
    id: "2nensei-yomitori-7",
    name: "２年生 よみとり 7",
    sentences: [
      {
        id: "s1",
        display: "父のたんじょう日。",
        hiragana: "ちちのたんじょうび。",
        en: "Father's birthday.",
        fr: "L'anniversaire de père."
      },
      {
        id: "s2",
        display: "母の日に花をおくる。",
        hiragana: "ははのひにはなをおくる。",
        en: "To give flowers on Mother's Day.",
        fr: "Offrir des fleurs pour la fête des mères."
      },
      {
        id: "s3",
        display: "兄といっしょに帰る。",
        hiragana: "あにといっしょにかえる。",
        en: "To return together with one's older brother.",
        fr: "Rentrer avec son grand frère."
      },
      {
        id: "s4",
        display: "弟となかがいい。",
        hiragana: "おとうととなかがいい。",
        en: "To be close with one's younger brother.",
        fr: "S'entendre bien avec son petit frère."
      },
      {
        id: "s5",
        display: "午後からあそぶ。",
        hiragana: "ごごからあそぶ。",
        en: "To play from the afternoon.",
        fr: "Jouer à partir de l'après-midi."
      },
      {
        id: "s6",
        display: "親がむかえに来る。",
        hiragana: "おやがむかえにくる。",
        en: "A parent comes to pick up.",
        fr: "Un parent vient chercher."
      },
      {
        id: "s7",
        display: "北国はさむい。",
        hiragana: "きたぐにはさむい。",
        en: "The north is cold.",
        fr: "Le nord est froid."
      },
      {
        id: "s8",
        display: "紙くずをあつめる。",
        hiragana: "かみくずをあつめる。",
        en: "To collect scraps of paper.",
        fr: "Ramasser des morceaux de papier."
      },
      {
        id: "s9",
        display: "おやつの時間。",
        hiragana: "おやつのじかん。",
        en: "Snack time.",
        fr: "L'heure du goûter."
      },
      {
        id: "s10",
        display: "算数をがんばる。",
        hiragana: "さんすうをがんばる。",
        en: "To work hard at arithmetic.",
        fr: "S'appliquer en arithmétique."
      },
      {
        id: "s11",
        display: "もうすぐ夜になる。",
        hiragana: "もうすぐよるになる。",
        en: "It will soon be night.",
        fr: "La nuit va bientôt tomber."
      },
      {
        id: "s12",
        display: "音楽を聞く。",
        hiragana: "おんがくをきく。",
        en: "To listen to music.",
        fr: "Écouter de la musique."
      },
      {
        id: "s13",
        display: "外国人に会う。",
        hiragana: "がいこくじんにあう。",
        en: "To meet a foreigner.",
        fr: "Rencontrer un étranger."
      },
      {
        id: "s14",
        display: "兄弟が三人いる。",
        hiragana: "きょうだいがさんにんいる。",
        en: "There are three siblings.",
        fr: "Il y a trois frères et sœurs."
      },
      {
        id: "s15",
        display: "白紙にもどす。",
        hiragana: "はくしにもどす。",
        en: "To reset to blank.",
        fr: "Remettre à zéro."
      },
      {
        id: "s16",
        display: "今夜は三日月だ。",
        hiragana: "こんやはみかづきだ。",
        en: "Tonight is a crescent moon.",
        fr: "Ce soir, il y a un croissant de lune."
      }
    ],
    words: [
      { id: "w1",  sentenceIds: ["s1"],        display: "父",       hiragana: "ちち",       en: "father",            fr: "père" },
      { id: "w2",  sentenceIds: ["s1"],        display: "たんじょう日", hiragana: "たんじょうび", en: "birthday",       fr: "anniversaire" },
      { id: "w3",  sentenceIds: ["s2"],        display: "母の日",   hiragana: "ははのひ",   en: "Mother's Day",      fr: "fête des mères" },
      { id: "w4",  sentenceIds: ["s2"],        display: "花",       hiragana: "はな",       en: "flower",            fr: "fleur" },
      { id: "w5",  sentenceIds: ["s3"],        display: "兄",       hiragana: "あに",       en: "older brother",     fr: "grand frère" },
      { id: "w6",  sentenceIds: ["s3"],        display: "帰る",     hiragana: "かえる",     en: "to return home",    fr: "rentrer" },
      { id: "w7",  sentenceIds: ["s4"],        display: "弟",       hiragana: "おとうと",   en: "younger brother",   fr: "petit frère" },
      { id: "w8",  sentenceIds: ["s5"],        display: "午後",     hiragana: "ごご",       en: "afternoon",         fr: "après-midi" },
      { id: "w9",  sentenceIds: ["s6"],        display: "親",       hiragana: "おや",       en: "parent",            fr: "parent" },
      { id: "w10", sentenceIds: ["s6"],        display: "来る",     hiragana: "くる",       en: "to come",           fr: "venir" },
      { id: "w11", sentenceIds: ["s7"],        display: "北国",     hiragana: "きたぐに",   en: "northern country",  fr: "pays du nord" },
      { id: "w12", sentenceIds: ["s8"],        display: "紙",       hiragana: "かみ",       en: "paper",             fr: "papier" },
      { id: "w13", sentenceIds: ["s9"],        display: "時間",     hiragana: "じかん",     en: "time",              fr: "temps, durée" },
      { id: "w14", sentenceIds: ["s10"],       display: "算数",     hiragana: "さんすう",   en: "arithmetic",        fr: "arithmétique" },
      { id: "w15", sentenceIds: ["s11"],       display: "夜",       hiragana: "よる",       en: "night",             fr: "nuit" },
      { id: "w16", sentenceIds: ["s12"],       display: "音楽",     hiragana: "おんがく",   en: "music",             fr: "musique" },
      { id: "w17", sentenceIds: ["s12"],       display: "聞く",     hiragana: "きく",       en: "to listen",         fr: "écouter" },
      { id: "w18", sentenceIds: ["s13"],       display: "外国人",   hiragana: "がいこくじん", en: "foreigner",       fr: "étranger" },
      { id: "w19", sentenceIds: ["s13"],       display: "会う",     hiragana: "あう",       en: "to meet",           fr: "rencontrer" },
      { id: "w20", sentenceIds: ["s14"],       display: "兄弟",     hiragana: "きょうだい", en: "siblings",          fr: "frères et sœurs" },
      { id: "w21", sentenceIds: ["s14"],       display: "三人",     hiragana: "さんにん",   en: "three people",      fr: "trois personnes" },
      { id: "w22", sentenceIds: ["s15"],       display: "白紙",     hiragana: "はくし",     en: "blank paper, reset", fr: "page blanche, remise à zéro" },
      { id: "w23", sentenceIds: ["s16"],       display: "今夜",     hiragana: "こんや",     en: "tonight",           fr: "ce soir" },
      { id: "w24", sentenceIds: ["s16"],       display: "三日月",   hiragana: "みかづき",   en: "crescent moon",     fr: "croissant de lune" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],             kanji: "父", readings: ["ふ", "ちち"],                   en: "father",           fr: "père" },
      { id: "k2",  wordIds: ["w2", "w3", "w24"],kanji: "日", readings: ["にち", "じつ", "ひ", "か"],     en: "sun, day",         fr: "soleil, jour" },
      { id: "k3",  wordIds: ["w3"],             kanji: "母", readings: ["ぼ", "はは"],                   en: "mother",           fr: "mère" },
      { id: "k4",  wordIds: ["w4"],             kanji: "花", readings: ["か", "はな"],                   en: "flower",           fr: "fleur" },
      { id: "k5",  wordIds: ["w5", "w20"],      kanji: "兄", readings: ["けい", "きょう", "あに"],       en: "older brother",    fr: "grand frère" },
      { id: "k6",  wordIds: ["w6"],             kanji: "帰", readings: ["き", "かえ"],                   en: "return home",      fr: "rentrer" },
      { id: "k7",  wordIds: ["w7", "w20"],      kanji: "弟", readings: ["てい", "だい", "おとうと"],     en: "younger brother",  fr: "petit frère" },
      { id: "k8",  wordIds: ["w8"],             kanji: "午", readings: ["ご"],                           en: "noon, hour",       fr: "midi, heure" },
      { id: "k9",  wordIds: ["w8"],             kanji: "後", readings: ["ご", "こう", "あと"],           en: "after, behind",    fr: "après, derrière" },
      { id: "k10", wordIds: ["w9"],             kanji: "親", readings: ["しん", "おや"],                 en: "parent, close",    fr: "parent, proche" },
      { id: "k11", wordIds: ["w10"],            kanji: "来", readings: ["らい", "く", "き"],             en: "come",             fr: "venir" },
      { id: "k12", wordIds: ["w11"],            kanji: "北", readings: ["ほく", "きた"],                 en: "north",            fr: "nord" },
      { id: "k13", wordIds: ["w11", "w18"],     kanji: "国", readings: ["こく", "くに"],                 en: "country",          fr: "pays" },
      { id: "k14", wordIds: ["w12", "w22"],     kanji: "紙", readings: ["し", "かみ"],                   en: "paper",            fr: "papier" },
      { id: "k15", wordIds: ["w13"],            kanji: "時", readings: ["じ", "とき"],                   en: "time, hour",       fr: "heure, temps" },
      { id: "k16", wordIds: ["w13"],            kanji: "間", readings: ["かん", "けん", "ま", "あいだ"], en: "interval, between", fr: "intervalle, entre" },
      { id: "k17", wordIds: ["w14"],            kanji: "算", readings: ["さん"],                         en: "calculate",        fr: "calculer, compter" },
      { id: "k18", wordIds: ["w14"],            kanji: "数", readings: ["すう", "かず"],                 en: "number, count",    fr: "nombre, compter" },
      { id: "k19", wordIds: ["w15", "w23"],     kanji: "夜", readings: ["や", "よる"],                   en: "night",            fr: "nuit" },
      { id: "k20", wordIds: ["w16"],            kanji: "音", readings: ["おん", "いん", "おと"],         en: "sound",            fr: "son, bruit" },
      { id: "k21", wordIds: ["w16"],            kanji: "楽", readings: ["がく", "らく", "たの"],         en: "music, comfort",   fr: "musique, plaisir" },
      { id: "k22", wordIds: ["w17"],            kanji: "聞", readings: ["ぶん", "き"],                   en: "listen, hear",     fr: "écouter, entendre" },
      { id: "k23", wordIds: ["w18"],            kanji: "外", readings: ["がい", "そと"],                 en: "outside, foreign", fr: "extérieur, étranger" },
      { id: "k24", wordIds: ["w18", "w21"],     kanji: "人", readings: ["じん", "にん", "ひと"],         en: "person",           fr: "personne" },
      { id: "k25", wordIds: ["w19"],            kanji: "会", readings: ["かい", "あ"],                   en: "meet, association", fr: "rencontrer, association" },
      { id: "k26", wordIds: ["w21", "w24"],     kanji: "三", readings: ["さん", "み"],                   en: "three",            fr: "trois" },
      { id: "k27", wordIds: ["w22"],            kanji: "白", readings: ["はく", "しろ"],                 en: "white, blank",     fr: "blanc" },
      { id: "k28", wordIds: ["w23"],            kanji: "今", readings: ["こん", "きん", "いま"],         en: "now, present",     fr: "maintenant, présent" },
      { id: "k29", wordIds: ["w24"],            kanji: "月", readings: ["げつ", "がつ", "つき"],         en: "moon, month",      fr: "lune, mois" }
    ]
  },
  {
    id: "2nensei-yomitori-6",
    name: "２年生 よみとり 6",
    sentences: [
      {
        id: "s1",
        display: "顔をあらう。",
        hiragana: "かおをあらう。",
        en: "To wash one's face.",
        fr: "Se laver le visage."
      },
      {
        id: "s2",
        display: "毎日本を読む。",
        hiragana: "まいにちほんをよむ。",
        en: "To read a book every day.",
        fr: "Lire un livre tous les jours."
      },
      {
        id: "s3",
        display: "家の中であそぶ。",
        hiragana: "いえのなかであそぶ。",
        en: "To play inside the house.",
        fr: "Jouer à l'intérieur de la maison."
      },
      {
        id: "s4",
        display: "人間の体。",
        hiragana: "にんげんのからだ。",
        en: "The human body.",
        fr: "Le corps humain."
      },
      {
        id: "s5",
        display: "もうすぐ昼になる。",
        hiragana: "もうすぐひるになる。",
        en: "It will soon be noon.",
        fr: "Il sera bientôt midi."
      },
      {
        id: "s6",
        display: "九時半にねる。",
        hiragana: "くじはんにねる。",
        en: "To go to sleep at nine thirty.",
        fr: "Se coucher à neuf heures et demie."
      },
      {
        id: "s7",
        display: "電気をつける。",
        hiragana: "でんきをつける。",
        en: "To turn on the light.",
        fr: "Allumer la lumière."
      },
      {
        id: "s8",
        display: "外で走る。",
        hiragana: "そとではしる。",
        en: "To run outside.",
        fr: "Courir dehors."
      },
      {
        id: "s9",
        display: "大きな声をだす。",
        hiragana: "おおきなこえをだす。",
        en: "To raise one's voice.",
        fr: "Élever la voix."
      },
      {
        id: "s10",
        display: "くじが当たる。",
        hiragana: "くじがあたる。",
        en: "To win a lottery.",
        fr: "Gagner à la loterie."
      },
      {
        id: "s11",
        display: "ボタンが外れる。",
        hiragana: "ぼたんがはずれる。",
        en: "A button comes undone.",
        fr: "Un bouton se détache."
      },
      {
        id: "s12",
        display: "楽しい時間。",
        hiragana: "たのしいじかん。",
        en: "Enjoyable time.",
        fr: "Moment agréable."
      },
      {
        id: "s13",
        display: "あひるの親子。",
        hiragana: "あひるのおやこ。",
        en: "A duck and its duckling.",
        fr: "Un canard et son petit."
      },
      {
        id: "s14",
        display: "公園であそぶ。",
        hiragana: "こうえんであそぶ。",
        en: "To play in the park.",
        fr: "Jouer au parc."
      },
      {
        id: "s15",
        display: "作家をめざす。",
        hiragana: "さっかをめざす。",
        en: "To aim to become an author.",
        fr: "Aspirer à devenir auteur."
      },
      {
        id: "s16",
        display: "親切に教える。",
        hiragana: "しんせつにおしえる。",
        en: "To teach kindly.",
        fr: "Enseigner avec gentillesse."
      }
    ],
    words: [
      { id: "w1",  sentenceIds: ["s1"],        display: "顔",     hiragana: "かお",       en: "face",              fr: "visage" },
      { id: "w2",  sentenceIds: ["s2"],        display: "毎日",   hiragana: "まいにち",   en: "every day",         fr: "tous les jours" },
      { id: "w3",  sentenceIds: ["s2"],        display: "本",     hiragana: "ほん",       en: "book",              fr: "livre" },
      { id: "w4",  sentenceIds: ["s2"],        display: "読む",   hiragana: "よむ",       en: "to read",           fr: "lire" },
      { id: "w5",  sentenceIds: ["s3"],        display: "家",     hiragana: "いえ",       en: "house, home",       fr: "maison" },
      { id: "w6",  sentenceIds: ["s3"],        display: "中",     hiragana: "なか",       en: "inside, middle",    fr: "intérieur, milieu" },
      { id: "w7",  sentenceIds: ["s4"],        display: "人間",   hiragana: "にんげん",   en: "human being",       fr: "être humain" },
      { id: "w8",  sentenceIds: ["s4"],        display: "体",     hiragana: "からだ",     en: "body",              fr: "corps" },
      { id: "w9",  sentenceIds: ["s5"],        display: "昼",     hiragana: "ひる",       en: "noon, daytime",     fr: "midi, journée" },
      { id: "w10", sentenceIds: ["s6"],        display: "九時半", hiragana: "くじはん",   en: "nine thirty",       fr: "neuf heures et demie" },
      { id: "w11", sentenceIds: ["s7"],        display: "電気",   hiragana: "でんき",     en: "electricity, light", fr: "électricité, lumière" },
      { id: "w12", sentenceIds: ["s8"],        display: "外",     hiragana: "そと",       en: "outside",           fr: "dehors, extérieur" },
      { id: "w13", sentenceIds: ["s8"],        display: "走る",   hiragana: "はしる",     en: "to run",            fr: "courir" },
      { id: "w14", sentenceIds: ["s9"],        display: "大きな", hiragana: "おおきな",   en: "big, large",        fr: "grand, large" },
      { id: "w15", sentenceIds: ["s9"],        display: "声",     hiragana: "こえ",       en: "voice",             fr: "voix" },
      { id: "w16", sentenceIds: ["s10"],       display: "当たる", hiragana: "あたる",     en: "to hit, to win",    fr: "toucher, gagner" },
      { id: "w17", sentenceIds: ["s11"],       display: "外れる", hiragana: "はずれる",   en: "to come undone",    fr: "se détacher, rater" },
      { id: "w18", sentenceIds: ["s12"],       display: "楽しい", hiragana: "たのしい",   en: "enjoyable, fun",    fr: "agréable, amusant" },
      { id: "w19", sentenceIds: ["s12"],       display: "時間",   hiragana: "じかん",     en: "time",              fr: "temps, durée" },
      { id: "w20", sentenceIds: ["s13"],       display: "親子",   hiragana: "おやこ",     en: "parent and child",  fr: "parent et enfant" },
      { id: "w21", sentenceIds: ["s14"],       display: "公園",   hiragana: "こうえん",   en: "park",              fr: "parc" },
      { id: "w22", sentenceIds: ["s15"],       display: "作家",   hiragana: "さっか",     en: "author, writer",    fr: "auteur, écrivain" },
      { id: "w23", sentenceIds: ["s16"],       display: "親切",   hiragana: "しんせつ",   en: "kindness, kind",    fr: "gentillesse, aimable" },
      { id: "w24", sentenceIds: ["s16"],       display: "教える", hiragana: "おしえる",   en: "to teach",          fr: "enseigner, apprendre" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],             kanji: "顔", readings: ["がん", "かお"],                 en: "face",             fr: "visage" },
      { id: "k2",  wordIds: ["w2"],             kanji: "毎", readings: ["まい"],                         en: "every",            fr: "chaque, tous les" },
      { id: "k3",  wordIds: ["w2"],             kanji: "日", readings: ["にち", "じつ", "ひ", "か"],     en: "sun, day",         fr: "soleil, jour" },
      { id: "k4",  wordIds: ["w3"],             kanji: "本", readings: ["ほん", "もと"],                 en: "book, origin",     fr: "livre, origine" },
      { id: "k5",  wordIds: ["w4"],             kanji: "読", readings: ["どく", "とく", "よ"],           en: "read",             fr: "lire" },
      { id: "k6",  wordIds: ["w5", "w22"],      kanji: "家", readings: ["か", "いえ"],                   en: "house, home",      fr: "maison" },
      { id: "k7",  wordIds: ["w6"],             kanji: "中", readings: ["ちゅう", "なか"],               en: "inside, middle",   fr: "intérieur, milieu" },
      { id: "k8",  wordIds: ["w7"],             kanji: "人", readings: ["じん", "にん", "ひと"],         en: "person",           fr: "personne" },
      { id: "k9",  wordIds: ["w7", "w19"],      kanji: "間", readings: ["かん", "けん", "ま", "あいだ"], en: "interval, between", fr: "intervalle, entre" },
      { id: "k10", wordIds: ["w8"],             kanji: "体", readings: ["たい", "からだ"],               en: "body",             fr: "corps" },
      { id: "k11", wordIds: ["w9"],             kanji: "昼", readings: ["ちゅう", "ひる"],               en: "noon, daytime",    fr: "midi, journée" },
      { id: "k12", wordIds: ["w10"],            kanji: "九", readings: ["きゅう", "く"],                 en: "nine",             fr: "neuf" },
      { id: "k13", wordIds: ["w10", "w19"],     kanji: "時", readings: ["じ", "とき"],                   en: "time, hour",       fr: "heure, temps" },
      { id: "k14", wordIds: ["w10"],            kanji: "半", readings: ["はん"],                         en: "half",             fr: "demi, moitié" },
      { id: "k15", wordIds: ["w11"],            kanji: "電", readings: ["でん"],                         en: "electricity",      fr: "électricité" },
      { id: "k16", wordIds: ["w11"],            kanji: "気", readings: ["き", "け"],                     en: "spirit, energy",   fr: "esprit, énergie" },
      { id: "k17", wordIds: ["w12", "w17"],     kanji: "外", readings: ["がい", "そと"],                 en: "outside, foreign", fr: "dehors, étranger" },
      { id: "k18", wordIds: ["w13"],            kanji: "走", readings: ["そう", "はし"],                 en: "run",              fr: "courir" },
      { id: "k19", wordIds: ["w14"],            kanji: "大", readings: ["だい", "たい", "おお"],         en: "big, large",       fr: "grand, large" },
      { id: "k20", wordIds: ["w15"],            kanji: "声", readings: ["せい", "こえ"],                 en: "voice",            fr: "voix" },
      { id: "k21", wordIds: ["w16"],            kanji: "当", readings: ["とう", "あ"],                   en: "hit, current",     fr: "toucher, actuel" },
      { id: "k22", wordIds: ["w18"],            kanji: "楽", readings: ["がく", "らく", "たの"],         en: "music, comfort",   fr: "musique, plaisir" },
      { id: "k23", wordIds: ["w20"],            kanji: "子", readings: ["し", "こ"],                     en: "child",            fr: "enfant" },
      { id: "k24", wordIds: ["w20", "w23"],     kanji: "親", readings: ["しん", "おや"],                 en: "parent, close",    fr: "parent, proche" },
      { id: "k25", wordIds: ["w21"],            kanji: "公", readings: ["こう"],                         en: "public",           fr: "public" },
      { id: "k26", wordIds: ["w21"],            kanji: "園", readings: ["えん"],                         en: "garden, park",     fr: "jardin, parc" },
      { id: "k27", wordIds: ["w22"],            kanji: "作", readings: ["さく", "つく"],                 en: "make, create",     fr: "faire, créer" },
      { id: "k28", wordIds: ["w23"],            kanji: "切", readings: ["せつ", "き"],                   en: "cut, important",   fr: "couper, important" },
      { id: "k29", wordIds: ["w24"],            kanji: "教", readings: ["きょう", "おし"],               en: "teach, education", fr: "enseigner, éducation" }
    ]
  },
  {
    id: "1nensei-yomitori-6",
    name: "１年生 よみとり 6",
    sentences: [
      {
        id: "s1",
        display: "大きな音がする。",
        hiragana: "おおきなおとがする。",
        en: "To make a loud sound.",
        fr: "Faire un grand bruit."
      },
      {
        id: "s2",
        display: "赤いふうせん。",
        hiragana: "あかいふうせん。",
        en: "A red balloon.",
        fr: "Un ballon rouge."
      },
      {
        id: "s3",
        display: "玉入れをする。",
        hiragana: "たまいれをする。",
        en: "To play ball-toss.",
        fr: "Jouer au lancer de balles."
      },
      {
        id: "s4",
        display: "一月に生まれる。",
        hiragana: "いちがつにうまれる。",
        en: "To be born in January.",
        fr: "Naître en janvier."
      },
      {
        id: "s5",
        display: "耳をすましてきく。",
        hiragana: "みみをすましてきく。",
        en: "To listen carefully.",
        fr: "Tendre l'oreille pour écouter."
      },
      {
        id: "s6",
        display: "はだかの王さま。",
        hiragana: "はだかのおうさま。",
        en: "The naked king.",
        fr: "Le roi nu."
      },
      {
        id: "s7",
        display: "口ぶえをならす。",
        hiragana: "くちぶえをならす。",
        en: "To whistle.",
        fr: "Siffler."
      },
      {
        id: "s8",
        display: "はたを立てる。",
        hiragana: "はたをたてる。",
        en: "To raise a flag.",
        fr: "Planter un drapeau."
      },
      {
        id: "s9",
        display: "生きものをそだてる。",
        hiragana: "いきものをそだてる。",
        en: "To raise a living creature.",
        fr: "Élever un être vivant."
      },
      {
        id: "s10",
        display: "音がくをきく。",
        hiragana: "おんがくをきく。",
        en: "To listen to music.",
        fr: "Écouter de la musique."
      },
      {
        id: "s11",
        display: "先にしゅっぱつする。",
        hiragana: "さきにしゅっぱつする。",
        en: "To depart first.",
        fr: "Partir en premier."
      },
      {
        id: "s12",
        display: "草むしりをする。",
        hiragana: "くさむしりをする。",
        en: "To weed.",
        fr: "Désherber."
      },
      {
        id: "s13",
        display: "一年生。",
        hiragana: "いちねんせい。",
        en: "First-year student.",
        fr: "Élève de première année."
      },
      {
        id: "s14",
        display: "目ひょうをたてる。",
        hiragana: "もくひょうをたてる。",
        en: "To set a goal.",
        fr: "Fixer un objectif."
      },
      {
        id: "s15",
        display: "先生がはなす。",
        hiragana: "せんせいがはなす。",
        en: "The teacher speaks.",
        fr: "Le professeur parle."
      },
      {
        id: "s16",
        display: "年こしそばをたべる。",
        hiragana: "としこしそばをたべる。",
        en: "To eat New Year's Eve soba.",
        fr: "Manger le soba du réveillon du Nouvel An."
      }
    ],
    words: [
      { id: "w1",  sentenceIds: ["s1"],        display: "大きな",   hiragana: "おおきな",   en: "big, large",         fr: "grand, large" },
      { id: "w2",  sentenceIds: ["s1"],        display: "音",       hiragana: "おと",       en: "sound, noise",       fr: "son, bruit" },
      { id: "w3",  sentenceIds: ["s2"],        display: "赤い",     hiragana: "あかい",     en: "red",                fr: "rouge" },
      { id: "w4",  sentenceIds: ["s3"],        display: "玉入れ",   hiragana: "たまいれ",   en: "ball-toss game",     fr: "jeu de lancer de balles" },
      { id: "w5",  sentenceIds: ["s4"],        display: "一月",     hiragana: "いちがつ",   en: "January",            fr: "janvier" },
      { id: "w6",  sentenceIds: ["s4"],        display: "生まれる", hiragana: "うまれる",   en: "to be born",         fr: "naître" },
      { id: "w7",  sentenceIds: ["s5"],        display: "耳",       hiragana: "みみ",       en: "ear",                fr: "oreille" },
      { id: "w8",  sentenceIds: ["s6"],        display: "王さま",   hiragana: "おうさま",   en: "king",               fr: "roi" },
      { id: "w9",  sentenceIds: ["s7"],        display: "口ぶえ",   hiragana: "くちぶえ",   en: "whistle",            fr: "sifflement" },
      { id: "w10", sentenceIds: ["s8"],        display: "立てる",   hiragana: "たてる",     en: "to raise, to set up", fr: "dresser, planter" },
      { id: "w11", sentenceIds: ["s9"],        display: "生きもの", hiragana: "いきもの",   en: "living creature",    fr: "être vivant" },
      { id: "w12", sentenceIds: ["s10"],       display: "音がく",   hiragana: "おんがく",   en: "music",              fr: "musique" },
      { id: "w13", sentenceIds: ["s11"],       display: "先",       hiragana: "さき",       en: "ahead, first",       fr: "devant, d'abord" },
      { id: "w14", sentenceIds: ["s12"],       display: "草むしり", hiragana: "くさむしり", en: "weeding",            fr: "désherbage" },
      { id: "w15", sentenceIds: ["s13"],       display: "一年生",   hiragana: "いちねんせい", en: "first-year student", fr: "élève de première année" },
      { id: "w16", sentenceIds: ["s14"],       display: "目ひょう", hiragana: "もくひょう", en: "goal, target",       fr: "objectif, but" },
      { id: "w17", sentenceIds: ["s15"],       display: "先生",     hiragana: "せんせい",   en: "teacher",            fr: "professeur, enseignant" },
      { id: "w18", sentenceIds: ["s16"],       display: "年こし",   hiragana: "としこし",   en: "year-crossing, New Year's Eve", fr: "passage de l'an, réveillon" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],                  kanji: "大", readings: ["だい", "たい", "おお"],         en: "big, large",       fr: "grand, large" },
      { id: "k2",  wordIds: ["w2", "w12"],            kanji: "音", readings: ["おん", "いん", "おと"],         en: "sound",            fr: "son, bruit" },
      { id: "k3",  wordIds: ["w3"],                  kanji: "赤", readings: ["せき", "あか"],                 en: "red",              fr: "rouge" },
      { id: "k4",  wordIds: ["w4"],                  kanji: "玉", readings: ["ぎょく", "たま"],               en: "ball, jewel",      fr: "balle, joyau" },
      { id: "k5",  wordIds: ["w4"],                  kanji: "入", readings: ["にゅう", "い", "はい"],         en: "enter, put in",    fr: "entrer, mettre" },
      { id: "k6",  wordIds: ["w5", "w15"],            kanji: "一", readings: ["いち", "いつ", "ひと"],         en: "one",              fr: "un" },
      { id: "k7",  wordIds: ["w5"],                  kanji: "月", readings: ["げつ", "がつ", "つき"],         en: "moon, month",      fr: "lune, mois" },
      { id: "k8",  wordIds: ["w6", "w11", "w15", "w17"], kanji: "生", readings: ["せい", "しょう", "い", "なま"], en: "life, birth",  fr: "vie, naissance" },
      { id: "k9",  wordIds: ["w7"],                  kanji: "耳", readings: ["じ", "みみ"],                   en: "ear",              fr: "oreille" },
      { id: "k10", wordIds: ["w8"],                  kanji: "王", readings: ["おう"],                         en: "king",             fr: "roi" },
      { id: "k11", wordIds: ["w9"],                  kanji: "口", readings: ["こう", "くち"],                 en: "mouth",            fr: "bouche" },
      { id: "k12", wordIds: ["w10"],                 kanji: "立", readings: ["りつ", "た"],                   en: "stand, raise",     fr: "se lever, dresser" },
      { id: "k13", wordIds: ["w14"],                 kanji: "草", readings: ["そう", "くさ"],                 en: "grass, weed",      fr: "herbe, mauvaise herbe" },
      { id: "k14", wordIds: ["w15", "w18"],          kanji: "年", readings: ["ねん", "とし"],                 en: "year",             fr: "année" },
      { id: "k15", wordIds: ["w16"],                 kanji: "目", readings: ["もく", "め"],                   en: "eye, goal",        fr: "œil, objectif" },
      { id: "k16", wordIds: ["w13", "w17"],          kanji: "先", readings: ["せん", "さき"],                 en: "ahead, previous",  fr: "devant, précédent" }
    ]
  },
  {
    id: "2nensei-yomitori-5",
    name: "２年生 よみとり 5",
    sentences: [
      {
        id: "s1",
        display: "二年二組の教室。",
        hiragana: "にねんにくみのきょうしつ。",
        en: "The classroom of year 2, class 2.",
        fr: "La salle de classe de 2e année, 2e groupe."
      },
      {
        id: "s2",
        display: "後ろをむく。",
        hiragana: "うしろをむく。",
        en: "To turn around.",
        fr: "Se retourner."
      },
      {
        id: "s3",
        display: "だんごを丸める。",
        hiragana: "だんごをまるめる。",
        en: "To roll into a ball.",
        fr: "Former en boule."
      },
      {
        id: "s4",
        display: "点数をつける。",
        hiragana: "てんすうをつける。",
        en: "To assign points.",
        fr: "Attribuer des points."
      },
      {
        id: "s5",
        display: "店でふくを買う。",
        hiragana: "みせでふくをかう。",
        en: "To buy clothes at a store.",
        fr: "Acheter des vêtements dans un magasin."
      },
      {
        id: "s6",
        display: "友だちとあそぶ。",
        hiragana: "ともだちとあそぶ。",
        en: "To play with friends.",
        fr: "Jouer avec des amis."
      },
      {
        id: "s7",
        display: "鳥の羽をひろう。",
        hiragana: "とりのはをひろう。",
        en: "To pick up a bird's feather.",
        fr: "Ramasser la plume d'un oiseau."
      },
      {
        id: "s8",
        display: "白い雲がうかぶ。",
        hiragana: "しろいくもがうかぶ。",
        en: "White clouds float.",
        fr: "Des nuages blancs flottent."
      },
      {
        id: "s9",
        display: "楽しい夏まつり。",
        hiragana: "たのしいなつまつり。",
        en: "A fun summer festival.",
        fr: "Un joyeux festival d'été."
      },
      {
        id: "s10",
        display: "公園であそぶ。",
        hiragana: "こうえんであそぶ。",
        en: "To play in the park.",
        fr: "Jouer au parc."
      },
      {
        id: "s11",
        display: "せまい道を通る。",
        hiragana: "せまいみちをとおる。",
        en: "To pass through a narrow path.",
        fr: "Passer par un chemin étroit."
      },
      {
        id: "s12",
        display: "一万円。",
        hiragana: "いちまんえん。",
        en: "Ten thousand yen.",
        fr: "Dix mille yens."
      },
      {
        id: "s13",
        display: "頭をぶつける。",
        hiragana: "あたまをぶつける。",
        en: "To bump one's head.",
        fr: "Se cogner la tête."
      },
      {
        id: "s14",
        display: "朝ごはんを食べる。",
        hiragana: "あさごはんをたべる。",
        en: "To eat breakfast.",
        fr: "Prendre le petit-déjeuner."
      },
      {
        id: "s15",
        display: "白鳥のみずうみ。",
        hiragana: "はくちょうのみずうみ。",
        en: "Swan lake.",
        fr: "Le lac des cygnes."
      },
      {
        id: "s16",
        display: "通行止めになる。",
        hiragana: "つうこうどめになる。",
        en: "To become a road closure.",
        fr: "Être fermé à la circulation."
      }
    ],
    words: [
      { id: "w1",  sentenceIds: ["s1"],        display: "二年二組", hiragana: "にねんにくみ",   en: "year 2 class 2",    fr: "2e année, 2e groupe" },
      { id: "w2",  sentenceIds: ["s1"],        display: "教室",     hiragana: "きょうしつ",   en: "classroom",         fr: "salle de classe" },
      { id: "w3",  sentenceIds: ["s2"],        display: "後ろ",     hiragana: "うしろ",       en: "behind, back",      fr: "derrière, dos" },
      { id: "w4",  sentenceIds: ["s3"],        display: "丸める",   hiragana: "まるめる",     en: "to roll into a ball", fr: "former en boule" },
      { id: "w5",  sentenceIds: ["s4"],        display: "点数",     hiragana: "てんすう",     en: "points, score",     fr: "points, score" },
      { id: "w6",  sentenceIds: ["s5"],        display: "店",       hiragana: "みせ",         en: "store, shop",       fr: "magasin, boutique" },
      { id: "w7",  sentenceIds: ["s5"],        display: "買う",     hiragana: "かう",         en: "to buy",            fr: "acheter" },
      { id: "w8",  sentenceIds: ["s6"],        display: "友だち",   hiragana: "ともだち",     en: "friend",            fr: "ami" },
      { id: "w9",  sentenceIds: ["s7"],        display: "鳥",       hiragana: "とり",         en: "bird",              fr: "oiseau" },
      { id: "w10", sentenceIds: ["s7"],        display: "羽",       hiragana: "は",           en: "feather, wing",     fr: "plume, aile" },
      { id: "w11", sentenceIds: ["s8"],        display: "白い",     hiragana: "しろい",       en: "white",             fr: "blanc" },
      { id: "w12", sentenceIds: ["s8"],        display: "雲",       hiragana: "くも",         en: "cloud",             fr: "nuage" },
      { id: "w13", sentenceIds: ["s9"],        display: "楽しい",   hiragana: "たのしい",     en: "fun, enjoyable",    fr: "amusant, agréable" },
      { id: "w14", sentenceIds: ["s9"],        display: "夏",       hiragana: "なつ",         en: "summer",            fr: "été" },
      { id: "w15", sentenceIds: ["s10"],       display: "公園",     hiragana: "こうえん",     en: "park",              fr: "parc" },
      { id: "w16", sentenceIds: ["s11"],       display: "道",       hiragana: "みち",         en: "road, path",        fr: "chemin, route" },
      { id: "w17", sentenceIds: ["s11"],       display: "通る",     hiragana: "とおる",       en: "to pass through",   fr: "passer par" },
      { id: "w18", sentenceIds: ["s12"],       display: "一万円",   hiragana: "いちまんえん", en: "ten thousand yen",  fr: "dix mille yens" },
      { id: "w19", sentenceIds: ["s13"],       display: "頭",       hiragana: "あたま",       en: "head",              fr: "tête" },
      { id: "w20", sentenceIds: ["s14"],       display: "朝",       hiragana: "あさ",         en: "morning",           fr: "matin" },
      { id: "w21", sentenceIds: ["s14"],       display: "食べる",   hiragana: "たべる",       en: "to eat",            fr: "manger" },
      { id: "w22", sentenceIds: ["s15"],       display: "白鳥",     hiragana: "はくちょう",   en: "swan",              fr: "cygne" },
      { id: "w23", sentenceIds: ["s16"],       display: "通行止め", hiragana: "つうこうどめ", en: "road closure",      fr: "fermeture de route" }
    ],
    kanjis: [
      { id: "k1",  wordIds: ["w1"],             kanji: "二", readings: ["に"],                               en: "two",              fr: "deux" },
      { id: "k2",  wordIds: ["w1"],             kanji: "年", readings: ["ねん", "とし"],                     en: "year",             fr: "année" },
      { id: "k3",  wordIds: ["w1"],             kanji: "組", readings: ["そ", "くみ"],                       en: "class, group",     fr: "groupe, classe" },
      { id: "k4",  wordIds: ["w2"],             kanji: "教", readings: ["きょう", "おし"],                   en: "teach, education", fr: "enseigner, éducation" },
      { id: "k5",  wordIds: ["w2"],             kanji: "室", readings: ["しつ"],                             en: "room",             fr: "salle, pièce" },
      { id: "k6",  wordIds: ["w3"],             kanji: "後", readings: ["ご", "こう", "あと"],               en: "after, behind",    fr: "après, derrière" },
      { id: "k7",  wordIds: ["w4"],             kanji: "丸", readings: ["がん", "まる"],                     en: "round, circle",    fr: "rond, cercle" },
      { id: "k8",  wordIds: ["w5"],             kanji: "点", readings: ["てん"],                             en: "point, dot",       fr: "point" },
      { id: "k9",  wordIds: ["w5"],             kanji: "数", readings: ["すう", "かず"],                     en: "number, count",    fr: "nombre, compter" },
      { id: "k10", wordIds: ["w6"],             kanji: "店", readings: ["てん", "みせ"],                     en: "store, shop",      fr: "magasin, boutique" },
      { id: "k11", wordIds: ["w7"],             kanji: "買", readings: ["ばい", "か"],                       en: "buy",              fr: "acheter" },
      { id: "k12", wordIds: ["w8"],             kanji: "友", readings: ["ゆう", "とも"],                     en: "friend",           fr: "ami" },
      { id: "k13", wordIds: ["w9", "w22"],      kanji: "鳥", readings: ["ちょう", "とり"],                   en: "bird",             fr: "oiseau" },
      { id: "k14", wordIds: ["w10"],            kanji: "羽", readings: ["う", "は", "はね"],                 en: "feather, wing",    fr: "plume, aile" },
      { id: "k15", wordIds: ["w11", "w22"],     kanji: "白", readings: ["はく", "しろ"],                     en: "white",            fr: "blanc" },
      { id: "k16", wordIds: ["w12"],            kanji: "雲", readings: ["うん", "くも"],                     en: "cloud",            fr: "nuage" },
      { id: "k17", wordIds: ["w13"],            kanji: "楽", readings: ["がく", "らく", "たの"],             en: "music, comfort",   fr: "musique, plaisir" },
      { id: "k18", wordIds: ["w14"],            kanji: "夏", readings: ["か", "なつ"],                       en: "summer",           fr: "été" },
      { id: "k19", wordIds: ["w15"],            kanji: "公", readings: ["こう"],                             en: "public",           fr: "public" },
      { id: "k20", wordIds: ["w15"],            kanji: "園", readings: ["えん"],                             en: "garden, park",     fr: "jardin, parc" },
      { id: "k21", wordIds: ["w16"],            kanji: "道", readings: ["どう", "みち"],                     en: "road, way",        fr: "route, chemin" },
      { id: "k22", wordIds: ["w17", "w23"],     kanji: "通", readings: ["つう", "とお"],                     en: "pass, commute",    fr: "passer, trajet" },
      { id: "k23", wordIds: ["w18"],            kanji: "一", readings: ["いち", "いつ", "ひと"],             en: "one",              fr: "un" },
      { id: "k24", wordIds: ["w18"],            kanji: "万", readings: ["まん", "ばん"],                     en: "ten thousand",     fr: "dix mille" },
      { id: "k25", wordIds: ["w18"],            kanji: "円", readings: ["えん"],                             en: "yen, circle",      fr: "yen, cercle" },
      { id: "k26", wordIds: ["w19"],            kanji: "頭", readings: ["とう", "ず", "あたま"],             en: "head",             fr: "tête" },
      { id: "k27", wordIds: ["w20"],            kanji: "朝", readings: ["ちょう", "あさ"],                   en: "morning",          fr: "matin" },
      { id: "k28", wordIds: ["w21"],            kanji: "食", readings: ["しょく", "じき", "た"],             en: "eat, food",        fr: "manger, nourriture" },
      { id: "k29", wordIds: ["w23"],            kanji: "行", readings: ["こう", "ぎょう", "い", "おこな"],   en: "go, conduct",      fr: "aller, conduire" },
      { id: "k30", wordIds: ["w23"],            kanji: "止", readings: ["し", "と"],                         en: "stop",             fr: "arrêter, stopper" }
    ]
  }
];
