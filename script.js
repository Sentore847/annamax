const carSelect = document.querySelector("#car_make");
const modelSelect = document.querySelector("#car_model");
const carSelectedValue = carSelect.value;
const cardButtons = document.querySelectorAll(".card_btn");
const modalWindow = document.getElementById("modal_window");
const closeModalBtn = document.querySelector(".modal_close_btn");
const modalForm = document.querySelector(".modal_form");

// const allLangs = ["ua", "en", "de"];
// let currentLang = "de"; // Установим язык по умолчанию

// translations = {
//   header_main: {
//     ua: "Головна",
//     en: "Main",
//     de: "Startseite",
//   },
//   header_about: {
//     ua: "Про нас",
//     en: "About Us",
//     de: "Über uns",
//   },
//   header_services: {
//     ua: "Наші послуги",
//     en: "Our Services",
//     de: "Unsere Dienstleistungen",
//   },
//   header_reviews: {
//     ua: "Відгуки",
//     en: "Reviews",
//     de: "Bewertungen",
//   },
//   header_contacts: {
//     ua: "Контакти",
//     en: "Contacts",
//     de: "Kontakte",
//   },
//   topheader_phone: {
//     ua: "Телефон",
//     en: "Phone",
//     de: "Telefon",
//   },
//   topheader_email: {
//     ua: "Ел. пошта",
//     en: "Email",
//     de: "E-Mail",
//   },
//   topheader_contact: {
//     ua: "Зв'язатися",
//     en: "Contact",
//     de: "Kontakt",
//   },
//   intro: {
//     ua: "Більше ніж автосервіс! Якісне обладнання, професіонали авторемонту, індивідуальний підхід до кожного клієнта.",
//     en: "We offer more than just car service. Our commitment to quality, expertise, and personalized care will leave you satisfied.",
//     de: "Wir bieten mehr als nur eine Autoreparatur. Unser Engagement für Qualität, Expertise und individuelle Betreuung wird Sie zufriedenstellen.",
//   },
//   signService: {
//     ua: "Записатися на сервіс",
//     en: "Book a service",
//     de: "Service buchen",
//   },
//   feedback: {
//     ua: "Введіть ваше ім'я...",
//     en: "Enter your name...",
//     de: "Geben Sie Ihren Namen ein...",
//   },
//   about_title: {
//     ua: "Про Нас",
//     en: "About Us",
//     de: "Über uns",
//   },
//   about_first_text: {
//     ua: "Автосервіс Тurboautoservice— це професійний догляд за вашим автомобілем. Ми спеціалізуємося на ремонтних і детейлінгових послугах, поєднуючи швидкість, якість і уважність до деталей.",
//     en: "Turboautoservice Auto Service — professional care for your car. We specialize in repair and detailing services, combining speed, quality, and attention to detail.",
//     de: "Turboautoservice Autoservice — professionelle Pflege für Ihr Auto. Wir sind auf Reparatur- und Detailing-Dienstleistungen spezialisiert und verbinden Schnelligkeit, Qualität und Liebe zum Detail.",
//   },
//   about_second_text: {
//     ua: "Чому ми?",
//     en: "Why us?",
//     de: "Warum wir?",
//   },
//   about_third_text: {
//     ua: "Експертність: Досвідчені майстри забезпечують надійний сервіс із гарантією.",
//     en: "Expertise: Experienced technicians provide reliable service with a guarantee.",
//     de: "Fachkompetenz: Erfahrene Fachleute bieten zuverlässigen Service mit Garantie.",
//   },
//   about_third_text: {
//     ua: "Експертність: Досвідчені майстри забезпечують надійний сервіс із гарантією.",
//     en: "Expertise: Experienced technicians provide reliable service with a guarantee.",
//     de: "Fachkompetenz: Erfahrene Fachleute bieten zuverlässigen Service mit Garantie.",
//   },
//   about_fourth_text: {
//     ua: "Оперативність: Завдяки системі запису ваш автомобіль завжди готовий вчасно.",
//     en: "Efficiency: Thanks to our scheduling system, your car is always ready on time.",
//     de: "Effizienz: Dank unseres Terminplanungssystems ist Ihr Auto immer pünktlich fertig.",
//   },
//   about_fiveth_text: {
//     ua: "Індивідуальний підхід: Ми дбаємо про кожну деталь, щоб ваше авто виглядало бездоганно.",
//     en: "Personalized Approach: We care about every detail to ensure your car looks flawless.",
//     de: "Individueller Ansatz: Wir achten auf jedes Detail, damit Ihr Auto makellos aussieht.",
//   },
//   about_sixth_text: {
//     ua: "Обираючи Тurboautoservice, ви отримуєте більше, ніж просто сервіс — ви отримуєте надійність і турботу про ваше авто.",
//     en: "By choosing Turboautoservice, you get more than just service — you get reliability and care for your car.",
//     de: "Wenn Sie sich für Turboautoservice entscheiden, erhalten Sie mehr als nur einen Service — Sie erhalten Zuverlässigkeit und Fürsorge für Ihr Auto.",
//   },
//   about_first_figure: {
//     ua: "Кваліфіковані спеціалісти завжди готові надати якісні послуги нашим клієнтам з гарантією",
//     en: "Qualified specialists are always ready to provide our clients with high-quality services backed by a guarantee.",
//     de: "Qualifizierte Fachleute sind stets bereit, unseren Kunden hochwertige Dienstleistungen mit Garantie anzubieten.",
//   },
//   about_second_figure: {
//     ua: "Кожного дня в нас працює контакт-центр для консультації та записів наших клієнтів",
//     en: "Our contact center operates daily to assist clients with consultations and appointments.",
//     de: "Unser Kontaktzentrum ist täglich im Einsatz, um Kunden bei Beratungen und Terminvereinbarungen zu unterstützen.",
//   },
//   about_third_figure: {
//     ua: "Ми прагнемо оптимізувати процес покращення Вашого авто і надати послуги високоякісно та швидко",
//     en: "We strive to optimize the process of improving your car and deliver services with both speed and top quality.",
//     de: "Wir bemühen uns, den Prozess der Verbesserung Ihres Autos zu optimieren und Dienstleistungen schnell und in höchster Qualität zu erbringen.",
//   },
//   services_title: {
//     ua: "Наші Послуги",
//     en: "Our Services",
//     de: "Unsere Dienstleistungen",
//   },
//   card_detailing: {
//     ua: "Детейлінг",
//     en: "Detailing",
//     de: "Fahrzeugaufbereitung",
//   },
//   card_diagnostic: {
//     ua: "Діагностика",
//     en: "Diagnostics",
//     de: "Diagnose",
//   },
//   card_electrics: {
//     ua: "Автоелектрика",
//     en: "Auto Electronics",
//     de: "Autoelektrik",
//   },
//   card_repair: {
//     ua: "Ремонт",
//     en: "Repair",
//     de: "Reparatur",
//   },
//   detailing_first_li: {
//     ua: "Глибоке очищення салону від пилу та бруду за допомогою спеціалізованих засобів.",
//     en: "Deep cleaning of the interior from dust and dirt using specialized products.",
//     de: "Tiefenreinigung des Fahrzeuginnenraums von Staub und Schmutz mit spezialisierten Reinigungsmitteln.",
//   },
//   detailing_second_li: {
//     ua: "Захист і реставрація шкіряних та тканинних сидінь, а також інших поверхонь.",
//     en: "Protection and restoration of leather and fabric seats, as well as other surfaces.",
//     de: "Schutz und Restaurierung von Leder- und Stoffpolstern sowie anderen Oberflächen.",
//   },
//   detailing_third_li: {
//     ua: "Усунення неприємних запахів і дезінфекція для створення комфортної атмосфери.",
//     en: "Elimination of unpleasant odors and disinfection to create a comfortable atmosphere.",
//     de: "Entfernung unangenehmer Gerüche und Desinfektion zur Schaffung einer angenehmen Atmosphäre.",
//   },
//   diagnostic_first_li: {
//     ua: "Комп'ютерна діагностика електронних систем автомобіля.",
//     en: "Computer diagnostics of the car's electronic systems.",
//     de: "Computergestützte Diagnose der elektronischen Systeme des Fahrzeugs.",
//   },
//   diagnostic_second_li: {
//     ua: "Перевірка роботи двигуна, трансмісії та інших ключових систем.",
//     en: "Inspection of the engine, transmission, and other key systems.",
//     de: "Überprüfung des Motors, der Getriebe und anderer wichtiger Systeme.",
//   },
//   diagnostic_third_li: {
//     ua: "Визначення можливих несправностей та рекомендації щодо їх усунення.",
//     en: "Identification of potential issues and recommendations for their resolution.",
//     de: "Feststellung möglicher Probleme und Empfehlungen zu deren Behebung.",
//   },
//   electrics_first_li: {
//     ua: "Ремонт та заміна електричних компонентів автомобіля (акумулятори, стартери, генератори).",
//     en: "Repair and replacement of electrical components in the car (batteries, starters, alternators).",
//     de: "Reparatur und Austausch elektrischer Komponenten des Fahrzeugs (Batterien, Starter, Generatoren).",
//   },
//   electrics_second_li: {
//     ua: "Виправлення проблем з освітленням, проводкою та електронними системами.",
//     en: "Fixing issues with lighting, wiring, and electronic systems.",
//     de: "Behebung von Problemen mit Beleuchtung, Verkabelung und elektronischen Systemen.",
//   },
//   electrics_third_li: {
//     ua: "Встановлення додаткових електронних пристроїв (сигналізацій, парктроніків, мультимедійних систем).",
//     en: "Installation of additional electronic devices (alarms, parking sensors, multimedia systems).",
//     de: "Installation zusätzlicher elektronischer Geräte (Alarmanlagen, Parksensoren, Multimediasysteme).",
//   },
//   repair_first_li: {
//     ua: "Усі види ремонтних робіт по двигуну, трансмісії та ходовій частині.",
//     en: "All types of repair work on the engine, transmission, and chassis.",
//     de: "Alle Arten von Reparaturarbeiten am Motor, Getriebe und Fahrwerk.",
//   },
//   repair_second_li: {
//     ua: "Замінa деталей та агрегатів (гальмівні системи, підвіска, зчеплення).",
//     en: "Replacement of parts and assemblies (braking systems, suspension, clutch).",
//     de: "Austausch von Teilen und Baugruppen (Bremssysteme, Aufhängung, Kupplung).",
//   },
//   repair_third_li: {
//     ua: "Виправлення кузовних пошкоджень та лакофарбових покриттів.",
//     en: "Repair of body damage and restoration of paintwork.",
//     de: "Behebung von Karosserieschäden und Wiederherstellung der Lackierung.",
//   },
//   card_btn: {
//     ua: "Детальніше",
//     en: "More",
//     de: "Mehr",
//   },
//   modal_name: {
//     ua: "Введіть ваше ім’я...",
//     en: "Enter your name...",
//     de: "Geben Sie Ihren Namen ein...",
//   },
//   modal_carbrand: {
//     ua: "Оберіть марку авто...",
//     en: "Select your car brand...",
//     de: "Wählen Sie Ihre Automarke aus...",
//   },
//   modal_carmark: {
//     ua: "Спочатку оберіть марку авто!",
//     en: "First, select a car brand!",
//     de: "Wählen Sie zuerst eine Automarke aus!",
//   },
//   modal_services: {
//     ua: "Послуги:",
//     en: "Services:",
//     de: "Dienstleistungen:",
//   },
//   modal_total: {
//     ua: "Сума від: €0.00",
//     en: "Total from: €0.00",
//     de: "Summe ab: €0.00",
//   },
//   accept: {
//     ua: "Я приймаю",
//     en: "I accept",
//     de: "Ich akzeptiere",
//   },
//   politics: {
//     ua: "Політику конфіденційності",
//     en: "the Privacy Policy",
//     de: "die Datenschutzrichtlinie",
//   },
//   clients_title: {
//     ua: "Наші Клієнти",
//     en: "Our Clients",
//     de: "Unsere Kunden",
//   },
//   first_client_name: {
//     ua: "Андрій Кравчук (Україна)",
//     en: "Andrii Kravchuk (Ukraine)",
//     de: "Andrii Kravchuk (Ukraine)",
//   },
//   second_client_name: {
//     ua: "Олексій Дорошенко (Україна)",
//     en: "Oleksii Doroshenko (Ukraine)",
//     de: "Oleksii Doroshenko (Ukraine)",
//   },
//   third_client_name: {
//     ua: "Йоган Келлер (Австрія)",
//     en: "Johann Keller (Austria)",
//     de: "Johann Keller (Austria)",
//   },
//   first_client_text: {
//     ua: "Привозив авто на ремонт ходової частини. Все зробили на найвищому рівні, ще й запропонували безкоштовну діагностику в майбутньому. Сервіс супер, персонал привітний, ціни адекватні!",
//     en: "Brought his car in for chassis repair. Everything was done at the highest level, and they even offered free diagnostics for the future. Excellent service, friendly staff, and reasonable prices!",
//     de: "Hat sein Auto zur Reparatur des Fahrwerks gebracht. Alles wurde auf höchstem Niveau erledigt, und sie boten sogar kostenlose Diagnosen für die Zukunft an. Hervorragender Service, freundliches Personal und angemessene Preise!",
//   },
//   second_client_text: {
//     ua: "Звертався в цей автосервіс на діагностику двигуна. Роботу виконали швидко, все детально пояснили. Дуже сподобалася відповідальність майстрів та сучасне обладнання. Тепер тільки до вас! Рекомендую!",
//     en: "Visited this service center for engine diagnostics. The work was done quickly, and everything was explained in detail. I really appreciated the responsibility of the technicians and the modern equipment. From now on, only here! Highly recommend!",
//     de: "War in dieser Werkstatt zur Motor-Diagnose. Die Arbeit wurde schnell erledigt, und alles wurde detailliert erklärt. Ich schätze die Verantwortung der Techniker und die moderne Ausrüstung sehr. Ab jetzt nur noch hier! Sehr zu empfehlen!",
//   },
//   third_client_text: {
//     ua: "Мені порадили цей сервіс друзі. Дуже задоволений високим рівнем обслуговування! Робив ремонт гальмівної системи. Все виконали чітко і вчасно. Надійне місце, яке варто відвідати.",
//     en: "Friends recommended this service to me. I am very satisfied with the high level of service! I had the brake system repaired. Everything was done precisely and on time. A reliable place worth visiting.",
//     de: "Mir wurde dieser Service von Freunden empfohlen. Ich bin sehr zufrieden mit dem hohen Serviceniveau! Ich ließ das Bremssystem reparieren. Alles wurde präzise und pünktlich erledigt. Ein zuverlässiger Ort, der einen Besuch wert ist.",
//   },
//   projects: {
//     ua: "Реалізованих проектів",
//     en: "Completed Projects",
//     de: "Abgeschlossene Projekte",
//   },
//   polishings: {
//     ua: "Кількість поліровок",
//     en: "Number of Polishings",
//     de: "Anzahl der Polierungen",
//   },
//   cleanings: {
//     ua: "Кількість хімчисток",
//     en: "Number of Interior Cleanings",
//     de: "Anzahl der Innenraumreinigungen",
//   },
//   studios: {
//     ua: "Кількість студій",
//     en: "Number of Studios",
//     de: "Anzahl der Studios",
//   },
//   shedule_title: {
//     ua: "Графік Роботи",
//     en: "Working Hours",
//     de: "Öffnungszeiten",
//   },
//   monday: {
//     ua: "Пн 8:00 - 22:00",
//     en: "Mon 8:00 AM - 10:00 PM",
//     de: "Mo 8:00 - 22:00",
//   },
//   tuesday: {
//     ua: "Вт 8:00 - 22:00",
//     en: "Tue 8:00 AM - 10:00 PM",
//     de: "Di 8:00 - 22:00",
//   },
//   wednesday: {
//     ua: "Ср 8:00 - 22:00",
//     en: "Wed 8:00 AM - 10:00 PM",
//     de: "Mi 8:00 - 22:00",
//   },
//   thursday: {
//     ua: "Чт 8:00 - 22:00",
//     en: "Thu 8:00 AM - 10:00 PM",
//     de: "Do 8:00 - 22:00",
//   },
//   friday: {
//     ua: "Пт 8:00 - 22:00",
//     en: "Fri 8:00 AM - 10:00 PM",
//     de: "Fr 8:00 - 22:00",
//   },
//   weekend: {
//     ua: "Сб,Нд - По домовленості",
//     en: "Sat, Sun - By appointment",
//     de: "Sa, So - Nach Vereinbarung",
//   },
//   works_title: {
//     ua: "Наші Роботи",
//     en: "Our Works",
//     de: "Unsere Arbeiten",
//   },
//   footer_address: {
//     ua: "Адреса",
//     en: "Address",
//     de: "Adresse",
//   },
//   footer_nav: {
//     ua: "Навігація",
//     en: "Navigation",
//     de: "Navigation",
//   },
//   footer_socials: {
//     ua: "Наші соцмережі",
//     en: "Our Socials",
//     de: "Unsere sozialen",
//   },
// };

// // Функция обновления перевода
// function updateTranslation() {
//   // Получаем выбранный язык из выпадающего списка
//   const langSelect = document.getElementById("lang_select");
//   const introTitle = document.getElementById("intro_title");
//   const feedbackNameInput = document.getElementById("feedback_name_input");
//   const introSingButton = document.getElementById("intro_sign_button");
//   const aboutTitle = document.querySelector(".about_title");
//   const aboutFirstText = document.getElementById("about_first_text");
//   const headerMain = document.getElementById("header_nav_main");
//   const headerAbout = document.getElementById("header_nav_about");
//   const headerServices = document.getElementById("header_nav_services");
//   const headerReviews = document.getElementById("header_nav_reviews");
//   const headerContacts = document.getElementById("header_nav_contacts");
//   const topHeaderPhone = document.getElementById("top_header_phone");
//   const topHeaderEmail = document.getElementById("top_header_email");
//   const topHeaderViberContact = document.getElementById(
//     "top_header_vibercontact"
//   );
//   const topHeaderTelegramContact = document.getElementById(
//     "top_header_telegramcontact"
//   );
//   const topHeaderWhatsappContact = document.getElementById(
//     "top_header_whatsappcontact"
//   );
//   const whyUs = document.querySelector(".about_why");
//   const aboutThirdText = document.getElementById("about_third_text");
//   const aboutFourthText = document.getElementById("about_fourth_text");
//   const aboutFivethText = document.getElementById("about_fiveth_text");
//   const aboutSixthText = document.getElementById("about_sixth_text");
//   const firstFigure = document.getElementById("about_first_figure");
//   const secondFigure = document.getElementById("about_second_figure");
//   const thirdFigure = document.getElementById("about_third_figure");
//   const servicesTitle = document.querySelector(".services_title");
//   const cardTitleDetailing = document.getElementById("card_title_detailing");
//   const cardTitleDiagnostic = document.getElementById("card_title_diagnostic");
//   const cardTitleAutoelectrics = document.getElementById(
//     "card_title_autoelectronics"
//   );
//   const cardTitleRepair = document.getElementById("card_title_repair");
//   const detailingFirstLi = document.getElementById("detailing_first_li");
//   const detailingSecondLi = document.getElementById("detailing_second_li");
//   const detailingThirdLi = document.getElementById("detailing_third_li");
//   const diagnosticFirstLi = document.getElementById("diagnostic_first_li");
//   const diagnosticSecondLi = document.getElementById("diagnostic_second_li");
//   const diagnosticThirdLi = document.getElementById("diagnostic_third_li");
//   const autoelectricsFirstLi = document.getElementById("electronics_first_li");
//   const autoelectricsSecondLi = document.getElementById(
//     "electronics_second_li"
//   );
//   const autoelectricsThirdLi = document.getElementById("electronics_third_li");
//   const repairFirstLi = document.getElementById("repair_first_li");
//   const repairSecondLi = document.getElementById("repair_second_li");
//   const repairThirdLi = document.getElementById("repair_third_li");
//   const detailingBtn = document.getElementById("detailing_btn");
//   const diagnosticBtn = document.getElementById("diagnostic_btn");
//   const electronicsBtn = document.getElementById("electronics_btn");
//   const repairBtn = document.getElementById("repair_btn");

//   currentLang = langSelect.value; // Обновляем текущий язык

//   // Находим элемент для перевода и обновляем его содержимое
//   introTitle.textContent =
//     translations.intro[currentLang] || "Translation not available";

//   feedbackNameInput.placeholder =
//     translations.feedback[currentLang] || "Translation not available";

//   introSingButton.textContent =
//     translations.signService[currentLang] || "Translation not avaible";

//   aboutTitle.textContent =
//     translations.about_title[currentLang] || "Translation not avaible";

//   aboutFirstText.textContent =
//     translations.about_first_text[currentLang] || "Translation not avaible";

//   headerMain.textContent =
//     translations.header_main[currentLang] || "Translation not avaible";

//   headerAbout.textContent =
//     translations.header_about[currentLang] || "Translation not avaible";

//   headerServices.textContent =
//     translations.header_services[currentLang] || "Translation not avaible";

//   headerReviews.textContent =
//     translations.header_reviews[currentLang] || "Translation not avaible";

//   headerContacts.textContent =
//     translations.header_contacts[currentLang] || "Translation not avaible";

//   topHeaderPhone.textContent =
//     translations.topheader_phone[currentLang] || "Translation not avaible";

//   topHeaderEmail.textContent =
//     translations.topheader_email[currentLang] || "Translation not avaible";

//   topHeaderViberContact.textContent =
//     translations.topheader_contact[currentLang] || "Translation not avaible";

//   topHeaderTelegramContact.textContent =
//     translations.topheader_contact[currentLang] || "Translation not avaible";

//   topHeaderWhatsappContact.textContent =
//     translations.topheader_contact[currentLang] || "Translation not avaible";

//   whyUs.textContent =
//     translations.topheader_contact[currentLang] || "Translation not avaible";

//   aboutThirdText.textContent =
//     translations.about_third_text[currentLang] || "Translation not avaible";

//   aboutFourthText.textContent =
//     translations.about_fourth_text[currentLang] || "Translation not avaible";

//   aboutFivethText.textContent =
//     translations.about_fiveth_text[currentLang] || "Translation not avaible";

//   aboutSixthText.textContent =
//     translations.about_sixth_text[currentLang] || "Translation not avaible";

//   firstFigure.textContent =
//     translations.about_first_figure[currentLang] || "Translation not avaible";

//   secondFigure.textContent =
//     translations.about_second_figure[currentLang] || "Translation not avaible";

//   thirdFigure.textContent =
//     translations.about_third_figure[currentLang] || "Translation not avaible";

//   servicesTitle.textContent =
//     translations.services_title[currentLang] || "Translation not avaible";

//   cardTitleDetailing.textContent =
//     translations.card_detailing[currentLang] || "Translation not avaible";

//   cardTitleDiagnostic.textContent =
//     translations.card_diagnostic[currentLang] || "Translation not avaible";

//   cardTitleAutoelectrics.textContent =
//     translations.card_electrics[currentLang] || "Translation not avaible";

//   cardTitleRepair.textContent =
//     translations.card_repair[currentLang] || "Translation not avaible";

//   detailingFirstLi.textContent =
//     translations.detailing_first_li[currentLang] || "Translation not avaible";

//   detailingSecondLi.textContent =
//     translations.detailing_second_li[currentLang] || "Translation not avaible";

//   detailingThirdLi.textContent =
//     translations.detailing_third_li[currentLang] || "Translation not avaible";

//   diagnosticFirstLi.textContent =
//     translations.diagnostic_first_li[currentLang] || "Translation not avaible";

//   diagnosticSecondLi.textContent =
//     translations.diagnostic_second_li[currentLang] || "Translation not avaible";

//   diagnosticThirdLi.textContent =
//     translations.diagnostic_third_li[currentLang] || "Translation not avaible";

//   autoelectricsFirstLi.textContent =
//     translations.electrics_first_li[currentLang] || "Translation not avaible";

//   autoelectricsSecondLi.textContent =
//     translations.electrics_second_li[currentLang] || "Translation not avaible";

//   autoelectricsThirdLi.textContent =
//     translations.electrics_third_li[currentLang] || "Translation not avaible";

//   repairFirstLi.textContent =
//     translations.repair_first_li[currentLang] || "Translation not avaible";

//   repairSecondLi.textContent =
//     translations.repair_second_li[currentLang] || "Translation not avaible";

//   repairThirdLi.textContent =
//     translations.repair_third_li[currentLang] || "Translation not avaible";

//   detailingBtn.textContent =
//     translations.card_btn[currentLang] || "Translation not avaible";

//   diagnosticBtn.textContent =
//     translations.card_btn[currentLang] || "Translation not avaible";

//   electronicsBtn.textContent =
//     translations.card_btn[currentLang] || "Translation not avaible";

//   repairBtn.textContent =
//     translations.card_btn[currentLang] || "Translation not avaible";
// }

// // Добавляем слушатель событий на изменение языка
// document
//   .getElementById("lang_select")
//   .addEventListener("change", updateTranslation);

// // Инициализируем отображение на языке по умолчанию
// updateTranslation();

function resetFormFields() {
  const form = modalWindow.querySelector(".modal_form");
  form.reset();
  form.querySelector('input[type="tel"]').value = "+43";
  document.getElementById("car_model").innerHTML =
    '<option value="" disabled selected>Спочатку оберіть марку авто!</option>';
}

//Close Modal
function closeModal() {
  modalWindow.classList.remove("active");
  closeModalBtn.classList.remove("active");
  resetFormFields();
}

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalWindow.classList.add("active");
  });
});

modalWindow.addEventListener("click", (event) => {
  if (event.target !== modalWindow) {
    return;
  }
  closeModal();
});

closeModalBtn.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Selects with Cars
carSelect.addEventListener("change", () => {
  const selectedMake = carSelect.value;
  const modelOptions = [];

  switch (selectedMake) {
    case "toyota":
      modelOptions.push(
        "Corolla",
        "Camry",
        "RAV4",
        "Land Cruiser",
        "Hilux",
        "Yaris",
        "Supra",
        "Prius",
        "Avalon",
        "Highlander",
        "Tacoma",
        "Sequoia"
      );
      break;
    case "volkswagen":
      modelOptions.push(
        "Golf",
        "Passat",
        "Tiguan",
        "Polo",
        "Jetta",
        "Arteon",
        "ID.4",
        "ID.3",
        "Touareg",
        "Beetle",
        "Amarok"
      );
      break;
    case "ford":
      modelOptions.push(
        "Focus",
        "Mustang",
        "Explorer",
        "F-150",
        "Escape",
        "Fusion",
        "Edge",
        "Expedition",
        "Bronco",
        "Ranger",
        "Maverick"
      );
      break;
    case "honda":
      modelOptions.push(
        "Civic",
        "Accord",
        "CR-V",
        "Pilot",
        "Fit",
        "Odyssey",
        "Ridgeline",
        "HR-V",
        "Passport",
        "Insight"
      );
      break;
    case "bmw":
      modelOptions.push(
        "X5",
        "3 Series",
        "5 Series",
        "7 Series",
        "X3",
        "X1",
        "X7",
        "M3",
        "M5",
        "i4",
        "iX"
      );
      break;
    case "mercedes":
      modelOptions.push(
        "C-Class",
        "E-Class",
        "GLE",
        "S-Class",
        "GLC",
        "GLS",
        "A-Class",
        "CLA-Class",
        "EQB",
        "EQC",
        "AMG GT"
      );
      break;
    case "hyndai":
      modelOptions.push(
        "Elantra",
        "Santa Fe",
        "Tucson",
        "Accent",
        "Kona",
        "Sonata",
        "Palisade",
        "Ioniq 5",
        "Kona Electric",
        "Veloster",
        "Nexo"
      );
      break;
    case "nissan":
      modelOptions.push(
        "Altima",
        "Rogue",
        "Murano",
        "Pathfinder",
        "Sentra",
        "Maxima",
        "Armada",
        "Juke",
        "Titan",
        "Leaf"
      );
      break;
    case "tesla":
      modelOptions.push(
        "Model S",
        "Model 3",
        "Model X",
        "Model Y",
        "Cybertruck"
      );
      break;
    case "kia":
      modelOptions.push(
        "Sportage",
        "Sorento",
        "Rio",
        "Optima",
        "Soul",
        "Telluride",
        "Stinger",
        "Forte",
        "Carnival",
        "Niro"
      );
      break;
    default:
      modelOptions.push("Please select a car make");
  }
  modelSelect.innerHTML = "";

  modelOptions.forEach((model) => {
    const option = document.createElement("option");
    option.value = model;
    option.text = model;
    modelSelect.appendChild(option);
  });
});

// CALCULATOR
const detailing = 15;
const diagnostic = 15;
const electronicDiagnostic = 15;
const repare = 15;

const multipliers = {
  Corolla: 1,
  Camry: 1.1,
  RAV4: 1.2,
  "Land Cruiser": 1.5,
  Hilux: 1.3,
  Yaris: 1,
  Supra: 1.8,
  Prius: 1.2,
  Avalon: 1.3,
  Highlander: 1.4,
  Tacoma: 1.3,
  Sequoia: 1.5,
  Golf: 1,
  Passat: 1.1,
  Tiguan: 1.2,
  Polo: 1,
  Jetta: 1.1,
  Arteon: 1.3,
  "ID.4": 1.4,
  "ID.3": 1.3,
  Touareg: 1.5,
  Beetle: 1.2,
  Amarok: 1.4,
  Focus: 1,
  Mustang: 1.6,
  Explorer: 1.4,
  "F-150": 1.5,
  Escape: 1.2,
  Fusion: 1.1,
  Edge: 1.3,
  Expedition: 1.5,
  Bronco: 1.4,
  Ranger: 1.3,
  Maverick: 1.2,
  Civic: 1,
  Accord: 1.1,
  "CR-V": 1.2,
  Pilot: 1.4,
  Fit: 1,
  Odyssey: 1.2,
  Ridgeline: 1.3,
  "HR-V": 1.1,
  Passport: 1.3,
  Insight: 1.1,
  X5: 1.6,
  "3 Series": 1.4,
  "5 Series": 1.5,
  "7 Series": 1.8,
  X3: 1.4,
  X1: 1.3,
  X7: 1.8,
  M3: 2,
  M5: 2.2,
  i4: 1.9,
  iX: 1.8,
  "C-Class": 1.4,
  "E-Class": 1.5,
  GLE: 1.6,
  "S-Class": 1.8,
  GLC: 1.5,
  GLS: 1.7,
  "A-Class": 1.3,
  "CLA-Class": 1.4,
  EQB: 1.6,
  EQC: 1.7,
  "AMG GT": 2,
  Elantra: 1,
  "Santa Fe": 1.2,
  Tucson: 1.2,
  Accent: 1,
  Kona: 1.1,
  Sonata: 1.1,
  Palisade: 1.4,
  "Ioniq 5": 1.5,
  "Kona Electric": 1.4,
  Veloster: 1.3,
  Nexo: 1.5,
  Altima: 1,
  Rogue: 1.2,
  Murano: 1.3,
  Pathfinder: 1.4,
  Sentra: 1,
  Maxima: 1.2,
  Armada: 1.5,
  Juke: 1.1,
  Titan: 1.4,
  Leaf: 1.3,
  "Model S": 1.8,
  "Model 3": 1.5,
  "Model X": 1.9,
  "Model Y": 1.7,
  Cybertruck: 2,
  Sportage: 1.2,
  Sorento: 1.3,
  Rio: 1,
  Optima: 1.1,
  Soul: 1,
  Telluride: 1.4,
  Stinger: 1.6,
  Forte: 1,
  Carnival: 1.2,
  Niro: 1.1,
};

const resultDisplay = document.getElementById("result");
const carModelSelect = document.getElementById("car_model");

function calculateTotal() {
  const selectedModel = carModelSelect.value;
  const multiplier = multipliers[selectedModel] || 1;

  let total = 0;

  if (document.getElementById("detailing_input").checked) {
    total += detailing * multiplier;
  }
  if (document.getElementById("diagnostic_input").checked) {
    total += diagnostic * multiplier;
  }
  if (document.getElementById("electronics_input").checked) {
    total += electronicDiagnostic * multiplier;
  }
  if (document.getElementById("repare_input").checked) {
    total += repare * multiplier;
  }

  resultDisplay.textContent = `Total cost from: €${total.toFixed(2)}`;
}

document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
  checkbox.addEventListener("change", calculateTotal);
});

//Sucess for form
// modalForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Показываем сообщение Toastify
//   Toastify({
//     text: "Форма успішно відправлена! Дякуємо за звернення.",
//     duration: 3000, // 3 секунды
//     close: true, // Добавляем кнопку закрытия
//     gravity: "top", // Позиция сверху
//     position: "center", // По центру
//     backgroundColor: "#4CAF50", // Зеленый цвет для успешного сообщения
//   }).showToast();

//   resultDisplay.textContent = "Total cost from: €0.00";

//   // Очищаем все поля формы
//   e.target.reset();

//   // Закрываем модалку через 3 секунды
//   setTimeout(() => closeModal());
// });

//Counter figures
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter_item_number");
  const speed = 200;

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-count");
    let count = +counter.innerText;
    const increment = target / speed;

    const interval = setInterval(() => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.min(Math.ceil(count), target);
      } else {
        counter.innerText = target;
        clearInterval(interval);
      }
    }, 10);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          runCounter(counter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

// Input Phone Validate
const phoneInputs = document.querySelectorAll(".input_phone");
const itiInstances = [];

// Инициализация полей для intlTelInput
phoneInputs.forEach((input) => {
  const iti = window.intlTelInput(input, {
    initialCountry: "at", // Инициализация с кодом страны
    geoIpLookup: (callback) => {
      fetch("https://ipinfo.io/json?token=your_token_here")
        .then((response) => response.json())
        .then((data) => callback(data.country))
        .catch(() => callback("us"));
    },
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  itiInstances.push({ input, iti }); // Добавляем экземпляр в массив
});

// Обработчик отправки формы
const feedbackForm = document.querySelector(".feedback_form");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Отмена стандартного поведения

  // Получение значений полей
  const name = feedbackForm.querySelector('input[name="name"]').value.trim();
  const phoneInput = feedbackForm.querySelector(".input_phone");
  const car = feedbackForm.querySelector('input[name="car_name"]').value.trim();
  const acceptPolitics = feedbackForm.querySelector(
    'input[type="checkbox"]'
  ).checked;

  // Получаем экземпляр intlTelInput для поля телефона
  const iti = itiInstances.find(({ input }) => input === phoneInput)?.iti;

  // Проверка валидности телефона
  const isPhoneValid = iti && iti.isValidNumber();

  // Проверка всех условий
  if (
    !name ||
    !phoneInput.value.trim() ||
    !car ||
    !acceptPolitics ||
    !isPhoneValid
  ) {
    let errorMessage =
      "Будь ласка, заповніть всі поля і прийміть політику конфіденційності!";
    if (!isPhoneValid) {
      errorMessage = "Будь ласка, введіть дійсний номер телефону!";
      phoneInput.style.border = "2px solid red";
    } else {
      phoneInput.style.border = ""; // Убираем ошибку, если телефон валиден
    }

    Toastify({
      text: errorMessage,
      duration: 3000,
      close: true,
      gravity: "top", // top or bottom
      position: "center", // left, center or right
      backgroundColor: "#FF6347",
    }).showToast();
    return;
  }

  // Данные прошли проверку
  Toastify({
    text: "Дані успішно відправлені!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    backgroundColor: "#4CAF50",
  }).showToast();

  // Очистка формы после отправки
  feedbackForm.reset();
  phoneInput.style.border = ""; // Убираем стиль ошибки при сбросе формы
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Отмена стандартного поведения

  // Получение значений полей
  const name = modalForm.querySelector('input[name="name"]').value.trim();
  const phoneInput = modalForm.querySelector(".input_phone");
  const carMake = modalForm.querySelector("#car_make").value;
  const acceptPolitics = modalForm.querySelector(
    'input[type="checkbox"][required]'
  ).checked;

  // Получаем экземпляр intlTelInput для поля телефона
  const iti = itiInstances.find(({ input }) => input === phoneInput)?.iti;

  // Проверка валидности телефона
  const isPhoneValid = iti && iti.isValidNumber();

  // Проверка всех условий
  if (
    !name ||
    !phoneInput.value.trim() ||
    !carMake ||
    !acceptPolitics ||
    !isPhoneValid
  ) {
    let errorMessage =
      "Будь ласка, заповніть всі поля і прийміть політику конфіденційності!";
    if (!isPhoneValid) {
      errorMessage = "Будь ласка, введіть дійсний номер телефону!";
      phoneInput.style.border = "2px solid red";
    } else {
      phoneInput.style.border = ""; // Убираем ошибку, если телефон валиден
    }

    Toastify({
      text: errorMessage,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: "#FF6347",
    }).showToast();
    return; // Остановка выполнения
  }

  // Данные прошли проверку
  phoneInput.style.border = ""; // Убираем стиль ошибки при сбросе формы

  Toastify({
    text: "Форма успішно відправлена! Дякуємо за звернення.",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    backgroundColor: "#4CAF50",
  }).showToast();

  // Очистка формы
  modalForm.reset();
  closeModal();
});

function toggleMenu() {
  const nav = document.getElementById("burgerNav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}
