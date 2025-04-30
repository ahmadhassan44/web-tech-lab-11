import { useState, useRef } from 'react';
import { PenLine, User } from 'lucide-react';

function ProfileEditor() {
    const [profile, setProfile] = useState({
        name: '',
        age: ''
    });
    
    const nameRef = useRef();
    const ageRef = useRef();
    
    const handleSubmit = () => {
        setProfile({
            name: nameRef.current.value,
            age: ageRef.current.value
        });
    };
    
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 transition-all duration-300 hover:shadow-lg">
          <div className="md:flex">
            <div className="p-8 w-full">
              <div className="flex items-center justify-between">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Profile Editor</div>
                <PenLine className="h-5 w-5 text-indigo-500" />
              </div>
              
              <div className="mt-6 border-t border-gray-100 pt-4">
                <div className="flex items-center bg-gray-50 p-4 rounded-lg mb-4">
                  <User className="h-12 w-12 text-indigo-400 bg-indigo-100 p-2 rounded-full" />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
                    {profile.age && <p className="text-gray-600">{profile.age} years old</p>}
                  </div>
                </div>
    
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        ref={nameRef}
                        defaultValue={profile.name}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
    
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        name="age"
                        type='number'
                        id="age"
                        ref={ageRef}
                        defaultValue={profile.age}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="Enter your age"
                        min="0"
                      />
                    </div>
                  </div>
    
                  <button className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200" onClick={handleSubmit}>
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ProfileEditor;