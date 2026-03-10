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
        <div class="lead-modal">
          <button class="modal-close" onclick="servicePopup.close()">&times;</button>
          <div class="modal-body">
            <div class="step-indicator">
              <span class="step-dot active"></span>
              <span class="step-dot"></span>
            </div>

            <!-- Step 1: Contact Info -->
            <div class="step-content active" data-step="1">
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
                <button type="button" class="btn btn-secondary" onclick="servicePopup.close()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="servicePopup.nextStep()">Continue</button>
              </div>
            </div>

            <!-- Step 2: Service Questions -->
            <div class="step-content" data-step="2">
              <h2 class="step-title" id="questionTitle">Questions</h2>
              <p class="step-subtitle" id="questionSubtitle">Help us understand your needs</p>
              <form id="detailsForm">
                <div id="serviceQuestions"></div>
                <div class="btn-group">
                  <button type="button" class="btn btn-secondary" onclick="servicePopup.prevStep()">Back</button>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>

            <!-- Success -->
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

  nextStep() {
    const name = document.getElementById('userName')?.value.trim();
    const email = document.getElementById('userEmail')?.value.trim();
    const phone = document.getElementById('userPhone')?.value.trim();
    const address = document.getElementById('userAddress')?.value.trim();
    
    if (!name || !email || !phone || !address) {
      alert('Please fill all fields');
      return;
    }
    
    this.formData.name = name;
    this.formData.email = email;
    this.formData.phone = phone;
    this.formData.address = address;
    
    const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
    if (currentStepEl) currentStepEl.classList.remove('active');
    this.currentStep++;
    const nextStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
    if (nextStepEl) nextStepEl.classList.add('active');
    document.querySelectorAll('.step-dot')[this.currentStep - 1].classList.add('active');
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
      web: { title: 'Web Development', subtitle: 'Help us understand your website/application needs' },
      bi: { title: 'Business Intelligence', subtitle: 'Help us understand your BI needs' },
      de: { title: 'Data Engineering', subtitle: 'Help us understand your data engineering needs' },
      dg: { title: 'Data Governance', subtitle: 'Help us understand your governance needs' },
      dm: { title: 'Data Modernization', subtitle: 'Help us understand your modernization needs' },
      ds: { title: 'Data Strategy', subtitle: 'Help us understand your strategy needs' }
    };

    document.getElementById('questionTitle').textContent = serviceTitles[this.serviceType].title;
    document.getElementById('questionSubtitle').textContent = serviceTitles[this.serviceType].subtitle;

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
      ],
      bi: [
        { q: 'What is your primary BI objective?', options: ['Sales Analytics', 'Financial Reporting', 'Customer Analytics', 'Operational Metrics', 'All of the above'] },
        { q: 'What data sources do you have?', options: ['ERP', 'CRM', 'Database', 'Multiple sources', 'None yet'] },
        { q: 'What BI tools are you interested in?', options: ['Tableau', 'Power BI', 'Looker', 'Custom Solution', 'Not sure'] },
        { q: 'What is your timeline?', options: ['Immediate', '1-3 months', '3-6 months', 'Flexible'] },
        { q: 'Do you need real-time dashboards?', options: ['Yes', 'No', 'Maybe'] },
        { q: 'What is your budget range?', options: ['<$10K', '$10K-$50K', '$50K-$100K', '>$100K'] }
      ],
      de: [
        { q: 'What is your current data volume?', options: ['<1TB', '1-10TB', '10-100TB', '>100TB'] },
        { q: 'What data sources need integration?', options: ['Databases', 'APIs', 'Cloud Storage', 'Multiple sources', 'Not sure'] },
        { q: 'What is your primary use case?', options: ['Analytics', 'Machine Learning', 'Real-time Processing', 'Data Warehouse', 'Multiple'] },
        { q: 'What cloud platform do you prefer?', options: ['AWS', 'Azure', 'GCP', 'On-Premise', 'Hybrid'] },
        { q: 'Do you need real-time data pipelines?', options: ['Yes', 'No', 'Both batch and real-time'] },
        { q: 'What is your timeline?', options: ['Immediate', '1-3 months', '3-6 months', 'Flexible'] }
      ],
      dg: [
        { q: 'What are your main governance concerns?', options: ['Compliance', 'Data Quality', 'Security', 'Privacy', 'All'] },
        { q: 'Which regulations apply to you?', options: ['GDPR', 'CCPA', 'HIPAA', 'SOX', 'Other', 'None'] },
        { q: 'What is your current governance maturity?', options: ['Beginner', 'Intermediate', 'Advanced', 'Enterprise'] },
        { q: 'Do you have a data governance team?', options: ['Yes', 'No', 'Planning to build'] },
        { q: 'What tools are you using?', options: ['Collibra', 'Alation', 'Custom', 'None yet'] },
        { q: 'What is your timeline?', options: ['Immediate', '1-3 months', '3-6 months', 'Flexible'] }
      ],
      dm: [
        { q: 'What is your current infrastructure?', options: ['On-Premise', 'Partial Cloud', 'Legacy Systems', 'Mixed'] },
        { q: 'What is your primary goal?', options: ['Cost Reduction', 'Performance', 'Scalability', 'Modernization', 'All'] },
        { q: 'What cloud platform do you prefer?', options: ['AWS', 'Azure', 'GCP', 'Multi-cloud', 'Not sure'] },
        { q: 'Do you need data migration?', options: ['Yes', 'No', 'Partial'] },
        { q: 'What is your downtime tolerance?', options: ['Zero downtime', 'Minimal', 'Can tolerate downtime'] },
        { q: 'What is your timeline?', options: ['Immediate', '1-3 months', '3-6 months', 'Flexible'] }
      ],
      ds: [
        { q: 'What is your main business challenge?', options: ['Data Silos', 'Poor Data Quality', 'Lack of Insights', 'Compliance', 'All'] },
        { q: 'What is your data maturity level?', options: ['Beginner', 'Intermediate', 'Advanced', 'Enterprise'] },
        { q: 'What are your strategic goals?', options: ['Improve Analytics', 'Enable AI/ML', 'Better Decision Making', 'Cost Optimization', 'All'] },
        { q: 'Do you have a data team?', options: ['Yes', 'No', 'Planning to build'] },
        { q: 'What is your budget range?', options: ['<$50K', '$50K-$200K', '$200K-$500K', '>$500K'] },
        { q: 'What is your timeline?', options: ['Immediate', '1-3 months', '3-6 months', 'Flexible'] }
      ]
    };

    const qs = questions[this.serviceType];
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
        ai: 'AI Solutions', erp: 'ERP Planning', staffing: 'Staffing Solutions', web: 'Web Development',
        bi: 'Business Intelligence', de: 'Data Engineering', dg: 'Data Governance', dm: 'Data Modernization', ds: 'Data Strategy'
      };

      const questions = {
        ai: ['What business problem are you looking to solve using AI?', 'What type of AI solution are you interested in?', 'What kind of data do you currently have?', 'What level of AI product are you expecting?', 'Do you require integration with existing systems?', 'What is your expected deployment environment?'],
        erp: ['Which departments need ERP implementation?', 'Are you currently using any ERP system?', 'What level of ERP solution do you need?', 'Do you require customization based on your workflow?', 'Do you need integration with third-party tools?', 'What is your preferred deployment model?'],
        staffing: ['What type of roles are you hiring for?', 'What experience level are you looking for?', 'What is the expected hiring timeline?', 'What is your hiring model?', 'What key skills or technologies are mandatory?', 'Do you require additional services?'],
        web: ['What type of website/application do you need?', 'What is the main objective of the website?', 'Do you require any specific features?', 'What design level are you expecting?', 'Do you already have hosting & domain?', 'What level of scalability do you expect?'],
        bi: ['What is your primary BI objective?', 'What data sources do you have?', 'What BI tools are you interested in?', 'What is your timeline?', 'Do you need real-time dashboards?', 'What is your budget range?'],
        de: ['What is your current data volume?', 'What data sources need integration?', 'What is your primary use case?', 'What cloud platform do you prefer?', 'Do you need real-time data pipelines?', 'What is your timeline?'],
        dg: ['What are your main governance concerns?', 'Which regulations apply to you?', 'What is your current governance maturity?', 'Do you have a data governance team?', 'What tools are you using?', 'What is your timeline?'],
        dm: ['What is your current infrastructure?', 'What is your primary goal?', 'What cloud platform do you prefer?', 'Do you need data migration?', 'What is your downtime tolerance?', 'What is your timeline?'],
        ds: ['What is your main business challenge?', 'What is your data maturity level?', 'What are your strategic goals?', 'Do you have a data team?', 'What is your budget range?', 'What is your timeline?']
      };

      const qs = questions[this.serviceType];
      let questionsText = '';
      qs.forEach((q, i) => {
        const answer = this.formData[`q${i + 1}`] || 'Not answered';
        questionsText += `Q${i + 1}: ${q}\nAnswer: ${answer}\n\n`;
      });

      await emailjs.send("service_pa43dns", "template_sr6fu8g", {
        service: serviceNames[this.serviceType],
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        message: `Service: ${serviceNames[this.serviceType]}`,
        questions: questionsText
      });
    } catch(e) {
      console.error('EmailJS Error:', e);
      alert('There was an error sending your information. Please try again.');
      btn.textContent = 'Submit';
      btn.disabled = false;
      return;
    }

    document.querySelector('[data-step="2"]').classList.remove('active');
    document.querySelector('[data-step="3"]').classList.add('active');
    setTimeout(() => this.close(), 3000);
  }
}

let servicePopup;
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if (typeof emailjs !== 'undefined') {
      emailjs.init("jc8MwEV88GcpV6a7p");
    }
  });
}
