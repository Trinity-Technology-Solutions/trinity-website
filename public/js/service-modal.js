class ServiceModal {
  constructor() {
    this.selectedService = null;
    this.init();
  }

  init() {
    this.createModal();
    setTimeout(() => this.show(), 500);
  }

  createModal() {
    const html = `
      <div class="service-modal-overlay" id="serviceModalOverlay">
        <div class="service-modal">
          <button class="modal-close-btn" onclick="serviceModal.close()">&times;</button>
          
          <div class="modal-header">
            <div class="modal-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <h2>What can we help you with?</h2>
            <p>Select the service you're interested in</p>
          </div>

          <div class="services-grid">
            <div class="service-card-glass" onclick="serviceModal.selectService('ai')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9.663 17H7.5C6.837 17 6.201 16.737 5.732 16.268C5.263 15.799 5 15.163 5 14.5C5 13.837 5.263 13.201 5.732 12.732C6.201 12.263 6.837 12 7.5 12C7.5 10.674 8.027 9.402 8.964 8.464C9.902 7.527 11.174 7 12.5 7C13.826 7 15.098 7.527 16.036 8.464C16.973 9.402 17.5 10.674 17.5 12H16.5C17.163 12 17.799 12.263 18.268 12.732C18.737 13.201 19 13.837 19 14.5C19 15.163 18.737 15.799 18.268 16.268C17.799 16.737 17.163 17 16.5 17H14.337"/>
              </svg>
              <span>AI Solutions</span>
            </div>

            <div class="service-card-glass" onclick="serviceModal.selectService('staffing')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <path d="M17 11l2 2 4-4"/>
              </svg>
              <span>Staffing Solutions</span>
            </div>

            <div class="service-card-glass" onclick="serviceModal.selectService('web')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"/>
                <path d="M14 2V8H20"/>
                <path d="M16 13H8M16 17H8"/>
              </svg>
              <span>Web Development</span>
            </div>

            <div class="service-card-glass" onclick="serviceModal.selectService('erp')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M8 7h8M8 11h8M8 15h4"/>
              </svg>
              <span>ERP Planning</span>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
  }

  selectService(service) {
    this.selectedService = service;
    const modal = document.querySelector('.service-modal');
    modal.innerHTML = `
      <button class="modal-close-btn" onclick="serviceModal.close()">&times;</button>
      
      <div class="modal-header">
        <div class="modal-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
          </svg>
        </div>
        <h2>Join Trinity Premium</h2>
        <p>Join Trinity for full access to all the content</p>
      </div>

      <form class="modal-form" id="serviceForm">
        <div class="form-group">
          <input type="email" id="userEmail" name="email" placeholder="Enter your email" required>
        </div>

        <div class="modal-actions">
          <button type="button" class="modal-btn modal-btn-secondary" onclick="serviceModal.backStep()">Back</button>
          <button type="submit" class="modal-btn modal-btn-primary">Join Now</button>
        </div>
      </form>
    `;
    document.getElementById('serviceForm').addEventListener('submit', (e) => this.handleSubmit(e));
  }

  backStep() {
    location.reload();
  }

  show() {
    const overlay = document.getElementById('serviceModalOverlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    const overlay = document.getElementById('serviceModalOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
      sessionStorage.setItem('trinityServiceModal', '1');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('userEmail').value.trim();
    
    if (!email) {
      alert('Please enter your email');
      return;
    }

    sessionStorage.setItem('userEmail', email);
    sessionStorage.setItem('selectedService', this.selectedService);
    this.close();
    window.location.href = `contact.html?email=${encodeURIComponent(email)}&service=${this.selectedService}`;
  }
}

if (!sessionStorage.getItem('trinityServiceModal')) {
  window.serviceModal = new ServiceModal();
}
