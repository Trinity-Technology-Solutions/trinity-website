// Initialize EmailJS immediately when script loads
if (typeof emailjs !== 'undefined') {
  emailjs.init("jc8MwEV88GcpV6a7p");
} else {
  // Fallback: wait for EmailJS to load
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
      emailjs.init("jc8MwEV88GcpV6a7p");
    }
  });
}
