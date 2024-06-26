// Pfad/Filename: /mnt/f/MAD_AI/madui/0playground/Hub/hub.js

document.addEventListener('DOMContentLoaded', function() {
  console.log('Hub loaded and ready');

  fetch('Hub/hub.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      if (response.headers.get('Content-Type')?.includes('application/json')) {
        return response.json();
      } else {
        throw new Error('Invalid JSON response');
      }
    })
    .then(data => {
      const fragment = document.createDocumentFragment();

      const modulePromises = data.modules.map(module => {
        const modulePath = module.path;

        return fetch(modulePath)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
          })
          .then(html => {
            const div = document.createElement('div');
            div.innerHTML = html;
            fragment.appendChild(div);

            const script = document.createElement('script');
            script.src = modulePath.replace('.html', '.js');
            document.body.appendChild(script);
          })
          .catch(error => {
            console.error('Error loading module:', error);
          });
      });

      Promise.all(modulePromises)
        .then(() => {
          document.getElementById('content-layer').appendChild(fragment);
        })
        .catch(error => {
          console.error('Error loading modules:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching hub.json:', error);
    });
});
