import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-white px-2">
  <div className="flex-1">
    <Link href='/' className="btn btn-ghost normal-case text-xl">CodingBlog</Link>
  </div>
  <div className="flex-none">
    <Link className="btn btn-active normal-case text-xl " href='/addTopic'>Add Topic</Link>
  </div>
</div>
  )
}

export default Navbar