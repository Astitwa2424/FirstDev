'use client'

import { useState } from 'react'

export default function PersonSearch() {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      setResult(`Hi ${name}`)
    } else {
      setResult('')
    }
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Enter a person's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="text-xl font-semibold">{result}</p>
        </div>
      )}
    </div>
  )
}

