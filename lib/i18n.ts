import type { Locale, LocalizedString } from "@/types"

export const locales: Locale[] = ["ru", "kz", "en"]

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  kz: "Қазақша",
  en: "English",
}

export const localeShort: Record<Locale, string> = {
  ru: "RU",
  kz: "KZ",
  en: "EN",
}

export const defaultLocale: Locale = "ru"

export function t(obj: LocalizedString, locale: Locale): string {
  return obj[locale] || obj.ru
}

export const ui: Record<string, LocalizedString> = {
  // Navigation
  "nav.home": { ru: "Главная", kz: "Басты бет", en: "Home" },
  "nav.catalog": { ru: "Каталог", kz: "Каталог", en: "Catalog" },
  "nav.about": { ru: "О компании", kz: "Компания туралы", en: "About" },
  "nav.contacts": { ru: "Контакты", kz: "Байланыс", en: "Contacts" },
  "nav.privacy": { ru: "Политика конфиденциальности", kz: "Құпиялылық саясаты", en: "Privacy Policy" },

  // Hero
  "hero.title": {
    ru: "Надёжный поставщик промышленных решений",
    kz: "Өнеркәсіптік шешімдердің сенімді жеткізушісі",
    en: "Reliable Supplier of Industrial Solutions",
  },
  "hero.subtitle": {
    ru: "Химия, металлы, оборудование — для горнодобывающей, металлургической и перерабатывающей промышленности",
    kz: "Химия, металдар, жабдықтар — тау-кен, металлургия және қайта өңдеу өнеркәсібі үшін",
    en: "Chemicals, metals, equipment — for mining, metallurgy and processing industries",
  },
  "hero.cta.catalog": { ru: "Перейти в каталог", kz: "Каталогқа өту", en: "Browse Catalog" },
  "hero.cta.contact": { ru: "Связаться с нами", kz: "Бізбен байланысу", en: "Contact Us" },

  // Advantages
  "advantages.title": { ru: "Наши преимущества", kz: "Біздің артықшылықтар", en: "Our Advantages" },
  "advantages.subtitle": {
    ru: "Более 10 лет на рынке промышленных поставок",
    kz: "Өнеркәсіптік жеткізілім нарығында 10 жылдан астам",
    en: "Over 10 years in the industrial supply market",
  },

  // Categories
  "categories.title": { ru: "Категории продукции", kz: "Өнім санаттары", en: "Product Categories" },
  "categories.subtitle": {
    ru: "Широкий ассортимент для вашего производства",
    kz: "Сіздің өндірісіңіз үшін кең ассортимент",
    en: "Wide range of products for your production",
  },

  // Steps
  "steps.title": { ru: "Как мы работаем", kz: "Біз қалай жұмыс істейміз", en: "How We Work" },
  "steps.subtitle": {
    ru: "Простой и прозрачный процесс сотрудничества",
    kz: "Қарапайым және ашық ынтымақтастық процесі",
    en: "Simple and transparent cooperation process",
  },

  // CTA
  "cta.title": {
    ru: "Готовы проработать продукцию любой сложности",
    kz: "Кез келген күрделіліктегі өнімді өңдеуге дайынбыз",
    en: "Ready to work on products of any complexity",
  },
  "cta.subtitle": {
    ru: "При предоставлении технических параметров",
    kz: "Техникалық параметрлерді ұсынған кезде",
    en: "Upon providing technical parameters",
  },
  "cta.button": { ru: "Оставить заявку", kz: "Өтінім қалдыру", en: "Submit Request" },

  // FAQ
  "faq.title": { ru: "Часто задаваемые вопросы", kz: "Жиі қойылатын сұрақтар", en: "FAQ" },

  // Catalog
  "catalog.title": { ru: "Каталог продукции", kz: "Өнім каталогы", en: "Product Catalog" },
  "catalog.search": { ru: "Поиск по названию...", kz: "Атауы бойынша іздеу...", en: "Search by name..." },
  "catalog.all": { ru: "Все категории", kz: "Барлық санаттар", en: "All categories" },
  "catalog.sort.name": { ru: "По названию", kz: "Атауы бойынша", en: "By name" },
  "catalog.sort.default": { ru: "По умолчанию", kz: "Әдепкі", en: "Default" },
  "catalog.notfound": { ru: "Товары не найдены", kz: "Тауарлар табылмады", en: "No products found" },
  "catalog.showing": { ru: "Показано", kz: "Көрсетілген", en: "Showing" },
  "catalog.of": { ru: "из", kz: "ішінен", en: "of" },
  "catalog.items": { ru: "товаров", kz: "тауар", en: "products" },
  "catalog.prev": { ru: "Назад", kz: "Артқа", en: "Previous" },
  "catalog.next": { ru: "Вперёд", kz: "Алға", en: "Next" },

  // Product
  "product.specs": { ru: "Характеристики", kz: "Сипаттамалар", en: "Specifications" },
  "product.related": { ru: "Похожие товары", kz: "Ұқсас тауарлар", en: "Related Products" },
  "product.request": { ru: "Оставить заявку", kz: "Өтінім қалдыру", en: "Submit Request" },
  "product.params": { ru: "Параметры для запроса", kz: "Сұрау параметрлері", en: "Request Parameters" },
  "product.back": { ru: "Назад в каталог", kz: "Каталогқа оралу", en: "Back to catalog" },

  // About
  "about.title": { ru: "О компании", kz: "Компания туралы", en: "About Company" },
  "about.description": {
    ru: "Мы — надёжный поставщик промышленной химии, металлов и оборудования для горнодобывающей, металлургической и перерабатывающей промышленности. Работаем напрямую с производителями и гарантируем качество продукции.",
    kz: "Біз — тау-кен, металлургия және қайта өңдеу өнеркәсібі үшін өнеркәсіптік химия, металдар мен жабдықтардың сенімді жеткізушісіміз. Тікелей өндірушілермен жұмыс істейміз және өнім сапасына кепілдік береміз.",
    en: "We are a reliable supplier of industrial chemicals, metals and equipment for mining, metallurgy and processing industries. We work directly with manufacturers and guarantee product quality.",
  },
  "about.mission.title": { ru: "Наша миссия", kz: "Біздің миссия", en: "Our Mission" },
  "about.mission.text": {
    ru: "Обеспечивать промышленные предприятия качественными материалами и оборудованием с высоким уровнем сервиса и технической поддержки.",
    kz: "Өнеркәсіптік кәсіпорындарды жоғары сервис пен техникалық қолдау деңгейімен сапалы материалдармен және жабдықтармен қамтамасыз ету.",
    en: "To provide industrial enterprises with high-quality materials and equipment with a high level of service and technical support.",
  },
  "about.values.title": { ru: "Наши ценности", kz: "Біздің құндылықтар", en: "Our Values" },
  "about.geography.title": { ru: "География поставок", kz: "Жеткізу географиясы", en: "Supply Geography" },
  "about.geography.text": {
    ru: "Казахстан, Россия, страны СНГ и международные поставки",
    kz: "Қазақстан, Ресей, ТМД елдері және халықаралық жеткізілімдер",
    en: "Kazakhstan, Russia, CIS countries and international deliveries",
  },

  // Contacts
  "contacts.title": { ru: "Свяжитесь с нами", kz: "Бізбен байланысыңыз", en: "Contact Us" },
  "contacts.subtitle": {
    ru: "Готовы ответить на любые вопросы по продукции и поставкам",
    kz: "Өнім мен жеткізілім бойынша кез келген сұрақтарға жауап беруге дайынбыз",
    en: "Ready to answer any questions about products and deliveries",
  },
  "contacts.form.name": { ru: "Ваше имя", kz: "Сіздің атыңыз", en: "Your Name" },
  "contacts.form.email": { ru: "Email", kz: "Email", en: "Email" },
  "contacts.form.phone": { ru: "Телефон", kz: "Телефон", en: "Phone" },
  "contacts.form.message": { ru: "Сообщение", kz: "Хабарлама", en: "Message" },
  "contacts.form.file": { ru: "Прикрепить файл", kz: "Файл тіркеу", en: "Attach file" },
  "contacts.form.submit": { ru: "Отправить заявку", kz: "Өтінім жіберу", en: "Submit Request" },
  "contacts.form.sending": { ru: "Отправка...", kz: "Жіберілуде...", en: "Sending..." },
  "contacts.form.success": { ru: "Заявка успешно отправлена!", kz: "Өтінім сәтті жіберілді!", en: "Request sent successfully!" },
  "contacts.form.error": { ru: "Ошибка при отправке", kz: "Жіберу кезінде қате", en: "Error sending request" },
  "contacts.info.phone": { ru: "Телефон", kz: "Телефон", en: "Phone" },
  "contacts.info.email": { ru: "Электронная почта", kz: "Электронды пошта", en: "Email" },
  "contacts.info.address": { ru: "Адрес", kz: "Мекенжай", en: "Address" },

  // Footer
  "footer.rights": { ru: "Все права защищены", kz: "Барлық құқықтар қорғалған", en: "All rights reserved" },
  "footer.navigation": { ru: "Навигация", kz: "Навигация", en: "Navigation" },
  "footer.social": { ru: "Мессенджеры", kz: "Мессенджерлер", en: "Messengers" },

  // Privacy
  "privacy.title": { ru: "Политика конфиденциальности", kz: "Құпиялылық саясаты", en: "Privacy Policy" },

  // Common
  "common.learnmore": { ru: "Подробнее", kz: "Толығырақ", en: "Learn more" },
  "common.viewall": { ru: "Смотреть все", kz: "Барлығын көру", en: "View all" },
  "common.company": { ru: "Heat Energy Capital", kz: "Heat Energy Capital", en: "Heat Energy Capital" },
}
