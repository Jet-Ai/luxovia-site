const WHATSAPP_PHONE = '421908375787';
const BRATISLAVA = { lat: 48.1486, lon: 17.1077 };
const SERVICE_RADIUS_KM = 300;

const translations = {
  en: {
    navFleet: 'Fleet', navServices: 'Services', navAirports: 'Airport Transfers', navBusiness: 'Business Chauffeur', navCorporate: 'Corporate', navFaq: 'FAQ', navContact: 'Contact', bookNow: 'Book now',
    heroTitle: 'Premium Chauffeur & Airport Transfers Across Europe',
    heroCopy: 'Discreet VIP airport transfers, executive chauffeur service and long-distance premium rides from Bratislava to Vienna, Budapest, Prague and beyond.',
    proofSupport: 'Flight tracking & support', proofDiscreetTitle: 'Discreet', proofDiscreet: 'Professional chauffeurs', proofFixedTitle: 'Clear', proofFixed: 'Confirmed price before travel',
    bookingKicker: 'Private booking', bookingTitle: 'Book your ride', responseTime: 'Fast confirmation',
    pickup: 'Pickup location', destination: 'Destination', pickupPlaceholder: 'Airport, hotel or address', destinationPlaceholder: 'City, airport or address',
    radiusNote: 'Suggestions are limited to approximately 300 km from Bratislava centre.', date: 'Date', time: 'Time', passengers: 'Passengers', luggage: 'Luggage',
    vehicle: 'Vehicle class', vehicleBusiness: 'Business Class — E-Class, up to 3', vehicleFirst: 'First Class — S-Class, up to 3', vehicleVan: 'Business Van — V-Class, up to 7',
    name: 'Full name', namePlaceholder: 'Your full name', phone: 'Phone / WhatsApp', phonePlaceholder: '+421...', returnTrip: 'Return journey', airportPickup: 'Airport pickup',
    flight: 'Flight number', flightPlaceholder: 'e.g. OS 301', notes: 'Additional information', notesPlaceholder: 'Child seat, stopovers...', reviewBooking: 'Review booking',
    privacy: 'No payment is required now. We confirm availability and price first.', requiredError: 'Please complete all required fields.', routeError: 'Pickup and destination must be different.',
    reviewKicker: 'Final check', reviewTitle: 'Review your journey', reviewNotice: 'Luxovia will confirm availability and the final price before payment.', editBooking: 'Edit booking', sendWhatsApp: 'Send via WhatsApp',
    trustBased: 'Bratislava based', trustAirport: 'Vienna Airport specialists', trustLanguages: 'Multilingual chauffeurs', trustAlways: '24/7 availability', trustDiscreet: 'Discreet service',
    routesKicker: 'Popular airport routes', routesTitle: 'Clear examples for premium transfers', routesCopy: 'Every journey includes a professional chauffeur, clean premium vehicle and live communication.',
    fleetKicker: 'Luxury fleet', fleetTitle: 'Premium vehicles for every executive transfer', viewFleet: 'View full fleet', vClassCopy: 'Up to 7 passengers with generous luggage space for airport and group transfers.', sedanTitle: 'Luxury Sedan', sedanCopy: 'Up to 3 passengers with executive rear comfort and first-class ride quality.',
    servicesKicker: 'Core services', servicesTitle: 'Built for business travelers, hotels and private aviation',
    serviceAirportTitle: 'VIP airport transfers', serviceAirportCopy: 'Flight tracking, meet & greet and direct airport transfers across Central Europe.',
    serviceBusinessTitle: 'Business chauffeur', serviceBusinessCopy: 'Hourly service for meetings, delegations, roadshows and confidential appointments.',
    serviceAviationTitle: 'Private aviation', serviceAviationCopy: 'Discreet FBO transfer coordination for private jet passengers and crews.',
    serviceHotelTitle: 'Hotel & event transfers', serviceHotelCopy: 'Reliable premium transport for hotels, conferences, weddings and VIP guests.',
    serviceCorporateTitle: 'Corporate transportation', serviceCorporateCopy: 'Priority availability, centralized booking and monthly invoicing.',
    serviceLongTitle: 'Long-distance EU rides', serviceLongCopy: 'Comfortable door-to-door travel across Slovakia and neighboring countries.',
    ctaTitle: 'Your journey, handled personally', ctaCopy: 'Book online or speak directly with Luxovia for a tailored transfer.', startBooking: 'Start booking', callNow: 'Call now',
    footerCopy: 'Premium chauffeur and airport transfers from Bratislava across Europe.', footerRoutes: 'Routes', footerCompany: 'Company', about: 'About us', corporateAccounts: 'Corporate accounts',
    detailDate: 'Date', detailTime: 'Time', detailPassengers: 'Passengers', detailLuggage: 'Luggage', detailVehicle: 'Vehicle', detailName: 'Client', detailPhone: 'Phone', detailReturn: 'Return', detailFlight: 'Flight', detailNotes: 'Notes', yes: 'Yes', no: 'No',
    whatsappTitle: 'LUXOVIA VIP TRANSFER REQUEST'
  },
  sk: {
    navFleet: 'Vozidlá', navServices: 'Služby', navAirports: 'Letiskové transfery', navBusiness: 'Business šofér', navCorporate: 'Firmy', navFaq: 'FAQ', navContact: 'Kontakt', bookNow: 'Rezervovať',
    heroTitle: 'Prémiový šofér a letiskové transfery po Európe', heroCopy: 'Diskrétne VIP transfery, profesionálny šofér a diaľkové prémiové jazdy z Bratislavy do Viedne, Budapešti, Prahy a ďalej.',
    proofSupport: 'Sledovanie letu a podpora', proofDiscreetTitle: 'Diskrétne', proofDiscreet: 'Profesionálni šoféri', proofFixedTitle: 'Jasné', proofFixed: 'Cena potvrdená pred jazdou',
    bookingKicker: 'Súkromná rezervácia', bookingTitle: 'Rezervujte si jazdu', responseTime: 'Rýchle potvrdenie',
    pickup: 'Miesto vyzdvihnutia', destination: 'Cieľ', pickupPlaceholder: 'Letisko, hotel alebo adresa', destinationPlaceholder: 'Mesto, letisko alebo adresa',
    radiusNote: 'Návrhy sú obmedzené na približne 300 km od centra Bratislavy.', date: 'Dátum', time: 'Čas', passengers: 'Cestujúci', luggage: 'Batožina',
    vehicle: 'Trieda vozidla', vehicleBusiness: 'Business Class — E-Class, max. 3', vehicleFirst: 'First Class — S-Class, max. 3', vehicleVan: 'Business Van — V-Class, max. 7',
    name: 'Meno a priezvisko', namePlaceholder: 'Vaše meno', phone: 'Telefón / WhatsApp', phonePlaceholder: '+421...', returnTrip: 'Spiatočná cesta', airportPickup: 'Vyzdvihnutie na letisku',
    flight: 'Číslo letu', flightPlaceholder: 'napr. OS 301', notes: 'Doplňujúce informácie', notesPlaceholder: 'Detská sedačka, zastávky...', reviewBooking: 'Skontrolovať rezerváciu',
    privacy: 'Teraz sa neplatí. Najprv potvrdíme dostupnosť a cenu.', requiredError: 'Vyplňte všetky povinné polia.', routeError: 'Miesto vyzdvihnutia a cieľ musia byť odlišné.',
    reviewKicker: 'Posledná kontrola', reviewTitle: 'Skontrolujte svoju cestu', reviewNotice: 'Luxovia potvrdí dostupnosť a konečnú cenu pred platbou.', editBooking: 'Upraviť', sendWhatsApp: 'Odoslať cez WhatsApp',
    trustBased: 'Sídlo v Bratislave', trustAirport: 'Špecialisti na letisko Viedeň', trustLanguages: 'Viacjazyční šoféri', trustAlways: 'Dostupnosť 24/7', trustDiscreet: 'Diskrétne služby',
    routesKicker: 'Obľúbené trasy', routesTitle: 'Orientačné ceny prémiových transferov', routesCopy: 'Každá jazda zahŕňa profesionálneho šoféra, čisté prémiové vozidlo a živú komunikáciu.',
    fleetKicker: 'Luxusný vozový park', fleetTitle: 'Prémiové vozidlá pre každý transfer', viewFleet: 'Zobraziť vozidlá', vClassCopy: 'Až 7 cestujúcich a veľký batožinový priestor.', sedanTitle: 'Luxusný sedan', sedanCopy: 'Až 3 cestujúci, prvotriedny komfort a pokojná jazda.',
    servicesKicker: 'Naše služby', servicesTitle: 'Pre obchodných cestujúcich, hotely a súkromné letectvo',
    serviceAirportTitle: 'VIP letiskové transfery', serviceAirportCopy: 'Sledovanie letu, meet & greet a priame transfery.',
    serviceBusinessTitle: 'Business šofér', serviceBusinessCopy: 'Hodinová služba pre stretnutia, delegácie a roadshow.',
    serviceAviationTitle: 'Súkromné letectvo', serviceAviationCopy: 'Diskrétna koordinácia FBO transferov.',
    serviceHotelTitle: 'Hotelové a event transfery', serviceHotelCopy: 'Spoľahlivá preprava pre hotely, konferencie a VIP hostí.',
    serviceCorporateTitle: 'Firemná doprava', serviceCorporateCopy: 'Prioritná dostupnosť a mesačná fakturácia.',
    serviceLongTitle: 'Diaľkové jazdy v EÚ', serviceLongCopy: 'Pohodlná preprava po Slovensku a okolitých krajinách.',
    ctaTitle: 'Vaša cesta, osobne zabezpečená', ctaCopy: 'Rezervujte online alebo kontaktujte Luxoviu.', startBooking: 'Začať rezerváciu', callNow: 'Zavolať',
    footerCopy: 'Prémiové transfery z Bratislavy po celej Európe.', footerRoutes: 'Trasy', footerCompany: 'Spoločnosť', about: 'O nás', corporateAccounts: 'Firemné účty',
    detailDate: 'Dátum', detailTime: 'Čas', detailPassengers: 'Cestujúci', detailLuggage: 'Batožina', detailVehicle: 'Vozidlo', detailName: 'Klient', detailPhone: 'Telefón', detailReturn: 'Spiatočná', detailFlight: 'Let', detailNotes: 'Poznámka', yes: 'Áno', no: 'Nie',
    whatsappTitle: 'LUXOVIA VIP TRANSFER'
  },
  ar: {
    navFleet: 'الأسطول', navServices: 'الخدمات', navAirports: 'توصيل المطار', navBusiness: 'سائق أعمال', navCorporate: 'الشركات', navFaq: 'الأسئلة', navContact: 'اتصل بنا', bookNow: 'احجز الآن',
    heroTitle: 'سائق خاص فاخر وخدمات نقل المطار في أوروبا', heroCopy: 'خدمات نقل VIP بسرية واحتراف من براتيسلافا إلى فيينا وبودابست وبراغ وما بعدها.',
    proofSupport: 'تتبع الرحلات ودعم 24/7', proofDiscreetTitle: 'خصوصية', proofDiscreet: 'سائقون محترفون', proofFixedTitle: 'وضوح', proofFixed: 'تأكيد السعر قبل الرحلة',
    bookingKicker: 'حجز خاص', bookingTitle: 'احجز رحلتك', responseTime: 'تأكيد سريع',
    pickup: 'موقع الانطلاق', destination: 'الوجهة', pickupPlaceholder: 'مطار أو فندق أو عنوان', destinationPlaceholder: 'مدينة أو مطار أو عنوان',
    radiusNote: 'الاقتراحات ضمن حوالي 300 كم من وسط براتيسلافا.', date: 'التاريخ', time: 'الوقت', passengers: 'الركاب', luggage: 'الأمتعة',
    vehicle: 'فئة السيارة', vehicleBusiness: 'درجة الأعمال — E-Class حتى 3', vehicleFirst: 'الدرجة الأولى — S-Class حتى 3', vehicleVan: 'فان الأعمال — V-Class حتى 7',
    name: 'الاسم الكامل', namePlaceholder: 'اسمك الكامل', phone: 'الهاتف / واتساب', phonePlaceholder: '+421...', returnTrip: 'رحلة عودة', airportPickup: 'استقبال من المطار',
    flight: 'رقم الرحلة', flightPlaceholder: 'مثال OS 301', notes: 'معلومات إضافية', notesPlaceholder: 'مقعد طفل، توقفات...', reviewBooking: 'مراجعة الحجز',
    privacy: 'لا يلزم الدفع الآن. نؤكد التوفر والسعر أولاً.', requiredError: 'يرجى إكمال جميع الحقول المطلوبة.', routeError: 'يجب أن يختلف موقع الانطلاق عن الوجهة.',
    reviewKicker: 'المراجعة النهائية', reviewTitle: 'راجع رحلتك', reviewNotice: 'ستؤكد Luxovia التوفر والسعر النهائي قبل الدفع.', editBooking: 'تعديل', sendWhatsApp: 'إرسال عبر واتساب',
    trustBased: 'مقرنا براتيسلافا', trustAirport: 'خبراء مطار فيينا', trustLanguages: 'سائقون متعددو اللغات', trustAlways: 'متاحون 24/7', trustDiscreet: 'خدمة بسرية',
    routesKicker: 'مسارات شائعة', routesTitle: 'أمثلة واضحة لأسعار النقل الفاخر', routesCopy: 'كل رحلة تشمل سائقاً محترفاً وسيارة نظيفة وتواصلاً مباشراً.',
    fleetKicker: 'أسطول فاخر', fleetTitle: 'سيارات فاخرة لكل رحلة تنفيذية', viewFleet: 'عرض الأسطول', vClassCopy: 'حتى 7 ركاب مع مساحة أمتعة كبيرة.', sedanTitle: 'سيدان فاخرة', sedanCopy: 'حتى 3 ركاب مع راحة تنفيذية من الدرجة الأولى.',
    servicesKicker: 'الخدمات الأساسية', servicesTitle: 'لرجال الأعمال والفنادق والطيران الخاص',
    serviceAirportTitle: 'نقل المطار VIP', serviceAirportCopy: 'تتبع الرحلة والاستقبال والنقل المباشر.',
    serviceBusinessTitle: 'سائق أعمال', serviceBusinessCopy: 'خدمة بالساعة للاجتماعات والوفود.',
    serviceAviationTitle: 'الطيران الخاص', serviceAviationCopy: 'تنسيق سري لنقل ركاب الطائرات الخاصة.',
    serviceHotelTitle: 'الفنادق والفعاليات', serviceHotelCopy: 'نقل موثوق للفنادق والمؤتمرات وكبار الضيوف.',
    serviceCorporateTitle: 'نقل الشركات', serviceCorporateCopy: 'أولوية الحجز وفوترة شهرية.',
    serviceLongTitle: 'رحلات أوروبية طويلة', serviceLongCopy: 'نقل مريح في سلوفاكيا والدول المجاورة.',
    ctaTitle: 'رحلتك تحت عنايتنا', ctaCopy: 'احجز عبر الإنترنت أو تحدث مباشرة مع Luxovia.', startBooking: 'ابدأ الحجز', callNow: 'اتصل الآن',
    footerCopy: 'خدمات سائق ونقل مطار فاخرة من براتيسلافا إلى أوروبا.', footerRoutes: 'المسارات', footerCompany: 'الشركة', about: 'من نحن', corporateAccounts: 'حسابات الشركات',
    detailDate: 'التاريخ', detailTime: 'الوقت', detailPassengers: 'الركاب', detailLuggage: 'الأمتعة', detailVehicle: 'السيارة', detailName: 'العميل', detailPhone: 'الهاتف', detailReturn: 'عودة', detailFlight: 'الرحلة', detailNotes: 'ملاحظات', yes: 'نعم', no: 'لا',
    whatsappTitle: 'طلب نقل VIP من LUXOVIA'
  },
  ru: {
    navFleet: 'Автопарк', navServices: 'Услуги', navAirports: 'Трансферы', navBusiness: 'Бизнес-шофер', navCorporate: 'Компаниям', navFaq: 'FAQ', navContact: 'Контакты', bookNow: 'Забронировать',
    heroTitle: 'Премиальный шофер и трансферы по Европе', heroCopy: 'Конфиденциальные VIP-трансферы из Братиславы в Вену, Будапешт, Прагу и другие города.',
    proofSupport: 'Отслеживание рейса и поддержка', proofDiscreetTitle: 'Конфиденциально', proofDiscreet: 'Профессиональные водители', proofFixedTitle: 'Прозрачно', proofFixed: 'Цена до поездки',
    bookingKicker: 'Личное бронирование', bookingTitle: 'Забронируйте поездку', responseTime: 'Быстрое подтверждение',
    pickup: 'Место подачи', destination: 'Куда', pickupPlaceholder: 'Аэропорт, отель или адрес', destinationPlaceholder: 'Город, аэропорт или адрес',
    radiusNote: 'Подсказки ограничены радиусом около 300 км от центра Братиславы.', date: 'Дата', time: 'Время', passengers: 'Пассажиры', luggage: 'Багаж',
    vehicle: 'Класс автомобиля', vehicleBusiness: 'Business Class — E-Class, до 3', vehicleFirst: 'First Class — S-Class, до 3', vehicleVan: 'Business Van — V-Class, до 7',
    name: 'Полное имя', namePlaceholder: 'Ваше имя', phone: 'Телефон / WhatsApp', phonePlaceholder: '+421...', returnTrip: 'Обратная поездка', airportPickup: 'Встреча в аэропорту',
    flight: 'Номер рейса', flightPlaceholder: 'например OS 301', notes: 'Дополнительная информация', notesPlaceholder: 'Детское кресло, остановки...', reviewBooking: 'Проверить заказ',
    privacy: 'Оплата сейчас не требуется. Сначала подтвердим наличие и цену.', requiredError: 'Заполните обязательные поля.', routeError: 'Место подачи и назначения должны отличаться.',
    reviewKicker: 'Финальная проверка', reviewTitle: 'Проверьте поездку', reviewNotice: 'Luxovia подтвердит доступность и окончательную цену до оплаты.', editBooking: 'Изменить', sendWhatsApp: 'Отправить в WhatsApp',
    trustBased: 'Базируемся в Братиславе', trustAirport: 'Специалисты аэропорта Вены', trustLanguages: 'Многоязычные водители', trustAlways: 'Доступны 24/7', trustDiscreet: 'Конфиденциальный сервис',
    routesKicker: 'Популярные маршруты', routesTitle: 'Примеры цен на премиальные трансферы', routesCopy: 'Каждая поездка включает профессионального водителя, чистый автомобиль и прямую связь.',
    fleetKicker: 'Премиальный автопарк', fleetTitle: 'Автомобили для деловых трансферов', viewFleet: 'Посмотреть автопарк', vClassCopy: 'До 7 пассажиров и просторный багажник.', sedanTitle: 'Люксовый седан', sedanCopy: 'До 3 пассажиров и комфорт первого класса.',
    servicesKicker: 'Основные услуги', servicesTitle: 'Для деловых путешественников, отелей и частной авиации',
    serviceAirportTitle: 'VIP-трансферы в аэропорт', serviceAirportCopy: 'Отслеживание рейса, встреча и прямой трансфер.',
    serviceBusinessTitle: 'Бизнес-шофер', serviceBusinessCopy: 'Почасовой сервис для встреч и делегаций.',
    serviceAviationTitle: 'Частная авиация', serviceAviationCopy: 'Конфиденциальные FBO-трансферы.',
    serviceHotelTitle: 'Отели и мероприятия', serviceHotelCopy: 'Надежный транспорт для отелей и VIP-гостей.',
    serviceCorporateTitle: 'Корпоративный транспорт', serviceCorporateCopy: 'Приоритет и ежемесячные счета.',
    serviceLongTitle: 'Междугородние поездки', serviceLongCopy: 'Комфортные поездки по Словакии и соседним странам.',
    ctaTitle: 'Ваша поездка под личным контролем', ctaCopy: 'Бронируйте онлайн или свяжитесь с Luxovia.', startBooking: 'Начать бронирование', callNow: 'Позвонить',
    footerCopy: 'Премиальные трансферы из Братиславы по Европе.', footerRoutes: 'Маршруты', footerCompany: 'Компания', about: 'О нас', corporateAccounts: 'Корпоративные счета',
    detailDate: 'Дата', detailTime: 'Время', detailPassengers: 'Пассажиры', detailLuggage: 'Багаж', detailVehicle: 'Автомобиль', detailName: 'Клиент', detailPhone: 'Телефон', detailReturn: 'Обратно', detailFlight: 'Рейс', detailNotes: 'Примечания', yes: 'Да', no: 'Нет',
    whatsappTitle: 'ЗАПРОС VIP-ТРАНСФЕРА LUXOVIA'
  },
  tr: {
    navFleet: 'Filo', navServices: 'Hizmetler', navAirports: 'Havalimanı Transferi', navBusiness: 'Kurumsal Şoför', navCorporate: 'Kurumsal', navFaq: 'SSS', navContact: 'İletişim', bookNow: 'Rezervasyon',
    heroTitle: 'Avrupa’da Premium Şoför ve Havalimanı Transferi', heroCopy: 'Bratislava’dan Viyana, Budapeşte, Prag ve ötesine güvenilir VIP transfer ve özel şoför hizmeti.',
    proofSupport: 'Uçuş takibi ve destek', proofDiscreetTitle: 'Gizlilik', proofDiscreet: 'Profesyonel şoförler', proofFixedTitle: 'Şeffaf', proofFixed: 'Yolculuk öncesi fiyat',
    bookingKicker: 'Özel rezervasyon', bookingTitle: 'Yolculuğunuzu ayırtın', responseTime: 'Hızlı onay',
    pickup: 'Alış noktası', destination: 'Varış noktası', pickupPlaceholder: 'Havalimanı, otel veya adres', destinationPlaceholder: 'Şehir, havalimanı veya adres',
    radiusNote: 'Öneriler Bratislava merkezinden yaklaşık 300 km ile sınırlıdır.', date: 'Tarih', time: 'Saat', passengers: 'Yolcu', luggage: 'Bagaj',
    vehicle: 'Araç sınıfı', vehicleBusiness: 'Business Class — E-Class, 3 kişiye kadar', vehicleFirst: 'First Class — S-Class, 3 kişiye kadar', vehicleVan: 'Business Van — V-Class, 7 kişiye kadar',
    name: 'Ad soyad', namePlaceholder: 'Adınız ve soyadınız', phone: 'Telefon / WhatsApp', phonePlaceholder: '+421...', returnTrip: 'Dönüş yolculuğu', airportPickup: 'Havalimanı karşılama',
    flight: 'Uçuş numarası', flightPlaceholder: 'örn. OS 301', notes: 'Ek bilgi', notesPlaceholder: 'Çocuk koltuğu, duraklar...', reviewBooking: 'Rezervasyonu incele',
    privacy: 'Şimdi ödeme gerekmez. Önce uygunluğu ve fiyatı onaylarız.', requiredError: 'Lütfen zorunlu alanları doldurun.', routeError: 'Alış ve varış noktaları farklı olmalıdır.',
    reviewKicker: 'Son kontrol', reviewTitle: 'Yolculuğunuzu inceleyin', reviewNotice: 'Luxovia ödeme öncesinde uygunluk ve son fiyatı onaylar.', editBooking: 'Düzenle', sendWhatsApp: 'WhatsApp ile gönder',
    trustBased: 'Bratislava merkezli', trustAirport: 'Viyana Havalimanı uzmanı', trustLanguages: 'Çok dilli şoförler', trustAlways: '7/24 hizmet', trustDiscreet: 'Gizli hizmet',
    routesKicker: 'Popüler rotalar', routesTitle: 'Premium transfer fiyat örnekleri', routesCopy: 'Her yolculuk profesyonel şoför, temiz premium araç ve canlı iletişim içerir.',
    fleetKicker: 'Lüks filo', fleetTitle: 'Her transfer için premium araçlar', viewFleet: 'Filoyu görüntüle', vClassCopy: '7 yolcuya kadar geniş bagaj alanı.', sedanTitle: 'Lüks Sedan', sedanCopy: '3 yolcuya kadar birinci sınıf konfor.',
    servicesKicker: 'Temel hizmetler', servicesTitle: 'İş seyahati, oteller ve özel havacılık için',
    serviceAirportTitle: 'VIP havalimanı transferi', serviceAirportCopy: 'Uçuş takibi, karşılama ve direkt transfer.',
    serviceBusinessTitle: 'Kurumsal şoför', serviceBusinessCopy: 'Toplantı ve delegasyonlar için saatlik hizmet.',
    serviceAviationTitle: 'Özel havacılık', serviceAviationCopy: 'Gizli FBO transfer koordinasyonu.',
    serviceHotelTitle: 'Otel ve etkinlik transferi', serviceHotelCopy: 'Otel ve VIP misafirler için güvenilir ulaşım.',
    serviceCorporateTitle: 'Kurumsal ulaşım', serviceCorporateCopy: 'Öncelikli rezervasyon ve aylık faturalandırma.',
    serviceLongTitle: 'Uzun mesafe AB yolculukları', serviceLongCopy: 'Slovakya ve komşu ülkelere konforlu ulaşım.',
    ctaTitle: 'Yolculuğunuz kişisel olarak yönetilir', ctaCopy: 'Online rezervasyon yapın veya Luxovia ile görüşün.', startBooking: 'Rezervasyona başla', callNow: 'Şimdi ara',
    footerCopy: 'Bratislava’dan Avrupa’ya premium transferler.', footerRoutes: 'Rotalar', footerCompany: 'Şirket', about: 'Hakkımızda', corporateAccounts: 'Kurumsal hesaplar',
    detailDate: 'Tarih', detailTime: 'Saat', detailPassengers: 'Yolcu', detailLuggage: 'Bagaj', detailVehicle: 'Araç', detailName: 'Müşteri', detailPhone: 'Telefon', detailReturn: 'Dönüş', detailFlight: 'Uçuş', detailNotes: 'Notlar', yes: 'Evet', no: 'Hayır',
    whatsappTitle: 'LUXOVIA VIP TRANSFER TALEBİ'
  }
};

const curatedLocations = [
  { name: 'Bratislava City Centre', aliases: 'bratislava centrum center staré mesto downtown', lat: 48.1486, lon: 17.1077 },
  { name: 'Bratislava Airport (BTS)', aliases: 'letisko airport ivanka', lat: 48.1702, lon: 17.2127 },
  { name: 'Bratislava Main Station', aliases: 'hlavná stanica train railway', lat: 48.1583, lon: 17.1065 },
  { name: 'Bratislava Nivy Bus Station', aliases: 'autobusová stanica bus', lat: 48.1467, lon: 17.1296 },
  { name: 'Vienna International Airport (VIE)', aliases: 'wien flughafen schwechat airport', lat: 48.1103, lon: 16.5697 },
  { name: 'Vienna City Centre', aliases: 'wien vienna innere stadt center centrum', lat: 48.2082, lon: 16.3738 },
  { name: 'Vienna Hauptbahnhof', aliases: 'wien central station train', lat: 48.1851, lon: 16.3759 },
  { name: 'Hainburg an der Donau', aliases: 'hainburg', lat: 48.1463, lon: 16.945 },
  { name: 'Parndorf', aliases: 'outlet designer', lat: 47.9996, lon: 16.8608 },
  { name: 'Eisenstadt', aliases: 'eisenstadt', lat: 47.8457, lon: 16.5233 },
  { name: 'Graz', aliases: 'graz austria', lat: 47.0707, lon: 15.4395 },
  { name: 'Linz', aliases: 'linz austria', lat: 48.3069, lon: 14.2858 },
  { name: 'Győr', aliases: 'gyor hungary', lat: 47.6875, lon: 17.6504 },
  { name: 'Budapest City Centre', aliases: 'budapest center centrum', lat: 47.4979, lon: 19.0402 },
  { name: 'Budapest Airport (BUD)', aliases: 'ferihegy airport', lat: 47.4385, lon: 19.2523 },
  { name: 'Sopron', aliases: 'sopron hungary', lat: 47.6817, lon: 16.5845 },
  { name: 'Brno City Centre', aliases: 'brno centrum center', lat: 49.1951, lon: 16.6068 },
  { name: 'Brno Airport (BRQ)', aliases: 'brno airport letiste', lat: 49.1513, lon: 16.6944 },
  { name: 'Prague City Centre', aliases: 'prague praha center centrum', lat: 50.0755, lon: 14.4378 },
  { name: 'Prague Airport (PRG)', aliases: 'vaclav havel praha airport', lat: 50.1008, lon: 14.26 },
  { name: 'Ostrava', aliases: 'ostrava czechia', lat: 49.8209, lon: 18.2625 },
  { name: 'Trnava', aliases: 'trnava slovakia', lat: 48.3774, lon: 17.5872 },
  { name: 'Nitra', aliases: 'nitra slovakia', lat: 48.3061, lon: 18.0764 },
  { name: 'Trenčín', aliases: 'trencin slovakia', lat: 48.8945, lon: 18.0444 },
  { name: 'Žilina', aliases: 'zilina slovakia', lat: 49.2231, lon: 18.7394 },
  { name: 'Banská Bystrica', aliases: 'banska bystrica', lat: 48.7363, lon: 19.1462 },
  { name: 'Piešťany', aliases: 'piestany spa airport', lat: 48.5918, lon: 17.8272 },
  { name: 'Komárno', aliases: 'komarno slovakia', lat: 47.7636, lon: 18.1226 },
  { name: 'Dunajská Streda', aliases: 'dunajska streda', lat: 47.9927, lon: 17.6121 },
  { name: 'Kraków', aliases: 'krakow poland airport', lat: 50.0647, lon: 19.945 },
  { name: 'Katowice', aliases: 'katowice poland airport', lat: 50.2649, lon: 19.0238 },
  { name: 'Maribor', aliases: 'maribor slovenia', lat: 46.5547, lon: 15.6459 },
  { name: 'Zagreb', aliases: 'zagreb croatia', lat: 45.815, lon: 15.9819 }
];

const current = {
  lang: localStorage.getItem('luxovia-language') || 'en',
  selectedLocations: new Map(),
  geocodeTimer: null
};

const t = (key) => translations[current.lang]?.[key] || translations.en[key] || key;

function applyLanguage(language) {
  current.lang = translations[language] ? language : 'en';
  localStorage.setItem('luxovia-language', current.lang);
  document.documentElement.lang = current.lang;
  document.documentElement.dir = current.lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', current.lang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  const selector = document.querySelector('#language-selector');
  if (selector) selector.value = current.lang;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (value) => value * Math.PI / 180;
  const earthRadius = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatPhotonFeature(feature) {
  const properties = feature.properties || {};
  const parts = [properties.name, properties.street, properties.city, properties.state, properties.country].filter(Boolean);
  return [...new Set(parts)].join(', ');
}

async function fetchRemoteLocations(query) {
  if (query.length < 3) return [];
  const url = new URL('https://photon.komoot.io/api/');
  url.searchParams.set('q', query);
  url.searchParams.set('lat', String(BRATISLAVA.lat));
  url.searchParams.set('lon', String(BRATISLAVA.lon));
  url.searchParams.set('limit', '10');
  url.searchParams.set('lang', current.lang === 'ar' ? 'en' : current.lang);

  try {
    const response = await fetch(url);
    if (!response.ok) return [];
    const data = await response.json();
    return (data.features || [])
      .map((feature) => {
        const [lon, lat] = feature.geometry.coordinates;
        return { name: formatPhotonFeature(feature), lat, lon };
      })
      .filter((item) => item.name && haversineDistance(BRATISLAVA.lat, BRATISLAVA.lon, item.lat, item.lon) <= SERVICE_RADIUS_KM);
  } catch {
    return [];
  }
}

function localLocationMatches(query) {
  const normalized = query.toLocaleLowerCase();
  return curatedLocations.filter((item) => `${item.name} ${item.aliases}`.toLocaleLowerCase().includes(normalized)).slice(0, 6);
}

function renderSuggestions(input, suggestions) {
  const box = document.querySelector(`[data-suggestions-for="${input.id}"]`);
  if (!box) return;

  const unique = suggestions.filter((item, index, list) => list.findIndex((candidate) => candidate.name === item.name) === index).slice(0, 7);
  box.innerHTML = '';
  unique.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.role = 'option';
    button.innerHTML = `<strong>${item.name}</strong><span>${Math.round(haversineDistance(BRATISLAVA.lat, BRATISLAVA.lon, item.lat, item.lon))} km</span>`;
    button.addEventListener('click', () => {
      input.value = item.name;
      current.selectedLocations.set(input.name, item);
      box.classList.remove('is-open');
    });
    box.append(button);
  });
  box.classList.toggle('is-open', unique.length > 0);
}

function attachLocationAutocomplete(input) {
  input.addEventListener('input', () => {
    current.selectedLocations.delete(input.name);
    const query = input.value.trim();
    if (query.length < 2) {
      renderSuggestions(input, []);
      return;
    }

    const local = localLocationMatches(query);
    renderSuggestions(input, local);
    clearTimeout(current.geocodeTimer);
    current.geocodeTimer = setTimeout(async () => {
      const remote = await fetchRemoteLocations(query);
      if (input.value.trim() === query) renderSuggestions(input, [...local, ...remote]);
    }, 350);
  });

  input.addEventListener('focus', () => {
    if (!input.value) renderSuggestions(input, curatedLocations.slice(0, 6));
  });
}

function updateVehicleAvailability(form) {
  const passengers = Number(form.elements.passengers.value);
  const select = form.elements.vehicle;
  let availableSelection = '';
  [...select.options].forEach((option) => {
    const unavailable = Number(option.dataset.capacity) < passengers;
    option.disabled = unavailable;
    option.hidden = unavailable;
    if (!unavailable && !availableSelection) availableSelection = option.value;
  });
  if (select.selectedOptions[0]?.disabled) select.value = availableSelection;
}

function buildReview(form) {
  const values = Object.fromEntries(new FormData(form));
  values.returnTrip = form.elements.returnTrip.checked;
  values.airportPickup = form.elements.airportPickup.checked;
  return values;
}

function buildWhatsAppMessage(values) {
  const lines = [
    `*${t('whatsappTitle')}*`,
    '',
    `📍 *${t('pickup')}:* ${values.pickup}`,
    `🏁 *${t('destination')}:* ${values.destination}`,
    `📅 *${t('detailDate')}:* ${values.date}`,
    `🕒 *${t('detailTime')}:* ${values.time}`,
    `👤 *${t('detailPassengers')}:* ${values.passengers}`,
    `🧳 *${t('detailLuggage')}:* ${values.luggage}`,
    `🚘 *${t('detailVehicle')}:* ${values.vehicle}`,
    `🙍 *${t('detailName')}:* ${values.name}`,
    `📱 *${t('detailPhone')}:* ${values.phone}`,
    `↩️ *${t('detailReturn')}:* ${values.returnTrip ? t('yes') : t('no')}`
  ];
  if (values.flight) lines.push(`✈️ *${t('detailFlight')}:* ${values.flight}`);
  if (values.notes) lines.push(`📝 *${t('detailNotes')}:* ${values.notes}`);
  return lines.join('\n');
}

function openReview(form) {
  const error = form.querySelector('.booking-error');
  if (!form.checkValidity()) {
    error.textContent = t('requiredError');
    form.reportValidity();
    return;
  }
  if (form.elements.pickup.value.trim().toLowerCase() === form.elements.destination.value.trim().toLowerCase()) {
    error.textContent = t('routeError');
    return;
  }
  error.textContent = '';
  const values = buildReview(form);
  const dialog = document.querySelector('#booking-review');
  dialog.querySelector('[data-review="pickup"]').textContent = values.pickup;
  dialog.querySelector('[data-review="destination"]').textContent = values.destination;

  const detailItems = [
    [t('detailDate'), values.date],
    [t('detailTime'), values.time],
    [t('detailPassengers'), values.passengers],
    [t('detailLuggage'), values.luggage],
    [t('detailVehicle'), values.vehicle],
    [t('detailName'), values.name],
    [t('detailPhone'), values.phone],
    [t('detailReturn'), values.returnTrip ? t('yes') : t('no')]
  ];
  if (values.flight) detailItems.push([t('detailFlight'), values.flight]);
  if (values.notes) detailItems.push([t('detailNotes'), values.notes]);

  dialog.querySelector('.review-details').innerHTML = detailItems.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
  dialog.querySelector('.review-whatsapp').href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(buildWhatsAppMessage(values))}`;
  dialog.showModal();
}

function initializeBooking() {
  const form = document.querySelector('#luxovia-booking-form');
  if (!form) return;

  const dateInput = form.elements.date;
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
  dateInput.min = localDate;
  if (!dateInput.value) dateInput.value = localDate;

  form.querySelectorAll('.location-field input').forEach(attachLocationAutocomplete);
  form.elements.passengers.addEventListener('change', () => updateVehicleAvailability(form));
  updateVehicleAvailability(form);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    openReview(form);
  });

  const dialog = document.querySelector('#booking-review');
  dialog.querySelector('.review-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.review-edit').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function initializeNavigation() {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
  menuButton?.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

function initializeReveals() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((element) => observer.observe(element));
}

document.querySelector('#language-selector')?.addEventListener('change', (event) => applyLanguage(event.target.value));
document.addEventListener('click', (event) => {
  if (!event.target.closest('.location-field')) document.querySelectorAll('.location-suggestions').forEach((box) => box.classList.remove('is-open'));
});

applyLanguage(current.lang);
initializeNavigation();
initializeBooking();
initializeReveals();
