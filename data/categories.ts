import type { Category } from "@/types"

export const categories: Category[] = [
  {
    id: "chemistry",
    slug: "chemistry",
    name: { ru: "Химия", kz: "Химия", en: "Chemicals" },
    description: {
      ru: "Промышленная химия для горнодобывающей, металлургической и перерабатывающей отраслей",
      kz: "Тау-кен, металлургия және қайта өңдеу салалары үшін өнеркәсіптік химия",
      en: "Industrial chemicals for mining, metallurgy and processing industries",
    },
    icon: "FlaskConical",
  },
  {
    id: "metals",
    slug: "metals",
    name: { ru: "Металлы и сплавы", kz: "Металдар мен қорытпалар", en: "Metals & Alloys" },
    description: {
      ru: "Металлопрокат, ферросплавы, специальные металлы и сплавы",
      kz: "Металл прокаты, ферроқорытпалар, арнайы металдар мен қорытпалар",
      en: "Rolled metal, ferroalloys, special metals and alloys",
    },
    icon: "Layers",
  },
  {
    id: "equipment",
    slug: "equipment",
    name: { ru: "Оборудование и комплектующие", kz: "Жабдықтар мен бөлшектер", en: "Equipment & Parts" },
    description: {
      ru: "Горно-шахтное и промышленное оборудование, запчасти и комплектующие",
      kz: "Тау-кен және өнеркәсіптік жабдықтар, қосалқы бөлшектер",
      en: "Mining and industrial equipment, spare parts and components",
    },
    icon: "Cog",
  },
]
