import { Shield, User } from 'lucide-react';
import { useRole } from '../contexts/RoleContext';

function RoleSwitcher() {
  const { role, handleRoleChange } = useRole();

  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center space-x-2 bg-gray-900 p-2 rounded-full border border-amber-800">
        <button
          onClick={() => handleRoleChange('user')}
          className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors duration-300 ${
            role === 'user'
              ? 'bg-amber-900/50 text-amber-200'
              : 'text-gray-400 hover:text-amber-400'
          }`}
          aria-label="Switch to user mode"
        >
          <User size={16} />
          <span className="font-serif text-sm">Reader</span>
        </button>
        
        <button
          onClick={() => handleRoleChange('admin')}
          className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors duration-300 ${
            role === 'admin'
              ? 'bg-amber-900/50 text-amber-200'
              : 'text-gray-400 hover:text-amber-400'
          }`}
          aria-label="Switch to admin mode"
        >
          <Shield size={16} />
          <span className="font-serif text-sm">Curator</span>
        </button>
      </div>
    </div>
  );
}

export default RoleSwitcher;