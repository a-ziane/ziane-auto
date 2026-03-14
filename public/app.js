document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider')

  sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll('.slide'))
    const dots = Array.from(slider.querySelectorAll('.dot'))
    const prev = slider.querySelector('.slide-btn.prev')
    const next = slider.querySelector('.slide-btn.next')
    let index = 0
    let timer = null

    const setActive = (nextIndex) => {
      index = (nextIndex + slides.length) % slides.length
      slides.forEach((slide, i) => slide.classList.toggle('active', i === index))
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index))
    }

    const start = () => {
      if (!slider.dataset.auto || slides.length <= 1) return
      timer = window.setInterval(() => setActive(index + 1), 4500)
    }

    const stop = () => {
      if (timer) {
        window.clearInterval(timer)
        timer = null
      }
    }

    prev?.addEventListener('click', () => {
      stop()
      setActive(index - 1)
      start()
    })

    next?.addEventListener('click', () => {
      stop()
      setActive(index + 1)
      start()
    })

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stop()
        setActive(i)
        start()
      })
    })

    slider.addEventListener('mouseenter', stop)
    slider.addEventListener('mouseleave', start)

    setActive(0)
    start()
  })
})
