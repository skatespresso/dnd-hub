import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '@base-ui/react'

export default function NotFound() {
  return (
    <div>
      <h1>There is no loot here.</h1>
      <p>You've reached a dead end, traveller.</p>
      <Link to={"/"}>
        <button>Go Back Home</button>
        
      </Link>
      
    </div>
  )
};
