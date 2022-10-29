document.querySelector('button').addEventListener('click', getDog)

function getDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then(data => {
    console.log(data.message)
    document.querySelector('img').src = data.message
  })
}

