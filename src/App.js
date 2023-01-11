import React from 'react'
import Table from './components/Table'
import { individualStats } from './utils'

function App() {
  return (
    <div>
      <Table Stats={individualStats}/>
    </div>
  )
}

export default App