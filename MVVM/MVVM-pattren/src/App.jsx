
import { DialogWithForm } from "./Components/DialogWithForm"
import { useState } from "react"




function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur);
  function handleShow(){
    setOpen((prevState)=> !prevState)
  }
  return (
    <div className="bg-red-200 ">
      <button onClick={handleShow} className="bg-black text-white ">
      Sign In
      </button>

<DialogWithForm  open={open} handleOpen={handleOpen} title='Sign In' description='Enter your email and Password' inputs={[
  {label:"Email",type:"Email"},
  {label:"Password", type:"Password"}
]} 
submitButton='Sign in'
/>
    </div>
  )
}

export default App