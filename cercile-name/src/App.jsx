import { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import Form from './form.jsx';
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)
    
  function showFormFunc(){
      setShowForm(!showForm)
  }

return (
     <>
       
       <button onClick={showFormFunc}><IoMdAdd /></button>
       {showForm && <Form showForm={showForm}/>}
     </>
)
}

export default App
