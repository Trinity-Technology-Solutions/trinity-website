// Universal Yums Style Lead Popup
class LeadPopup {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 3;
    this.formData = {};
    this.init();
  }

  init() {
    this.createPopup();
    setTimeout(() => this.show(), 1000);
  }

  createPopup() {
    const html = `
      <div class="lead-overlay" id="leadOverlay">
        <div class="lead-modal">
          <button class="modal-close" onclick="leadPopup.close()">&times;</button>
          <div class="modal-body">
            <div class="step-indicator">
              <span class="step-dot active"></span>
              <span class="step-dot"></span>
              <span class="step-dot"></span>
            </div>

            <!-- Step 1: Service Selection -->
            <div class="step-content active" data-step="1">
              <h2 class="step-title">What can we help you with?</h2>
              <p class="step-subtitle">Select the service you're interested in</p>
              <div class="service-grid">
                <div class="service-option" onclick="leadPopup.selectService('ai')">
                  <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9.663 17H7.5C6.837 17 6.201 16.737 5.732 16.268C5.263 15.799 5 15.163 5 14.5C5 13.837 5.263 13.201 5.732 12.732C6.201 12.263 6.837 12 7.5 12C7.5 10.674 8.027 9.402 8.964 8.464C9.902 7.527 11.174 7 12.5 7C13.826 7 15.098 7.527 16.036 8.464C16.973 9.402 17.5 10.674 17.5 12H16.5C17.163 12 17.799 12.263 18.268 12.732C18.737 13.201 19 13.837 19 14.5C19 15.163 18.737 15.799 18.268 16.268C17.799 16.737 17.163 17 16.5 17H14.337"/>
                  </svg>
                  <h3 class="service-name">AI Solutions</h3>
                </div>
                <div class="service-option" onclick="leadPopup.selectService('erp')">
                  <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M8 7h8M8 11h8M8 15h4"/>
                  </svg>
                  <h3 class="service-name">ERP Planning</h3>
                </div>
                <div class="service-option" onclick="leadPopup.selectService('staffing')">
                  <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <path d="M17 11l2 2 4-4"/>
                  </svg>
                  <h3 class="service-name">Staffing Solutions</h3>
                </div>
                <div class="service-option" onclick="leadPopup.selectService('web')">
                  <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8"/>
                  </svg>
                  <h3 class="service-name">Web Development</h3>
                </div>
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
              <h2 class="step-title">AI Solutions Quiz</h2>
              <p class="step-subtitle">Test your knowledge about AI and Machine Learning</p>
              <form id="detailsForm">
                <div id="serviceQuestions"></div>
                <div class="btn-group">
                  <button type="button" class="btn btn-secondary" onclick="leadPopup.prevStep()">Back</button>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>

            <!-- Success -->
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
  }

  show() {
    document.getElementById('leadOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    document.getElementById('leadOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    sessionStorage.setItem('trinityPopup', '1');
  }

  selectService(service) {
    this.formData.service = service;
    document.querySelectorAll('.service-option').forEach(el => el.classList.remove('selected'));
    event.target.closest('.service-option').classList.add('selected');
    setTimeout(() => this.nextStep(), 300);
  }

  nextStep() {
    console.log('nextStep called, currentStep:', this.currentStep);
    if (this.currentStep === 2) {
      const name = document.getElementById('userName')?.value.trim();
      const email = document.getElementById('userEmail')?.value.trim();
      const phone = document.getElementById('userPhone')?.value.trim();
      const address = document.getElementById('userAddress')?.value.trim();
      
      console.log('Form values:', {name, email, phone, address});
      
      if (!name || !email || !phone || !address) {
        alert('Please fill all fields');
        return;
      }
      
      this.formData.name = name;
      this.formData.email = email;
      this.formData.phone = phone;
      this.formData.address = address;
      console.log('Loading questions for service:', this.formData.service);
      this.loadServiceQuestions();
    }
    
    const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
    if (currentStepEl) currentStepEl.classList.remove('active');
    this.currentStep++;
    console.log('Moving to step:', this.currentStep);
    const nextStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
    if (nextStepEl) nextStepEl.classList.add('active');
    if (this.currentStep <= 3) {
      const dots = document.querySelectorAll('.step-dot');
      if (dots[this.currentStep - 1]) dots[this.currentStep - 1].classList.add('active');
    }
  }

  prevStep() {
    document.querySelector(`[data-step="${this.currentStep}"]`).classList.remove('active');
    document.querySelectorAll('.step-dot')[this.currentStep - 1].classList.remove('active');
    this.currentStep--;
    document.querySelector(`[data-step="${this.currentStep}"]`).classList.add('active');
  }

  loadServiceQuestions() {
    const serviceTitles = {
      ai: { title: 'AI Solutions', subtitle: 'Help us understand your AI project needs' },
      erp: { title: 'ERP Planning', subtitle: 'Help us understand your ERP implementation needs' },
      staffing: { title: 'Staffing Solutions', subtitle: 'Help us understand your hiring needs' },
      web: { title: 'Web Development', subtitle: 'Help us understand your website/application needs' }
    };

    const service = this.formData.service;
    document.querySelector('[data-step="3"] .step-title').textContent = serviceTitles[service].title;
    document.querySelector('[data-step="3"] .step-subtitle').textContent = serviceTitles[service].subtitle;

    const questions = {
      ai: [
        { q: 'What business problem are you looking to solve using AI?', options: ['Automation', 'Prediction', 'Personalization', 'Analytics', 'Fraud detection'] },
        { q: 'What type of AI solution are you interested in?', options: ['Machine Learning Model', 'Deep Learning', 'NLP (Chatbot / Text Analysis)', 'Computer Vision', 'Recommendation System'] },
        { q: 'What kind of data do you currently have?', options: ['Structured (Excel, Database)', 'Unstructured (Images, PDFs, Audio)', 'No existing dataset'] },
        { q: 'What level of AI product are you expecting?', options: ['Proof of Concept', 'MVP', 'Fully Deployed Production System', 'Enterprise-Grade Scalable AI Platform'] },
        { q: 'Do you require integration with existing systems?', options: ['CRM', 'ERP', 'Cloud', 'APIs', 'Mobile App', 'No integration needed'] },
        { q: 'What is your expected deployment environment?', options: ['Cloud (AWS, Azure, GCP)', 'On-Premise', 'Hybrid'] }
      ],
      erp: [
        { q: 'Which departments need ERP implementation?', options: ['HR', 'Finance', 'Inventory', 'Sales', 'Manufacturing', 'All Departments'] },
        { q: 'Are you currently using any ERP system?', options: ['Yes (Upgrade/Migration)', 'No (New Implementation)'] },
        { q: 'What level of ERP solution do you need?', options: ['Basic Module Setup', 'Custom ERP', 'Full Enterprise ERP'] },
        { q: 'Do you require customization based on your workflow?', options: ['Minimal', 'Moderate', 'Fully Custom'] },
        { q: 'Do you need integration with third-party tools?', options: ['Banking', 'GST', 'CRM', 'E-commerce', 'No integration needed'] },
        { q: 'What is your preferred deployment model?', options: ['Cloud-Based ERP', 'On-Premise ERP', 'Hybrid'] }
      ],
      staffing: [
        { q: 'What type of roles are you hiring for?', options: ['IT', 'Non-IT', 'Contract', 'Permanent', 'Remote'] },
        { q: 'What experience level are you looking for?', options: ['Entry-Level', 'Mid-Level', 'Senior-Level', 'Leadership / C-Suite'] },
        { q: 'What is the expected hiring timeline?', options: ['Immediate', '1–3 Months', 'Ongoing Hiring'] },
        { q: 'What is your hiring model?', options: ['Permanent Staffing', 'Contract Staffing', 'Contract-to-Hire', 'Bulk Hiring'] },
        { q: 'What key skills or technologies are mandatory?', options: ['Python', 'React', 'SAP', 'Testing', 'Java', 'Other'] },
        { q: 'Do you require additional services?', options: ['Background Verification', 'Payroll Management', 'HR Compliance Support', 'None'] }
      ],
      web: [
        { q: 'What type of website/application do you need?', options: ['Business Website', 'E-commerce Platform', 'Web Application', 'Portfolio Website', 'SaaS Platform'] },
        { q: 'What is the main objective of the website?', options: ['Branding', 'Lead Generation', 'Online Sales', 'Internal Management'] },
        { q: 'Do you require any specific features?', options: ['Login system', 'Payment gateway', 'Admin dashboard', 'Chatbot', 'API integration'] },
        { q: 'What design level are you expecting?', options: ['Template-Based', 'Custom UI/UX', 'Premium Enterprise-Level Design'] },
        { q: 'Do you already have hosting & domain?', options: ['Yes', 'No (Need complete setup support)'] },
        { q: 'What level of scalability do you expect?', options: ['Small Business', 'Growing Startup', 'High Traffic / Enterprise'] }
      ]
    };

    const qs = questions[this.formData.service];
    let html = '';
    qs.forEach((q, i) => {
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
      const serviceNames = {
        ai: 'AI Solutions',
        erp: 'ERP Planning',
        staffing: 'Staffing Solutions',
        web: 'Web Development'
      };

      const questions = {
        ai: [
          'What business problem are you looking to solve using AI?',
          'What type of AI solution are you interested in?',
          'What kind of data do you currently have?',
          'What level of AI product are you expecting?',
          'Do you require integration with existing systems?',
          'What is your expected deployment environment?'
        ],
        erp: [
          'Which departments need ERP implementation?',
          'Are you currently using any ERP system?',
          'What level of ERP solution do you need?',
          'Do you require customization based on your workflow?',
          'Do you need integration with third-party tools?',
          'What is your preferred deployment model?'
        ],
        staffing: [
          'What type of roles are you hiring for?',
          'What experience level are you looking for?',
          'What is the expected hiring timeline?',
          'What is your hiring model?',
          'What key skills or technologies are mandatory?',
          'Do you require additional services?'
        ],
        web: [
          'What type of website/application do you need?',
          'What is the main objective of the website?',
          'Do you require any specific features?',
          'What design level are you expecting?',
          'Do you already have hosting & domain?',
          'What level of scalability do you expect?'
        ]
      };

      const service = this.formData.service;
      const qs = questions[service];
      let questionsText = '';
      
      qs.forEach((q, i) => {
        const answer = this.formData[`q${i + 1}`] || 'Not answered';
        questionsText += `Q${i + 1}: ${q}\nAnswer: ${answer}\n\n`;
      });

      await emailjs.send("service_pa43dns", "template_sr6fu8g", {
        service: serviceNames[service],
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        message: `Service: ${serviceNames[service]}`,
        questions: questionsText
      });
      console.log('Email sent successfully!');
    } catch(e) {
      console.error('EmailJS Error:', e);
      alert('There was an error sending your information. Please try again.');
      btn.textContent = 'Submit';
      btn.disabled = false;
      return;
    }

    this.nextStep();
    setTimeout(() => this.close(), 3000);
  }

  generatePDFContent() {
    return '';
  }

  htmlToPdf() {
    return Promise.resolve(new Blob());
  }

  blobToBase64() {
    return Promise.resolve('');
  }
}

let leadPopup;
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if (typeof emailjs !== 'undefined') {
      emailjs.init("jc8MwEV88GcpV6a7p");
    }
  });
}
