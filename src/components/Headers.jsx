import React from 'react';
import {cn} from '../utils/cn';
import { Link } from 'react-router-dom';

function Headers() {
  return (
    <div className={cn(
      'bg-indonesia', 'bg-cover', 'bg-center',
      'w-full', 'h-[200px]',
      'flex', 'flex-col', 'items-center', 'justify-center',
      'text-white'
    )}>
      <Link to={'/'}>
        <h1 className={cn(
          'text-5xl', 'font-bold', 'text-center',
          'uppercase',
          'cursor-pointer'
        )}>Klasemen Sepak Bola Dunia</h1>
      </Link>
    </div>
  )
}

export default Headers