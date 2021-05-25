import React, { useEffect, useState } from 'react'
import Article from './Components/Article'
import { getAllArticles } from './Utils/getAllArticles'

const App = () => {
  const [toggleTheme, setToggleTheme] = useState(() =>
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light-theme'
  )

  useEffect(() => {
    document.documentElement.className = toggleTheme
    localStorage.setItem('theme', toggleTheme)
  }, [toggleTheme])
  const articles = getAllArticles().map((article, index) => (
    <Article key={index} {...article} />
  ))
  return (
    <main className='main'>
      <div className='body'>
        <header>
          <h1>Overreacted</h1>
          <button
            onClick={() =>
              setToggleTheme(() =>
                toggleTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
              )
            }
          >
            Toggle
          </button>
        </header>
        <section>{articles}</section>
      </div>
    </main>
  )
}

export default App
