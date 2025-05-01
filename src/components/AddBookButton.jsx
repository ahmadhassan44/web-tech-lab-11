import { useState } from 'react';
import { Plus, BookOpen } from 'lucide-react';
import { useRole } from '../contexts/RoleContext';
import AddBookForm from './AddBookForm';

function AddBookButton({ onAddBook }) {
  const { role } = useRole();
  const [showForm, setShowForm] = useState(false);
  
  const handleAddBook = (newBook) => {
    onAddBook(newBook);
    setShowForm(false);
  };
  
  if (role !== 'admin') return null;
  
  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="flex items-center px-3 py-1.5 bg-amber-800 hover:bg-amber-700 text-amber-100 rounded-full font-serif text-sm transition-colors"
        aria-label="Add new book"
      >
        <Plus size={16} className="mr-1" />
        <span>Add Book</span>
      </button>
      
      {showForm && (
        <AddBookForm 
          onAdd={handleAddBook}
          onCancel={() => setShowForm(false)} 
        />
      )}
    </>
  );
}

export default AddBookButton;