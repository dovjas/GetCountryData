const submitBtn = document.querySelector('#submit-btn')
const resetBtn = document.querySelector('#reset-btn')
const countryInput = document.querySelector('#country-input')


submitBtn.addEventListener('click',()=>{
    let countryName = countryInput.value;
    console.log(countryName)
    let urlApi = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(urlApi)
    .then((response) =>response.json())
    .then((data) =>{
        // console.log(data[0])
        // console.log(data[0].capital[0])
        // console.log(data[0].flags.svg)
        // console.log(data[0].name.common)
        // console.log(data[0].continents[0])
        // console.log(Object.keys(data[0].currencies)[0])
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        // );

        result.innerHTML = `
        <div class="data-block">
            <h4>Country name: </h4> <span>${data[0].name.common}</span>
            <h4>Continent: </h4> <span>${data[0].continents[0]}</span>
            <h4>Population: </h4> <span>${data[0].population}</span>
            <h4>Capital: </h4><span>${data[0].capital[0]}</span>
            <h4>Currency: </h4><span>${Object.keys(data[0].currencies)[0]}</span>
            <h4>Flag:</h4>
            <img src="${data[0].flags.svg}" class="flag-img">
            
        </div>
        
        `;
    }).catch(()=>{
        if(countryInput.length === 0){
            result.innerHTML = `<h4>Field can't be empty</h4`
        } else{
            result.innerHTML = `<h4>Please enter a valid country name </h4>`
        }
    });
});

resetBtn.addEventListener('click',()=>{
    countryInput.value = ''
    document.location.reload()
})