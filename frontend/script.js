document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('theme-toggle');
  const navbarTitle = document.getElementById('navbar-title');
  const openContactFormButton = document.getElementById('openContactForm');
  const closeContactFormButton = document.getElementById('closeContactForm');
  const contactFormModal = document.getElementById('contactFormModal');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    navbarTitle.classList.toggle('dark-mode-title');
  });

  openContactFormButton.addEventListener('click', () => {
    document.getElementById('submitForm').reset();
    contactFormModal.classList.remove('hidden');
  });

  closeContactFormButton.addEventListener('click', () => {
    contactFormModal.classList.add('hidden');
  });

  document.getElementById("submitForm").addEventListener("submit", (event) => {
    event.preventDefault(); //prevent the default form submission
    
    // Create and show loading indicator
    const loadingModal = document.createElement('div');
    loadingModal.innerHTML = `
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen relative">
          <div class="fixed inset-0 bg-black opacity-70 z-0"></div>
          <div class="bg-white w-1/3 p-8 rounded-lg shadow-md z-10 text-center">
            <div class="flex justify-center mb-4">
              <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            </div>
            <p>Sending message...</p>
          </div>
        </div>
      </div>`;
    document.body.appendChild(loadingModal);

    const form = document.getElementById('submitForm');
    const formData = new FormData(form);
    const jsonData = {};
    
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    fetch(form.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
      .then(response => {
        // Remove loading indicator
        document.body.removeChild(loadingModal);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(emailSubmissionStatus => {
        // Optionally, handle success (e.g., show a success message)
        console.log('Success:', emailSubmissionStatus);

        //handle the response visually
        contactFormModal.classList.add('hidden');
        const successModal = document.createElement('div');
        successModal.innerHTML = `
        <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-screen relative">
            <!-- Dark Overlay -->
            <div class="fixed inset-0 bg-black opacity-70 z-0"></div>
            <div class="bg-white w-1/3 p-8 rounded-lg shadow-md z-10 text-center">
              <div class="flex justify-center mb-4">
                <img src="assets/images/check_mark.png" class="mx-auto">
              </div>
              <p>${emailSubmissionStatus}</p>
            </div>
          </div>
        </div>`;
        document.body.appendChild(successModal);
        setTimeout(() => {
          successModal.style.opacity = '1';
        }, 0);
        setTimeout(() => {
          successModal.style.opacity = '0';
          setTimeout(() => {
            document.body.removeChild(successModal);
          }, 1000);
        }, 3000);
      })
      .catch((error) => {
        // Remove loading indicator in case of error
        if (loadingModal.parentNode) {
          document.body.removeChild(loadingModal);
        }
        console.error('Error:', error);
        // Optionally, handle error (e.g., show an error message)
      });

  });

});

