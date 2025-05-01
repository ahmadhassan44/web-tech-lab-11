import BookCard from './BookCard';
import RoleSwitcher from './RoleSwitcher';
import { useRole } from '../contexts/RoleContext';
import { Plus } from 'lucide-react';

function BookList({ books, onShowAddForm, onEditBook, onDeleteBook }) {
  const { role } = useRole();
  const isAdmin = role === 'admin';

  return (
    <div className="w-1/2 p-4 border-r border-amber-800">
      <div className="flex justify-between items-center mb-6">
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
      
      <div className="space-y-4 pb-4">
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book}
            onEdit={onEditBook}
            onDelete={onDeleteBook}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;