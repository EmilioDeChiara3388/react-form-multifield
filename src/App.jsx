import { useState } from 'react'
import AppHeader from './components/AppHeader'
import './App.css'

const initialArticles = []

function App() {

  const [articles, setArticles] = useState(initialArticles)
  const [newArticle, setNewArticle] = useState("")

  function addArticle(e) {
    e.preventDefault()
    console.log(articles);
    setArticles([...articles, newArticle])
    setNewArticle("")
  }

  function removeArticle(e) {
    const articleToRemove = Number(e.target.getAttribute("data-index"))
    const newArticles = articles.filter((article, index) => index != articleToRemove)
    setArticles(newArticles)
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        <form onSubmit={addArticle} className='my-3'>
          <div className="mb-3">
            <label htmlFor="Articolo" className="form-label">Articoli</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Digita titolo Articolo" aria-label="Titolo Articolo" aria-describedby="button-addon2"
                value={newArticle} onChange={e => setNewArticle(e.target.value)} />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
            </div>

            <small id="articoloHelperId" className="form-text text-muted">Inserisci titolo articolo</small>
          </div>
        </form>
        <ul className="list-group my-5">
          {articles.map((article, index) => <li key={index} className="list-group-item d-flex justify-content-between">{article}
            <button onClick={removeArticle} className='p-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>

          </li>)}
        </ul>

      </div>
    </>
  )
}

export default App

