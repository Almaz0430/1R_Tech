// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-13',
  ssr: false,             // полностью фронт
  app: {
    baseURL: '/',         // если на поддомене, укажешь под него, напр. '/blog/'
    head: {
      script: [
        { src: 'https://cdn.tailwindcss.com' },
        { src: 'https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js' },
        {
          innerHTML: `
            (function () {
              const style = document.createElement("style");
              style.textContent = \`
                .animate-on-scroll { animation-play-state: paused !important; }
                .animate-on-scroll.animate { animation-play-state: running !important; }
              \`;
              document.head.appendChild(style);
              const once = true;
              if (!window.__inViewIO) {
                window.__inViewIO = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("animate");
                      if (once) window.__inViewIO.unobserve(entry.target);
                    }
                  });
                }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
              }
              window.initInViewAnimations = function (selector = ".animate-on-scroll") {
                document.querySelectorAll(selector).forEach((el) => {
                  window.__inViewIO.observe(el);
                });
              };
              document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
            })();
          `,
          type: 'text/javascript'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
          integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer'
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },
  nitro: {
    preset: 'static'      // генерирует полностью статический сайт
  },
  css: [
    '@/assets/css/main.css'
  ]
})
