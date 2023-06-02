function generateWhatsAppWidget(phoneNumber, message) {
    var script = document.createElement('script');
    script.innerHTML = `
      (function() {
        function openWhatsAppChat() {
          // Your existing code...
        }
  
        var widgetContainer = document.createElement('div');
        widgetContainer.id = 'whatsapp-widget';
        widgetContainer.style.backgroundColor = '#25D366';
        // Add more styles for the widget container here...
  
        var widgetLink = document.createElement('a');
        widgetLink.href = 'javascript:void(0);';
        widgetLink.onclick = openWhatsAppChat;
        widgetLink.style.display = 'flex';
        widgetLink.style.alignItems = 'center';
        widgetLink.style.textDecoration = 'none';
        // Add more styles for the widget link here...
  
        var widgetImage = document.createElement('img');
        widgetImage.src = 'whatsapp-icon.png';
        widgetImage.alt = 'WhatsApp Icon';
        widgetImage.style.marginRight = '8px';
        // Add more styles for the widget image here...
  
        var widgetText = document.createElement('span');
        widgetText.textContent = 'Chat on WhatsApp';
        // Add more styles for the widget text here...
  
        widgetLink.appendChild(widgetImage);
        widgetLink.appendChild(widgetText);
        widgetContainer.appendChild(widgetLink);
  
        document.body.appendChild(widgetContainer);
      })();
    `;
  
    return script.outerHTML;
  }