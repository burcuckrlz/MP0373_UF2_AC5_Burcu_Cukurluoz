window.onload = function () {
    let button = document.querySelector('#crear');
    let buttonCards = document.querySelector('#crear-tarjetas');
    let list = document.querySelector('#llista');
    let cardContainer = document.querySelector('#card-container');
    let tarjetasContainer = document.querySelector('#tarjetas-container');

    let user = {
        nombre: "Roberto",
        apellido: "Heras",
        edad: 35,
        aficiones: ["Escalada", "Sushi", "Papiroflexia"]
    };

    let filosofos = [
        { nombre: "Platón", pais: "Grecia", corriente: "Idealismo", arma: "Dialéctica", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg" },
        { nombre: "Aristóteles", pais: "Grecia", corriente: "Naturalismo", arma: "Lógica", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU" },
        { nombre: "Descartes", pais: "Francia", corriente: "Racionalismo", arma: "Meditación", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg" },
        { nombre: "Kant", pais: "Alemania", corriente: "Trascendentalismo", arma: "Crítica", imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg" },
        { nombre: "Hume", pais: "Escocia", corriente: "Empirismo", arma: "Escepticismo", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s" }
    ];
    
    button.addEventListener("click", () => {
        let count = list.children.length + 1;
        let item = document.createElement('li');

        item.classList.add("element");
        item.id = `element${count}`;
        item.textContent = `Este es el elemento ${count} de la lista`;

        list.appendChild(item);
    });

    buttonCards.addEventListener("click", () => {
        tarjetasContainer.innerHTML = '';
        filosofos.forEach(({ nombre, pais, corriente, arma, imagen }) => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h1>${nombre}</h1>
                <img src="${imagen}" alt="${nombre}" width="150">
                <p><strong>País:</strong> ${pais}</p>
                <p><strong>Corriente:</strong> ${corriente}</p>
                <p><strong>Arma:</strong> ${arma}</p>
            `;
            tarjetasContainer.appendChild(card);
        });
    });

    let createUserCard = () => {
        let card = document.createElement('div');
        card.classList.add('card');

        let aficionesButtons = user.aficiones.map(aficion => `<button class="aficion-button">${aficion}</button>`).join('');

        card.innerHTML = `
            <h2>${user.nombre} ${user.apellido}</h2>
            <p>Edad: ${user.edad} años</p>
            <h3>Aficiones:</h3>
            <div class="aficiones-container">${aficionesButtons}</div>
        `;

        cardContainer.appendChild(card);
    };

    createUserCard();
};
