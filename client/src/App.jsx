import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TasksPages } from './pages/TasksPages';
import { TaskFormPages } from './pages/TaskFormPages';
import { Navigation } from './components/Navigation';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPages />} />
        <Route path="/tasks-create" element={<TaskFormPages />} />
        <Route path="/tasks/:id" element={<TaskFormPages />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App;