"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { t, ui } from "@/lib/i18n"

const sections = {
  ru: [
    {
      title: "1. Общие положения",
      text: "Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта Heat Energy Capital. Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные.",
    },
    {
      title: "2. Сбор информации",
      text: "Мы собираем информацию, которую вы добровольно предоставляете при заполнении форм на сайте: имя, email, телефон, содержание сообщения. Также автоматически собирается техническая информация о посещении сайта.",
    },
    {
      title: "3. Использование информации",
      text: "Собранная информация используется для: обработки ваших заявок и запросов, связи с вами по вопросам продукции и услуг, улучшения качества обслуживания, аналитики посещаемости сайта.",
    },
    {
      title: "4. Защита данных",
      text: "Мы принимаем необходимые организационные и технические меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.",
    },
    {
      title: "5. Передача данных третьим лицам",
      text: "Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан.",
    },
    {
      title: "6. Контактная информация",
      text: "По вопросам обработки персональных данных вы можете связаться с нами по email: info@heatenergycapital.kz или по телефону: +7 (777) 123-45-67.",
    },
  ],
  kz: [
    {
      title: "1. Жалпы ережелер",
      text: "Осы Құпиялылық саясаты Heat Energy Capital сайты пайдаланушыларының дербес деректерін өңдеу және қорғау тәртібін анықтайды. Біз сіздің құпиялылығыңызды құрметтейміз және дербес деректеріңізді қорғауға міндеттенеміз.",
    },
    {
      title: "2. Ақпарат жинау",
      text: "Біз сіз сайттағы формаларды толтыру кезінде ерікті түрде ұсынатын ақпаратты жинаймыз: аты, email, телефон, хабарлама мазмұны. Сондай-ақ сайтқа кіру туралы техникалық ақпарат автоматты түрде жиналады.",
    },
    {
      title: "3. Ақпаратты пайдалану",
      text: "Жиналған ақпарат: сіздің өтініштеріңіз бен сұрауларыңызды өңдеу, өнімдер мен қызметтер бойынша сізбен байланысу, қызмет көрсету сапасын жақсарту, сайт қвідвідуалылығын талдау үшін қолданылады.",
    },
    {
      title: "4. Деректерді қорғау",
      text: "Біз сіздің дербес деректеріңізді рұқсатсыз кіруден, өзгертуден, ашудан немесе жоюдан қорғау үшін қажетті ұйымдастырушылық және техникалық шараларды қолданамыз.",
    },
    {
      title: "5. Деректерді үшінші тараптарға беру",
      text: "Біз сіздің дербес деректеріңізді Қазақстан Республикасының заңнамасында көзделген жағдайларды қоспағанда, үшінші тараптарға бермейміз.",
    },
    {
      title: "6. Байланыс ақпараты",
      text: "Дербес деректерді өңдеу мәселелері бойынша бізбен email арқылы байланысуға болады: info@heatenergycapital.kz немесе телефон арқылы: +7 (777) 123-45-67.",
    },
  ],
  en: [
    {
      title: "1. General Provisions",
      text: "This Privacy Policy determines the procedure for processing and protecting personal data of Heat Energy Capital website users. We respect your privacy and commit to protecting your personal data.",
    },
    {
      title: "2. Information Collection",
      text: "We collect information that you voluntarily provide when filling out forms on the website: name, email, phone, message content. Technical information about website visits is also automatically collected.",
    },
    {
      title: "3. Use of Information",
      text: "Collected information is used for: processing your requests and inquiries, contacting you about products and services, improving service quality, website traffic analytics.",
    },
    {
      title: "4. Data Protection",
      text: "We take necessary organizational and technical measures to protect your personal data from unauthorized access, modification, disclosure or destruction.",
    },
    {
      title: "5. Data Transfer to Third Parties",
      text: "We do not transfer your personal data to third parties, except as required by the legislation of the Republic of Kazakhstan.",
    },
    {
      title: "6. Contact Information",
      text: "For questions regarding personal data processing, you can contact us by email: info@heatenergycapital.kz or by phone: +7 (777) 123-45-67.",
    },
  ],
}

export default function PrivacyPolicyPage() {
  const { locale } = useLocale()
  const content = sections[locale]

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="border-b border-border bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t(ui["privacy.title"], locale)}
          </motion.h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex flex-col gap-8">
          {content.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
