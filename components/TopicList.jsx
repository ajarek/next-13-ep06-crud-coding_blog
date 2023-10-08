import React from 'react'

const TopicList = () => {
  return (
    <div className='card w-full bg-base-200 shadow-xl flex-row items-center'>
     
      <div className='card-body'>
        <h2 className='card-title '>Card title!</h2>
        <p className='text-base'>We are using cookies for no reason. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, ea numquam suscipit ab doloribus, expedita fuga reiciendis velit nobis, possimus itaque perspiciatis aperiam obcaecati. Labore sequi eveniet debitis amet nemo rerum dolorum praesentium nobis consectetur illo omnis voluptatem, inventore voluptate odio earum velit? Ipsa cupiditate consectetur aliquam rerum. Vero, porro?</p>
      </div>
      <div className='card-actions pr-4 '>
        <button className='btn btn-error btn-xl text-xl'>🗑️</button>
        <button className='btn btn-success btn-xl text-xl'>🖊️</button>
      </div>
    </div>
  )
}

export default TopicList
