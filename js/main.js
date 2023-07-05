document.querySelector('button').addEventListener('click', getDog)

function getDog(){
    let breed = document.querySelector('input').value.toLowerCase()
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
  .then((response) => response.json())
  .then(data => {
    console.log(data.message)
    document.querySelector('img').src = data.message
  })
}

