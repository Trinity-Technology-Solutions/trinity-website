/**
 * Cross-Platform Flag Display System
 * Ensures flag icons work consistently across Ubuntu, Windows, and macOS
 */

class CrossPlatformFlags {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupFlags());
    } else {
      this.setupFlags();
    }
  }

  setupFlags() {
    // Check if SVG is supported
    if (!this.isSVGSupported()) {
      this.fallbackToTextFlags();
      return;
    }

    // Verify SVG flags are rendering correctly
    setTimeout(() => {
      this.verifyFlagRendering();
    }, 1000);
  }

  isSVGSupported() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
  }

  verifyFlagRendering() {
    const flagSvgs = document.querySelectorAll('.flag-svg');
    
    flagSvgs.forEach((svg, index) => {
      // Check if SVG has rendered properly
      const rect = svg.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        this.createFallbackFlag(svg, index);
      }
    });
  }

  createFallbackFlag(originalSvg, index) {
    const countries = ['india', 'netherlands', 'oman', 'usa'];
    const countryNames = ['IN', 'NL', 'OM', 'US'];
    
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = `flag-fallback ${countries[index]}`;
    fallbackDiv.textContent = countryNames[index];
    fallbackDiv.setAttribute('aria-label', `${countries[index]} flag`);
    
    originalSvg.parentNode.replaceChild(fallbackDiv, originalSvg);
  }

  fallbackToTextFlags() {
    const locationCards = document.querySelectorAll('.location-card');
    const countries = [
      { code: 'IN', name: 'India', class: 'india' },
      { code: 'NL', name: 'Netherlands', class: 'netherlands' },
      { code: 'OM', name: 'Oman', class: 'oman' },
      { code: 'US', name: 'USA', class: 'usa' }
    ];

    locationCards.forEach((card, index) => {
      const flagContainer = card.querySelector('.location-flag');
      if (flagContainer && countries[index]) {
        const country = countries[index];
        flagContainer.innerHTML = `
          <div class="flag-fallback ${country.class}" aria-label="${country.name} flag">
            ${country.code}
          </div>
        `;
      }
    });
  }

  // Method to update flags dynamically if needed
  updateFlags() {
    this.setupFlags();
  }
}

// Initialize the cross-platform flag system
const flagSystem = new CrossPlatformFlags();

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CrossPlatformFlags;
}

// Global function to manually trigger flag update
window.updateFlags = () => {
  flagSystem.updateFlags();
};