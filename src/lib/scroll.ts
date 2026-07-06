/** Clears scroll locks from mobile menu, Radix dropdowns, etc. */
export function unlockPageScroll() {
  document.body.classList.remove("overflow-hidden");
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  document.body.removeAttribute("data-scroll-locked");
}

/** Scroll to a hash target with sticky navbar offset. Returns false if element not found. */
export function scrollToHash(href: string, behavior: ScrollBehavior = "smooth"): boolean {
  const id = href.startsWith("#") ? href : `#${href}`;
  const element = document.querySelector(id);
  if (!element) return false;

  const navHeight = document.getElementById("navbar")?.offsetHeight ?? 80;
  const top = element.getBoundingClientRect().top + window.scrollY - navHeight;

  window.scrollTo({ top, behavior });
  unlockPageScroll();
  return true;
}

/** Retry scrolling until lazy-loaded sections mount (e.g. after route change). */
export function scrollToHashWhenReady(href: string, maxMs = 6000) {
  const id = href.startsWith("#") ? href : `#${href}`;
  const start = Date.now();

  const tryScroll = () => {
    if (scrollToHash(id, "smooth")) return;
    if (Date.now() - start < maxMs) {
      requestAnimationFrame(tryScroll);
    }
  };

  requestAnimationFrame(tryScroll);
}
