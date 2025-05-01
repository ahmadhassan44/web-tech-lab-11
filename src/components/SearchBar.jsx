import { useState } from 'react';
import { Search, X } from 'lucide-react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="relative w-full max-w-xs">
      <div className="relative flex items-center">
        <Search size={16} className="absolute left-3 text-amber-700" />
        <input
          type="text"
          placeholder="Search by title or author..."
          value={query}
          onChange={handleSearch}
          className="w-full bg-gray-800 border border-amber-900 rounded-full py-1.5 pl-9 pr-8 text-amber-100 
                     placeholder-amber-700/70 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        {query && (
          <X size={14} className='absolute right-4' onClick={clearSearch}/>
        )}
      </div>
    </div>
  );
}

export default SearchBar;