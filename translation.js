// Доступные языки и переводы
const translations = {
  header_main: {
    ua: "Головна",
    en: "Main",
    de: "Startseite",
  },
  header_about: {
    ua: "Про нас",
    en: "About Us",
    de: "Über uns",
  },
  header_services: {
    ua: "Наші послуги",
    en: "Our Services",
    de: "Unsere Dienstleistungen",
  },
  header_reviews: {
    ua: "Відгуки",
    en: "Reviews",
    de: "Bewertungen",
  },
  header_contacts: {
    ua: "Контакти",
    en: "Contacts",
    de: "Kontakte",
  },
  topheader_phone: {
    ua: "Телефон",
    en: "Phone",
    de: "Telefon",
  },
  topheader_email: {
    ua: "Ел. пошта",
    en: "Email",
    de: "E-Mail",
  },
  topheader_contact: {
    ua: "Зв'язатися",
    en: "Contact",
    de: "Kontakt",
  },
  intro: {
    ua: "Більше ніж автосервіс! Якісне обладнання, професіонали авторемонту, індивідуальний підхід до кожного клієнта.",
    en: "We offer more than just car service. Our commitment to quality, expertise, and personalized care will leave you satisfied.",
    de: "Wir bieten mehr als nur eine Autoreparatur. Unser Engagement für Qualität, Expertise und individuelle Betreuung wird Sie zufriedenstellen.",
  },
  signService: {
    ua: "Записатися на сервіс",
    en: "Book a service",
    de: "Service buchen",
  },
  feedback: {
    ua: "Введіть ваше ім'я...",
    en: "Enter your name...",
    de: "Geben Sie Ihren Namen ein...",
  },
  about_title: {
    ua: "Про Нас",
    en: "About Us",
    de: "Über uns",
  },
  about_first_text: {
    ua: "Автосервіс Тurboautoservice— це професійний догляд за вашим автомобілем. Ми спеціалізуємося на ремонтних і детейлінгових послугах, поєднуючи швидкість, якість і уважність до деталей.",
    en: "Turboautoservice Auto Service — professional care for your car. We specialize in repair and detailing services, combining speed, quality, and attention to detail.",
    de: "Turboautoservice Autoservice — professionelle Pflege für Ihr Auto. Wir sind auf Reparatur- und Detailing-Dienstleistungen spezialisiert und verbinden Schnelligkeit, Qualität und Liebe zum Detail.",
  },
  about_second_text: {
    ua: "Чому ми?",
    en: "Why us?",
    de: "Warum wir?",
  },
  about_third_text: {
    ua: "Експертність: Досвідчені майстри забезпечують надійний сервіс із гарантією.",
    en: "Expertise: Experienced technicians provide reliable service with a guarantee.",
    de: "Fachkompetenz: Erfahrene Fachleute bieten zuverlässigen Service mit Garantie.",
  },
  about_third_text: {
    ua: "Експертність: Досвідчені майстри забезпечують надійний сервіс із гарантією.",
    en: "Expertise: Experienced technicians provide reliable service with a guarantee.",
    de: "Fachkompetenz: Erfahrene Fachleute bieten zuverlässigen Service mit Garantie.",
  },
  about_fourth_text: {
    ua: "Оперативність: Завдяки системі запису ваш автомобіль завжди готовий вчасно.",
    en: "Efficiency: Thanks to our scheduling system, your car is always ready on time.",
    de: "Effizienz: Dank unseres Terminplanungssystems ist Ihr Auto immer pünktlich fertig.",
  },
  about_fiveth_text: {
    ua: "Індивідуальний підхід: Ми дбаємо про кожну деталь, щоб ваше авто виглядало бездоганно.",
    en: "Personalized Approach: We care about every detail to ensure your car looks flawless.",
    de: "Individueller Ansatz: Wir achten auf jedes Detail, damit Ihr Auto makellos aussieht.",
  },
  about_sixth_text: {
    ua: "Обираючи Тurboautoservice, ви отримуєте більше, ніж просто сервіс — ви отримуєте надійність і турботу про ваше авто.",
    en: "By choosing Turboautoservice, you get more than just service — you get reliability and care for your car.",
    de: "Wenn Sie sich für Turboautoservice entscheiden, erhalten Sie mehr als nur einen Service — Sie erhalten Zuverlässigkeit und Fürsorge für Ihr Auto.",
  },
  about_first_figure: {
    ua: "Кваліфіковані спеціалісти завжди готові надати якісні послуги нашим клієнтам з гарантією",
    en: "Qualified specialists are always ready to provide our clients with high-quality services backed by a guarantee.",
    de: "Qualifizierte Fachleute sind stets bereit, unseren Kunden hochwertige Dienstleistungen mit Garantie anzubieten.",
  },
  about_second_figure: {
    ua: "Кожного дня в нас працює контакт-центр для консультації та записів наших клієнтів",
    en: "Our contact center operates daily to assist clients with consultations and appointments.",
    de: "Unser Kontaktzentrum ist täglich im Einsatz, um Kunden bei Beratungen und Terminvereinbarungen zu unterstützen.",
  },
  about_third_figure: {
    ua: "Ми прагнемо оптимізувати процес покращення Вашого авто і надати послуги високоякісно та швидко",
    en: "We strive to optimize the process of improving your car and deliver services with both speed and top quality.",
    de: "Wir bemühen uns, den Prozess der Verbesserung Ihres Autos zu optimieren und Dienstleistungen schnell und in höchster Qualität zu erbringen.",
  },
  services_title: {
    ua: "Наші Послуги",
    en: "Our Services",
    de: "Unsere Dienstleistungen",
  },
  card_detailing: {
    ua: "Детейлінг",
    en: "Detailing",
    de: "Fahrzeugaufbereitung",
  },
  card_diagnostic: {
    ua: "Діагностика",
    en: "Diagnostics",
    de: "Diagnose",
  },
  card_electrics: {
    ua: "Автоелектрика",
    en: "Auto Electronics",
    de: "Autoelektrik",
  },
  card_repair: {
    ua: "Ремонт",
    en: "Repair",
    de: "Reparatur",
  },
  detailing_first_li: {
    ua: "Глибоке очищення салону від пилу та бруду за допомогою спеціалізованих засобів.",
    en: "Deep cleaning of the interior from dust and dirt using specialized products.",
    de: "Tiefenreinigung des Fahrzeuginnenraums von Staub und Schmutz mit spezialisierten Reinigungsmitteln.",
  },
  detailing_second_li: {
    ua: "Захист і реставрація шкіряних та тканинних сидінь, а також інших поверхонь.",
    en: "Protection and restoration of leather and fabric seats, as well as other surfaces.",
    de: "Schutz und Restaurierung von Leder- und Stoffpolstern sowie anderen Oberflächen.",
  },
  detailing_third_li: {
    ua: "Усунення неприємних запахів і дезінфекція для створення комфортної атмосфери.",
    en: "Elimination of unpleasant odors and disinfection to create a comfortable atmosphere.",
    de: "Entfernung unangenehmer Gerüche und Desinfektion zur Schaffung einer angenehmen Atmosphäre.",
  },
  diagnostic_first_li: {
    ua: "Комп'ютерна діагностика електронних систем автомобіля.",
    en: "Computer diagnostics of the car's electronic systems.",
    de: "Computergestützte Diagnose der elektronischen Systeme des Fahrzeugs.",
  },
  diagnostic_second_li: {
    ua: "Перевірка роботи двигуна, трансмісії та інших ключових систем.",
    en: "Inspection of the engine, transmission, and other key systems.",
    de: "Überprüfung des Motors, der Getriebe und anderer wichtiger Systeme.",
  },
  diagnostic_third_li: {
    ua: "Визначення можливих несправностей та рекомендації щодо їх усунення.",
    en: "Identification of potential issues and recommendations for their resolution.",
    de: "Feststellung möglicher Probleme und Empfehlungen zu deren Behebung.",
  },
  electrics_first_li: {
    ua: "Ремонт та заміна електричних компонентів автомобіля (акумулятори, стартери, генератори).",
    en: "Repair and replacement of electrical components in the car (batteries, starters, alternators).",
    de: "Reparatur und Austausch elektrischer Komponenten des Fahrzeugs (Batterien, Starter, Generatoren).",
  },
  electrics_second_li: {
    ua: "Виправлення проблем з освітленням, проводкою та електронними системами.",
    en: "Fixing issues with lighting, wiring, and electronic systems.",
    de: "Behebung von Problemen mit Beleuchtung, Verkabelung und elektronischen Systemen.",
  },
  electrics_third_li: {
    ua: "Встановлення додаткових електронних пристроїв (сигналізацій, парктроніків, мультимедійних систем).",
    en: "Installation of additional electronic devices (alarms, parking sensors, multimedia systems).",
    de: "Installation zusätzlicher elektronischer Geräte (Alarmanlagen, Parksensoren, Multimediasysteme).",
  },
  repair_first_li: {
    ua: "Усі види ремонтних робіт по двигуну, трансмісії та ходовій частині.",
    en: "All types of repair work on the engine, transmission, and chassis.",
    de: "Alle Arten von Reparaturarbeiten am Motor, Getriebe und Fahrwerk.",
  },
  repair_second_li: {
    ua: "Замінa деталей та агрегатів (гальмівні системи, підвіска, зчеплення).",
    en: "Replacement of parts and assemblies (braking systems, suspension, clutch).",
    de: "Austausch von Teilen und Baugruppen (Bremssysteme, Aufhängung, Kupplung).",
  },
  repair_third_li: {
    ua: "Виправлення кузовних пошкоджень та лакофарбових покриттів.",
    en: "Repair of body damage and restoration of paintwork.",
    de: "Behebung von Karosserieschäden und Wiederherstellung der Lackierung.",
  },
  card_btn: {
    ua: "Детальніше",
    en: "More",
    de: "Mehr",
  },
  enter_name: {
    ua: "Введіть ваше ім’я...",
    en: "Enter your name...",
    de: "Geben Sie Ihren Namen ein...",
  },
  modal_carbrand: {
    ua: "Оберіть марку авто...",
    en: "Select your car brand...",
    de: "Wählen Sie Ihre Automarke aus...",
  },
  modal_carmark: {
    ua: "Спочатку оберіть марку авто!",
    en: "First, select a car brand!",
    de: "Wählen Sie zuerst eine Automarke aus!",
  },
  modal_services: {
    ua: "Послуги:",
    en: "Services:",
    de: "Dienstleistungen:",
  },
  modal_total: {
    ua: "Сума від: €0.00",
    en: "Total from: €0.00",
    de: "Summe ab: €0.00",
  },
  accept: {
    ua: "Я приймаю",
    en: "I accept",
    de: "Ich akzeptiere",
  },
  politics: {
    ua: "Політику конфіденційності",
    en: "the Privacy Policy",
    de: "die Datenschutzrichtlinie",
  },
  clients_title: {
    ua: "Наші Клієнти",
    en: "Our Clients",
    de: "Unsere Kunden",
  },
  first_client_name: {
    ua: "Андрій Кравчук (Україна)",
    en: "Andrii Kravchuk (Ukraine)",
    de: "Andrii Kravchuk (Ukraine)",
  },
  second_client_name: {
    ua: "Олексій Дорошенко (Україна)",
    en: "Oleksii Doroshenko (Ukraine)",
    de: "Oleksii Doroshenko (Ukraine)",
  },
  third_client_name: {
    ua: "Йоган Келлер (Австрія)",
    en: "Johann Keller (Austria)",
    de: "Johann Keller (Austria)",
  },
  first_client_text: {
    ua: "Привозив авто на ремонт ходової частини. Все зробили на найвищому рівні, ще й запропонували безкоштовну діагностику в майбутньому. Сервіс супер, персонал привітний, ціни адекватні!",
    en: "Brought his car in for chassis repair. Everything was done at the highest level, and they even offered free diagnostics for the future. Excellent service, friendly staff, and reasonable prices!",
    de: "Hat sein Auto zur Reparatur des Fahrwerks gebracht. Alles wurde auf höchstem Niveau erledigt, und sie boten sogar kostenlose Diagnosen für die Zukunft an. Hervorragender Service, freundliches Personal und angemessene Preise!",
  },
  second_client_text: {
    ua: "Звертався в цей автосервіс на діагностику двигуна. Роботу виконали швидко, все детально пояснили. Дуже сподобалася відповідальність майстрів та сучасне обладнання. Тепер тільки до вас! Рекомендую!",
    en: "Visited this service center for engine diagnostics. The work was done quickly, and everything was explained in detail. I really appreciated the responsibility of the technicians and the modern equipment. From now on, only here! Highly recommend!",
    de: "War in dieser Werkstatt zur Motor-Diagnose. Die Arbeit wurde schnell erledigt, und alles wurde detailliert erklärt. Ich schätze die Verantwortung der Techniker und die moderne Ausrüstung sehr. Ab jetzt nur noch hier! Sehr zu empfehlen!",
  },
  third_client_text: {
    ua: "Мені порадили цей сервіс друзі. Дуже задоволений високим рівнем обслуговування! Робив ремонт гальмівної системи. Все виконали чітко і вчасно. Надійне місце, яке варто відвідати.",
    en: "Friends recommended this service to me. I am very satisfied with the high level of service! I had the brake system repaired. Everything was done precisely and on time. A reliable place worth visiting.",
    de: "Mir wurde dieser Service von Freunden empfohlen. Ich bin sehr zufrieden mit dem hohen Serviceniveau! Ich ließ das Bremssystem reparieren. Alles wurde präzise und pünktlich erledigt. Ein zuverlässiger Ort, der einen Besuch wert ist.",
  },
  projects: {
    ua: "Реалізованих проектів",
    en: "Completed Projects",
    de: "Abgeschlossene Projekte",
  },
  polishings: {
    ua: "Кількість поліровок",
    en: "Number of Polishings",
    de: "Anzahl der Polierungen",
  },
  cleanings: {
    ua: "Кількість хімчисток",
    en: "Number of Interior Cleanings",
    de: "Anzahl der Innenraumreinigungen",
  },
  studios: {
    ua: "Кількість студій",
    en: "Number of Studios",
    de: "Anzahl der Studios",
  },
  shedule_title: {
    ua: "Графік Роботи",
    en: "Working Hours",
    de: "Öffnungszeiten",
  },
  monday: {
    ua: "Пн 8:00 - 22:00",
    en: "Mon 8:00 AM - 10:00 PM",
    de: "Mo 8:00 - 22:00",
  },
  tuesday: {
    ua: "Вт 8:00 - 22:00",
    en: "Tue 8:00 AM - 10:00 PM",
    de: "Di 8:00 - 22:00",
  },
  wednesday: {
    ua: "Ср 8:00 - 22:00",
    en: "Wed 8:00 AM - 10:00 PM",
    de: "Mi 8:00 - 22:00",
  },
  thursday: {
    ua: "Чт 8:00 - 22:00",
    en: "Thu 8:00 AM - 10:00 PM",
    de: "Do 8:00 - 22:00",
  },
  friday: {
    ua: "Пт 8:00 - 22:00",
    en: "Fri 8:00 AM - 10:00 PM",
    de: "Fr 8:00 - 22:00",
  },
  weekend: {
    ua: "Сб,Нд - По домовленості",
    en: "Sat, Sun - By appointment",
    de: "Sa, So - Nach Vereinbarung",
  },
  feedback_title: {
    ua: "Заповніть форму для зв’язку!",
    en: "Fill out the contact form!",
    de: "Füllen Sie das Kontaktformular aus!",
  },
  works_title: {
    ua: "Наші Роботи",
    en: "Our Works",
    de: "Unsere Arbeiten",
  },
  car_name: {
    ua: "Введіть назву Вашого авто...",
    en: "Enter the name of your car...",
    de: "Geben Sie den Namen Ihres Autos ein...",
  },
  feedback_btn: {
    ua: "Отримати консультацію",
    en: "Get a consultation",
    de: "Beratung erhalten",
  },
  footer_address: {
    ua: "Адреса",
    en: "Address",
    de: "Adresse",
  },
  footer_nav: {
    ua: "Навігація",
    en: "Navigation",
    de: "Navigation",
  },
  footer_socials: {
    ua: "Наші соцмережі",
    en: "Our Socials",
    de: "Unsere sozialen",
  },
};

// Текущий язык (по умолчанию — английский)
let currentLang = "de";

// Функция обновления переводов
function updateTranslation() {
  // Находим все элементы с data-translate-key
  const elements = document.querySelectorAll("[data-translate-key]");

  elements.forEach((element) => {
    const key = element.dataset.translateKey; // Читаем ключ
    if (translations[key] && translations[key][currentLang]) {
      element.textContent = translations[key][currentLang]; // Обновляем текст
    }
  });

  // Обновляем плейсхолдеры отдельно (если нужно)
  const feedbackNameInput = document.getElementById("feedback_name_input");
  if (feedbackNameInput) {
    feedbackNameInput.placeholder =
      translations["enter_name"]?.[currentLang] || "Translation not available";
  }

  const modalNameInput = document.getElementById("modal_name_input");
  if (modalNameInput) {
    modalNameInput.placeholder =
      translations["enter_name"]?.[currentLang] || "Translation not available";
  }

  const carNameInput = document.getElementById("car_name_input");
  if (carNameInput) {
    carNameInput.placeholder =
      translations["car_name"]?.[currentLang] || "Translation not available";
  }
}

// Слушатель изменения языка
document.getElementById("lang_select").addEventListener("change", (event) => {
  currentLang = event.target.value; // Получаем выбранный язык
  updateTranslation(); // Обновляем перевод
});

// Инициализация перевода при загрузке страницы
updateTranslation();
