import Posts from './Posts'
import {Toaster} from 'react-hot-toast'
function App() {

  return (
    <div className='bg-orange-100 h-full w-screen p-6'>
    <h1 className='text-slate-50 text-3xl font-semibold  my-4 text-center'>CRUD Operation with Zustand</h1>
    <Posts/>
<Toaster position='top-right' gutter={12}
containerStyle={{margin:"10px , 80px"}} 
toastOptions={
  {
    success:{
      duration:3000,
    },
    error:{
      duration:5000
    },
    style:{
      fontSize:'16px',
      maxWidth:'500px',
      padding:"16px 24px",
      backgroundColor:'#F9FAFB',
      color:'#45454'
    }
  }
}/>
    </div>
  )
}

export default App