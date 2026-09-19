
import './App.css'
import { useState } from 'react'


function App() {
   const [notes, setNotes] = useState('')
   const [style, setStyle] = useState('Funny')
   const [result, setResult] = useState(null)
   const [loading, setLoading] = useState(false)
const [error, setError] = useState('')
 async   function generateStudyGuide() {
    if (notes.trim() === '') {
  alert("Please enter some study material.")
  return
}
setLoading(true)
  setError('')
  setResult(null)
  try {
    const response = await fetch('https://studymate-ai-production-19de.up.railway.app/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        notes: notes,
        style: style
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to generate study guide.')
    }
    setResult(data.result)
  }  catch (error) {
    console.error('Error:', error)
    setError(error.message || 'Something went wrong. Please try again.')
  } finally {
    setLoading(false)
  }
   
}
  return (
    <main className="app">

      <header className="header">
        <h1>🧠 StudyMate AI</h1>
        <p>Turn your notes into memorable learning material.</p>
      </header>

      <section className="study-card">

        <label htmlFor="notes">
          📚 Your Study Material
        </label>

        <textarea
          id="notes"
          value={notes}
           onChange={(e) => setNotes(e.target.value)}
          placeholder="Paste your notes, textbook content, or question here..."
        />

        <label htmlFor="style">
          🧠 Choose Memory Style
        </label>

        <select id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Funny</option>
          <option>Story-based</option>
          <option>Rhyming</option>
          <option>Acronym</option>
          <option>Exam-friendly</option>
        </select>

        <button onClick={generateStudyGuide} disabled={loading}>
  {loading ? 'Generating... 🤖' : 'Generate Study Guide'}
</button>

      </section>
      {error && (
  <div className="error-message">
    ⚠️ {error}
  </div>
)}
      {result && (
      <section className="result-card">
        <h2>🧠 Your AI Study Guide</h2>

        <div  className="result-section">
          <h3>📌 Concept Summary</h3>
          <p>{result?.summary}</p>
        </div>

        <div className="result-section">
          <h3>🧠 Fun Mnemonic</h3>
          <p>{result?.mnemonic}</p>
        </div>

        <div className="result-section">
          <h3>❓ Active Recall Questions</h3>
          <ul>
            {result?.questions?.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>

      </section>
      )}
    </main>
  )
 
}

export default App
