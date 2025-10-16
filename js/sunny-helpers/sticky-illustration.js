/**
 * Sticky Illustration (Proof of Concept)
 *
 * ⚠️ EXPERIMENTAL - Not fully robust. May have issues with nested sections
 * and complex layouts. Use at your own risk.
 *
 * Verandert automatisch de src van een sticky afbeelding op basis van
 * welke sectie momenteel aan de bovenkant van het scherm zichtbaar is.
 *
 * Gebruik:
 * 1. Voeg data-illustration="pad/naar/afbeelding.jpg" toe aan je sections
 * 2. Voeg class="sticky-illustration" toe aan je afbeelding
 * 3. Include dit script in je HTML
 *
 * Optioneel: pas data-illustration-offset aan op het <img> element
 * om de trigger positie te wijzigen (default: 100px van de top).
 */

const stickyIllustration = document.querySelector('.sticky-illustration');

if (stickyIllustration) {
  // Haal offset op uit data attribuut of gebruik default
  const offset = stickyIllustration.dataset.illustrationOffset || '100';

  // Gebruik een scroll event listener voor nauwkeurige controle
  let ticking = false;

  function updateIllustration() {
    const sections = document.querySelectorAll('section[data-illustration]');
    const triggerPoint = parseInt(offset);

    let activeSection = null;

    // Vind de sectie die het dichtst bij (maar voorbij) de trigger positie is
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // Check of de sectie de trigger lijn heeft gepasseerd (top is boven de trigger)
      // en nog steeds in beeld is (bottom is onder de trigger)
      if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
        activeSection = section;
      }
    });

    // Als er een actieve sectie is, update de afbeelding
    if (activeSection && activeSection.dataset.illustration) {
      if (stickyIllustration.src !== activeSection.dataset.illustration) {
        stickyIllustration.src = activeSection.dataset.illustration;
      }
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateIllustration);
      ticking = true;
    }
  }

  // Initiële check
  updateIllustration();

  // Luister naar scroll events
  window.addEventListener('scroll', onScroll, { passive: true });
}
