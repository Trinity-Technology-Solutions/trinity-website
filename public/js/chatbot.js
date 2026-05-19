(function () {
  // Inject HTML
  document.body.insertAdjacentHTML('beforeend', `
    <div id="chatbot-container">
      <div id="greeting-popup" class="chatbot-greeting">
        <div class="greeting-content">
          <div class="greeting-avatar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="white"/>
            </svg>
          </div>
          <div class="greeting-text">
            <p>👋 Hi! I'm Trinity. Need help with our IT solutions or data services?</p>
            <small>Click to chat with me!</small>
          </div>
          <button id="dismiss-greeting" class="dismiss-btn">×</button>
        </div>
      </div>

      <button id="chat-button" class="chat-button" aria-label="Open chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div id="chat-interface" class="chat-interface hidden">
        <div class="chat-header">
          <div class="header-info">
            <div class="header-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="white"/>
              </svg>
            </div>
            <div>
              <h3>Trinity</h3>
              <p>Digital Transformation Assistant</p>
            </div>
          </div>
          <button id="close-chat" class="close-btn">×</button>
        </div>

        <div id="messages-container" class="messages-container">
          <div class="message bot-message">
            <div class="message-avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="#22396b"/>
              </svg>
            </div>
            <div class="message-content">
              👋 Hi! I'm Trinity, your digital transformation assistant from Trinity Technology Solutions. I can help you with our IT consulting, software development, cloud solutions, data engineering services, and more. How can I assist you today?
            </div>
          </div>
        </div>

        <div id="quick-actions" class="quick-actions">
          <button class="quick-action">What does Trinity Technology Solutions do?</button>
          <button class="quick-action">Databricks Partnership</button>
          <button class="quick-action">Contact Information</button>
          <button class="quick-action">Career Opportunities</button>
          <button class="quick-action">Marketing Services</button>
          <button class="quick-action" data-href="contact.html#book-appointment">Schedule a Meeting</button>
        </div>

        <div class="chat-input">
          <input type="text" id="message-input" placeholder="Ask Trinity about Trinity Technology Solutions...">
          <button id="send-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `);

  class Chatbot {
    constructor() {
      this.isTyping = false;
      this.init();
    }

    init() {
      document.getElementById('chat-button').addEventListener('click', () => this.openChat());
      document.getElementById('close-chat').addEventListener('click', () => this.closeChat());
      document.getElementById('dismiss-greeting').addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('greeting-popup').style.display = 'none'; });
      document.getElementById('greeting-popup').addEventListener('click', () => this.openChat());
      document.getElementById('send-button').addEventListener('click', () => this.sendMessage());
      document.getElementById('message-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') this.sendMessage(); });

      document.querySelectorAll('.quick-action').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.href) { window.location.href = btn.dataset.href; return; }
          this.sendMessage(btn.textContent.trim());
        });
      });

      setTimeout(() => {
        const g = document.getElementById('greeting-popup');
        g.style.display = 'block';
        g.style.opacity = '0';
        g.style.transform = 'translateY(10px)';
        g.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        setTimeout(() => { g.style.opacity = '1'; g.style.transform = 'translateY(0)'; }, 100);
      }, 3000);
    }

    openChat() {
      document.getElementById('chat-interface').classList.remove('hidden');
      document.getElementById('chat-button').style.display = 'none';
      document.getElementById('greeting-popup').style.display = 'none';
      document.getElementById('quick-actions').style.display = 'flex';
    }

    closeChat() {
      document.getElementById('chat-interface').classList.add('hidden');
      document.getElementById('chat-button').style.display = 'flex';
    }

    sendMessage(text = null) {
      const input = document.getElementById('message-input');
      const message = text || input.value.trim();
      if (!message || this.isTyping) return;

      this.addMessage(message, 'user');
      input.value = '';
      document.getElementById('quick-actions').style.display = 'none';

      this.showTyping();
      setTimeout(() => {
        this.hideTyping();
        this.addMessage(this.getResponse(message), 'bot');
      }, 1500);
    }

    addMessage(text, sender) {
      const container = document.getElementById('messages-container');
      const div = document.createElement('div');
      div.className = `message ${sender}-message`;

      const avatar = document.createElement('div');
      avatar.className = 'message-avatar';
      avatar.innerHTML = sender === 'user'
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="#22396b"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/></svg>';

      const content = document.createElement('div');
      content.className = 'message-content';
      content.textContent = text;

      div.appendChild(avatar);
      div.appendChild(content);
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    }

    showTyping() {
      this.isTyping = true;
      const container = document.getElementById('messages-container');
      const div = document.createElement('div');
      div.id = 'typing-indicator';
      div.className = 'message bot-message';
      div.innerHTML = `
        <div class="message-avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#22396b"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/></svg>
        </div>
        <div class="message-content typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>`;
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    }

    hideTyping() {
      this.isTyping = false;
      const el = document.getElementById('typing-indicator');
      if (el) el.remove();
    }

    getResponse(input) {
      const t = input.toLowerCase();
      if (t.includes('what does trinity') || t.includes('what do you do') || t.includes('tell me about'))
        return "Trinity Technology Solutions is a digital transformation company offering IT consulting, software development, cloud solutions, and data engineering services tailored for enterprises across various industries.";
      if (t.includes('location') || t.includes('where are you') || t.includes('office'))
        return "We are headquartered in Chennai, India, and serve clients globally across the U.S., Europe, and Asia-Pacific regions. Our office hours are Monday to Friday, 9:00 AM to 6:00 PM IST.";
      if (t.includes('contact') || t.includes('reach') || t.includes('email') || t.includes('talk'))
        return "You can contact us by emailing sales@trinitetech.com or using the contact form on our website. We'll assist you promptly!";
      if (t.includes('schedule') || t.includes('meeting') || t.includes('appointment')) {
        window.location.href = 'contact.html#book-appointment';
        return "Redirecting you to our appointment booking section...";
      }
      if (t.includes('databricks'))
        return "Yes, we are a certified Databricks partner! We provide Modern Data Platform with Databricks Lakehouse, Migration Accelerator, Data Governance & Lineage using Unity Catalog, and Industry-Specific Accelerators for BFSI, Retail, Healthcare, and more.";
      if (t.includes('service') || t.includes('solutions'))
        return "We provide end-to-end IT services including application development, cloud infrastructure, DevOps, data engineering, and digital marketing via our sister brand, Growthpulse.";
      if (t.includes('marketing') || t.includes('growthpulse'))
        return "Growthpulse, our sister brand, offers B2B lead generation, paid ad campaigns (Google, LinkedIn), SEO, content marketing, and marketing automation services to drive growth.";
      if (t.includes('hiring') || t.includes('career') || t.includes('job'))
        return "Yes! We're always looking for talented individuals. Please check our Careers page or email your resume to sales@trinitetech.com.";
      if (t.includes('quote') || t.includes('proposal') || t.includes('pricing') || t.includes('cost'))
        return "Send your requirements to sales@trinitetech.com or fill out the form on our website, and our team will respond with a customized proposal.";
      return "That's a great question! I'm Trinity, here to help you explore how Trinity Technology Solutions can transform your business. Would you like to know more about our services, partnerships, or discuss your specific challenges?";
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Chatbot());
  } else {
    new Chatbot();
  }
})();
