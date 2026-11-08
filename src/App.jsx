import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard.jsx'
import TaskDetail from './Components/TaskDetail.jsx'
import About from './Components/About.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks/:id" element={<TaskDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App