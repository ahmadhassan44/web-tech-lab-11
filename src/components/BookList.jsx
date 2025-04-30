import { useState } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' }
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      const book = {
        id: Date.now(),
        title: newBook.title,
        author: newBook.author
      };
      setBooks([...books, book]);
      setNewBook({ title: '', author: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Book List</h2>
      
      {/* Add Book Form */}
      <form onSubmit={handleAddBook} className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Add New Book</h3>
        <div className="space-y-3">
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Book Title"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Author Name"
            className="w-full p-2 border rounded"
          />
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Book
          </button>
        </div>
      </form>

      {/* Book List */}
      <div className="space-y-4">
        {books.map(book => (
          <div key={book.id} className="p-4 border rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
            </div>
            <button
              onClick={() => handleDelete(book.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList; 