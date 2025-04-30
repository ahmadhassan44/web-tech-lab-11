import './App.css';
import BookList from './components/BookList';
import { RoleProvider } from './contexts/RoleContext';

function App() {
  return (
    <RoleProvider>
      <div className="flex bg-gray-950 min-h-screen w-full text-white">
        <BookList />
        <div className="w-1/2 p-4">
          {/* Content for the right side */}
          <div className="h-full flex items-center justify-center">
            <p className="text-amber-200 text-xl font-serif">Select a book to view details</p>
          </div>
        </div>
      </div>
    </RoleProvider>
  );
}

export default App;