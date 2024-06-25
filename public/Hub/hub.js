document.addEventListener('DOMContentLoaded', function() {
  fetch('Hub/hub.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.modules.forEach(module => {
        const modulePath = module.path;
        fetch(modulePath)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
          })
          .then(html => {
            const div = document.createElement('div');
            div.innerHTML = html;
            document.getElementById('hub-container').appendChild(div);
            const script = document.createElement('script');
            script.src = modulePath.replace('.html', '.js');
            document.body.appendChild(script);
          })
          .catch(error => {
            console.error('Error loading module:', error);
          });
      });
    })
    .catch(error => {
      console.error('Error fetching hub.json:', error);
    });
});
