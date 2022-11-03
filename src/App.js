import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LikeSongs from './pages/likeSongs/LikeSongs'

const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/likesongs' exact element={<LikeSongs />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App