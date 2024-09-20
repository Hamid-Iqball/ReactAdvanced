
import { DialogWithForm } from "./Components/DialogWithForm"
import { useState } from "react"




function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur);
  
  return (
    <div className="bg-red-200 ">
      <button onClick={handleOpen} className="bg-black text-white p-2 m-4 rounded-md">
      Sign In
      </button>

<DialogWithForm  open={open} handleOpen={handleOpen} size='xs' title='Sign In' description='Enter your email and Password' inputs={[
  {label:"Email",type:"Email"},
  {label:"Password", type:"Password"},

]} 
submitButton='Sign in'
/>
    </div>
  )
}

export default App