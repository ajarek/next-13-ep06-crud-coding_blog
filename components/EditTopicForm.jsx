import React from 'react'

const EditTopicForm = () => {
  return (
    <div className=' flex flex-col   px-2 py-4 '>
    <form className="flex flex-col gap-4 mt-8">
   <input type="text" placeholder="Topic Title" className="input input-bordered input-success w-full"/>
   <textarea className="textarea textarea-bordered textarea-success" placeholder="Topic Description"></textarea>
   <button type="submit" className="btn  btn-primary  ">Update Topic</button>
    </form>
  </div>
  )
}

export default EditTopicForm