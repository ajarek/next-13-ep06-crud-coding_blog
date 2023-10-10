
import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

const EditTopic = async({params}) => {
  const data = await getData(params.id)



  console.log(data);
  return (
    <div>
      <EditTopicForm/>
    </div>
  )
}

export default EditTopic