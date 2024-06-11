import { useState } from 'react'
import React from 'react'
import BoxList from './BoxList'
import NewBoxForm from './NewBoxForm'

function App() {
  return (
    <div>
      <BoxList />
      <h1>NEW BOX FORM!!</h1>
      <NewBoxForm />
    </div>
    
  )
}

export default App
