console.log('good')

const articles = [
    { name: "Peugeot 208",
      description: "Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire),",  
      price: 999,
      place: "Agence de Paris", 
      images: ["vehicule1.png","peugeotInt.png"]  
    
    },
    { name: "Ford Focus",
      description: "Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire),",  
      price: 999, 
      images: ["vehicule2.png","fordInt.png"]  
    
    },
    { name: "Audi A1",
      description: "Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire),",  
      price: 1100,
      place: "Agence de Paris", 
      images: ["vehicule3.png","audiA1Int.png"]    
    
    },
    { name: "Opel Mokka",
      description: "Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire),",  
      price: 1100,
      place: "Agence de Paris", 
      images: ["vehicule4.png","opelInt.png"]    
    
    }
]

const imgPattern = (i) => `images/vehicule${i}.png`;

let createArticles = articles.map((article, index) => 
    `<div class="d-flex align-self-center article m-5 flex-wrap justify-content-center" id="${index}">
    <div class="d-flex">
        <button type="button" class="btn btn-transparent" onclick="counter(this);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>
        </button>
        <img src="images/${article.images[0]}" key="0" />
        <button type="button" class="btn btn-transparent" onclick="counter(this);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
        </button>
    </div>
    <div class="d-flex flex-column my-auto d-md-block">
        <h5>${article.name}</h5>
        <p>${article.description}</p>
        <p><span>${article.price} E</span> - <span>${article.place}</span></p>
        <button type="button" class="btn btn-success text-nowrap">Réserver et payer</button>
    </div>

</div>`
    
    )
document.querySelector('main').innerHTML = `<div class="container d-flex flex-column my-2">
<p>${articles.length} Résultats</p>
${createArticles.join('\n')}
</div>
`;
const counter = (elem) => {
    let cpt = parseInt(elem.parentNode.querySelector('img').attributes.key.value)
    cpt++;
    cpt = cpt%2; 
    idArticle = parseInt(elem.parentNode.parentNode.id)
    elem.parentNode.querySelector('img').attributes.key.value = cpt
    elem.parentNode.querySelector('img').src = "images/" + articles[idArticle].images[cpt];
    // = imgPattern(cpt%4 + 1)
}