const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const Groq = require('groq-sdk')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})
app.get('/', (req, res) => {
  res.send('StudyMate AI Backend is running!')
})

app.post('/api/generate', async (req, res) => {
  const { notes, style } = req.body

  // Validate input
  if (!notes || notes.trim() === '') {
    return res.status(400).json({
      error: 'Study material is required.'
    })
  }

  if (!style || style.trim() === '') {
    return res.status(400).json({
      error: 'Memory style is required.'
    })
  }

  try {
    const prompt = `
You are an encouraging teacher helping students understand concepts and score well in exams.

TASK:
Analyze the student's study material and turn it into useful learning material.

STUDENT'S STUDY MATERIAL:
${notes}

SELECTED MEMORY STYLE:
${style}

INSTRUCTIONS:
1. Identify and prioritize the most important concepts from the provided material.
2. Remove unnecessary repetition.
3. Explain the concepts using simple, student-friendly language.
4. Create a memorable mnemonic using the selected memory style.
5. Create active recall questions based ONLY on the provided study material.
6. Do not invent facts or information that is not supported by the student's material.
7. Keep the explanation useful for exam preparation.

OUTPUT FORMAT:
Return ONLY valid JSON in this exact structure:

{
  "summary": "Clear and simple concept summary",
  "mnemonic": "Memorable mnemonic using the selected style",
  "questions": [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
  ]
}

Do not include markdown fences.
Do not include any text outside the JSON.

`

    const response = await groq.chat.completions.create({
  model: 'openai/gpt-oss-20b',
  messages: [
    {
      role: 'user',
      content: prompt
    }
  ],
  temperature: 0.7,
  response_format: {
    type: 'json_object'
  }
})

const result = JSON.parse(response.choices[0].message.content)
res.json({
  result: result
})
    

  } catch (error) {
    console.error('Gemini error:', error)

    res.status(500).json({
      error: 'Failed to generate study material. Please try again.'
    })
  }
})
  




app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})
