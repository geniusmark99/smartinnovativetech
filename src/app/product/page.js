import React from 'react'
import HeaderWidget from '@/components/general/HeaderWidget'

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <HeaderWidget/>
      
      </div>
    </main>
  )
}
