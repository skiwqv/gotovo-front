import type { Directive } from 'vue'

let observer: IntersectionObserver | undefined

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        el.classList.add('is-visible')
        observer!.unobserve(el)
        el.addEventListener(
          'transitionend',
          () => {
            el.classList.remove('reveal', 'is-visible')
            el.style.removeProperty('--reveal-delay')
          },
          { once: true },
        )
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  )
  return observer
}

const reveal: Directive<HTMLElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
})
