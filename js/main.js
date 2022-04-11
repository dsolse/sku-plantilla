(function(){

    var map = L.map('mapa').setView([13.65528, -89.28585], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([13.65528, -89.28585]).addTo(map)
            .bindPopup('Universidad<br> Disponible para reuniones')
            .openPopup();

  })();


