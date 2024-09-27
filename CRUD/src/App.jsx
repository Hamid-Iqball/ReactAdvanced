import React from 'react'
import Posts from './Posts'

function App() {

  return (
    <div className='bg-slate-500 h-full w-screen p-6'>
    <h1 className='text-slate-50 text-3xl font-semibold  my-4 text-center'>CRUD Operation with Zustand</h1>
    <Posts/>
    </div>
  )
}

export default App