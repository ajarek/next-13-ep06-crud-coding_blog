'use client'
import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import useSWR from 'swr'
import { useRouter, Link } from 'next/navigation'

const TopicList = ({ id, title, text }) => {
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, mutate, error, isLoading } = useSWR(`/api/topics`, fetcher)

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/topics/${id}`, {
        method: 'DELETE',
      })
      mutate()
     
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {error?notFound():null}
      {isLoading
        ?  <div className='h-screen w-full flex justify-center items-center'>
        <span className="loading loading-spinner text-primary"></span>
      </div>
        : data?.map((dt) => (
            <div
              key={dt._id}
              className='card w-full bg-base-200 shadow-xl flex-row items-center max-sm:flex-col max-sm:pb-4 '
            >
              <div className='card-body'>
                <h2 className='card-title '>{dt.title}</h2>
                <p className='text-base'>{dt.description}</p>
              </div>
              <div className='card-actions pr-4 '>
                <button onClick={() => handleDelete(dt._id)} className='btn btn-error btn-xl text-xl'>🗑️</button>
                <button
                  onClick={() => router.push(`/editTopic/${dt._id}`)}
                  className='btn btn-success btn-xl text-xl'
                >
                  🖊️
                </button>
              </div>
            </div>
          ))}
    </>
  )
}

export default TopicList
