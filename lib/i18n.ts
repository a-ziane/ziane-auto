export type Language = 'en' | 'fr' | 'ar'

type Dictionary = {
  nav: { home: string; cars: string; contact: string }
  hero: { location: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string }
  highlights: { title: string; description: string }[]
  featured: { label: string; title: string; viewAll: string }
  order: { label: string; title: string; description: string; cta: string }
  cars: {
    title: string
    subtitle: string
    filters: { search: string; brand: string; year: string; availability: string; any: string; available: string; reserved: string }
  }
  carDetail: {
    back: string
    description: string
    availability: string
    availableNow: string
    reserved: string
    location: string
    locationText: string
    rating: string
    availabilityNote: string
    locationNote: string
  }
  orderForm: { title: string; name: string; phone: string; message: string; button: string; sending: string; success: string; error: string }
  footer: { about: string; visit: string; hours: string; contact: string }
}

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    nav: { home: 'Home', cars: 'Cars', contact: 'Contact' },
    hero: {
      location: 'Ain Touta, Batna',
      title: 'Drive the gold standard with Ziane Auto',
      subtitle: 'Premium car showroom focused on curated imports, performance, and personal service.',
      ctaPrimary: 'View Cars',
      ctaSecondary: 'Order Now'
    },
    highlights: [
      { title: 'Curated Imports', description: 'Every vehicle is hand-selected for performance, comfort, and prestige.' },
      { title: 'Verified History', description: 'We verify ownership, service history, and inspection details for every car.' },
      { title: 'Direct Owner Delivery', description: 'Place your order and the Ziane Auto team will contact you within hours.' }
    ],
    featured: { label: 'Featured', title: 'Signature Inventory', viewAll: 'View All' },
    order: {
      label: 'Order',
      title: 'Ready for your next car?',
      description: 'Submit an order request and our team will send availability, pricing, and delivery details directly to you.',
      cta: 'Order a Car'
    },
    cars: {
      title: 'All Cars',
      subtitle: 'Browse the full Ziane Auto collection. Filter by brand, year, and pricing to match your ideal drive.',
      filters: {
        search: 'Search',
        brand: 'Brand',
        year: 'Year',
        availability: 'Availability',
        any: 'Any',
        available: 'Available',
        reserved: 'Reserved'
      }
    },
    carDetail: {
      back: 'Back to inventory',
      description: 'Description',
      availability: 'Availability',
      availableNow: 'Available now',
      reserved: 'Currently reserved',
      location: 'Location',
      locationText: 'Ain Touta, Batna, Algeria',
      rating: 'Rating',
      availabilityNote:
        'Ziane Auto team will confirm delivery time, inspection report, and payment steps.',
      locationNote: 'Visit the showroom or place an order to reserve this car.'
    },
    orderForm: {
      title: 'Reserve this car',
      name: 'Full name',
      phone: 'Phone number',
      message: 'Message',
      button: 'Send Order',
      sending: 'Sending...',
      success: 'Order sent. We will contact you shortly.',
      error: 'Something went wrong. Please try again.'
    },
    footer: {
      about: 'Premium car showroom in Ain Touta, Batna, Algeria. We match drivers with iconic cars and fast delivery.',
      visit: 'Visit',
      hours: 'Open: Sat - Thu, 9:00 - 19:00',
      contact: 'Contact'
    }
  },
  fr: {
    nav: { home: 'Accueil', cars: 'Voitures', contact: 'Contact' },
    hero: {
      location: 'Ain Touta, Batna',
      title: 'Le standard or avec Ziane Auto',
      subtitle: 'Showroom premium spécialisé dans les importations, la performance et le service personnalisé.',
      ctaPrimary: 'Voir les voitures',
      ctaSecondary: 'Commander'
    },
    highlights: [
      { title: 'Sélection haut de gamme', description: 'Chaque véhicule est sélectionné pour sa performance et son prestige.' },
      { title: 'Historique vérifié', description: 'Nous vérifions propriété, entretien et inspections pour chaque voiture.' },
      { title: 'Livraison directe', description: 'Passez commande et l’équipe Ziane Auto vous contacte rapidement.' }
    ],
    featured: { label: 'Vedette', title: 'Inventaire signature', viewAll: 'Voir tout' },
    order: {
      label: 'Commande',
      title: 'Prêt pour votre prochaine voiture ?',
      description: 'Soumettez une demande et notre équipe vous enverra disponibilité, prix et livraison.',
      cta: 'Commander une voiture'
    },
    cars: {
      title: 'Toutes les voitures',
      subtitle: 'Parcourez toute la collection Ziane Auto. Filtrez par marque, année et prix.',
      filters: {
        search: 'Recherche',
        brand: 'Marque',
        year: 'Année',
        availability: 'Disponibilité',
        any: 'Tout',
        available: 'Disponible',
        reserved: 'Réservée'
      }
    },
    carDetail: {
      back: 'Retour à la liste',
      description: 'Description',
      availability: 'Disponibilité',
      availableNow: 'Disponible',
      reserved: 'Réservée',
      location: 'Localisation',
      locationText: 'Ain Touta, Batna, Algérie',
      rating: 'Note',
      availabilityNote:
        'L’équipe Ziane Auto confirmera la livraison, l’inspection et les étapes de paiement.',
      locationNote: 'Visitez le showroom ou commandez pour réserver cette voiture.'
    },
    orderForm: {
      title: 'Réserver cette voiture',
      name: 'Nom complet',
      phone: 'Téléphone',
      message: 'Message',
      button: 'Envoyer',
      sending: 'Envoi...',
      success: 'Demande envoyée. Nous vous contacterons bientôt.',
      error: 'Une erreur est survenue. Réessayez.'
    },
    footer: {
      about: 'Showroom premium à Ain Touta, Batna, Algérie. Nous vous proposons des voitures d’exception.',
      visit: 'Adresse',
      hours: 'Ouvert : Sam - Jeu, 9h00 - 19h00',
      contact: 'Contact'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', cars: 'السيارات', contact: 'تواصل' },
    hero: {
      location: 'عين التوتة، باتنة',
      title: 'المعيار الذهبي مع زيان أوتو',
      subtitle: 'معرض سيارات فاخر متخصص في الاستيراد، الأداء، والخدمة الشخصية.',
      ctaPrimary: 'عرض السيارات',
      ctaSecondary: 'اطلب الآن'
    },
    highlights: [
      { title: 'اختيارات فاخرة', description: 'كل سيارة يتم اختيارها بعناية للأداء والراحة والفخامة.' },
      { title: 'سجل موثّق', description: 'نؤكد الملكية وسجل الصيانة والفحص لكل سيارة.' },
      { title: 'تواصل مباشر', description: 'قدّم طلبك وسيقوم فريق زيان أوتو بالتواصل سريعًا.' }
    ],
    featured: { label: 'مميز', title: 'سيارات مختارة', viewAll: 'عرض الكل' },
    order: {
      label: 'طلب',
      title: 'جاهز لسيارتك القادمة؟',
      description: 'أرسل طلبك وسنرسل لك التوفر والسعر وخيارات التسليم.',
      cta: 'اطلب سيارة'
    },
    cars: {
      title: 'جميع السيارات',
      subtitle: 'تصفح مجموعة زيان أوتو بالكامل مع إمكانية التصفية حسب الماركة والسنة والسعر.',
      filters: {
        search: 'بحث',
        brand: 'الماركة',
        year: 'السنة',
        availability: 'التوفر',
        any: 'الكل',
        available: 'متوفر',
        reserved: 'محجوز'
      }
    },
    carDetail: {
      back: 'العودة للقائمة',
      description: 'الوصف',
      availability: 'التوفر',
      availableNow: 'متوفر الآن',
      reserved: 'محجوز',
      location: 'الموقع',
      locationText: 'عين التوتة، باتنة، الجزائر',
      rating: 'التقييم',
      availabilityNote:
        'سيتواصل فريق زيان أوتو لتأكيد التسليم والفحص وخطوات الدفع.',
      locationNote: 'قم بزيارة المعرض أو أرسل طلبًا لحجز هذه السيارة.'
    },
    orderForm: {
      title: 'احجز هذه السيارة',
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      message: 'رسالة',
      button: 'إرسال الطلب',
      sending: 'جارٍ الإرسال...',
      success: 'تم إرسال الطلب. سنتواصل معك قريبًا.',
      error: 'حدث خطأ. حاول مرة أخرى.'
    },
    footer: {
      about: 'معرض سيارات فاخر في عين التوتة، باتنة، الجزائر. نوفّر سيارات مميزة وخدمة سريعة.',
      visit: 'العنوان',
      hours: 'ساعات العمل: السبت - الخميس، 9:00 - 19:00',
      contact: 'تواصل'
    }
  }
}
