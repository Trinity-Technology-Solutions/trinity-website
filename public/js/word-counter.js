// Word counter for tracking "foe" across the website
(function() {
  const WORD_TO_TRACK = 'foe';
  const STORAGE_KEY = 'foe_count';
  
  function countWord() {
    const bodyText = document.body.innerText.toLowerCase();
    const regex = new RegExp(`\\b${WORD_TO_TRACK}\\b`, 'g');
    const matches = bodyText.match(regex) || [];
    return matches.length;
  }
  
  function updateCounter() {
    const pageCount = countWord();
    const totalCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0') + pageCount;
    localStorage.setItem(STORAGE_KEY, totalCount);
    
    // Display counter in console
    console.log(`"${WORD_TO_TRACK}" on this page: ${pageCount}`);
    console.log(`Total "${WORD_TO_TRACK}" across website: ${totalCount}`);
    
    // Add counter badge to page
    addCounterBadge(pageCount, totalCount);
  }
  
  function addCounterBadge(pageCount, totalCount) {
    const badge = document.createElement('div');
    badge.id = 'foe-counter-badge';
    badge.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #22396b;
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      font-family: 'Inter', sans-serif;
    `;
    badge.innerHTML = `
      <div>Page: ${pageCount}</div>
      <div>Total: ${totalCount}</div>
    `;
    document.body.appendChild(badge);
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCounter);
  } else {
    updateCounter();
  }
})();
