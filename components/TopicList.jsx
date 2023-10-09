'use client'
import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'

import { useRouter, Link } from 'next/navigation'


const TopicList = ({id,title,text}) => {
  const [data, setData] = useState([])
  const router = useRouter()

  useEffect(() => {
    async function getData() {
      const res = await fetch(`/api/topics`, {
        cache: 'no-store',
      })

      if (!res.ok) {
        notFound()
      }
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])

  return (
    <>
      {data.map((dt) => (
    <div key={dt._id} className='card w-full bg-base-200 shadow-xl flex-row items-center'>
     
      <div className='card-body'>
        <h2 className='card-title '>{dt.title}</h2>
        <p className='text-base'>{dt.description}</p>
      </div>
      <div className='card-actions pr-4 '>
        <button className='btn btn-error btn-xl text-xl'>🗑️</button>
        <button onClick={() => router.push(`/editTopic/${dt._id}`)} className='btn btn-success btn-xl text-xl'>🖊️</button>
      </div>
    </div>
      )
    )}
    </>
  )
}

export default TopicList
