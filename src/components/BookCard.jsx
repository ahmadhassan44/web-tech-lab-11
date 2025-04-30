import { Pencil, Trash2, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { useRole } from '../contexts/RoleContext';

function BookCard({ book, onEditBook }) {
  const [isEditing, setIsEditing] = useState(false);
  const { role } = useRole();
  const isAdmin = role === 'admin';
  
  const handleDelete = () => {
    // Handle delete logic
    console.log('Delete book:', book.id);
  };

  return (
    <div className="bg-gray-900 p-5 rounded-lg shadow-lg border border-amber-800 transition-all duration-300 hover:shadow-amber-900/30 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-amber-200 font-serif text-lg font-bold">{book.title}</h3>
          <p className="text-amber-400 font-serif italic mt-1">{book.author}</p>
          
          {book.year && (
            <p className="text-gray-400 text-sm mt-2">{book.year}</p>
          )}
        </div>
        
        {isAdmin && (
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 rounded-full bg-gray-800 text-amber-400 hover:text-amber-300 hover:bg-gray-700 transition-colors duration-200"
              aria-label="Edit book"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 rounded-full bg-gray-800 text-amber-400 hover:text-red-400 hover:bg-gray-700 transition-colors duration-200"
              aria-label="Delete book"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="mt-4 pt-3 border-t border-amber-900 flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen size={16} className="text-amber-700 mr-1" />
          <span className="text-amber-600 text-xs font-serif">Classic Edition</span>
        </div>
        <div className="text-amber-800 text-xs font-serif">{book.id.toString().padStart(4, '0')}</div>
      </div>
    </div>
  );
}

export default BookCard;