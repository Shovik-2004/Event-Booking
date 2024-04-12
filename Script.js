fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
  .then(response => response.json())
  .then(data => {
    const recommendedShows = document.querySelector('.recommended');
    data.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.innerHTML = `
        <img src="${event.img_url}" alt="${event.name}">
        <h4>${event.name}</h4>
        <p>${event.description}</p>
      `;
      recommendedShows.appendChild(eventElement);
    });
  })
  .catch(error => console.error(error));