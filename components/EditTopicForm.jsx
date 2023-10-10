'use client'
import React, { useState } from 'react'

const EditTopicForm = ({ id, title, description }) => {
  const[newTitle,setNewTitle]=useState(title)
  const[newDescription,setNewDescription]=useState(description)
  return (
    <div className=' flex flex-col   px-2 py-4 '>
      <form className='flex flex-col gap-4 mt-8'>
        <input
         onChange={(e)=>setNewTitle(e.target.value)}
         value={newTitle}
          type='text'
          placeholder='Topic Title'
          className='input input-bordered input-success w-full'
        />
        <textarea
           onChange={(e)=>setNewDescription(e.target.value)}
           value={newDescription}
          className='textarea textarea-bordered textarea-success'
          placeholder='Topic Description'
        ></textarea>
        <button
          type='submit'
          className='btn  btn-primary  '
        >
          Update Topic
        </button>
      </form>
    </div>
  )
}

export default EditTopicForm
