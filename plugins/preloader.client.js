export default defineNuxtPlugin(() => {
  if (process.client) {
    // Создаем предзагрузчик
    const createPreloader = () => {
      const preloader = document.createElement('div')
      preloader.className = 'preloader'
      
      const loader = document.createElement('div')
      loader.className = 'loader'
      
      preloader.appendChild(loader)
      document.body.appendChild(preloader)
      
      // Скрываем предзагрузчик сразу после инициализации
      setTimeout(() => {
        preloader.classList.add('hidden')
        
        // Удаляем предзагрузчик из DOM после анимации скрытия
        setTimeout(() => {
          if (document.body.contains(preloader)) {
            document.body.removeChild(preloader)
          }
        }, 500)
      }, 1000)
    }
    
    // Анимация элементов при скролле
    const setupScrollAnimations = () => {
      // Ждем полной загрузки DOM
      window.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px 0px -100px 0px',
          threshold: 0.1
        }
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              
              // Останавливаем наблюдение после срабатывания
              observer.unobserve(entry.target)
            }
          })
        }, observerOptions)
        
        // Наблюдаем за элементами с классом 'animate-on-scroll'
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          observer.observe(el)
        })
      })
    }
    
    // Плавная прокрутка к якорным ссылкам
    const setupSmoothScroll = () => {
      document.addEventListener('click', (e) => {
        const target = e.target.closest('a[href^="#"]')
        
        if (target) {
          e.preventDefault()
          
          const id = target.getAttribute('href').slice(1)
          const element = document.getElementById(id)
          
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Учитываем высоту фиксированного header
              behavior: 'smooth'
            })
          }
        }
      })
    }
    
    // Неоновый курсор (дополнительный эффект)
    const setupNeonCursor = () => {
      const cursor = document.createElement('div')
      cursor.className = 'neon-cursor'
      document.body.appendChild(cursor)
      
      const cursorInner = document.createElement('div')
      cursorInner.className = 'neon-cursor-inner'
      document.body.appendChild(cursorInner)
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        cursorInner.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      })
      
      // Добавляем стили курсора
      const style = document.createElement('style')
      style.textContent = `
        .neon-cursor {
          position: fixed;
          width: 30px;
          height: 30px;
          border: 1px solid var(--color-neon-blue);
          border-radius: 50%;
          pointer-events: none;
          transform: translate3d(-50%, -50%, 0);
          transition: transform 0.1s ease;
          z-index: 9999;
          opacity: 0.6;
        }
        
        .neon-cursor-inner {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: var(--color-neon-blue);
          border-radius: 50%;
          pointer-events: none;
          transform: translate3d(-50%, -50%, 0);
          transition: transform 0.15s ease;
          z-index: 9999;
          box-shadow: var(--glow-blue);
        }
        
        a:hover ~ .neon-cursor, button:hover ~ .neon-cursor {
          transform: scale(1.5);
          opacity: 0.8;
          background-color: rgba(15, 247, 255, 0.1);
        }
      `
      document.head.appendChild(style)
    }
    
    // Инициализация эффектов
    createPreloader()
    setupScrollAnimations()
    setupSmoothScroll()
    
    // Раскомментировать для включения неонового курсора
    // setupNeonCursor()
  }
}) 