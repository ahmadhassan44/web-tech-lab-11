import { useState } from 'react';
import BookCard from './BookCard';
import RoleSwitcher from './RoleSwitcher';
import { useRole } from '../contexts/RoleContext';

function BookList() {
    const { role } = useRole();
    const [books, setBooks] = useState([{
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
      }]);

      return (
        <div className="w-1/2 p-4 border-r border-amber-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif text-amber-200">Book Collection</h2>
            <RoleSwitcher />
          </div>
          
          <div className="space-y-4 pb-4">
            {books.map((book) => (
              <BookCard 
                key={book.id} 
                book={book} 
                role={role}
              />
            ))}
          </div>
        </div>
      );
}

export default BookList;