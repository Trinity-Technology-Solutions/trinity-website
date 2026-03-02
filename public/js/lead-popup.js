// Lead Generation Popup System
class LeadPopup {
  constructor() {
    this.currentService = null;
    this.formData = {};
    this.init();
  }

  init() {
    this.createPopup();
    this.bindEvents();
    this.showPopupOnLoad();
  }

  createPopup() {
    const popupHTML = `
      <div class="lead-popup-overlay" id="leadPopup">
        <div class="lead-popup">
          <button class="popup-close" onclick="leadPopup.close()">&times;</button>
          
          <div class="popup-header">
            <h2>Welcome to Trinity Technology Solutions</h2>
            <p>Transform your business with data analytics, AI, and innovative technology solutions</p>
          </div>

          <div class="popup-content">
            <div id="serviceSelection">
              <h3 style="text-align: center; margin-bottom: 1rem; color: #1f2937;">Select a Service</h3>
              <div class="services-grid-popup">
                <button class="service-btn" onclick="leadPopup.selectService('ai')">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22396b" stroke-width="2">
                    <path d="M9.663 17H7.5C6.83696 17 6.20107 16.7366 5.73223 16.2678C5.26339 15.7989 5 15.163 5 14.5C5 13.837 5.26339 13.2011 5.73223 12.7322C6.20107 12.2634 6.83696 12 7.5 12C7.5 10.6739 8.02678 9.40215 8.96447 8.46447C9.90215 7.52678 11.1739 7 12.5 7C13.8261 7 15.0979 7.52678 16.0355 8.46447C16.9732 9.40215 17.5 10.6739 17.5 12H16.5C17.163 12 17.7989 12.2634 18.2678 12.7322C18.7366 13.2011 19 13.837 19 14.5C19 15.163 18.7366 15.7989 18.2678 16.2678C17.7989 16.7366 17.163 17 16.5 17H14.337"/>
                  </svg>
                  <h3>AI Solutions</h3>
                </button>
                <button class="service-btn" onclick="leadPopup.selectService('erp')">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22396b" stroke-width="2">
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3Z"/>
                    <path d="M8 7H16M8 11H16M8 15H12"/>
                  </svg>
                  <h3>ERP Planning</h3>
                </button>
                <button class="service-btn" onclick="leadPopup.selectService('staffing')">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22396b" stroke-width="2">
                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"/>
                    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"/>
                    <path d="M17 11L19 13L23 9"/>
                  </svg>
                  <h3>Staffing Solutions</h3>
                </button>
                <button class="service-btn" onclick="leadPopup.selectService('web')">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22396b" stroke-width="2">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"/>
                    <path d="M14 2V8H20M16 13H8M16 17H8"/>
                  </svg>
                  <h3>Web Development</h3>
                </button>
              </div>
            </div>

            <div id="leadForm" class="lead-form"></div>
            <div id="successMessage" class="success-message">
              <div class="success-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <path d="M20 6L9 17L4 12"/>
                </svg>
              </div>
              <h3>Thank You!</h3>
              <p>We've received your information and will contact you within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
  }

  showPopupOnLoad() {
    const hasSeenPopup = sessionStorage.getItem('trinityLeadPopup');
    if (!hasSeenPopup) {
      setTimeout(() => {
        document.getElementById('leadPopup').classList.add('active');
        document.body.style.overflow = 'hidden';
      }, 3000);
    }
  }

  close() {
    document.getElementById('leadPopup').classList.remove('active');
    document.body.style.overflow = 'auto';
    sessionStorage.setItem('trinityLeadPopup', 'seen');
  }

  selectService(service) {
    this.currentService = service;
    document.getElementById('serviceSelection').style.display = 'none';
    document.getElementById('leadForm').classList.add('active');
    this.renderForm(service);
  }

  renderForm(service) {
    const forms = {
      ai: {
        title: 'AI Solutions',
        questions: [
          { type: 'select', name: 'aiGoal', label: 'Primary AI Goal', options: ['Automation', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Other'] },
          { type: 'select', name: 'dataVolume', label: 'Data Volume', options: ['Small (< 1GB)', 'Medium (1-100GB)', 'Large (100GB-1TB)', 'Very Large (> 1TB)'] },
          { type: 'select', name: 'currentAI', label: 'Current AI Usage', options: ['No AI', 'Basic AI Tools', 'Advanced AI Systems', 'Custom AI Models'] },
          { type: 'select', name: 'industry', label: 'Industry', options: ['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Technology', 'Other'] },
          { type: 'select', name: 'timeline', label: 'Implementation Timeline', options: ['Immediate (< 1 month)', 'Short-term (1-3 months)', 'Medium-term (3-6 months)', 'Long-term (> 6 months)'] },
          { type: 'select', name: 'budget', label: 'Budget Range', options: ['< $10K', '$10K - $50K', '$50K - $100K', '$100K - $500K', '> $500K'] },
          { type: 'select', name: 'team', label: 'Team Size', options: ['1-10', '11-50', '51-200', '201-500', '500+'] },
          { type: 'textarea', name: 'challenges', label: 'Key Challenges', placeholder: 'Describe your main challenges...' },
          { type: 'select', name: 'integration', label: 'Integration Needs', options: ['Standalone Solution', 'Integrate with Existing Systems', 'Complete Overhaul', 'Not Sure'] },
          { type: 'textarea', name: 'expectations', label: 'Expected Outcomes', placeholder: 'What results do you expect?' }
        ]
      },
      erp: {
        title: 'ERP Planning',
        questions: [
          { type: 'select', name: 'erpType', label: 'ERP Type Needed', options: ['Cloud ERP', 'On-Premise ERP', 'Hybrid ERP', 'Not Sure'] },
          { type: 'select', name: 'modules', label: 'Key Modules', options: ['Finance & Accounting', 'HR & Payroll', 'Inventory Management', 'CRM', 'All Modules'] },
          { type: 'select', name: 'currentSystem', label: 'Current System', options: ['No ERP', 'Legacy ERP', 'Modern ERP', 'Multiple Systems'] },
          { type: 'select', name: 'users', label: 'Number of Users', options: ['1-10', '11-50', '51-200', '201-500', '500+'] },
          { type: 'select', name: 'locations', label: 'Business Locations', options: ['Single Location', '2-5 Locations', '6-10 Locations', '10+ Locations'] },
          { type: 'select', name: 'industry', label: 'Industry', options: ['Manufacturing', 'Retail', 'Healthcare', 'Services', 'Distribution', 'Other'] },
          { type: 'select', name: 'timeline', label: 'Implementation Timeline', options: ['< 3 months', '3-6 months', '6-12 months', '> 12 months'] },
          { type: 'select', name: 'budget', label: 'Budget Range', options: ['< $25K', '$25K - $100K', '$100K - $500K', '> $500K'] },
          { type: 'textarea', name: 'painPoints', label: 'Current Pain Points', placeholder: 'What problems are you facing?' },
          { type: 'textarea', name: 'requirements', label: 'Specific Requirements', placeholder: 'Any specific features needed?' }
        ]
      },
      staffing: {
        title: 'Staffing Solutions',
        questions: [
          { type: 'select', name: 'staffingType', label: 'Staffing Type', options: ['Contract', 'Permanent', 'Contract-to-Hire', 'Project-Based'] },
          { type: 'select', name: 'roles', label: 'Roles Needed', options: ['Developers', 'Data Engineers', 'AI/ML Engineers', 'DevOps', 'QA Engineers', 'Multiple Roles'] },
          { type: 'select', name: 'experience', label: 'Experience Level', options: ['Junior (0-2 years)', 'Mid-Level (2-5 years)', 'Senior (5-10 years)', 'Lead/Architect (10+ years)'] },
          { type: 'select', name: 'positions', label: 'Number of Positions', options: ['1-2', '3-5', '6-10', '10+'] },
          { type: 'select', name: 'duration', label: 'Contract Duration', options: ['< 3 months', '3-6 months', '6-12 months', '12+ months', 'Permanent'] },
          { type: 'select', name: 'location', label: 'Work Location', options: ['Remote', 'On-site', 'Hybrid', 'Flexible'] },
          { type: 'select', name: 'urgency', label: 'Urgency', options: ['Immediate (< 2 weeks)', 'Soon (2-4 weeks)', 'Normal (1-2 months)', 'Planning (> 2 months)'] },
          { type: 'select', name: 'skills', label: 'Key Technologies', options: ['Java/Spring', 'Python/Django', 'React/Node.js', 'Cloud (AWS/Azure)', 'Data Engineering', 'Multiple'] },
          { type: 'textarea', name: 'projectDetails', label: 'Project Details', placeholder: 'Describe the project/role...' },
          { type: 'textarea', name: 'requirements', label: 'Additional Requirements', placeholder: 'Any specific requirements?' }
        ]
      },
      web: {
        title: 'Web Development',
        questions: [
          { type: 'select', name: 'projectType', label: 'Project Type', options: ['New Website', 'Redesign', 'Web Application', 'E-commerce', 'Portal'] },
          { type: 'select', name: 'platform', label: 'Preferred Platform', options: ['Custom Development', 'WordPress', 'React/Next.js', 'E-commerce Platform', 'Not Sure'] },
          { type: 'select', name: 'pages', label: 'Number of Pages', options: ['1-5', '6-10', '11-20', '20+', 'Dynamic'] },
          { type: 'select', name: 'features', label: 'Key Features', options: ['Basic Website', 'User Authentication', 'Payment Integration', 'API Integration', 'Advanced Features'] },
          { type: 'select', name: 'design', label: 'Design Status', options: ['Need Design', 'Have Design', 'Need Both Design & Development', 'Redesign Existing'] },
          { type: 'select', name: 'responsive', label: 'Responsive Requirement', options: ['Mobile First', 'Desktop First', 'Both Equally', 'Desktop Only'] },
          { type: 'select', name: 'timeline', label: 'Project Timeline', options: ['< 1 month', '1-2 months', '2-3 months', '3-6 months', '> 6 months'] },
          { type: 'select', name: 'budget', label: 'Budget Range', options: ['< $5K', '$5K - $15K', '$15K - $50K', '$50K - $100K', '> $100K'] },
          { type: 'textarea', name: 'description', label: 'Project Description', placeholder: 'Describe your project...' },
          { type: 'textarea', name: 'references', label: 'Reference Websites', placeholder: 'Any websites you like?' }
        ]
      }
    };

    const formConfig = forms[service];
    let formHTML = `
      <h3 style="margin-bottom: 1.5rem; color: #1f2937;">${formConfig.title} - Tell Us About Your Needs</h3>
      <form id="serviceForm" onsubmit="leadPopup.submitForm(event)">
        <div class="form-group">
          <label>Full Name *</label>
          <input type="text" name="name" required>
        </div>
        <div class="form-group">
          <label>Email *</label>
          <input type="email" name="email" required>
        </div>
        <div class="form-group">
          <label>Phone *</label>
          <input type="tel" name="phone" required>
        </div>
        <div class="form-group">
          <label>Company Name *</label>
          <input type="text" name="company" required>
        </div>
    `;

    formConfig.questions.forEach((q, i) => {
      if (q.type === 'select') {
        formHTML += `
          <div class="form-group">
            <label>${q.label} *</label>
            <select name="${q.name}" required>
              <option value="">Select...</option>
              ${q.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
            </select>
          </div>
        `;
      } else if (q.type === 'textarea') {
        formHTML += `
          <div class="form-group">
            <label>${q.label}</label>
            <textarea name="${q.name}" placeholder="${q.placeholder || ''}"></textarea>
          </div>
        `;
      }
    });

    formHTML += `
        <div class="form-actions">
          <button type="button" class="btn-back" onclick="leadPopup.goBack()">Back</button>
          <button type="submit" class="btn-submit">Submit</button>
        </div>
      </form>
    `;

    document.getElementById('leadForm').innerHTML = formHTML;
  }

  goBack() {
    document.getElementById('serviceSelection').style.display = 'block';
    document.getElementById('leadForm').classList.remove('active');
    document.getElementById('leadForm').innerHTML = '';
    this.currentService = null;
  }

  async submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.service = this.currentService;

    // Send email using EmailJS
    try {
      const submitBtn = form.querySelector('.btn-submit');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Format data for email
      let emailContent = `New Lead from Trinity Website\n\n`;
      emailContent += `Service: ${this.currentService.toUpperCase()}\n\n`;
      emailContent += `Contact Information:\n`;
      emailContent += `Name: ${data.name}\n`;
      emailContent += `Email: ${data.email}\n`;
      emailContent += `Phone: ${data.phone}\n`;
      emailContent += `Company: ${data.company}\n\n`;
      emailContent += `Details:\n`;
      
      Object.keys(data).forEach(key => {
        if (!['name', 'email', 'phone', 'company', 'service'].includes(key)) {
          emailContent += `${key}: ${data[key]}\n`;
        }
      });

      await emailjs.send(
        "service_m8it7mm",
        "template_i2yx6lo",
        {
          from_name: data.name,
          from_email: data.email,
          message: emailContent,
          title: `${this.currentService.toUpperCase()} Service Inquiry`
        },
        "pqGNmyI4nmJpnTacM"
      );

      // Show success message
      document.getElementById('leadForm').classList.remove('active');
      document.getElementById('successMessage').classList.add('active');

      setTimeout(() => {
        this.close();
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
      alert('Thank you! We will contact you soon.');
      this.close();
    }
  }
}

// Initialize on page load
let leadPopup;
document.addEventListener('DOMContentLoaded', () => {
  leadPopup = new LeadPopup();
});
