class LeadPopup {
  constructor() {
    this.currentStep = 1;
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
          <div class="modal-body" id="leadModalBody">
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
                    <img src="assets/images/AI-Solutions.jpg" alt="AI Solutions">
                  </div>
                  <div class="service-card-content">
                    <h3 class="service-card-title">AI Solutions</h3>
                    <p class="service-card-desc">Transform your business with intelligent automation and predictive analytics.</p>
                    <button class="view-more-btn" onclick="event.stopPropagation(); window.open('services/AI-solution.html', '_blank')">View More</button>
                  </div>
                </div>
                <div class="service-card-item" data-service="erp">
                  <div class="service-card-image">
                    <img src="assets/images/ERP Planning.jpg" alt="Intelligent ERP Solutions">
                  </div>
                  <div class="service-card-content">
                    <h3 class="service-card-title">Intelligent ERP Solutions</h3>
                    <p class="service-card-desc">Streamline operations with comprehensive enterprise resource planning.</p>
                    <button class="view-more-btn" onclick="event.stopPropagation(); window.open('services/ERP-planning.html', '_blank')">View More</button>
                  </div>
                </div>
                <div class="service-card-item" data-service="staffing">
                  <div class="service-card-image">
                    <img src="assets/images/Staffing Solution.jpg" alt="Staffing Solutions">
                  </div>
                  <div class="service-card-content">
                    <h3 class="service-card-title">Staffing Solutions</h3>
                    <p class="service-card-desc">Find top talent and build your team with expert recruitment services.</p>
                    <button class="view-more-btn" onclick="event.stopPropagation(); window.open('services/staffing-solutions.html', '_blank')">View More</button>
                  </div>
                </div>
                <div class="service-card-item" data-service="web">
                  <div class="service-card-image">
                    <img src="assets/images/Web Development Solutions.jpg" alt="Web Development">
                  </div>
                  <div class="service-card-content">
                    <h3 class="service-card-title">Web Development</h3>
                    <p class="service-card-desc">Build modern, responsive web applications that drive business growth.</p>
                    <button class="view-more-btn" onclick="event.stopPropagation(); window.open('services/web-development.html', '_blank')">View More</button>
                  </div>
                </div>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-primary" onclick="leadPopup.nextStep()" style="width:100%;">Continue</button>
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

            <!-- Step 3: Service Questions -->
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
    document.querySelectorAll('.service-card-item').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-more-btn') || e.target.closest('.view-more-btn')) return;
        this.selectServiceCategory(card.getAttribute('data-service'));
      });
    });
  }

  show() {
    const overlay = document.getElementById('leadOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.currentStep = 1;
    this.selectedService = null;
    this.formData = {};
    document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
    document.querySelector('[data-step="1"]').classList.add('active');
    document.querySelectorAll('.step-dot').forEach((dot, i) => dot.classList.toggle('active', i === 0));
  }

  close() {
    document.getElementById('leadOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    sessionStorage.setItem('trinityPopup', '1');
  }

  selectServiceCategory(service) {
    this.selectedService = service;
    this.formData.service = service;
    document.querySelectorAll('.service-card-item').forEach(c => c.classList.remove('selected'));
    document.querySelector(`[data-service="${service}"]`).classList.add('selected');
  }

  switchStep(from, to) {
    const fromEl = document.querySelector(`[data-step="${from}"]`);
    const toEl = document.querySelector(`[data-step="${to}"]`);
    if (fromEl) fromEl.classList.remove('active');
    if (toEl) toEl.classList.add('active');
    this.currentStep = to;
    document.querySelectorAll('.step-dot').forEach((dot, i) => dot.classList.toggle('active', i < to));
    const body = document.getElementById('leadModalBody');
    if (body) body.scrollTop = 0;
  }

  nextStep() {
    if (this.currentStep === 1) {
      if (!this.selectedService) {
        this.showMessage('Please select a service to continue', 'error');
        return;
      }
    }
    if (this.currentStep === 2) {
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const phone = document.getElementById('userPhone').value.trim();
      const address = document.getElementById('userAddress').value.trim();
      if (!name || !email || !phone || !address) {
        this.showMessage('Please fill all fields', 'error');
        return;
      }
      this.formData.name = name;
      this.formData.email = email;
      this.formData.phone = phone;
      this.formData.address = address;
      this.loadServiceQuestions();
    }
    this.switchStep(this.currentStep, this.currentStep + 1);
  }

  prevStep() {
    this.switchStep(this.currentStep, this.currentStep - 1);
  }

  loadServiceQuestions() {
    const config = {
      ai: {
        title: 'AI Solutions',
        subtitle: 'Help us understand your AI project needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What industry is your business in?', options: ['Retail', 'E-commerce', 'Education', 'Healthcare', 'Real Estate', 'Other'] },
          { q: 'What do you want to use AI for?', options: ['Customer Support Automation', 'Marketing Automation', 'Lead Generation', 'Sales Automation', 'Data Analysis', 'Custom AI Solutions'] },
          { q: 'Are you currently using any automation or software tools?', options: ['No', 'CRM', 'Chatbots', 'Marketing tools', 'Custom software'] },
          { q: 'Would you like a FREE AI Solutions Consultation?', options: ['Yes', 'No'] }
        ]
      },
      erp: {
        title: 'ERP Planning',
        subtitle: 'Help us understand your ERP implementation needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What industry is your business in?', options: ['Retail', 'Manufacturing', 'Distribution', 'Education', 'Healthcare', 'Real Estate', 'Other'] },
          { q: 'Which business processes do you want to manage with ERP?', options: ['Inventory Management', 'Sales & Billing', 'Accounting & Finance', 'HR & Payroll', 'Purchase Management', 'Customer Management (CRM)', 'Complete ERP Solution'] },
          { q: 'Are you currently using any software for managing your business?', options: ['Manual Work', 'Excel / Spreadsheets', 'Accounting software', 'ERP system', 'Other software'] },
          { q: 'Would you like a FREE ERP Planning Consultation?', options: ['Yes', 'No'] }
        ]
      },
      staffing: {
        title: 'Staffing Solutions',
        subtitle: 'Help us understand your hiring needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What industry is your business in?', options: ['IT / Technology', 'Manufacturing', 'Retail', 'Healthcare', 'Education', 'Finance', 'Other'] },
          { q: 'What type of staffing support do you need?', options: ['Permanent Hiring', 'Contract Staffing', 'Temporary Staffing', 'Internship / Fresher Hiring', 'Project-based Hiring'] },
          { q: 'Which roles are you looking to hire for?', options: ['Technical roles', 'Sales & Marketing', 'Administrative / Operations', 'Customer Support', 'Other'] },
          { q: 'Would you like a FREE Staffing Solutions Consultation?', options: ['Yes', 'No'] }
        ]
      },
      web: {
        title: 'Web Development',
        subtitle: 'Help us understand your website/application needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What industry is your business in?', options: ['Retail', 'E-commerce', 'Education', 'Healthcare', 'Real Estate', 'IT / Services', 'Other'] },
          { q: 'What type of website are you looking for?', options: ['Business website', 'E-commerce website', 'Portfolio website', 'Landing page', 'Custom web application'] },
          { q: 'Do you need additional services for your website?', options: ['SEO optimization', 'Website maintenance', 'Content creation', 'Digital marketing', 'No'] },
          { q: 'Would you like a FREE Web Development Consultation?', options: ['Yes', 'No'] }
        ]
      }
    };

    const svc = config[this.selectedService];
    document.getElementById('serviceTitle').textContent = svc.title;
    document.getElementById('serviceSubtitle').textContent = svc.subtitle;

    let html = '';
    svc.questions.forEach((q, i) => {
      if (q.type === 'text') {
        html += `<div class="form-field"><label>${i + 1}. ${q.q} <span style="color:#dc2626;">*</span></label><input type="text" name="q${i + 1}" placeholder="${q.placeholder || ''}" required></div>`;
      } else {
        html += `<div class="form-field lp-custom-select-wrap">
          <label>${i + 1}. ${q.q} <span style="color:#dc2626;">*</span></label>
          <div class="lp-select" data-name="q${i + 1}">
            <div class="lp-select-trigger"><span>Select...</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></div>
            <div class="lp-select-options">`;
        q.options.forEach(opt => {
          html += `<div class="lp-select-option" data-value="${opt}">${opt}</div>`;
        });
        html += `</div></div>
          <input type="hidden" name="q${i + 1}" required>
        </div>`;
      }
    });
    document.getElementById('serviceQuestions').innerHTML = html;
    this.initCustomSelects();
  }

  initCustomSelects() {
    document.querySelectorAll('.lp-select').forEach(sel => {
      const trigger = sel.querySelector('.lp-select-trigger');
      const options = sel.querySelector('.lp-select-options');
      const hidden = sel.parentElement.querySelector('input[type="hidden"]');

      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close all others
        document.querySelectorAll('.lp-select.open').forEach(s => {
          if (s !== sel) s.classList.remove('open');
        });
        sel.classList.toggle('open');
      });

      sel.querySelectorAll('.lp-select-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const span = trigger.querySelector('span');
          span.textContent = opt.dataset.value;
          span.style.color = '#1f2937';
          hidden.value = opt.dataset.value;
          sel.querySelectorAll('.lp-select-option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          sel.classList.remove('open');
        });
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.lp-select.open').forEach(s => s.classList.remove('open'));
    });
  }

  async submit(e) {
    e.preventDefault();
    new FormData(e.target).forEach((v, k) => this.formData[k] = v);

    const btn = e.target.querySelector('.btn-primary');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const serviceNames = { ai: 'AI Solutions', erp: 'ERP Planning', staffing: 'Staffing Solutions', web: 'Web Development' };
    const questionLabels = {
      ai: ['What is your business/company name?', 'What industry is your business in?', 'What do you want to use AI for?', 'Are you currently using any automation or software tools?', 'Would you like a FREE AI Solutions Consultation?'],
      erp: ['What is your business/company name?', 'What industry is your business in?', 'Which business processes do you want to manage with ERP?', 'Are you currently using any software for managing your business?', 'Would you like a FREE ERP Planning Consultation?'],
      staffing: ['What is your business/company name?', 'What industry is your business in?', 'What type of staffing support do you need?', 'Which roles are you looking to hire for?', 'Would you like a FREE Staffing Solutions Consultation?'],
      web: ['What is your business/company name?', 'What industry is your business in?', 'What type of website are you looking for?', 'Do you need additional services for your website?', 'Would you like a FREE Web Development Consultation?']
    };

    let questionsText = '';
    questionLabels[this.selectedService].forEach((q, i) => {
      questionsText += `Q${i + 1}: ${q}\nAnswer: ${this.formData[`q${i + 1}`] || 'Not answered'}\n\n`;
    });

    try {
      await emailjs.send("service_pa43dns", "template_sr6fu8g", {
        service: serviceNames[this.selectedService],
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        message: `Service: ${serviceNames[this.selectedService]}`,
        questions: questionsText
      });
    } catch (err) {
      console.error('EmailJS Error:', err);
    }

    this.switchStep(3, 4);
    setTimeout(() => this.close(), 3000);
  }

  showMessage(text, type = 'info') {
    document.querySelector('.popup-message')?.remove();
    const el = document.createElement('div');
    el.className = `popup-message popup-message-${type}`;
    el.textContent = text;
    const activeStep = document.querySelector('.step-content.active');
    if (activeStep) activeStep.insertBefore(el, activeStep.firstChild);
    setTimeout(() => el.remove(), 3000);
  }
}

let leadPopup;
document.addEventListener('DOMContentLoaded', () => {
  if (typeof emailjs !== 'undefined') emailjs.init("jc8MwEV88GcpV6a7p");
  leadPopup = new LeadPopup();
});
