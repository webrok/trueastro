"use client"
import React from 'react'
import {usePathname} from "next/navigation"

const page = () => {
  const pathName = usePathname();
  return (
            <div>
            <h1>
                {
                    pathName !== "/horoscope" ?
                    horoooooo 
                    : null
                }
                 Akhilesh kumar </h1>
            </div>
  )
}

export default page;
