import { useState } from 'react';
import { X, Plus, BookOpen } from 'lucide-react';

function AddBookForm({ onAdd, onCancel }) {
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (newBook.title.trim() && newBook.author.trim()) {
      onAdd({ ...newBook, id: Date.now() });
      setNewBook({ title: '', author: '', year: '' });
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-amber-800 mb-8">
      <div className="flex justify-between items-center mb-5 pb-2 border-b border-amber-800">
        <h2 className="text-amber-300 font-serif text-xl font-bold flex items-center">
          <BookOpen size={20} className="mr-2 text-amber-500" />
          Add to Collection
        </h2>
        <button 
          onClick={onCancel}
          className="text-amber-500 hover:text-amber-300 p-1 rounded-full hover:bg-gray-800 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-amber-300 font-serif mb-1">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className="w-full bg-gray-800 border border-amber-700 rounded px-3 py-2 text-amber-100 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        
        <div>
          <label htmlFor="author" className="block text-amber-300 font-serif mb-1">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full bg-gray-800 border border-amber-700 rounded px-3 py-2 text-amber-100 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        
        <div>
          <label htmlFor="year" className="block text-amber-300 font-serif mb-1">Year Published (Optional)</label>
          <input
            type="text"
            id="year"
            name="year"
            value={newBook.year}
            onChange={handleChange}
            placeholder="e.g. 1813"
            className="w-full bg-gray-800 border border-amber-700 rounded px-3 py-2 text-amber-100 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        
        <div className="flex justify-end pt-2">
          <button
            onClick={handleSubmit}
            disabled={!newBook.title.trim() || !newBook.author.trim()}
            className="px-4 py-2 bg-amber-800 hover:bg-amber-700 text-amber-100 rounded font-serif flex items-center 
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus size={16} className="mr-1" />
            Add to Library
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="mt-6 flex justify-center">
        <div className="text-amber-700 text-xs font-serif italic border-t border-amber-900 pt-2 px-8">
          "There is no friend as loyal as a book" — Ernest Hemingway
        </div>
      </div>
    </div>
  );
}

export default AddBookForm;