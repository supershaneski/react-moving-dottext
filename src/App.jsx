import React from 'react'
import './App.css'

import DotText from './components/DotText'

function App() {
  return (
    <div className="App">
      <DotText text="Merry Christmas and Happy New Year" play={true} length={60} />
    </div>
  )
}

export default App
