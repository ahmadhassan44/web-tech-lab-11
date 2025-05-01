import { useState, useMemo } from 'react';
import BookCard from './BookCard';
import RoleSwitcher from './RoleSwitcher';
import SearchBar from './SearchBar';
import { useRole } from '../contexts/RoleContext';
import { Plus } from 'lucide-react';

function BookList({ books, onShowAddForm, onEditBook, onDeleteBook }) {
  const { role } = useRole();
  const isAdmin = role === 'admin';
  const [searchQuery, setSearchQuery] = useState('');

  // Filter books based on search query
  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return books;
    
    const query = searchQuery.toLowerCase();
    return books.filter(
      book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        (book.year && book.year.toString().includes(query))
    );
  }, [books, searchQuery]);

  return (
    <div className="w-1/2 p-4 border-r border-amber-800">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-serif text-amber-200">Book Collection</h2>
          <div className="flex items-center space-x-3">
            {isAdmin && (
              <button
                onClick={onShowAddForm}
                className="flex items-center px-3 py-1.5 bg-amber-800 hover:bg-amber-700 text-amber-100 rounded-full font-serif text-sm transition-colors"
                aria-label="Add new book"
              >
                <Plus size={16} className="mr-1" />
                <span>Add Book</span>
              </button>
            )}
            <RoleSwitcher />
          </div>
        </div>
        
        <SearchBar onSearch={setSearchQuery} />
      </div>
      
      <div className="space-y-4 pb-4">
        {filteredBooks.length === 0 ? (
          <div className="text-center p-6 border border-amber-900/30 rounded-lg bg-gray-900">
            <p className="text-amber-400 font-serif">No books found matching "{searchQuery}"</p>
          </div>
        ) : (
          filteredBooks.map((book) => (
            <BookCard 
              key={book.id} 
              book={book}
              onEdit={onEditBook}
              onDelete={onDeleteBook}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default BookList;