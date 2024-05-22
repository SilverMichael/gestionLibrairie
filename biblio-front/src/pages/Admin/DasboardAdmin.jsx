import React from 'react'
import { NavBar } from '../../components'
import AddBookForm from '../../components/book/AddBookForm'

const DasboardAdmin = () => {
  return (
    <div>
      <NavBar />
      <div className='p-11 grid grid-cols-9 gap-4  '>
        <div className='col-span-6 border rounded-md p-4 '>
          book list 
        </div>
        <div className='action col-span-3 border rounded-md p-4 '>
          <AddBookForm />
        </div>
      </div>
    </div>
  )
}

export default DasboardAdmin