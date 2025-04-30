import './App.css'
import ProfileEditor from './components/ProfileEditor'
import BookList from './components/BookList'
import RoleSwitcher from './components/RoleSwitcher'
import { RoleProvider } from './contexts/RoleContext'

function App() {
  return (
    <RoleProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Book Dashboard App</h1>
        <div className="space-y-8">
          <ProfileEditor />
          <RoleSwitcher />
          <BookList />
        </div>
      </div>
    </RoleProvider>
  )
}

export default App