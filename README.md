# 🧠 StudyMate AI

> Turn difficult study material into memorable explanations, mnemonics, and active-recall questions with AI.

StudyMate AI is an AI-powered study assistant designed to help students transform long or difficult study material into concise, memorable, and exam-friendly learning content.

Instead of simply generating a generic AI response, StudyMate AI follows a structured learning workflow:

**Study Material → AI Analysis → Concept Summary → Memory Technique → Active Recall**

---

## ✨ Features

### 📌 Concept Summary
Converts lengthy study material into a clear and easy-to-understand summary while prioritizing the important concepts.

### 🧠 Fun Mnemonics
Generates a memorable mnemonic based on the memory style selected by the student.

Supported styles include:

- 😂 Funny
- 📖 Story-based
- 🎵 Rhyming
- 🔤 Acronym
- 📝 Exam-friendly

### ❓ Active Recall Questions
Generates questions from the provided study material to encourage active recall and self-testing.

The questions are generated only from the information provided by the student.

### ⚡ Fast AI Generation
Uses the Groq API to generate study material quickly.

### 🛡️ Input Validation
The application validates empty study material and missing memory styles before sending requests to the AI.

### 🚨 Error Handling
Handles failed API requests and displays useful error messages to the user.

### 📱 Responsive Interface
The frontend is designed to work across desktop and mobile screen sizes.

---

## 🎯 Problem Statement

Students often have to study large amounts of material before examinations.

Long notes can be:

- Difficult to understand
- Difficult to remember
- Time-consuming to revise
- Hard to convert into effective self-testing questions

StudyMate AI addresses this problem by transforming existing study material into a structured learning guide containing:

1. Important concepts
2. Memory aids
3. Active recall questions

The goal is not to replace studying, but to make revision more structured and easier to recall.

---

## 💡 How It Works

```text
                    Student
                       │
                       ▼
              Enter Study Material
                       │
                       ▼
             Select Memory Style
                       │
                       ▼
              React Frontend
                       │
                       ▼
            Express.js Backend
                       │
                       ▼
                  Groq API
                       │
                       ▼
                AI Processing
                       │
                       ▼
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
 Concept Summary   Fun Mnemonic   Active Recall
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                Study Guide
```
##Project Structure
```text
 studymate-ai/
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── .gitignore
└── README.md
