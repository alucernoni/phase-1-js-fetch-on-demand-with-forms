const init = () => {
  const inputForm = document.querySelector('form')
  
  inputForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const inputValue = document.querySelector('#searchByID').value
      inputForm.reset()
      

    fetch(`http://localhost:3000/movies/${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
        const title = document.querySelector('#movieDetails h4')
        const summary = document.querySelector('#movieDetails p')

        title.textContent = data.title
        summary.textContent = data.summary

        })
    })
}

document.addEventListener('DOMContentLoaded', init);