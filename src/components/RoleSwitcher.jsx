import React from 'react';
import { useRole } from '../contexts/RoleContext';

function RoleSwitcher() {
  const { role, toggleRole } = useRole();

  return (
    <div className="flex justify-end mb-4">
      <div className="bg-gray-100 p-2 rounded-lg flex items-center">
        <span className="mr-2 text-sm font-medium">Current Role: 
          <span className={`ml-1 ${role === 'admin' ? 'text-purple-600 font-bold' : 'text-blue-600'}`}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </span>
        </span>
        <button 
          onClick={toggleRole}
          className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600"
        >
          Switch to {role === 'user' ? 'Admin' : 'User'}
        </button>
      </div>
    </div>
  );
}

export default RoleSwitcher;