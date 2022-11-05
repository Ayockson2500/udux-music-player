import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LikeSongs from './pages/likeSongs/LikeSongs'
import "./App.css"


const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<LikeSongs />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App