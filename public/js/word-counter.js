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
    console.log(`"${WORD_TO_TRACK}" on this page: ${pageCount}`);
    console.log(`Total "${WORD_TO_TRACK}" across website: ${totalCount}`);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCounter);
  } else {
    updateCounter();
  }
})();
