import React, { Suspense } from 'react'
import './App.css'

const RemoteHome = React.lazy(() => import('home/Home'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Micro Frontend Container</h1>
        <Suspense fallback={<div>Loading Home component...</div>}>
          <RemoteHome />
        </Suspense>
      </header>
    </div>
  )
}

export default App
