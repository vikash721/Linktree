document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".loader-wrapper").style.display = "flex";
});        
      
window.onload = function() {
  document.querySelector(".loader-wrapper").style.display = "none";
};

const linkButton = document.querySelectorAll(".icons");
const linkButton1 = document.querySelectorAll(".link-card1");

linkButton.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const getLink = e.target.parentElement.getAttribute("href");
    const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);

    showCopyNotification(); // Call the function to show the notification
  })
})

linkButton1.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
  
    const getLink = e.target.parentElement.getAttribute("href");
    const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);
  
    showCopyNotification(); // Call the function to show the notification
  })
})

// Function to show the copy notification
function showCopyNotification() {
  const copyNotification = document.getElementById("copyNotification");
  copyNotification.classList.add("show");

  // After 3 seconds, remove the "show" class to hide the notification
  setTimeout(() => {
    copyNotification.classList.remove("show");
  }, 3000);
}

function share() {
  // Check if the Web Share API is supported
  if (navigator.share) {
    navigator.share({
      title: 'Check out this link!',
      text: 'Here is a link you might be interested in.',
      url: window.location.href
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
  } else {
    // Fallback for browsers that do not support Web Share API
    console.log('Web Share API not supported');
  }
}

// Get modal element
var modal = document.getElementById("whatsappModal");

// Get open modal button (WhatsApp link)
var whatsappLink = document.querySelector('.link-card[onclick="submitQuery()"]');

// Get close button
var closeButton = document.getElementsByClassName("close")[0];

// Get send button
var sendButton = document.getElementById("sendWhatsappMessage");

// Open modal
whatsappLink.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
};

// Close modal
closeButton.onclick = function() {
  modal.style.display = "none";
};

// Send message
sendButton.onclick = function() {
  var message = document.getElementById("whatsappMessage").value;
  var whatsappUrl = "https://api.whatsapp.com/send?phone=9958749688&text=" + encodeURIComponent(message);
  window.open(whatsappUrl, '_blank');
  modal.style.display = "none";
};

// Close modal if user clicks outside of modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



// Function to toggle between light and dark mode
function toggleLightMode() {
  const body = document.querySelector("body");
  const containers = document.querySelectorAll(".container, .link-card, .copy-notification");
  const shareIcon = document.querySelector(".share-icon");

  // Toggle the "light-mode" class on the body
  body.classList.toggle("light-mode");

  // Check if the body has the "light-mode" class and adjust other elements accordingly
  if (body.classList.contains("light-mode")) {
    containers.forEach(container => {
      container.classList.add("light-mode");
    });
    shareIcon.classList.add("light-mode"); // Add light mode to share icon
  } else {
    containers.forEach(container => {
      container.classList.remove("light-mode");
    });
    shareIcon.classList.remove("light-mode"); // Remove light mode from share icon
  }
}


const texts = ["Developer", "Designer", "Vikash","Follow me"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".animated-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(() => {
      document.querySelector(".animated-text").textContent = "";
      setTimeout(type, 500); // Adjust the delay before typing the next text
    }, 2000); // Adjust the delay after typing the full text
  } else {
    setTimeout(type, 150); // Adjust the typing speed
  }
})();







