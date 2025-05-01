import { useState, useEffect } from 'react';
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
   
 
  ]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
    setShowAddForm(false);
  };

  const handleEditBook = (book) => {
    // This will close the add form and update the editing book
    setShowAddForm(false);
    setEditingBook(book);
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
              key={editingBook.id} 
              book={editingBook}
              onSave={handleSaveEdit}
              onCancel={() => setEditingBook(null)}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
            </div>
          )}
        </div>
      </div>
    </RoleProvider>
  );
}

export default App;