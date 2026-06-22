export type Language = "en" | "ru" | "uz" | "es"

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.screenshots": "Screenshots",
    "nav.faq": "FAQ",
    
    // Hero
    "hero.badge": "New: Version 1.21.4 supported",
    "hero.heading": "The fastest way to play Minecraft",
    "hero.highlight": "the ultimate way",
    "hero.subtitle": "VoxelCraft Launcher brings all versions, mods, and servers together in one place. Click once — start playing.",
    "hero.download": "Download for Windows",
    "hero.other": "Other platforms",
    "hero.free": "Free and secure",
    "hero.preview": "VoxelCraft Launcher interface",
    
    // Features
    "features.label": "Features",
    "features.heading": "Everything you need to play",
    "features.subtitle": "One launcher, endless possibilities.",
    "features.f1": "All versions",
    "features.f1desc": "From the oldest release versions to the latest snapshots — install everything in seconds.",
    "features.f2": "Mod management",
    "features.f2desc": "Automatically install Forge, Fabric, and Quilt. Download mod packs with one click.",
    "features.f3": "Fast launch",
    "features.f3desc": "Optimized Java settings make your game load in seconds.",
    "features.f4": "Server manager",
    "features.f4desc": "Save your favorite servers, monitor status, and connect directly.",
    "features.f5": "Auto updates",
    "features.f5desc": "Launcher and game files update in the background — no manual work needed.",
    "features.f6": "Secure accounts",
    "features.f6desc": "Official Microsoft authentication. Your data is never shared with third parties.",
    
    // Download
    "download.label": "Download",
    "download.heading": "Choose your platform",
    "download.subtitle": "Version 3.2.1 · Released June 18, 2026 · Free",
    "download.recommended": "Recommended",
    "download.windows": "Windows 10 / 11 · 64-bit",
    "download.macos": "macOS 12+ · Intel & Apple Silicon",
    "download.linux": "Debian · Ubuntu · Fedora",
    "download.btn": "Download",
    "download.older": "Older versions and source code are available on the",
    "download.github": "GitHub releases page",
    
    // FAQ
    "faq.label": "FAQ",
    "faq.heading": "Common questions",
    "faq.q1": "Is VoxelCraft Launcher free?",
    "faq.a1": "Yes! VoxelCraft Launcher is completely free and will always be free. No ads, no premium features.",
    "faq.q2": "Is it safe?",
    "faq.a2": "Absolutely. We use official Microsoft authentication and never store your password. Your account is always secure.",
    "faq.q3": "Can I use mods?",
    "faq.a3": "Yes! VoxelCraft fully supports Forge, Fabric, and Quilt. Download and manage mods easily.",
    "faq.q4": "Does it work on Linux?",
    "faq.a4": "Yes. We provide AppImage for Linux. Works on Debian, Ubuntu, Fedora, and others.",
    "faq.q5": "How do I add a server?",
    "faq.a5": "Click 'Add Server', enter the IP address or domain, and you're done. The launcher remembers all your favorites.",
    "faq.q6": "Will my settings transfer from another launcher?",
    "faq.a6": "We can help you migrate. Check our documentation for step-by-step migration guides.",
    
    // Footer
    "footer.about": "Fast, open, secure Minecraft launcher",
    "footer.links": "Links",
    "footer.docs": "Documentation",
    "footer.github": "GitHub",
    "footer.discord": "Discord",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.copyright": "© 2026 VoxelCraft. All rights reserved.",
  },
  
  ru: {
    // Navigation
    "nav.features": "Возможности",
    "nav.screenshots": "Скриншоты",
    "nav.faq": "FAQ",
    
    // Hero
    "hero.badge": "Новое: поддержка версии 1.21.4",
    "hero.heading": "Самый быстрый способ играть в Minecraft",
    "hero.highlight": "быстрее всех",
    "hero.subtitle": "VoxelCraft Launcher объединяет все версии, моды и серверы в одном месте. Нажмите один раз — начните играть.",
    "hero.download": "Скачать для Windows",
    "hero.other": "Другие платформы",
    "hero.free": "Бесплатно и безопасно",
    "hero.preview": "Интерфейс VoxelCraft Launcher",
    
    // Features
    "features.label": "Возможности",
    "features.heading": "Всё необходимое для игры",
    "features.subtitle": "Один лаунчер, бесконечные возможности.",
    "features.f1": "Все версии",
    "features.f1desc": "От самых старых до новейших снимков — установите всё за секунды.",
    "features.f2": "Управление модами",
    "features.f2desc": "Автоматическая установка Forge, Fabric и Quilt. Скачивайте модпаки одним кликом.",
    "features.f3": "Быстрый запуск",
    "features.f3desc": "Оптимизированные параметры Java запускают игру за секунды.",
    "features.f4": "Менеджер серверов",
    "features.f4desc": "Сохраняйте любимые серверы, отслеживайте статус и подключайтесь напрямую.",
    "features.f5": "Автообновления",
    "features.f5desc": "Лаунчер и файлы игры обновляются в фоне — не нужна ручная работа.",
    "features.f6": "Безопасные аккаунты",
    "features.f6desc": "Официальная аутентификация Microsoft. Ваши данные никогда не передаются третьим лицам.",
    
    // Download
    "download.label": "Скачать",
    "download.heading": "Выберите вашу платформу",
    "download.subtitle": "Версия 3.2.1 · Выпущено 18 июня 2026 · Бесплатно",
    "download.recommended": "Рекомендуется",
    "download.windows": "Windows 10 / 11 · 64-bit",
    "download.macos": "macOS 12+ · Intel & Apple Silicon",
    "download.linux": "Debian · Ubuntu · Fedora",
    "download.btn": "Скачать",
    "download.older": "Старые версии и исходный код доступны на",
    "download.github": "странице релизов GitHub",
    
    // FAQ
    "faq.label": "Часто задаваемые вопросы",
    "faq.heading": "Часто задаваемые вопросы",
    "faq.q1": "VoxelCraft Launcher бесплатный?",
    "faq.a1": "Да! VoxelCraft Launcher полностью бесплатный и будет всегда бесплатным. Нет реклам, нет премиума.",
    "faq.q2": "Это безопасно?",
    "faq.a2": "Абсолютно. Мы используем официальную аутентификацию Microsoft и никогда не храним ваш пароль. Ваш аккаунт всегда защищён.",
    "faq.q3": "Можно ли использовать моды?",
    "faq.a3": "Да! VoxelCraft полностью поддерживает Forge, Fabric и Quilt. Легко скачивайте и управляйте модами.",
    "faq.q4": "Работает ли на Linux?",
    "faq.a4": "Да. Мы предоставляем AppImage для Linux. Работает на Debian, Ubuntu, Fedora и других.",
    "faq.q5": "Как добавить сервер?",
    "faq.a5": "Нажмите 'Добавить сервер', введите IP-адрес или домен, готово. Лаунчер помнит все ваши избранные.",
    "faq.q6": "Перенесятся ли мои настройки из другого лаунчера?",
    "faq.a6": "Мы можем помочь вам перенести. Проверьте нашу документацию для пошаговых инструкций.",
    
    // Footer
    "footer.about": "Быстрый, открытый, безопасный лаунчер Minecraft",
    "footer.links": "Ссылки",
    "footer.docs": "Документация",
    "footer.github": "GitHub",
    "footer.discord": "Discord",
    "footer.legal": "Правовая информация",
    "footer.privacy": "Конфиденциальность",
    "footer.terms": "Условия",
    "footer.copyright": "© 2026 VoxelCraft. Все права защищены.",
  },
  
  uz: {
    // Navigation
    "nav.features": "Imkoniyatlar",
    "nav.screenshots": "Skrinshotlar",
    "nav.faq": "Savollar",
    
    // Hero
    "hero.badge": "Yangi: 1.21.4 versiyasi qo'llab-quvvatlanadi",
    "hero.heading": "Minecraft'ni o'ynashning eng tez yo'li",
    "hero.highlight": "eng tez yo'li",
    "hero.subtitle": "VoxelCraft Launcher barcha versiyalar, modlar va serverlarni bitta joyga jamlaydi. Bir marta bosing — o'ynashni boshlang.",
    "hero.download": "Windows uchun yuklab olish",
    "hero.other": "Boshqa platformalar",
    "hero.free": "Bepul va xavfsiz",
    "hero.preview": "VoxelCraft Launcher interfeysi",
    
    // Features
    "features.label": "Imkoniyatlar",
    "features.heading": "O'yin uchun kerak bo'lgan hamma narsa",
    "features.subtitle": "Bitta launcher, cheksiz imkoniyatlar.",
    "features.f1": "Barcha versiyalar",
    "features.f1desc": "Eng eski reliz versiyalardan to so'nggi snapshotlargacha — hammasini bir necha soniyada o'rnating.",
    "features.f2": "Modlarni boshqarish",
    "features.f2desc": "Forge, Fabric va Quilt'ni avtomatik o'rnating. Modpaklarni bir bosishda yuklab oling.",
    "features.f3": "Tezkor ishga tushirish",
    "features.f3desc": "Optimallashtirilgan Java sozlamalari bilan o'yin sekundlar ichida yuklanadi.",
    "features.f4": "Server menejeri",
    "features.f4desc": "Sevimli serverlaringizni saqlang, holatini kuzating va to'g'ridan-to'g'ri ulaning.",
    "features.f5": "Avtomatik yangilanish",
    "features.f5desc": "Launcher o'zini va o'yin fayllarini fonda yangilab turadi — qo'l bilan ishlash shart emas.",
    "features.f6": "Xavfsiz hisob",
    "features.f6desc": "Rasmiy Microsoft autentifikatsiyasi. Ma'lumotlaringiz hech qachon uchinchi tomonga uzatilmaydi.",
    
    // Download
    "download.label": "Yuklab olish",
    "download.heading": "Platformangizni tanlang",
    "download.subtitle": "Versiya 3.2.1 · 2026-yil 18-iyunda chiqarilgan · Bepul",
    "download.recommended": "Tavsiya etiladi",
    "download.windows": "Windows 10 / 11 · 64-bit",
    "download.macos": "macOS 12+ · Intel & Apple Silicon",
    "download.linux": "Debian · Ubuntu · Fedora",
    "download.btn": "Yuklab olish",
    "download.older": "Eski versiyalar va manba kodi",
    "download.github": "GitHub relizlar sahifasida",
    
    // FAQ
    "faq.label": "Savollar",
    "faq.heading": "Tez-tez soraladigan savollar",
    "faq.q1": "VoxelCraft Launcher bepulmi?",
    "faq.a1": "Ha! VoxelCraft Launcher to'liq bepul va doim bepul bo'ladi. Reklama yo'q, premium yo'q.",
    "faq.q2": "Bu xavfsizmi?",
    "faq.a2": "Albatta. Biz rasmiy Microsoft autentifikatsiyasidan foydalanamiz va hech qachon parolingizni saqlamaymiz. Hisobingiz doim himoyalangan.",
    "faq.q3": "Modlardan foydalana olamanmi?",
    "faq.a3": "Ha! VoxelCraft to'liq Forge, Fabric va Quilt'ni qo'llab-quvvatlaydi. Modlarni oson yuklab oling va boshqaring.",
    "faq.q4": "Linux'da ishlaydi?",
    "faq.a4": "Ha. Biz Linux uchun AppImage taqdim etamiz. Debian, Ubuntu, Fedora va boshqalarda ishlaydi.",
    "faq.q5": "Serverni qanday qo'shaman?",
    "faq.a5": "'Serverni qo'sh'ni bosing, IP manzilni yoki domenni kiriting, tayyor. Launcher barcha sevimli serverlaringizni eslab qoladi.",
    "faq.q6": "Boshqa launcherdagi sozlamalarim o'tkaziladi?",
    "faq.a6": "Biz migratsionga yordam beramiz. Qo'llanmada bosqichma-bosqich ko'rsatmalarni tekshiring.",
    
    // Footer
    "footer.about": "Tez, ochiq, xavfsiz Minecraft launcher",
    "footer.links": "Havolalar",
    "footer.docs": "Hujjatlar",
    "footer.github": "GitHub",
    "footer.discord": "Discord",
    "footer.legal": "Huquqiy ma'lumot",
    "footer.privacy": "Shaxsiylik",
    "footer.terms": "Shartlar",
    "footer.copyright": "© 2026 VoxelCraft. Barcha huquqlar himoyalangan.",
  },
  
  es: {
    // Navigation
    "nav.features": "Características",
    "nav.screenshots": "Capturas",
    "nav.faq": "Preguntas frecuentes",
    
    // Hero
    "hero.badge": "Nuevo: Se admite la versión 1.21.4",
    "hero.heading": "La forma más rápida de jugar Minecraft",
    "hero.highlight": "la forma más rápida",
    "hero.subtitle": "VoxelCraft Launcher reúne todas las versiones, mods y servidores en un mismo lugar. Haz clic una vez — comienza a jugar.",
    "hero.download": "Descargar para Windows",
    "hero.other": "Otras plataformas",
    "hero.free": "Gratis y seguro",
    "hero.preview": "Interfaz de VoxelCraft Launcher",
    
    // Features
    "features.label": "Características",
    "features.heading": "Todo lo que necesitas para jugar",
    "features.subtitle": "Un lanzador, posibilidades infinitas.",
    "features.f1": "Todas las versiones",
    "features.f1desc": "Desde las versiones de lanzamiento más antiguas hasta las instantáneas más nuevas — instala todo en segundos.",
    "features.f2": "Gestión de mods",
    "features.f2desc": "Instala automáticamente Forge, Fabric y Quilt. Descarga modpacks con un clic.",
    "features.f3": "Inicio rápido",
    "features.f3desc": "Los ajustes Java optimizados hacen que tu juego se cargue en segundos.",
    "features.f4": "Gestor de servidores",
    "features.f4desc": "Guarda tus servidores favoritos, monitorea el estado y conecta directamente.",
    "features.f5": "Actualizaciones automáticas",
    "features.f5desc": "El lanzador y los archivos del juego se actualizan en segundo plano — no se requiere trabajo manual.",
    "features.f6": "Cuentas seguras",
    "features.f6desc": "Autenticación oficial de Microsoft. Tus datos nunca se comparten con terceros.",
    
    // Download
    "download.label": "Descargar",
    "download.heading": "Elige tu plataforma",
    "download.subtitle": "Versión 3.2.1 · Lanzado el 18 de junio de 2026 · Gratis",
    "download.recommended": "Recomendado",
    "download.windows": "Windows 10 / 11 · 64-bit",
    "download.macos": "macOS 12+ · Intel & Apple Silicon",
    "download.linux": "Debian · Ubuntu · Fedora",
    "download.btn": "Descargar",
    "download.older": "Las versiones anteriores y el código fuente están disponibles en la",
    "download.github": "página de lanzamientos de GitHub",
    
    // FAQ
    "faq.label": "Preguntas frecuentes",
    "faq.heading": "Preguntas frecuentes",
    "faq.q1": "¿VoxelCraft Launcher es gratis?",
    "faq.a1": "¡Sí! VoxelCraft Launcher es completamente gratis y siempre lo será. Sin anuncios, sin características premium.",
    "faq.q2": "¿Es seguro?",
    "faq.a2": "Absolutamente. Usamos autenticación oficial de Microsoft y nunca almacenamos tu contraseña. Tu cuenta siempre está segura.",
    "faq.q3": "¿Puedo usar mods?",
    "faq.a3": "¡Sí! VoxelCraft es totalmente compatible con Forge, Fabric y Quilt. Descarga y gestiona mods fácilmente.",
    "faq.q4": "¿Funciona en Linux?",
    "faq.a4": "Sí. Proporcionamos AppImage para Linux. Funciona en Debian, Ubuntu, Fedora y otros.",
    "faq.q5": "¿Cómo agrego un servidor?",
    "faq.a5": "Haz clic en 'Agregar servidor', ingresa la dirección IP o el dominio, listo. El lanzador recuerda todos tus favoritos.",
    "faq.q6": "¿Se transferirán mis configuraciones desde otro lanzador?",
    "faq.a6": "Podemos ayudarte a migrar. Consulta nuestra documentación para guías paso a paso.",
    
    // Footer
    "footer.about": "Lanzador rápido, abierto y seguro de Minecraft",
    "footer.links": "Enlaces",
    "footer.docs": "Documentación",
    "footer.github": "GitHub",
    "footer.discord": "Discord",
    "footer.legal": "Información legal",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.copyright": "© 2026 VoxelCraft. Todos los derechos reservados.",
  },
}

export function getTranslation(lang: Language, key: string): string {
  return translations[lang][key] || translations.en[key] || key
}
