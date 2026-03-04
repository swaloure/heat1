import type { Advantage, Step, FAQItem, ContactInfo } from "@/types"

export const advantages: Advantage[] = [
  {
    icon: "ShieldCheck",
    title: { ru: "Гарантия качества", kz: "Сапа кепілдігі", en: "Quality Guarantee" },
    description: {
      ru: "Вся продукция проходит строгий контроль качества и сопровождается необходимой документацией",
      kz: "Барлық өнім қатаң сапа бақылауынан өтеді және қажетті құжаттамамен қамтамасыз етіледі",
      en: "All products undergo strict quality control and are accompanied by necessary documentation",
    },
  },
  {
    icon: "Truck",
    title: { ru: "Надёжная логистика", kz: "Сенімді логистика", en: "Reliable Logistics" },
    description: {
      ru: "Собственная логистическая сеть обеспечивает своевременную доставку в любую точку",
      kz: "Меншікті логистикалық желі кез келген нүктеге уақтылы жеткізуді қамтамасыз етеді",
      en: "Our own logistics network ensures timely delivery to any location",
    },
  },
  {
    icon: "Users",
    title: { ru: "Техническая поддержка", kz: "Техникалық қолдау", en: "Technical Support" },
    description: {
      ru: "Команда экспертов поможет подобрать оптимальные решения для ваших задач",
      kz: "Сарапшылар тобы сіздің міндеттеріңіз үшін оңтайлы шешімдерді таңдауға көмектеседі",
      en: "Our team of experts will help select optimal solutions for your tasks",
    },
  },
  {
    icon: "Globe",
    title: { ru: "Международные поставки", kz: "Халықаралық жеткізілім", en: "International Deliveries" },
    description: {
      ru: "Работаем с ведущими мировыми производителями и осуществляем поставки из Европы, Азии и СНГ",
      kz: "Жетекші әлемдік өндірушілермен жұмыс істейміз және Еуропа, Азия мен ТМД елдерінен жеткізілім жасаймыз",
      en: "We work with leading global manufacturers and deliver from Europe, Asia and CIS",
    },
  },
]

export const steps: Step[] = [
  {
    number: 1,
    title: { ru: "Заявка", kz: "Өтінім", en: "Request" },
    description: {
      ru: "Отправьте запрос с техническими параметрами или позвоните нам",
      kz: "Техникалық параметрлерімен сұрау жіберіңіз немесе бізге қоңырау шалыңыз",
      en: "Send a request with technical parameters or call us",
    },
  },
  {
    number: 2,
    title: { ru: "Подбор", kz: "Таңдау", en: "Selection" },
    description: {
      ru: "Наши специалисты подберут оптимальную продукцию и подготовят коммерческое предложение",
      kz: "Біздің мамандар оңтайлы өнімді таңдап, коммерциялық ұсыныс дайындайды",
      en: "Our specialists will select the optimal products and prepare a commercial offer",
    },
  },
  {
    number: 3,
    title: { ru: "Договор", kz: "Шарт", en: "Contract" },
    description: {
      ru: "Заключение договора с фиксацией цен, сроков и условий поставки",
      kz: "Баға, мерзім және жеткізу шарттарын бекіту арқылы шарт жасасу",
      en: "Concluding a contract with fixed prices, terms and delivery conditions",
    },
  },
  {
    number: 4,
    title: { ru: "Доставка", kz: "Жеткізу", en: "Delivery" },
    description: {
      ru: "Организация доставки с полным комплектом сопроводительной документации",
      kz: "Ілеспе құжаттаманың толық жиынтығымен жеткізуді ұйымдастыру",
      en: "Organizing delivery with a complete set of accompanying documentation",
    },
  },
]

export const faqItems: FAQItem[] = [
  {
    question: {
      ru: "Какой минимальный объём заказа?",
      kz: "Ең аз тапсырыс көлемі қандай?",
      en: "What is the minimum order volume?",
    },
    answer: {
      ru: "Минимальный объём зависит от типа продукции. Мы работаем как с крупными промышленными предприятиями, так и с небольшими компаниями. Свяжитесь с нами для уточнения.",
      kz: "Ең аз көлем өнім түріне байланысты. Біз ірі өнеркәсіптік кәсіпорындармен де, шағын компаниялармен де жұмыс істейміз. Нақтылау үшін бізбен байланысыңыз.",
      en: "The minimum volume depends on the product type. We work with both large industrial enterprises and small companies. Contact us for details.",
    },
  },
  {
    question: {
      ru: "Осуществляете ли вы международные поставки?",
      kz: "Сіздер халықаралық жеткізілім жасайсыздар ма?",
      en: "Do you make international deliveries?",
    },
    answer: {
      ru: "Да, мы осуществляем поставки в Казахстан, Россию, страны СНГ и другие регионы. Имеем опыт работы с международной логистикой и таможенным оформлением.",
      kz: "Иә, біз Қазақстанға, Ресейге, ТМД елдеріне және басқа аймақтарға жеткізілім жасаймыз. Халықаралық логистика және кедендік ресімдеу бойынша тәжірибеміз бар.",
      en: "Yes, we deliver to Kazakhstan, Russia, CIS countries and other regions. We have experience with international logistics and customs clearance.",
    },
  },
  {
    question: {
      ru: "Предоставляете ли вы сертификаты качества?",
      kz: "Сапа сертификаттарын бересіздер ме?",
      en: "Do you provide quality certificates?",
    },
    answer: {
      ru: "Да, вся продукция сопровождается сертификатами качества, паспортами безопасности и другой необходимой документацией.",
      kz: "Иә, барлық өнім сапа сертификаттарымен, қауіпсіздік паспорттарымен және басқа қажетті құжаттамамен қамтамасыз етіледі.",
      en: "Yes, all products come with quality certificates, safety data sheets and other necessary documentation.",
    },
  },
  {
    question: {
      ru: "Можно ли заказать продукцию по индивидуальным параметрам?",
      kz: "Жеке параметрлер бойынша өнімге тапсырыс беруге бола ма?",
      en: "Can I order products with custom parameters?",
    },
    answer: {
      ru: "Да, мы готовы проработать продукцию любой сложности при предоставлении технических параметров. Наши специалисты помогут подобрать оптимальное решение.",
      kz: "Иә, біз техникалық параметрлерді ұсынған кезде кез келген күрделіліктегі өнімді өңдеуге дайынбыз. Біздің мамандар оңтайлы шешімді таңдауға көмектеседі.",
      en: "Yes, we are ready to work on products of any complexity upon providing technical parameters. Our specialists will help select the optimal solution.",
    },
  },
  {
    question: {
      ru: "Какие условия оплаты вы предлагаете?",
      kz: "Қандай төлем шарттарын ұсынасыздар?",
      en: "What payment terms do you offer?",
    },
    answer: {
      ru: "Мы предлагаем гибкие условия оплаты: предоплата, частичная предоплата, отсрочка платежа для постоянных клиентов. Условия обсуждаются индивидуально.",
      kz: "Біз икемді төлем шарттарын ұсынамыз: алдын ала төлем, ішінара алдын ала төлем, тұрақты клиенттер үшін төлемді кейінге қалдыру. Шарттар жеке талқыланады.",
      en: "We offer flexible payment terms: prepayment, partial prepayment, deferred payment for regular clients. Terms are discussed individually.",
    },
  },
]

export const contactInfo: ContactInfo = {
  phone: "+7 (777) 123-45-67",
  email: "info@heatenergycapital.kz",
  address: {
    ru: "Казахстан, г. Алматы, ул. Промышленная, 42",
    kz: "Қазақстан, Алматы қ., Өнеркәсіптік к-сі, 42",
    en: "42 Promyshlennaya St., Almaty, Kazakhstan",
  },
  whatsapp: "+77771234567",
  telegram: "heatenergycapital",
}
