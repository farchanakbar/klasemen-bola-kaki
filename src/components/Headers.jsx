import React from 'react';
import {cn} from '../utils/cn';

function Headers() {
  return (
    <div className={cn(
      'bg-indonesia', 'bg-cover', 'bg-center',
      'w-full', 'h-[200px]',
      'flex', 'flex-col', 'items-center', 'justify-center',
      'text-white'
    )}>
      <h1 className={cn(
        'text-5xl', 'font-bold',
      )}>Klasemen Sepak Bola</h1>
      <p className={cn(
        'text-xl'
      )}>cek klasemen liga favorite mu..</p>
    </div>
  )
}

export default Headers