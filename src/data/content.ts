export const images = {
  medellin: "/images/medellin.jpg",
  escobar1989: "/images/escobar-1989.jpg",
  centroMedellin: "/images/centro-medellin.jpg",
  peopleMedellin: "/images/people-medellin.jpg",
  streetMedellin: "/images/street-medellin.jpg",
  mugshot1976: "/images/mugshot-1976.png",
  familyPhoto: "/images/family-photo.jpg",
  signature: "/images/signature.png",
  banquet: "/images/banquet.jpg",
  deathEscobar: "/images/death-escobar.jpg",
  police: "/images/police.jpg",
  policeCar: "/images/police-car.jpg",
  carExplosion: "/images/car-explosion.jpg",
  tomb: "/images/tomb.jpg",
  barrioEscobar: "/images/barrio-escobar.jpg",
  graffitiComuna13: "/images/graffiti-comuna13.jpg",
  cableCar: "/images/cable-car.jpg",
  modernMedellin: "/images/modern-medellin.jpg",
  narcosMedia: "/images/narcos-media.jpg",
  digitalMemory: "/images/digital-memory.jpg",
} as const;

export const heroData = {
  title: "NARCOS",
  subtitle: "История, память и миф в цифровую эпоху",
  description:
    "Миллионы людей знают Пабло Эскобара благодаря Netflix. Но что они знают о реальной истории?",
  cta: "Начать исследование",
  background: images.medellin,
  overlay: images.escobar1989,
};

export const cityBeforeData = {
  title: "Город до легенды",
  subtitle: "Медельин до нарковойны",
  intro:
    "До того как имя Эскобара стало синонимом наркотрафика, Медельин был городом контрастов — промышленным центром Антьокии, окружённым зелёными холмами и разделённым на богатые кварталы и трущобы.",
  panels: [
    {
      image: images.centroMedellin,
      title: "Центр города",
      text: "В 1970-е Медельин переживал бурный рост. Население стремительно увеличивалось, формируя один из крупнейших городов Колумбии.",
    },
    {
      image: images.peopleMedellin,
      title: "Люди Медельина",
      text: "Миллионы жителей жили в условиях острого неравенства. Бедность в трущобах соседствовала с роскошью элитных районов.",
    },
    {
      image: images.streetMedellin,
      title: "Улицы города",
      text: "Отсутствие социальных лифтов, безработица и коррупция создавали почву, на которой криминал мог стать альтернативой государству.",
    },
  ],
};

export const riseData = {
  title: "Возникновение Эскобара",
  subtitle: "От Рионегро до Медельинского картеля",
  mainImage: images.mugshot1976,
  signature: images.signature,
  events: [
    {
      year: "1949",
      title: "Рождение",
      description:
        "Пабло Эмилио Эскобар Гавириа родился 1 декабря 1949 года в Рионегро. Детство в бедности станет центральным элементом его будущего мифа.",
      image: images.familyPhoto,
    },
    {
      year: "1976",
      title: "Первое арестование",
      description:
        "Фотография из полицейского архива. Эскобар задержан с 18 килограммами кокаина. Это один из немногих документальных следов до эпохи картеля.",
      image: images.mugshot1976,
    },
    {
      year: "1982",
      title: "Медельинский картель",
      description:
        "Эскобар объединяет наркоторговцев в структуру беспрецедентной мощи. Медельин становится столицей мирового кокаинового бизнеса.",
      image: images.escobar1989,
    },
    {
      year: "1989",
      title: "Пик влияния",
      description:
        "Forbes называет его одним из богатейших людей планеты. Он проникает в политику, финансирует строительство и покупает лояльность.",
      image: images.escobar1989,
    },
    {
      year: "1993",
      title: "Конец эпохи",
      description:
        "После годов «войны» с государством Эскобар становится объектом охоты. Его смерть — не финал истории, а начало мифа.",
      image: images.deathEscobar,
    },
  ],
};

export const peakData = {
  title: "Пик могущества",
  subtitle: "Самый богатый преступник мира",
  description:
    "К концу 1980-х Эскобар контролировал огромную часть кокаинового потока в США. Его состояние, власть и жестокость достигли масштаба, который трудно представить.",
  images: [images.banquet, images.escobar1989],
  stats: [
    { value: "80%", label: "кокаина США", detail: "по оценкам, проходило через картель" },
    { value: "30", suffix: " млрд $", label: "оценка состояния", detail: "в пике — по данным Forbes" },
  ],
};

export const drugWarData = {
  title: "Цена мифа",
  subtitle: "Нарковойна",
  description:
    "За роскошью банкетов и миллиардами стояла реальная война. Тысячи погибших, террор, взрывы, коррупция — цена, которую платило колумбийское общество.",
  images: [
    { src: images.deathEscobar, caption: "Последствия конфликта" },
    { src: images.police, caption: "Операции спецподразделений" },
    { src: images.policeCar, caption: "Город под контролем" },
    { src: images.carExplosion, caption: "Террор на улицах" },
  ],
  facts: [
    "Тысячи жертв среди гражданских",
    "Убийства политиков, судей и журналистов",
    "Десятилетия социальной травмы",
    "Разрушение институтов доверия",
  ],
};

export const endData = {
  title: "2 декабря 1993",
  subtitle: "Конец Эскобара",
  text: "На крыше дома в Медельине закончилась жизнь человека, который переписал историю Колумбии. Но история о нём только начиналась.",
  image: images.deathEscobar,
};

export const memoryData = {
  title: "Память",
  subtitle: "После смерти история не закончилась",
  text: "Память стала новым полем борьбы. Могила, музеи, туристические маршруты, сериалы и мемы — всё это конкурирует за право рассказать, кем был Пабло Эскобар.",
  image: images.tomb,
};

export const medellinTodayData = {
  title: "Медельин сегодня",
  subtitle: "Контраст эпох",
  past: {
    era: "1980-е",
    title: "Город страха",
    images: [images.barrioEscobar, images.graffitiComuna13],
    text: "Трущобы, насилие, баррио, названные в честь Эскобара. Город, в котором криминал подменял государство.",
  },
  present: {
    era: "2020-е",
    title: "Город трансформации",
    images: [images.cableCar, images.modernMedellin],
    text: "Канатные дороги, граффити Коммуны 13, инновации и туризм. Медельин пытается переписать свою историю.",
  },
};

export const mythData = {
  title: "История или миф?",
  subtitle: "Кто сегодня создаёт память?",
  question: "Историки? Музеи? Netflix? TikTok?",
  text: "В цифровую эпоху память формируется не в архивах, а на экранах. Алгоритмы решают, чья версия прошлого станет общей.",
  images: [images.narcosMedia, images.digitalMemory],
  nodes: [
    { id: "historians", label: "Историки", description: "Академическая версия, основанная на документах и архивах", x: 15, y: 20 },
    { id: "museums", label: "Музеи", description: "Материальные артефакты и экспозиции прошлого", x: 85, y: 25 },
    { id: "netflix", label: "Netflix", description: "Эмоциональный нарратив, доступный миллионам за один клик", x: 50, y: 10 },
    { id: "tiktok", label: "TikTok", description: "Короткие видео и мемы, переписывающие образ за секунды", x: 20, y: 75 },
    { id: "youtube", label: "YouTube", description: "Документалистика и блоги, конкурирующие с академией", x: 80, y: 70 },
    { id: "wikipedia", label: "Wikipedia", description: "Коллективная энциклопедия — поле редактирования памяти", x: 50, y: 85 },
  ],
  center: "Pablo Escobar",
};

export const finalData = {
  background: images.medellin,
  lines: [
    "Narcos не рассказывает историю.",
    "Narcos создаёт память о ней.",
    "В цифровую эпоху медиа определяют, что общество будет помнить, а что забудет.",
  ],
  cta: "Изучить источники",
  sources: [
    { title: "Ян Ассман — Культурная память", type: "Теория" },
    { title: "Морис Хальбвакс — Коллективная память", type: "Теория" },
    { title: "Пьер Нора — Места памяти", type: "Теория" },
    { title: "Narcos (Netflix, 2015–2017)", type: "Медиа" },
    { title: "Forbes — список богатейших (1989)", type: "Архив" },
    { title: "Колумбийские государственные архивы", type: "Архив" },
  ],
};

export const footerData = {
  discipline: "История и память в цифровую эпоху",
  university: "НИУ ВШЭ",
  year: "2026",
};
