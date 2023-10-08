const AddTopic = () => {
  return <div className='flex flex-col px-12 py-4 '>
    <form className="flex flex-col gap-4 mt-8">
   <input type="text" placeholder="Topic Title" className="input input-bordered input-success w-full"/>
   <textarea className="textarea textarea-bordered textarea-success" placeholder="Topic Description"></textarea>
   <button type="submit" className="btn  btn-success  ">Add Topic</button>
    </form>
  </div>
}

export default AddTopic
