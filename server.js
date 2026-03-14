require('dotenv').config()

const path = require('path')
const express = require('express')
const { highlights } = require('./data/cars')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3000

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is missing. Add it to .env before starting the server.')
  process.exit(1)
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const dictionaries = {
  en: {
    nav: { home: 'Home', cars: 'Cars' },
    hero: {
      location: 'Ain Touta, Batna',
      title: 'Drive the gold standard with Ziane Auto',
      subtitle: 'Premium car showroom focused on curated imports, performance, and personal service.',
      ctaPrimary: 'View Cars',
      ctaSecondary: 'Order Now'
    },
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
      filters: { search: 'Search', brand: 'Brand', year: 'Year', availability: 'Availability', any: 'Any', available: 'Available', reserved: 'Reserved' }
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
      availabilityNote: 'Ziane Auto team will confirm delivery time, inspection report, and payment steps.',
      locationNote: 'Visit the showroom or place an order to reserve this car.'
    },
    orderForm: {
      title: 'Reserve this car',
      name: 'Full name',
      phone: 'Phone number',
      message: 'Message',
      button: 'Send Order'
    },
    specs: {
      title: 'Specs',
      fuel: 'Fuel',
      horsepower: 'Horsepower',
      torque: 'Torque',
      transmission: 'Transmission',
      drivetrain: 'Drivetrain',
      engine: 'Engine',
      mileage: 'Mileage',
      seats: 'Seats'
    },
    footer: {
      about: 'Premium car showroom in Ain Touta, Batna, Algeria. We match drivers with iconic cars and fast delivery.',
      visit: 'Visit',
      hours: 'Open: Sat - Thu, 9:00 - 19:00',
      contact: 'Contact'
    }
  },
  fr: {
    nav: { home: 'Accueil', cars: 'Voitures' },
    hero: {
      location: 'Ain Touta, Batna',
      title: 'Le standard or avec Ziane Auto',
      subtitle: 'Showroom premium spécialisé dans les importations, la performance et le service personnalisé.',
      ctaPrimary: 'Voir les voitures',
      ctaSecondary: 'Commander'
    },
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
      filters: { search: 'Recherche', brand: 'Marque', year: 'Année', availability: 'Disponibilité', any: 'Tout', available: 'Disponible', reserved: 'Réservée' }
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
      availabilityNote: 'L’équipe Ziane Auto confirmera la livraison, l’inspection et les étapes de paiement.',
      locationNote: 'Visitez le showroom ou commandez pour réserver cette voiture.'
    },
    orderForm: {
      title: 'Réserver cette voiture',
      name: 'Nom complet',
      phone: 'Téléphone',
      message: 'Message',
      button: 'Envoyer'
    },
    specs: {
      title: 'Fiche',
      fuel: 'Carburant',
      horsepower: 'Puissance',
      torque: 'Couple',
      transmission: 'Boîte',
      drivetrain: 'Transmission',
      engine: 'Moteur',
      mileage: 'Consommation',
      seats: 'Places'
    },
    footer: {
      about: 'Showroom premium à Ain Touta, Batna, Algérie. Nous vous proposons des voitures d’exception.',
      visit: 'Adresse',
      hours: 'Ouvert : Sam - Jeu, 9h00 - 19h00',
      contact: 'Contact'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', cars: 'السيارات' },
    hero: {
      location: 'عين التوتة، باتنة',
      title: 'المعيار الذهبي مع زيان أوتو',
      subtitle: 'معرض سيارات فاخر متخصص في الاستيراد، الأداء، والخدمة الشخصية.',
      ctaPrimary: 'عرض السيارات',
      ctaSecondary: 'اطلب الآن'
    },
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
      filters: { search: 'بحث', brand: 'الماركة', year: 'السنة', availability: 'التوفر', any: 'الكل', available: 'متوفر', reserved: 'محجوز' }
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
      availabilityNote: 'سيتواصل فريق زيان أوتو لتأكيد التسليم والفحص وخطوات الدفع.',
      locationNote: 'قم بزيارة المعرض أو أرسل طلبًا لحجز هذه السيارة.'
    },
    orderForm: {
      title: 'احجز هذه السيارة',
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      message: 'رسالة',
      button: 'إرسال الطلب'
    },
    specs: {
      title: 'المواصفات',
      fuel: 'الوقود',
      horsepower: 'القوة',
      torque: 'العزم',
      transmission: 'ناقل الحركة',
      drivetrain: 'الدفع',
      engine: 'المحرك',
      mileage: 'الاستهلاك',
      seats: 'المقاعد'
    },
    footer: {
      about: 'معرض سيارات فاخر في عين التوتة، باتنة، الجزائر. نوفّر سيارات مميزة وخدمة سريعة.',
      visit: 'العنوان',
      hours: 'ساعات العمل: السبت - الخميس، 9:00 - 19:00',
      contact: 'تواصل'
    }
  }
}

const getLang = (req) => {
  const requested = String(req.query.lang || '').toLowerCase()
  return dictionaries[requested] ? requested : 'en'
}

const buildLangLink = (req, lang) => {
  const query = { ...req.query, lang }
  const search = new URLSearchParams(query).toString()
  return `${req.path}${search ? `?${search}` : ''}`
}

app.use((req, res, next) => {
  const lang = getLang(req)
  res.locals.lang = lang
  res.locals.t = dictionaries[lang]
  res.locals.isRtl = lang === 'ar'
  res.locals.buildLangLink = (code) => buildLangLink(req, code)
  next()
})

app.get('/', async (req, res) => {
  const cars = await db.getCars()
  res.render('index', {
    highlights,
    featuredCars: cars.slice(0, 3)
  })
})

app.get('/cars', async (req, res) => {
  const search = String(req.query.search || '').toLowerCase()
  const brand = String(req.query.brand || '')
  const year = String(req.query.year || '')
  const availability = String(req.query.availability || '')

  const cars = await db.getCars()
  const filtered = cars.filter((car) => {
    const matchesSearch =
      !search ||
      `${car.brand} ${car.model} ${car.description}`.toLowerCase().includes(search)
    const matchesBrand = !brand || car.brand === brand
    const matchesYear = !year || String(car.year) === year
    const matchesAvailability =
      !availability ||
      (availability === 'available' ? car.available : !car.available)

    return matchesSearch && matchesBrand && matchesYear && matchesAvailability
  })

  const brands = Array.from(new Set(cars.map((car) => car.brand)))
  const years = Array.from(new Set(cars.map((car) => car.year))).sort((a, b) => b - a)

  res.render('cars', {
    cars: filtered,
    brands,
    years,
    filters: { search, brand, year, availability }
  })
})

app.get('/cars/:id', async (req, res) => {
  const car = await db.getCarById(req.params.id)
  if (!car) {
    return res.status(404).render('not-found')
  }
  res.render('car', { car })
})

app.post('/api/orders', async (req, res) => {
  const { carId, carName, customerName, phone, message, lang } = req.body
  if (!customerName || !phone) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  try {
    await db.createOrder({
      carId: carId || null,
      carName,
      customerName,
      phone,
      message
    })
  } catch (error) {
    return res.status(500).json({ error: 'Database insert failed' })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (botToken && chatId) {
    const text = `New Car Order\n\nCar: ${carName || 'Unknown'}\nName: ${customerName}\nPhone: ${phone}\n\nMessage:\n${message || '-'}\n`
    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text })
      })
    } catch (error) {
      return res.status(500).json({ error: 'Telegram request failed' })
    }
  }

  return res.redirect(`/order-confirmed?lang=${lang || 'en'}`)
})

app.get('/order-confirmed', (req, res) => {
  res.render('order-confirmed')
})

app.use((req, res) => {
  res.status(404).render('not-found')
})

app.listen(PORT, () => {
  console.log(`Ziane Auto running at http://localhost:${PORT}`)
})
