import { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import EditBookComponent from './components/EditBookComponent';
import { RoleProvider } from './contexts/RoleContext';

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
    },
    {
      id: 4,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      year: 1967
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851
    },
    {
      id: 6,
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869
    },
    {
      id: 7,
      title: "The Odyssey",
      author: "Homer"
    },
    {
      id: 8,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866
    },
    {
      id: 9,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847
    },
    {
      id: 10,
      title: "The Divine Comedy",
      author: "Dante Alighieri"
    }
  ]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
    setShowAddForm(false);
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    setShowAddForm(false);
  };

  const handleSaveEdit = (editedBook) => {
    setBooks(books.map(book => 
      book.id === editedBook.id ? editedBook : book
    ));
    setEditingBook(null);
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
    if (editingBook && editingBook.id === bookId) {
      setEditingBook(null);
    }
  };

  return (
    <RoleProvider>
      <div className="flex bg-gray-950 min-h-screen w-full text-white">
        <BookList 
          books={books} 
          onShowAddForm={() => {
            setShowAddForm(true);
            setEditingBook(null);
          }}
          onEditBook={handleEditBook}
          onDeleteBook={handleDeleteBook}
        />
        <div className="w-1/2 p-4">
          {showAddForm ? (
            <AddBookForm 
              onAdd={handleAddBook}
              onCancel={() => setShowAddForm(false)}
            />
          ) : editingBook ? (
            <EditBookComponent 
              book={editingBook}
              onSave={handleSaveEdit}
              onCancel={() => setEditingBook(null)}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-amber-200 text-xl font-serif">Select a book to view details</p>
            </div>
          )}
        </div>
      </div>
    </RoleProvider>
  );
}

export default App;