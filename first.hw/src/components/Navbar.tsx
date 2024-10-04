import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div id='navbar'>
        <Link href={"/"}><button>Home</button></Link>
        <Link href={"/about"}><button>About</button></Link>
        <Link href={"/skills"}><button>Skills</button></Link>
        <Link href={"/myprojects"}><button>My Projects</button></Link>
        <Link href={"/contact"}><button>Contact</button></Link>       
    </div>
  )
}

export default Navbar
