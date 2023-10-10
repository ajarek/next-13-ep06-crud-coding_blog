
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
  const {_id, title,description} =data


  console.log(title, description);
  return (
    <div>
      <EditTopicForm id={_id} title={title} description={description}/>
    </div>
  )
}

export default EditTopic