const parallax = document.querySelectorAll('.parallax')
    parallax.forEach(parallax_container => {
        if (parallax_container) {
            const items = parallax_container.querySelectorAll('*')

            const speed = 0.05
            let positionX = 0, positionY = 0
            let cordXprocent = 0, cordYprocent = 0

            const setMouseParallax = () => {
                const distX = cordXprocent - positionX
                const distY = cordYprocent - positionY
                
                positionX = positionX + (distX * speed)
                positionY = positionY + (distY * speed)

                items.forEach(item => {
                    const item_speed = item.getAttribute('speed')
                    item.style.cssText = `transform: translate(${positionX / parseInt(item_speed)}%, ${positionY / parseInt(item_speed)}%);`
                })
                
                requestAnimationFrame(setMouseParallax)
            }
            setMouseParallax()

            document.addEventListener('mousemove', function(e) {
                const parallaxWidth = parallax_container.offsetWidth
                const parallaxHeight = parallax_container.offsetHeight
    
                const cordX = e.pageX - parallaxWidth / 2
                const cordY = e.pageY - parallaxHeight / 2
    
                cordXprocent = cordX / parallaxWidth * 100
                cordYprocent = cordY / parallaxHeight * 100 
            })
        }
    })
