import { useState } from 'react'
import './App.css'
import ProfileEditor from './components/ProfileEditor'
import BookList from './components/BookList'

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Book Dashboard App</h1>
      <div className="space-y-8">
        <ProfileEditor />
        <BookList />
      </div>
    </div>
  )
}

export default App
