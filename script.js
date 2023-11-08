const rootElement = document.querySelector("#root")
const apiKey = 'R6cOeRrzjna04aL0GeeepCZe4raja8zL17AKt1kG'

const fetchUrl = async (url) => {
  const response = await fetch(url)
  return response.json()
}

const apodComponent = (apodData) => `
  <h2>${apodData.title}</h2>
  <h3>${apodData.date}</h3>
  <p>${apodData.explanation}</p>
  <img src=${apodData.url}>
`



const init = async () => {
  const data = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  console.log(data.title)

  // rootElement.innerHTML = `<h2>${data.title}</h2>`
  rootElement.insertAdjacentHTML("beforeend", apodComponent(data))

  const arrayData = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`)
  console.log(arrayData)

  

}

init()     