const data = [
  {
    "id": "yes",
    "title": "Yes",
    "english": "Yes",
    "spanish": "Sí",
    "korean": "예",
    "koreanRomanized": "ye",
    "chinese": "是的",
    "chineseRomanized": "shì de"
  },
  {
    "id": "no",
    "title": "No",
    "english": "No",
    "spanish": "No",
    "korean": "아니요",
    "koreanRomanized": "aniyo",
    "chinese": "不",
    "chineseRomanized": "bù"
  },
  {
    "id": "pain",
    "title": "I have pain",
    "english": "I have pain",
    "spanish": "Tengo dolor",
    "korean": "아프다",
    "koreanRomanized": "apeuda",
    "chinese": "我痛",
    "chineseRomanized": "wǒ tòng"
  },
  {
    "id": "breathing",
    "title": "Hard to breathe",
    "english": "Hard to breathe",
    "spanish": "Difícil respirar",
    "korean": "숨쉬기가 어렵다",
    "koreanRomanized": "sumswigiga eolyeobda",
    "chinese": "呼吸困难",
    "chineseRomanized": "hūxī kùnnán"
  },
  {
    "id": "nausea",
    "title": "Nausea",
    "english": "Nausea",
    "spanish": "Siento náuseas",
    "korean": "속이 울렁 거립니다",
    "koreanRomanized": "sog-i ulleong geolibnida",
    "chinese": "想吐",
    "chineseRomanized": "xiǎng tǔ"
  },
  {
    "id": "headache",
    "title": "Headache",
    "english": "Headache",
    "spanish": "Dolor de cabeza",
    "korean": "두통",
    "koreanRomanized": "dutong",
    "chinese": "头痛",
    "chineseRomanized": "tóutòng"
  },
  {
    "id": "toilet",
    "title": "Toilet",
    "english": "Toilet",
    "spanish": "Baño",
    "korean": "화장실",
    "koreanRomanized": "hwajangsil",
    "chinese": "洗手间",
    "chineseRomanized": "xǐshǒujiān"
  },
  {
    "id": "bedpan",
    "title": "Bed pan",
    "english": "Bed pan",
    "spanish": "Inodoro",
    "korean": "침대용 변기",
    "koreanRomanized": "chimdaeyong byeongi",
    "chinese": "马桶",
    "chineseRomanized": "mǎtǒng"
  },
  {
    "id": "bed",
    "title": "Bed / I want to lie down",
    "english": "Bed / I want to lie down",
    "spanish": "Cama / Quiero acostarme",
    "korean": "침대 / 침대에 눕고 싶다 ",
    "koreanRomanized": "chimdae / chimdaee nubgo sipda",
    "chinese": "床 / 我想躺下来",
    "chineseRomanized": "chuáng / wǒ xiǎng tǎng xiàlái"
  },
  {
    "id": "turn",
    "title": "I’m uncomfortable / I want to turn over",
    "english": "I’m uncomfortable / I want to turn over",
    "spanish": "Me siento incómodo / Quiero entregarme",
    "korean": "불편해요 / 돌아 서고 싶다",
    "koreanRomanized": "bulpyeonhaeyo / dol-a seogo sipda",
    "chinese": "我不舒服 / 我想翻身",
    "chineseRomanized": "wǒ bú shūfú / wǒ xiǎng fānshēn"
  },
  {
    "id": "upright",
    "title": "Please elevate the head of the bed",
    "english": "Please elevate the head of the bed",
    "spanish": "Eleve la cabecera de la cama por favor",
    "korean": "침대 머리를 들어주세요",
    "koreanRomanized": "chimdae meolileul deul-eojuseyo",
    "chinese": "请把床头挪高",
    "chineseRomanized": "qǐng bǎ chuáng tóu nuó gāo "
  },
  {
    "id": "chair",
    "title": "Chair / I want to sit",
    "english": "Chair / I want to sit",
    "spanish": "Silla / Quiero sentarme",
    "korean": "의자 / 앉아 싶다",
    "koreanRomanized": "uija / anj-a sipda",
    "chinese": "主席 / 我想坐",
    "chineseRomanized": "zhǔxí / wǒ xiǎng zuò"
  },
  {
    "id": "walk",
    "title": "Walking aid / I want to walk",
    "english": "Walking aid / I want to walk",
    "spanish": "Ayuda para caminar / Quiero caminar",
    "korean": "보행 보조기 / 걷고 싶다",
    "koreanRomanized": "bohaeng bojogi / geodgo sipda",
    "chinese": "助行器 / 我想走路",
    "chineseRomanized": "zhù xíng qì / wǒ xiǎng zǒulù"
  },
  {
    "id": "wheelchair",
    "title": "Wheelchair",
    "english": "Wheelchair",
    "spanish": "Silla de ruedas",
    "korean": "휠체어",
    "koreanRomanized": "hwilcheeo",
    "chinese": "轮椅",
    "chineseRomanized": "lúnyǐ"
  },
  {
    "id": "vision-hearing",
    "title": "Glasses / Hearing aids",
    "english": "Glasses / Hearing aids",
    "spanish": "Gafas / Audífonos",
    "korean": "안경 / 보청기",
    "koreanRomanized": "angyeong / bocheong-gi",
    "chinese": "眼镜 / 助听器",
    "chineseRomanized": "yǎnjìng / zhùtīngqì"
  },
  {
    "id": "temperature",
    "title": "I feel hot / I feel cold",
    "english": "I feel hot / I feel cold",
    "spanish": "Me siento aliente / Me siento frío",
    "korean": "덥다 / 춥다",
    "koreanRomanized": "deobda / chubda",
    "chinese": "我热 / 我冷",
    "chineseRomanized": "wǒ rè/ wǒ lěng"
  },
  {
    "id": "lights",
    "title": "Lights on / Lights off",
    "english": "Lights on / Lights off",
    "spanish": "Enciende la luz / Apaga la luz",
    "korean": "불을 켜다 / 불을 끄다",
    "koreanRomanized": "bul-eul kyeoda / bul-eul kkeuda",
    "chinese": "开灯 / 关灯",
    "chineseRomanized": "kāi dēng / guān dēng"
  },
  {
    "id": "hungry",
    "title": "Food / I'm hungry",
    "english": "Food / I'm hungry",
    "spanish": "Comida / Tengo hambre",
    "korean": "음식 / 배고프다",
    "koreanRomanized": "eumsig / baegopeuda",
    "chinese": "食物 / 我饿了",
    "chineseRomanized": "shí wù / wǒ èle"
  },
  {
    "id": "thirsty",
    "title": "Beverage / I'm thirsty",
    "english": "Beverage / I'm thirsty",
    "spanish": "Bebida / Estoy sediento",
    "korean": "음료수 / 목이 마르다",
    "koreanRomanized": "eumlyosu / mog-i maleuda",
    "chinese": "饮料 / 我口渴",
    "chineseRomanized": "yǐnliào / wǒ kǒu kě"
  },
  {
    "id": "suction",
    "title": "Suction / Please suction me",
    "english": "Suction / Please suction me",
    "spanish": "Succión / succión de mí por favor",
    "korean": "흡입 / 흡입 해주세요",
    "koreanRomanized": "heub-ib / naleul heub-ib haejuseyo",
    "chinese": "吸痰 / 请帮我吸痰",
    "chineseRomanized": "xī tán / qǐng bāng wǒ xī tán "
  },
  {
    "id": "shower",
    "title": "Shower / Please wash me",
    "english": "Shower / Please wash me",
    "spanish": "Ducha / Lávame por favor",
    "korean": "목욕 / 씻어주세요",
    "koreanRomanized": "mog-yog / ssis-eojuseyo",
    "chinese": "洗澡 / 请幫我洗澡",
    "chineseRomanized": "xǐzǎo / qǐng bāng wǒ xǐ zǎo"
  },
  {
    "id": "teeth",
    "title": "Toothbrush / Dentures",
    "english": "Toothbrush / Dentures",
    "spanish": "Cepillo de dientes / Dentadura postiza",
    "korean": "칫솔질 / 틀이",
    "koreanRomanized": "chis-soljil / teul-i",
    "chinese": "牙刷 / 假牙",
    "chineseRomanized": "yáshuā / jiǎyá"
  },
  {
    "id": "tv",
    "title": "TV",
    "english": "TV",
    "spanish": "Televisión",
    "korean": "텔레비",
    "koreanRomanized": "tellebi",
    "chinese": "电视",
    "chineseRomanized": "diànshì"
  },
  {
    "id": "music",
    "title": "Music",
    "english": "Music",
    "spanish": "Música",
    "korean": "음악",
    "koreanRomanized": "eum-ag",
    "chinese": "音乐",
    "chineseRomanized": "yīnyuè"
  },
  {
    "id": "phone",
    "title": "Telephone",
    "english": "Telephone",
    "spanish": "Teléfono",
    "korean": "전화",
    "koreanRomanized": "jeonhwa",
    "chinese": "电话",
    "chineseRomanized": "diànhuà"
  },
  {
    "id": "home",
    "title": "Home / Family",
    "english": "Home / Family",
    "spanish": "Casa / Familia",
    "korean": "집 / 가족",
    "koreanRomanized": "jib / gajog",
    "chinese": "家 / 家人",
    "chineseRomanized": "jiārén"
  },
  {
    "id": "hospital",
    "title": "Hospital",
    "english": "Hospital",
    "spanish": "Hospital",
    "korean": "병원",
    "koreanRomanized": "byeongwon",
    "chinese": "醫院",
    "chineseRomanized": "yīyuàn"
  },
  {
    "id": "doctor-nurse",
    "title": "Doctor / Nurse",
    "english": "Doctor / Nurse",
    "spanish": "Doctor / Enfemera",
    "korean": "의사 / 간호사",
    "koreanRomanized": "uisa / ganhosa",
    "chinese": "医生 / 护士",
    "chineseRomanized": "yīshēng / hùshì"
  }
];

export default data;