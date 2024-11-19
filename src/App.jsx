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
        <div className="p-2 mb-4 bg-dark text-white rounded-3">
          <div className="container-fluid py-5">
            <h3 className="display-5 fw-bold mb-5">Aggiungi articolo</h3>
            <button className="btn btn-primary btn-lg" type="button" popovertarget="off-canvas-form">
              Aggiungi
            </button>
          </div>
        </div>

        <div id="off-canvas-form" popover="true" className='p-5' style={{ minHeight: "100dvh", width: "50%" }}>
          <div className='d-flex justify-content-between align-item-center'>
            <h4>Aggiungi Articolo</h4>
            <button className="btn btn-primary" type="button" popovertarget="off-canvas-form" popovertargetaction="hide">
              Chiudi
            </button>
          </div>


          <form onSubmit={addArticle} className='my-3'>

            <div className="mb-3">
              <label htmlFor="Titolo" className="form-label">Titolo Articolo</label>
              <div className="input-group mb-3">
                <input htmlFor="titolo" name='titolo' id='titolo' type="text" className="form-control" placeholder="Digita Titolo Articolo" aria-label="Titolo Articolo" aria-describedby="button-addon2"
                  value={newArticle} onChange={e => setNewArticle(e.target.value)} />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="Immagine" className="form-label">Immagine</label>
              <div className="input-group mb-3">
                <input htmlFor="image" name='image' id='image' type="text" className="form-control" placeholder="/images/1jpg" aria-label="Immagine Articolo" aria-describedby="button-addon2"
                  value={newArticle} onChange={e => setNewArticle(e.target.value)} />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="contenuto" className="form-label">Contenuto</label>
              <textarea className="form-control" name="contenuto" id="contenuto" rows="7"></textarea>
            </div>


            <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example" value="categoria" id="categoria">
              <option value>Seleziona Categoria</option>
              <option value="1">Viaggi</option>
              <option value="2">Serie Tv</option>
            </select>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="tags" id="tags" />
              <label className="form-check-label" htmlFor="tags"> Visto </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="tags" id="tags" />
              <label className="form-check-label" htmlFor="tags"> Da Rivedere </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="tags" id="tags" />
              <label className="form-check-label" htmlFor="tags"> Non Piaciuto </label>
            </div>
            <div className='d-flex justify-content-between'>
              <button type="submit" className="btn btn-primary my-3">Pubblica</button>
              <button type="submit" className="btn btn-primary my-3">Cancella</button>
            </div>

          </form>
        </div>


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

