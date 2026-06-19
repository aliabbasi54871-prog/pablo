import { asset } from "@/lib/paths";

export const projectMeta = {
  title: "ПАБЛО ЭСКОБАР",
  subtitle: "КАК МЕДИА СОЗДАЮТ ИСТОРИЧЕСКУЮ ПАМЯТЬ",
  tagline:
    "Почему спустя 30 лет после смерти наркобарона миллионы людей знают его имя, но не знают имена тысяч его жертв?",
  researchQuestion: "Кто сегодня формирует память об Эскобаре — историки или медиа?",
  footer: {
    discipline: "История и память в цифровую эпоху",
    university: "НИУ ВШЭ",
    year: "2026",
  },
};

export const images = {
  barrioEscobar: asset("/images/barrio-escobar.jpg"),
  centroMedellin: asset("/images/centro-medellin.jpg"),
  peopleMedellin: asset("/images/people-medellin.jpg"),
  mugshot1976: asset("/images/mugshot-1976.png"),
  cocaineMachinery: asset("/images/cocaine-machinery.jpg"),
  cocaineBricks: asset("/images/cocaine-bricks.jpg"),
  drugSeizure: asset("/images/drug-seizure.jpg"),
  moneyCoronado: asset("/images/money-coronado.jpg"),
  drugMoney: asset("/images/drug-money.jpg"),
  haciendaNapoles: asset("/images/hacienda-napoles.jpg"),
  porticoHacienda: asset("/images/portico-hacienda.jpg"),
  escobar1989: asset("/images/escobar-1989.jpg"),
  familyPhoto: asset("/images/family-photo.jpg"),
  deathEscobar: asset("/images/death-escobar.jpg"),
  tomb: asset("/images/tomb.jpg"),
  modernMedellin: asset("/images/modern-medellin.jpg"),
  graffitiComuna13: asset("/images/graffiti-comuna13.jpg"),
  cableCar: asset("/images/cable-car.jpg"),
  narcosPoster: asset("/images/narcos-poster.jpg"),
  medellin: asset("/images/medellin.jpg"),
};

export const section1 = {
  id: "hero",
  title: "ГЕРОЙ ИЛИ ПРЕСТУПНИК?",
  background: images.barrioEscobar,
  paragraphs: [
    "Пабло Эскобар умер в 1993 году.",
    "Но его история не закончилась.",
    "Сегодня его имя знают миллионы людей по всему миру.",
    "Его образ живет в сериалах, мемах, социальных сетях и туристических маршрутах.",
    "Возникает вопрос:",
    "Почему мы продолжаем помнить одного наркобарона спустя десятилетия?",
  ],
};

export const section2 = {
  id: "city",
  title: "ГОРОД ДО ЛЕГЕНДЫ",
  leftImage: images.centroMedellin,
  rightImage: images.peopleMedellin,
  paragraphs: [
    "В середине XX века Медельин был обычным промышленным городом Колумбии.",
    "Быстрая урбанизация, бедность и социальное неравенство создавали условия для появления теневой экономики.",
    "Для тысяч молодых людей преступный мир становился единственным способом быстро изменить свою жизнь.",
    "На этом фоне начинается история человека, который изменит не только Колумбию, но и мировую культуру.",
  ],
};

export const section3 = {
  id: "birth",
  title: "РОЖДЕНИЕ ЭСКОБАРА",
  image: images.mugshot1976,
  timeline: ["1949", "1976", "1982", "1989", "1993"],
  paragraphs: [
    "Пабло Эмилио Эскобар Гавирия родился в 1949 году.",
    "Начав с мелких преступлений, он быстро понял, что настоящий капитал находится в международной торговле наркотиками.",
    "Арест 1976 года стал одним из первых документальных свидетельств его криминальной деятельности.",
    "Однако остановить его уже было невозможно.",
  ],
};

export const section4 = {
  id: "empire",
  title: "КОКАИНОВАЯ ИМПЕРИЯ",
  gallery: [images.cocaineMachinery, images.cocaineBricks, images.drugSeizure],
  paragraphs: [
    "К концу 1980-х годов Медельинский картель превратился в глобальную логистическую сеть.",
    "Кокаин перевозили самолетами, автомобилями, контейнерами и промышленным оборудованием.",
    "Каждый день через картель проходили тонны наркотиков.",
    "Эта система работала одновременно на нескольких континентах.",
  ],
  stat: { value: "80%", label: "контрабанды кокаина в США" },
};

export const section5 = {
  id: "money",
  title: "ДЕНЬГИ БЕЗ ГРАНИЦ",
  images: [images.moneyCoronado, images.drugMoney],
  paragraphs: [
    "Доходы картеля исчислялись миллиардами долларов.",
    "Количество наличных было настолько велико, что часть денег просто уничтожалась из-за влаги и времени.",
    "По оценкам современников, состояние Эскобара делало его одним из самых богатых людей планеты.",
  ],
  stat: { value: "$30 000 000 000", label: "оценка состояния" },
};

export const section6 = {
  id: "luxury",
  title: "РОСКОШЬ КАК СПЕКТАКЛЬ",
  images: [images.haciendaNapoles, images.porticoHacienda],
  paragraphs: [
    "Эскобар превратил богатство в демонстрацию власти.",
    "Его поместье Hacienda Nápoles включало частный аэродром, зоопарк, коллекцию автомобилей и десятки гектаров земли.",
    "Это было не просто место проживания.",
    "Это был символ абсолютного могущества.",
  ],
};

export const section7 = {
  id: "popular-hero",
  title: "НАРОДНЫЙ ГЕРОЙ?",
  images: [images.escobar1989, images.familyPhoto],
  paragraphs: [
    "Для части населения Эскобар был преступником.",
    "Для другой части — человеком, который строил жилье, футбольные поля и помогал бедным районам.",
    "Именно этот образ благотворителя стал основой для последующей романтизации его личности.",
  ],
  quote: "Робин Гуд из Медельина",
};

export const section8 = {
  id: "price",
  title: "ЦЕНА ЛЕГЕНДЫ",
  image: images.deathEscobar,
  paragraphs: [
    "За образом народного героя скрывалась одна из самых кровавых страниц истории Латинской Америки.",
    "Убийства судей.",
    "Журналистов.",
    "Полицейских.",
    "Политиков.",
    "Мирных жителей.",
    "Тысячи человеческих жизней стали ценой кокаиновой империи.",
  ],
};

export const section9 = {
  id: "death",
  title: "СМЕРТЬ НЕ СТАЛА КОНЦОМ",
  image: images.tomb,
  paragraphs: [
    "2 декабря 1993 года Эскобар был убит.",
    "Однако его физическая смерть не означала исчезновение из общественной памяти.",
    "Напротив.",
    "Именно после смерти началось формирование глобального мифа.",
  ],
};

export const section10 = {
  id: "today",
  title: "МЕДЕЛЬИН СЕГОДНЯ",
  images: [images.modernMedellin, images.graffitiComuna13, images.cableCar],
  paragraphs: [
    "Сегодня Медельин является одним из самых инновационных городов Латинской Америки.",
    "Однако прошлое продолжает присутствовать в городской среде.",
    "Граффити.",
    "Музеи.",
    "Экскурсии.",
    "Туристические маршруты.",
    "Город одновременно помнит и пытается забыть собственную историю.",
  ],
};

export const section11 = {
  id: "netflix",
  title: "NETFLIX И НОВАЯ ПАМЯТЬ",
  poster: images.narcosPoster,
  paragraphs: [
    "Для миллионов людей история Эскобара началась не с архивов.",
    "Не с документов.",
    "Не с исследований.",
    "Она началась с сериала Narcos.",
    "Массовая культура превратилась в главный источник исторических знаний.",
    "Алгоритмы стриминговых платформ получили возможность влиять на коллективную память сильнее традиционных институтов.",
  ],
};

export const section12 = {
  id: "final",
  background: images.medellin,
  paragraphs: [
    "История Пабло Эскобара показывает, что в цифровую эпоху прошлое больше не принадлежит исключительно историкам.",
    "Кино.",
    "Стриминговые сервисы.",
    "Социальные сети.",
    "Алгоритмы рекомендаций.",
    "Все они участвуют в формировании коллективной памяти.",
    "Мы помним не только то, что произошло.",
    "Мы помним то, что нам показали.",
  ],
  quote: "Narcos не рассказывает историю. Narcos создает память о ней.",
};
