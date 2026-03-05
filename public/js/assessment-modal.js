// Assessment Modal Functions
function openAssessmentModal() {
  document.getElementById('assessmentModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAssessmentModal() {
  document.getElementById('assessmentModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('assessmentModal');
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === this) {
        closeAssessmentModal();
      }
    });
  }
});

function submitAssessmentForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  const submitBtn = event.target.querySelector('.assessment-submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  const assessmentParams = {
    from_name: formData.get('name'),
    from_email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    service: formData.get('service'),
    message: formData.get('message'),
    title: 'Free Assessment Request'
  };
  
  emailjs.send(
    "service_m8it7mm",
    "template_i2yx6lo",
    assessmentParams,
    "pqGNmyI4nmJpnTacM"
  ).then(() => {
    const autoReplyParams = {
      'Client Name': formData.get('name'),
      to_email: formData.get('email')
    };
    
    return emailjs.send(
      "service_m8it7mm",
      "template_5hus2xw",
      autoReplyParams,
      "pqGNmyI4nmJpnTacM"
    );
  }).then(
    (response) => {
      alert('Thank you! We will send you a free assessment shortly.');
      closeAssessmentModal();
      document.getElementById('assessmentForm').reset();
    },
    (error) => {
      alert('Thank you! We will send you a free assessment shortly.');
      closeAssessmentModal();
      document.getElementById('assessmentForm').reset();
    }
  ).finally(() => {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
}
