document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('active'))
    const darkModeBtn = document.getElementById('dark-mode')

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark')
        })
    }

    document.querySelectorAll('.carousel').forEach((carouselEl) => {
        const items = Array.from(carouselEl.querySelectorAll('.carousel-item'))
        const dots = Array.from(carouselEl.querySelectorAll('.dot'))
        const prevBtn = carouselEl.querySelector('.carousel-btn.prev')
        const nextBtn = carouselEl.querySelector('.carousel-btn.next')

        if (items.length === 0) return
        let currentIndex = Math.max(0, items.findIndex((el) => el.classList.contains('active')))
        function setActive(index) {
            const safeIndex = (index + items.length) % items.length
            currentIndex = safeIndex

            items.forEach((itemEl, i) => {
                const isActive = i === safeIndex
                itemEl.classList.toggle('active', isActive)
                itemEl.setAttribute('aria-hidden', isActive ? 'false' : 'true')
            })
            dots.forEach((dotEl, i) => {
                const isActive = i === safeIndex
                dotEl.classList.toggle('active', isActive)
                dotEl.setAttribute('aria-current', isActive ? 'true' : 'false')
            })
        }

        setActive(currentIndex)

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                setActive(currentIndex - 1)
            })
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                setActive(currentIndex + 1)
            })
        }
        dots.forEach((dotEl, i) => {
            dotEl.addEventListener('click', () => {
                setActive(i)
            })
        })
    })
})