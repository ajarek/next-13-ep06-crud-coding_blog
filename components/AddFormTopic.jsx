'use client'


import React from 'react'

const AddFormTopic = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
   

    const title = e.target[0].value
    const description = e.target[1].value
    

    try {
      const res = await fetch('/api/topics', {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
         
        }),
      })
      if (!res.ok) {
        throw new Error(
          'Nie udało się przesłać danych. Proszę spróbuj ponownie.'
        )
      }
      console.log(res)
      e.target.reset()
    } catch (err) {
      
      console.log(err)
    } finally {
      
     
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
    <input type="text" placeholder="Topic Title" className="input input-bordered input-success w-full"/>
    <textarea className="textarea textarea-bordered textarea-success" placeholder="Topic Description"></textarea>
    <button type="submit" className="btn  btn-success  ">Add Topic</button>
     </form>
  )
}

export default AddFormTopic