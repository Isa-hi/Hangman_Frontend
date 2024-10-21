import { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'

interface Question {
  id: number
  question: string
  answer: string
}

export default function Component() {
  const storedQuestions = localStorage.getItem('questions')

  const [questions, setQuestions] = useState<Question[]>(storedQuestions ? JSON.parse(storedQuestions) : [])
  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')

  const addQuestion = () => {
    if (newQuestion && newAnswer) {
      const updatedQuestions = [...questions, { id: Date.now(), question: newQuestion, answer: newAnswer }]
      setQuestions(updatedQuestions)
      setNewQuestion('')
      setNewAnswer('')
      localStorage.setItem('questions', JSON.stringify(updatedQuestions))
    }
  }

  const deleteQuestion = (id: number) => {
    const updatedQuestions = questions.filter(q => q.id !== id)
    setQuestions(updatedQuestions)
    localStorage.setItem('questions', JSON.stringify(updatedQuestions))
  }

  return (
    <div className="container mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-red-900">Banco de Preguntas</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-800">Preguntas Existentes</h2>
          {questions.map((q) => (
            <div key={q.id} className="bg-orange-100 rounded-lg p-4 mb-4 shadow">
              <h3 className="font-semibold text-lg text-red-700">{q.question}</h3>
              <p className="text-red-600 mt-2">{q.answer}</p>
              <div className="flex justify-end mt-4">
                <button 
                  className="text-red-500 hover:text-red-700" 
                  onClick={() => deleteQuestion(q.id)}
                  aria-label="Eliminar pregunta"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-orange-200 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-900">Crear Nueva Pregunta</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-red-700 mb-1">
                Pregunta:
              </label>
              <input
                type="text"
                id="question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Escribe tu pregunta aquí"
              />
            </div>
            <div>
              <label htmlFor="answer" className="block text-sm font-medium text-red-700 mb-1">
                Respuesta:
              </label>
              <textarea
                id="answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={3}
                placeholder="Escribe la respuesta aquí"
              />
            </div>
            <button
              onClick={addQuestion}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center"
            >
              <PlusCircle size={20} className="mr-2" />
              Crear Pregunta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}