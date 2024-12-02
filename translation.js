// document.addEventListener("DOMContentLoaded", () => {
//   const translations = {
//     en: {
//       email: "E-mail",
//       phone: "Phone",
//       contact: "Contact",
//       location: "Kyiv, Ukraine",

//       headerMain: "Main",
//       headerAbout: "About Us",
//       headerServices: "Our Services",
//       headerReviews: "Reviews",
//       headerContact: "Contacts",

//       introTitle: "This title wrote in English",

//       signService: "Sign up for the service",
//       aboutTitle: "About Us",
//       aboutText:
//         "Detailing center “Luxusautocare” is a leader in the field of repair and detailing services for your car. Our professionals provide detailed advice on car care and elimination of aesthetic defects. Experienced craftsmen help maintain the technical and visual components of our clients' cars in excellent condition not only externally, but also internally.",
//       aboutSubText:
//         "Why choose our studio? We believe in quality care for your car! For us, a passion for cars is not just a job, but a real passion, so we know perfectly how to provide the best service. Meeting deadlines is our priority, and thanks to the pre-booking system, you always get your car on time. We pay attention to every detail, give our all 110% and do everything to make your car look perfect.",
//       aboutFirstFigure:
//         "Qualified specialists are always ready to provide quality services to our clients with a guarantee",
//       aboutSecondFigure:
//         "Every day we have a contact center for consultation and bookings for our clients.",
//       aboutThirdFigure:
//         "We strive to optimize the process of improving your car and provide high-quality and fast services.",

//       servicesTitle: "Our Services",
//       detailingTitle: "Detailing",
//       diagnosticTitle: "Diagnostics",
//       electronicTitle: "Auto Electrics",
//       repairTitle: "Repair",

//       detailingFirstLi:
//         "Deep cleaning of the interior from dust and dirt using specialized products.",
//       detailingSecondLi:
//         "Protection and restoration of leather and fabric seats, as well as other surfaces.",
//       detailingThirdLi:
//         "Elimination of unpleasant odors and disinfection to create a comfortable atmosphere.",

//       diagnosticFirstLi:
//         "Computer diagnostics of the vehicle's electronic systems.",
//       diagnosticSecondLi:
//         "Checking the operation of the engine, transmission, and other key systems.",
//       diagnosticThirdLi:
//         "Identification of potential malfunctions and recommendations for their elimination.",

//       electronicFirstLi:
//         "Repair and replacement of vehicle electrical components (batteries, starters, generators).",
//       electronicSecondLi:
//         "Troubleshooting lighting, wiring, and electronic systems.",
//       electronicThirdLi:
//         "Installation of additional electronic devices (alarms, parking sensors, multimedia systems).",

//       repairFirstLi:
//         "All types of repair work on the engine, transmission, and chassis.",
//       repairSecondLi:
//         "Replacement of parts and assemblies (brake systems, suspension, clutch).",
//       repairThirdLi: "Repair of body damage and paintwork.",
//       cardButtonText: "More",

//       signService: "Sign up for service",
//       enterName: "Enter your name...",
//       enterPhone: "Enter your phone number",
//       selectCarMake: "Select car make...",
//       selectCarModel: "Select car make first!",
//       servicesModalTitle: "Services:",
//       detailingCheckbox: "Detailing",
//       diagnosticsCheckbox: "Diagnostics",
//       electronicsCheckbox: "Auto electronics",
//       repairCheckbox: "Repair",
//       totalCost: "Total cost from: €0.00",
//       acceptPrivacy: "I accept the",
//       privacyPolicy: "Privacy Policy",

//       clientsTitle: "Our Clients",
//       ourProjects: "Implemented projects",
//       ourPolishings: "Number of polishings",
//       ourCleaners: "Number of dry cleaners",
//       ourStudios: "Number of studios",

//       sheduleTitle: "Working Hours",
//       monday: "Mon 8:00 AM - 10:00 PM",
//       tuesday: "Tue 8:00 AM - 10:00 PM",
//       wednesday: "Wed 8:00 AM - 10:00 PM",
//       thursday: "Thu 8:00 AM - 10:00 PM",
//       friday: "Fri 8:00 AM - 10:00 PM",
//       weekend: "Sat, Sun - By appointment",

//       feedbackFormTitle: "Fill out the contact form!",
//       enterCarName: "Enter the name of your car...",
//       feedbackFormButton: "Get a consultation",

//       worksTitle: "Our Works",

//       footerAddress: "Address",
//       footerNav: "Navigation",
//       footerSocials: "Our Socials",
//       footerPhone: "Phone: +380 67 946 5060",
//       footerEmail: "E-mail: serviceauto@gmail.com",
//     },
//     de: { welcome: "Willkommen", logout: "Abmelden" },
//     uk: {
//       // Top header
//       email: "Ел. пошта",
//       phone: "Телефон",
//       contact: "Зв'язатись",
//       location: "Київ, Україна",
//       // header
//       headerMain: "Головна",
//       headerAbout: "Про нас",
//       headerServices: "Наші послуги",
//       headerReviews: "Відгуки",
//       headerContact: "Контакти",
//       // intro
//       introTitle: "Цей заголовок написаний Українською",
//       signService: "Записатися на сервіс",
//       // about
//       aboutTitle: "Про Нас",
//       aboutText:
//         "Детейлінг центр “Luxusautocare” - лідер у сфері ремонтних та детейлінгових послуг для вашого авто. Наші професіонали надають детальну консультацію по догляду за автомобілем та усунення естетичних недоліків. Досвідчені майстри допомагають підтримувати технічну та візуальну складову авто наших клієнтів у відмінному стані не тільки зовнішньо, але й внутрішньо.",
//       aboutSubText:
//         "Чому обирають саме нашу студію? Ми віримо в якісний догляд за вашим авто! Захоплення автомобілями для нас — це не просто робота, а справжня пристрасть, тому ми досконало знаємо, як забезпечити найкращий сервіс. Дотримання термінів — наш пріоритет, і завдяки системі попереднього запису ви завжди отримуєте своє авто вчасно. Ми приділяємо увагу кожній дрібниці, викладаємося на всі 110% і робимо все, щоб ваш автомобіль виглядав бездоганно.",
//       aboutFirstFigure:
//         "Кваліфіковані спеціалісти завжди готові надати якісні послуги нашим клієнтам з гарантією",
//       aboutSecondFigure:
//         "Кожного дня в нас працює контакт-центр для консультації та записів наших клієнтів",
//       aboutThirdFigure:
//         "Ми прагнемо оптимізувати процес покращення Вашого авто і надати послуги високоякісно та швидко",
//       // SERVICES
//       servicesTitle: "Наші Послуги",
//       detailingTitle: "Детейлінг",
//       diagnosticTitle: "Діагностика",
//       electronicTitle: "Автоелектрика",
//       repairTitle: "Ремонт",

//       detailingFirstLi:
//         "Глибоке очищення салону від пилу та бруду за допомогою спеціалізованих засобів.",
//       detailingSecondLi:
//         "Захист і реставрація шкіряних та тканинних сидінь, а також інших поверхонь.",
//       detailingThirdLi:
//         "Усунення неприємних запахів і дезінфекція для створення комфортної атмосфери.",

//       diagnosticFirstLi:
//         "Комп'ютерна діагностика електронних систем автомобіля.",
//       diagnosticSecondLi:
//         "Перевірка роботи двигуна, трансмісії та інших ключових систем.",
//       diagnosticThirdLi:
//         "Визначення можливих несправностей та рекомендації щодо їх усунення.",

//       electronicFirstLi:
//         "Ремонт та заміна електричних компонентів автомобіля (акумулятори, стартери, генератори).",
//       electronicSecondLi:
//         "Виправлення проблем з освітленням, проводкою та електронними системами.",
//       electronicThirdLi:
//         "Встановлення додаткових електронних пристроїв (сигналізацій, парктроніків, мультимедійних систем).",

//       repairFirstLi:
//         "Усі види ремонтних робіт по двигуну, трансмісії та ходовій частині.",
//       repairSecondLi:
//         "Замінa деталей та агрегатів (гальмівні системи, підвіска, зчеплення).",
//       repairThirdLi:
//         "Виправлення кузовних пошкоджень та лакофарбових покриттів.",
//       cardButtonText: "Детальніше",
//       // MODAL
//       signService: "Записатися на сервіс",
//       enterName: "Введіть ваше ім’я...",
//       enterPhone: "Введіть номер телефону",
//       selectCarMake: "Оберіть марку авто...",
//       selectCarModel: "Спочатку оберіть марку авто!",
//       servicesModalTitle: "Послуги:",
//       detailing: "Детейлінг",
//       diagnostics: "Діагностика",
//       electronics: "Автоелектрика",
//       repair: "Ремонт",
//       totalCost: "Загальна вартість від: €0.00",
//       acceptPrivacy: "Я приймаю",
//       privacyPolicy: "Політику конфіденційності",

//       clientsTitle: "Наші клієнти",
//       ourProjects: "Реалізовані проєкти",
//       ourPolishings: "Кількість полірувань",
//       ourCleaners: "Кількість хімчисток",
//       ourStudios: "Кількість студій",

//       sheduleTitle: "Графік роботи",
//       monday: "Пн 8:00 - 22:00",
//       tuesday: "Вт 8:00 - 22:00",
//       wednesday: "Ср 8:00 - 22:00",
//       thursday: "Чт 8:00 - 22:00",
//       friday: "Пт 8:00 - 22:00",
//       weekend: "Сб, Нд - за записом",

//       feedbackFormTitle: "Заповніть контактну форму!",
//       enterCarName: "Введіть назву вашого авто...",
//       feedbackFormButton: "Отримати консультацію",

//       worksTitle: "Наші роботи",

//       footerAddress: "Адреса",
//       footerNav: "Навігація",
//       footerSocials: "Ми у соцмережах",
//       footerPhone: "Телефон: +380 67 946 5060",
//       footerEmail: "E-mail: serviceauto@gmail.com",
//     },
//   };

//   function translatePage(lang) {
//     // Перевод текста
//     document.querySelectorAll("[data-i18n]").forEach((el) => {
//       const key = el.getAttribute("data-i18n");
//       el.textContent = translations[lang][key] || key;
//     });

//     // Перевод плейсхолдеров, только если поле пустое
//     document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
//       const key = el.getAttribute("data-i18n-placeholder");

//       // Изменяем плейсхолдер только если поле пустое
//       if (!el.value) {
//         el.setAttribute("placeholder", translations[lang][key] || key);
//       }
//     });
//   }

//   function handleLanguageChange() {
//     const lang = document.getElementById("lang_select").value;
//     translatePage(lang);
//   }

//   // Установить язык по умолчанию
//   const defaultLang = "en";
//   translatePage(defaultLang);

//   // Привязать обработчик к <select>
//   document
//     .getElementById("lang_select")
//     .addEventListener("change", handleLanguageChange);
// });
