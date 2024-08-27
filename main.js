function buscarEventos() {
    const apiUrl = 'http://192.168.5.53:8080/api/eventos/?format=json';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const eventList = document.getElementById('event-list');
        eventList.innerHTML = ''; 
        data.forEach(event => {
          const listItem = document.createElement('li');
          listItem.textContent = event.title; 
          eventList.appendChild(listItem);
        });
        document.getElementById('modal').style.display = 'block';
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }