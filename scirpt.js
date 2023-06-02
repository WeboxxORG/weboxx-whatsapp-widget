function generateWhatsAppWidget() {
    var script = document.createElement('script');
    script.src = 'https://github.com/WeboxxORG/whatsapp-embed.git/script.js';
    document.body.appendChild(script);

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    
    var phoneNumber = urlParams.get('phoneNumber');
    phoneNumber = phoneNumber.replace(/\s/g, '').replace(/[-()]/g, '');
    var message = urlParams.get('message');
    
    var widgetContainer = document.createElement('div');
    widgetContainer.id = 'whatsapp-container';
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
    
    function openWhatsAppChat() {
      var chatUrl = 'https://wa.me/' + encodeURIComponent(phoneNumber) + '?text=' + encodeURIComponent(message);
      var whatsappWidget = document.getElementById('whatsapp-container');
      whatsappWidget.innerHTML = '<iframe src="' + chatUrl + '" style="border: 0; width: 100%; height: 100%;"></iframe>';
    }
  }
  
//   var phoneNumber = '+123456789';
//   var message = 'Hello, how can I help you?';
//   var imageUrl = 'whatsapp-icon.png';
  generateWhatsAppWidget();