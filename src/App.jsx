import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (city.toLowerCase().trim() === 'istanbul') {
      setMessage('Correct! Istanbul is the answer.')
    } else {
      setMessage('Good guess but a wrong answer. Try again!')
    }
  }

  return (
    <div className="container">
      <h1>City App</h1>

      <p>Enter the name of a city:</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />

        <button type="submit">
          Submit
        </button>
      </form>

      {message && (
        <p className="message">
          {message}
        </p>
      )}
    </div>
  )
}

export default App