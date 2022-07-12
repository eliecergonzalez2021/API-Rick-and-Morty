

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async() => {
    
    try {
        loadingData(true)

        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()

        pintarCard(data)
        
    } catch (error) {
        console.log(error)
    } finally {
        loadingData(false)
    }
}


const pintarCard = data => {

    const cards = document.getElementById('cards-dimamicas')
    const templateCard = document.getElementById('template-card').content
    const fragment = document.createDocumentFragment()

    data.results.forEach(item => {
        
        const clone = templateCard.cloneNode(true)
        //Nombre personaje
        clone.querySelector('h5').textContent = item.name

        //Especie personaje
        clone.querySelector('p').textContent = item.species

        //imagen personaje
        clone.querySelector('img').setAttribute('src', item.image)

        //genero del personaje
        clone.querySelector('.genero').textContent = item.gender


        //Se guarda en el fragment para evitar el reflow
        fragment.appendChild(clone)
    });

    cards.appendChild(fragment)
} 


const loadingData = estado => {
    const loading = document.getElementById('loading')
    if(estado){
        loading.classList.remove('d-none')
    }else {
        loading.classList.add('d-none')
    }

}

