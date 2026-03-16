class ServiceLeadPopup {
  constructor(serviceType) {
    this.serviceType = serviceType;
    this.currentStep = 1;
    this.formData = {};
    this.init();
  }

  init() {
    this.createPopup();
  }

  createPopup() {
    const html = `
      <div class="lead-overlay" id="leadOverlay">
        <div class="lead-modal svc-modal">
          <button class="modal-close" onclick="servicePopup.close()">&times;</button>
          <div class="modal-body svc-modal-body">
            <div class="step-indicator">
              <span class="step-dot active"></span>
              <span class="step-dot"></span>
              <span class="step-dot"></span>
            </div>

            <!-- Step 1: Contact Info -->
            <div class="step-content active" data-step="1">
              <h2 class="step-title">Tell us about yourself</h2>
              <p class="step-subtitle">We'll use this to get in touch with you</p>
              <div class="svc-form-grid">
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
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-secondary" onclick="servicePopup.close()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="servicePopup.nextStep()">Continue</button>
              </div>
            </div>

            <!-- Step 2: Service Questions -->
            <div class="step-content" data-step="2">
              <h2 class="step-title" id="questionTitle">Questions</h2>
              <p class="step-subtitle" id="questionSubtitle">Help us understand your needs</p>
              <form id="detailsForm">
                <div id="serviceQuestions" class="svc-questions-grid"></div>
                <div class="btn-group">
                  <button type="button" class="btn btn-secondary" onclick="servicePopup.prevStep()">Back</button>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>

            <!-- Step 3: Success -->
            <div class="step-content" data-step="3">
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
    this.loadServiceQuestions();
  }

  show() {
    document.getElementById('leadOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    document.getElementById('leadOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  switchStep(from, to) {
    const fromEl = document.querySelector(`[data-step="${from}"]`);
    const toEl = document.querySelector(`[data-step="${to}"]`);
    if (fromEl) fromEl.classList.remove('active');
    if (toEl) toEl.classList.add('active');
    this.currentStep = to;
    document.querySelectorAll('.step-dot').forEach((dot, i) => dot.classList.toggle('active', i < to));
  }

  nextStep() {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const address = document.getElementById('userAddress').value.trim();
    if (!name || !email || !phone || !address) {
      alert('Please fill all fields');
      return;
    }
    this.formData.name = name;
    this.formData.email = email;
    this.formData.phone = phone;
    this.formData.address = address;
    this.switchStep(1, 2);
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
      },
      bi: {
        title: 'Business Intelligence',
        subtitle: 'Help us understand your BI needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What is your primary BI objective?', options: ['Sales Analytics', 'Financial Reporting', 'Customer Analytics', 'Operational Metrics', 'All of the above'] },
          { q: 'What data sources do you have?', options: ['ERP', 'CRM', 'Database', 'Multiple sources', 'None yet'] },
          { q: 'What BI tools are you interested in?', options: ['Tableau', 'Power BI', 'Looker', 'Custom Solution', 'Not sure'] },
          { q: 'Would you like a FREE BI Consultation?', options: ['Yes', 'No'] }
        ]
      },
      de: {
        title: 'Data Engineering',
        subtitle: 'Help us understand your data engineering needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What is your current data volume?', options: ['<1TB', '1-10TB', '10-100TB', '>100TB'] },
          { q: 'What data sources need integration?', options: ['Databases', 'APIs', 'Cloud Storage', 'Multiple sources', 'Not sure'] },
          { q: 'What cloud platform do you prefer?', options: ['AWS', 'Azure', 'GCP', 'On-Premise', 'Hybrid'] },
          { q: 'Would you like a FREE Data Engineering Consultation?', options: ['Yes', 'No'] }
        ]
      },
      dg: {
        title: 'Data Governance',
        subtitle: 'Help us understand your governance needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What are your main governance concerns?', options: ['Compliance', 'Data Quality', 'Security', 'Privacy', 'All'] },
          { q: 'Which regulations apply to you?', options: ['GDPR', 'CCPA', 'HIPAA', 'SOX', 'Other', 'None'] },
          { q: 'What is your current governance maturity?', options: ['Beginner', 'Intermediate', 'Advanced', 'Enterprise'] },
          { q: 'Would you like a FREE Data Governance Consultation?', options: ['Yes', 'No'] }
        ]
      },
      dm: {
        title: 'Data Modernization',
        subtitle: 'Help us understand your modernization needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What is your current infrastructure?', options: ['On-Premise', 'Partial Cloud', 'Legacy Systems', 'Mixed'] },
          { q: 'What is your primary goal?', options: ['Cost Reduction', 'Performance', 'Scalability', 'Modernization', 'All'] },
          { q: 'What cloud platform do you prefer?', options: ['AWS', 'Azure', 'GCP', 'Multi-cloud', 'Not sure'] },
          { q: 'Would you like a FREE Data Modernization Consultation?', options: ['Yes', 'No'] }
        ]
      },
      ds: {
        title: 'Data Strategy',
        subtitle: 'Help us understand your strategy needs',
        questions: [
          { q: 'What is your business/company name?', type: 'text', placeholder: 'Enter your company name' },
          { q: 'What is your main business challenge?', options: ['Data Silos', 'Poor Data Quality', 'Lack of Insights', 'Compliance', 'All'] },
          { q: 'What is your data maturity level?', options: ['Beginner', 'Intermediate', 'Advanced', 'Enterprise'] },
          { q: 'What are your strategic goals?', options: ['Improve Analytics', 'Enable AI/ML', 'Better Decision Making', 'Cost Optimization', 'All'] },
          { q: 'Would you like a FREE Data Strategy Consultation?', options: ['Yes', 'No'] }
        ]
      }
    };

    const svc = config[this.serviceType];
    document.getElementById('questionTitle').textContent = svc.title;
    document.getElementById('questionSubtitle').textContent = svc.subtitle;

    let html = '';
    svc.questions.forEach((q, i) => {
      if (q.type === 'text') {
        html += `<div class="form-field"><label>${i + 1}. ${q.q} <span style="color:#dc2626;">*</span></label><input type="text" name="q${i + 1}" placeholder="${q.placeholder || ''}" required></div>`;
      } else {
        html += `<div class="form-field"><label>${i + 1}. ${q.q} <span style="color:#dc2626;">*</span></label><select name="q${i + 1}" required><option value="">Select...</option>`;
        q.options.forEach(opt => html += `<option value="${opt}">${opt}</option>`);
        html += `</select></div>`;
      }
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

    const serviceNames = {
      ai: 'AI Solutions', erp: 'ERP Planning', staffing: 'Staffing Solutions', web: 'Web Development',
      bi: 'Business Intelligence', de: 'Data Engineering', dg: 'Data Governance', dm: 'Data Modernization', ds: 'Data Strategy'
    };

    const questionLabels = {
      ai: ['What is your business/company name?', 'What industry is your business in?', 'What do you want to use AI for?', 'Are you currently using any automation or software tools?', 'Would you like a FREE AI Solutions Consultation?'],
      erp: ['What is your business/company name?', 'What industry is your business in?', 'Which business processes do you want to manage with ERP?', 'Are you currently using any software for managing your business?', 'Would you like a FREE ERP Planning Consultation?'],
      staffing: ['What is your business/company name?', 'What industry is your business in?', 'What type of staffing support do you need?', 'Which roles are you looking to hire for?', 'Would you like a FREE Staffing Solutions Consultation?'],
      web: ['What is your business/company name?', 'What industry is your business in?', 'What type of website are you looking for?', 'Do you need additional services for your website?', 'Would you like a FREE Web Development Consultation?'],
      bi: ['What is your business/company name?', 'What is your primary BI objective?', 'What data sources do you have?', 'What BI tools are you interested in?', 'Would you like a FREE BI Consultation?'],
      de: ['What is your business/company name?', 'What is your current data volume?', 'What data sources need integration?', 'What cloud platform do you prefer?', 'Would you like a FREE Data Engineering Consultation?'],
      dg: ['What is your business/company name?', 'What are your main governance concerns?', 'Which regulations apply to you?', 'What is your current governance maturity?', 'Would you like a FREE Data Governance Consultation?'],
      dm: ['What is your business/company name?', 'What is your current infrastructure?', 'What is your primary goal?', 'What cloud platform do you prefer?', 'Would you like a FREE Data Modernization Consultation?'],
      ds: ['What is your business/company name?', 'What is your main business challenge?', 'What is your data maturity level?', 'What are your strategic goals?', 'Would you like a FREE Data Strategy Consultation?']
    };

    const qs = questionLabels[this.serviceType];
    let questionsText = '';
    qs.forEach((q, i) => {
      questionsText += `Q${i + 1}: ${q}\nAnswer: ${this.formData[`q${i + 1}`] || 'Not answered'}\n\n`;
    });

    try {
      await emailjs.send("service_pa43dns", "template_sr6fu8g", {
        service: serviceNames[this.serviceType],
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        message: `Service: ${serviceNames[this.serviceType]}`,
        questions: questionsText
      });
    } catch (err) {
      console.error('EmailJS Error:', err);
    }

    this.switchStep(2, 3);
    setTimeout(() => this.close(), 3000);
  }
}

let servicePopup;
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if (typeof emailjs !== 'undefined') emailjs.init("jc8MwEV88GcpV6a7p");
  });
}
