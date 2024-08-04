import {Landing} from './component/Landing'
import {Room} from './component/Room'

import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
          
        
        <Route path="/room" element={<Room/>} />
          
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
