// Universal Yums Style Lead Popup
class LeadPopup {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 4;
    this.formData = {};
    this.selectedService = null;
    this.init();
  }

  init() {
    this.createPopup();
  }

  createPopup() {
    const html = `
      <div class="lead-overlay" id="leadOverlay">
        <div class="lead-modal" id="leadModal">
          <button class="modal-close" onclick="leadPopup.close()">&times;</button>
          <div class="modal-body">
            <div class="step-indicator">
              <span class="step-dot active"></span>
              <span class="step-dot"></span>
              <span class="step-dot"></span>
              <span class="step-dot"></span>
            </div>

            <!-- Step 1: Service Selection -->
            <div class="step-content active" data-step="1">
              <h2 class="step-title">What can we help you with?</h2>
              <p class="step-subtitle">Select the service you're interested in</p>
              <div class="service-cards-grid">
                <div class="service-card-item" data-service="ai">
                  <div class="service-card-image">
                    <img src="assets/images/AI Solutions.jpg" alt="AI Solutions" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="service-card-content">
                    <h3 class="service-card-title">AI Solutions</h3>
                    <p class="service-card-desc">Transform your business with intelligent automation and predictive analytics.</p>
                    <button class="view-more-btn" onclick="event.stopPropagation(); window.open('services/AI-solution.html', '_blank')">View More</button>
                  </div>
                </div>
                <div class="service-card-item" data-service="erp">
                  <div class="service-card-image">
                    <img src="assets/images/ERP Planning.jpg" alt="Intelligent ERP Solutions" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="service-card-content">
                    <h3 class="service-card-title">Intelligent ERP Solutions</h3>
                    <p class="service-card-desc">Streamline operations with comprehensive enterprise resource planning.</p>
                    <button class="view-more-btn" onclick="event.stopPropagation(); window.open('services/ERP-planning.html', '_blank')">View More</button>
                  </div>
                </div>
              </div>
              <div class="service-cards-grid">
                <div class="service-card-item" data-service="staffing">
                  <div class="service-card-image">
                    <img src="assets/images/Staffing Solution.jpg" alt="Staffing Solutions" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="service-card-content">
                    <h3 class="service-card-title">Staffing Solutions</h3>
                    <p class="service-card-desc">Find top talent and build your team with expert recruitment services.</p>
                    <button class="view-more-btn" onclick="event.stopPropagation(); window.open('services/staffing-solutions.html', '_blank')">View More</button>
                  </div>
                </div>
                <div class="service-card-item" data-service="web">
                  <div class="service-card-image">
                    <img src="assets/images/Web Development Solutions.jpg" alt="Web Development" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="service-card-content">
                    <h3 class="service-card-title">Web Development</h3>
                    <p class="service-card-desc">Build modern, responsive web applications that drive business growth.</p>
                    <button class="view-more-btn" onclick="event.stopPropagation(); window.open('services/web-development.html', '_blank')">View More</button>
                  </div>
                </div>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-primary" onclick="leadPopup.nextStep()" id="continueBtn" style="opacity: 1; cursor: pointer; width: 100%;">Continue</button>
              </div>
            </div>

            <!-- Step 2: Contact Info -->
            <div class="step-content" data-step="2">
              <h2 class="step-title">Tell us about yourself</h2>
              <p class="step-subtitle">We'll use this to get in touch with you</p>
              <div class="form-field">
                <label>Full Name *</label>
                <input type="text" id="userName" name="name" required>
              </div>
              <div class="form-field">
                <label>Email Address *</label>
                <input type="email" id="userEmail" name="email" required>
              </div>
              <div class="form-field">
                <label>Phone Number *</label>
                <input type="tel" id="userPhone" name="phone" required>
              </div>
              <div class="form-field">
                <label>Address *</label>
                <input type="text" id="userAddress" name="address" required>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-secondary" onclick="leadPopup.prevStep()">Back</button>
                <button type="button" class="btn btn-primary" onclick="leadPopup.nextStep()">Continue</button>
              </div>
            </div>

            <!-- Step 3: Service Details -->
            <div class="step-content" data-step="3">
              <h2 class="step-title" id="serviceTitle">Service Questions</h2>
              <p class="step-subtitle" id="serviceSubtitle">Help us understand your needs</p>
              <form id="detailsForm">
                <div id="serviceQuestions"></div>
                <div class="btn-group">
                  <button type="button" class="btn btn-secondary" onclick="leadPopup.prevStep()">Back</button>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>

            <!-- Step 4: Success -->
            <div class="step-content" data-step="4">
              <div class="success-screen">
                <div class="success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h2 class="success-title">Thank You!</h2>
                <p class="success-text">We've received your information and will contact you within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    document.getElementById('detailsForm').addEventListener('submit', (e) => this.submit(e));
    this.bindServiceCardEvents();
  }

  bindServiceCardEvents() {
    const serviceCards = document.querySelectorAll('.service-card-item');
    serviceCards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-more-btn') || e.target.closest('.view-more-btn')) {
          e.stopPropagation();
          return;
        }
        const service = card.getAttribute('data-service');
        this.selectServiceCategory(service);
      });
    });
  }

  show() {
    const overlay = document.getElementById('leadOverlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Reset to first step
      this.currentStep = 1;
      this.selectedService = null;
      this.formData = {};
      
      // Reset UI
      document.querySelectorAll('.step-content').forEach(step => {
        step.classList.remove('active');
      });
      document.querySelector('[data-step="1"]').classList.add('active');
      
      document.querySelectorAll('.step-dot').forEach((dot, index) => {
        if (index === 0) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  close() {
    document.getElementById('leadOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    sessionStorage.setItem('trinityPopup', '1');
  }

  selectServiceCategory(service) {
    this.selectedService = service;
    this.formData.service = service;
    
    // Enable continue button
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
      continueBtn.disabled = false;
      continueBtn.style.opacity = '1';
      continueBtn.style.cursor = 'pointer';
      continueBtn.classList.remove('disabled');
    }
    
    // Remove previous selections
    document.querySelectorAll('.service-card-item').forEach(card => {
      card.classList.remove('selected');
    });
    
    // Highlight selected service
    const selectedCard = document.querySelector(`[data-service="${service}"]`);
    if (selectedCard) {
      selectedCard.classList.add('selected');
    }
  }

  nextStep() {
    if (this.currentStep === 1) {
      if (!this.selectedService) {
        this.showMessage('Please select a service to continue', 'error');
        return;
      }
    }
    
    if (this.currentStep === 2) {
      const name = document.getElementById('userName')?.value.trim();
      const email = document.getElementById('userEmail')?.value.trim();
      const phone = document.getElementById('userPhone')?.value.trim();
      const address = document.getElementById('userAddress')?.value.trim();
      
      if (!name || !email || !phone || !address) {
        this.showMessage('Please fill all fields', 'error');
        return;
      }
      
      this.formData.name = name;
      this.formData.email = email;
      this.formData.phone = phone;
      this.formData.address = address;
      
      // Load questions for step 3
      if (this.selectedService) {
        this.loadServiceQuestions();
      } else {
        this.loadGeneralQuestions();
      }
    }
    
    // Transition to next step
    const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
    if (currentStepEl) {
      currentStepEl.style.transform = 'translateX(-30px)';
      currentStepEl.style.opacity = '0';
      
      setTimeout(() => {
        currentStepEl.classList.remove('active');
        this.currentStep++;
        const nextStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
        if (nextStepEl) {
          nextStepEl.classList.add('active');
          nextStepEl.style.transform = 'translateX(0)';
          nextStepEl.style.opacity = '1';
        }
        document.getElementById('leadModal').setAttribute('data-step', this.currentStep);
        if (this.currentStep <= 4) {
          const dots = document.querySelectorAll('.step-dot');
          if (dots[this.currentStep - 1]) dots[this.currentStep - 1].classList.add('active');
        }
      }, 200);
    }
  }

  prevStep() {
    const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
    if (currentStepEl) {
      currentStepEl.style.transform = 'translateX(30px)';
      currentStepEl.style.opacity = '0';
      
      setTimeout(() => {
        currentStepEl.classList.remove('active');
        if (this.currentStep <= 4) {
          document.querySelectorAll('.step-dot')[this.currentStep - 1].classList.remove('active');
        }
        this.currentStep--;
        const prevStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
        if (prevStepEl) {
          prevStepEl.classList.add('active');
          prevStepEl.style.transform = 'translateX(0)';
          prevStepEl.style.opacity = '1';
        }
        document.getElementById('leadModal').setAttribute('data-step', this.currentStep);
      }, 200);
    }
  }

  loadServiceQuestions() {
    const serviceTitles = {
      ai: { title: 'AI Solutions', subtitle: 'Help us understand your AI project needs' },
      erp: { title: 'ERP Planning', subtitle: 'Help us understand your ERP implementation needs' },
      staffing: { title: 'Staffing Solutions', subtitle: 'Help us understand your hiring needs' },
      web: { title: 'Web Development', subtitle: 'Help us understand your website/application needs' }
    };

    const service = this.selectedService;
    document.getElementById('serviceTitle').textContent = serviceTitles[service].title;
    document.getElementById('serviceSubtitle').textContent = serviceTitles[service].subtitle;

    const questions = {
      ai: [
        { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
        { q: 'What industry is your business in?', type: 'select', options: ['Retail', 'E-commerce', 'Education', 'Healthcare', 'Real Estate', 'Other'] },
        { q: 'What do you want to use AI for?', type: 'select', options: ['Customer Support Automation', 'Marketing Automation', 'Lead Generation', 'Sales Automation', 'Data Analysis', 'Custom AI Solutions'] },
        { q: 'Are you currently using any automation or software tools?', type: 'select', options: ['No', 'CRM', 'Chatbots', 'Marketing tools', 'Custom software'] },
        { q: 'Would you like a FREE AI Solutions Consultation?', type: 'select', options: ['Yes', 'No'] }
      ],
      erp: [
        { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
        { q: 'What industry is your business in?', type: 'select', options: ['Retail', 'Manufacturing', 'Distribution', 'Education', 'Healthcare', 'Real Estate', 'Other'] },
        { q: 'Which business processes do you want to manage with ERP?', type: 'select', options: ['Inventory Management', 'Sales & Billing', 'Accounting & Finance', 'HR & Payroll', 'Purchase Management', 'Customer Management (CRM)', 'Complete ERP Solution'] },
        { q: 'Are you currently using any software for managing your business?', type: 'select', options: ['Manual Work', 'Excel / Spreadsheets', 'Accounting software', 'ERP system', 'Other software'] },
        { q: 'Would you like a FREE ERP Planning Consultation?', type: 'select', options: ['Yes', 'No'] }
      ],
      staffing: [
        { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
        { q: 'What industry is your business in?', type: 'select', options: ['IT / Technology', 'Manufacturing', 'Retail', 'Healthcare', 'Education', 'Finance', 'Other'] },
        { q: 'What type of staffing support do you need?', type: 'select', options: ['Permanent Hiring', 'Contract Staffing', 'Temporary Staffing', 'Internship / Fresher Hiring', 'Project-based Hiring'] },
        { q: 'Which roles are you looking to hire for?', type: 'select', options: ['Technical roles', 'Sales & Marketing', 'Administrative / Operations', 'Customer Support', 'Other'] },
        { q: 'Would you like a FREE Staffing Solutions Consultation?', type: 'select', options: ['Yes', 'No'] }
      ],
      web: [
        { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
        { q: 'What industry is your business in?', type: 'select', options: ['Retail', 'E-commerce', 'Education', 'Healthcare', 'Real Estate', 'IT / Services', 'Other'] },
        { q: 'What type of website are you looking for?', type: 'select', options: ['Business website', 'E-commerce website', 'Portfolio website', 'Landing page', 'Custom web application'] },
        { q: 'Do you need additional services for your website?', type: 'select', options: ['SEO optimization', 'Website maintenance', 'Content creation', 'Digital marketing', 'No'] },
        { q: 'Would you like a FREE Web Development Consultation?', type: 'select', options: ['Yes', 'No'] }
      ]
    };

    const qs = questions[this.selectedService];
    let html = '';
    qs.forEach((q, i) => {
      if (q.type === 'text') {
        html += `<div class="form-field"><label>${q.q} <span style="color:#dc2626;">*</span></label><input type="text" name="q${i + 1}" placeholder="${q.placeholder || ''}" required style="color: #1f2937; font-weight: 500;"></div>`;
      } else if (q.type === 'select') {
        html += `<div class="form-field"><label>${q.q} <span style="color:#dc2626;">*</span></label><select name="q${i + 1}" required style="color: #1f2937; font-weight: 500;"><option value="" style="color: #9ca3af;">Select...</option>`;
        q.options.forEach(opt => html += `<option value="${opt}" style="color: #1f2937; font-weight: 500;">${opt}</option>`);
        html += `</select></div>`;
      }
    });
    document.getElementById('serviceQuestions').innerHTML = html;
  }

  loadGeneralQuestions() {
    document.getElementById('serviceTitle').textContent = 'Tell us about your project';
    document.getElementById('serviceSubtitle').textContent = 'Help us understand your business needs';

    const generalQuestions = [
      { q: 'What type of service are you most interested in?', options: ['AI Solutions', 'Intelligent ERP Solutions', 'Staffing Solutions', 'Web Development', 'General Consultation'] },
      { q: 'What is your company size?', options: ['Startup (1-10 employees)', 'Small Business (11-50 employees)', 'Medium Business (51-200 employees)', 'Large Enterprise (200+ employees)'] },
      { q: 'What is your project timeline?', options: ['Immediate (Within 1 month)', 'Short-term (1-3 months)', 'Medium-term (3-6 months)', 'Long-term (6+ months)'] },
      { q: 'What is your estimated budget range?', options: ['Under $10,000', '$10,000 - $50,000', '$50,000 - $100,000', '$100,000+', 'Not sure yet'] },
      { q: 'How did you hear about Trinity Technology Solutions?', options: ['Google Search', 'LinkedIn', 'Referral', 'Website', 'Other'] }
    ];

    let html = '';
    generalQuestions.forEach((q, i) => {
      html += `<div class="form-field"><label>${i + 1}. ${q.q} <span style="color:#dc2626;">*</span></label><select name="q${i + 1}" required style="color: #1f2937; font-weight: 500;"><option value="" style="color: #9ca3af;">Select...</option>`;
      q.options.forEach(opt => html += `<option value="${opt}" style="color: #1f2937; font-weight: 500;">${opt}</option>`);
      html += `</select></div>`;
    });
    document.getElementById('serviceQuestions').innerHTML = html;
  }

  async submit(e) {
    e.preventDefault();
    const form = e.target;
    new FormData(form).forEach((value, key) => this.formData[key] = value);

    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      let serviceName = this.selectedService ? {
        ai: 'AI Solutions',
        erp: 'ERP Planning', 
        staffing: 'Staffing Solutions',
        web: 'Web Development'
      }[this.selectedService] : 'General Inquiry';

      let questionsText = '';
      if (this.selectedService) {
        const questions = {
          ai: ['What is your business/company name?', 'What industry is your business in?', 'What do you want to use AI for?', 'Are you currently using any automation or software tools?', 'Would you like a FREE AI Solutions Consultation?'],
          erp: ['What is your business/company name?', 'What industry is your business in?', 'Which business processes do you want to manage with ERP?', 'Are you currently using any software for managing your business?', 'Would you like a FREE ERP Planning Consultation?'],
          staffing: ['What is your business/company name?', 'What industry is your business in?', 'What type of staffing support do you need?', 'Which roles are you looking to hire for?', 'Would you like a FREE Staffing Solutions Consultation?'],
          web: ['What is your business/company name?', 'What industry is your business in?', 'What type of website are you looking for?', 'Do you need additional services for your website?', 'Would you like a FREE Web Development Consultation?']
        }[this.selectedService];
        
        questions.forEach((q, i) => {
          const answer = this.formData[`q${i + 1}`] || 'Not answered';
          questionsText += `Q${i + 1}: ${q}\nAnswer: ${answer}\n\n`;
        });
      } else {
        const generalQuestions = ['What type of service are you most interested in?', 'What is your company size?', 'What is your project timeline?', 'What is your estimated budget range?', 'How did you hear about Trinity Technology Solutions?'];
        generalQuestions.forEach((q, i) => {
          const answer = this.formData[`q${i + 1}`] || 'Not answered';
          questionsText += `Q${i + 1}: ${q}\nAnswer: ${answer}\n\n`;
        });
      }

      await emailjs.send("service_pa43dns", "template_sr6fu8g", {
        service: serviceName,
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        message: `Service: ${serviceName}`,
        questions: questionsText
      });
    } catch(e) {
      console.error('EmailJS Error:', e);
    }

    const currentStepEl = document.querySelector('[data-step="3"]');
    if (currentStepEl) {
      currentStepEl.style.transform = 'translateX(-30px)';
      currentStepEl.style.opacity = '0';
      
      setTimeout(() => {
        currentStepEl.classList.remove('active');
        const successStepEl = document.querySelector('[data-step="4"]');
        if (successStepEl) {
          successStepEl.classList.add('active');
          successStepEl.style.transform = 'translateX(0)';
          successStepEl.style.opacity = '1';
        }
        this.currentStep = 4;
        setTimeout(() => this.close(), 3000);
      }, 200);
    }
  }
}

let leadPopup;
document.addEventListener('DOMContentLoaded', () => {
  if (typeof emailjs !== 'undefined') {
    emailjs.init("jc8MwEV88GcpV6a7p");
  }
  leadPopup = new LeadPopup();
  // Auto-show after 2s if not seen this session
  if (!sessionStorage.getItem('trinityPopup')) {
    setTimeout(() => leadPopup.show(), 2000);
  }
});

// Add showMessage method to LeadPopup class
LeadPopup.prototype.showMessage = function(text, type = 'info') {
  // Remove existing message
  const existingMessage = document.querySelector('.popup-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const messageEl = document.createElement('div');
  messageEl.className = `popup-message popup-message-${type}`;
  messageEl.textContent = text;
  
  // Insert at top of modal body
  const modalBody = document.querySelector('.modal-body');
  modalBody.insertBefore(messageEl, modalBody.firstChild);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    if (messageEl.parentNode) {
      messageEl.remove();
    }
  }, 3000);
};