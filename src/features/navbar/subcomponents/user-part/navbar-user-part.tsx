import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export const NavbarUserPart = () => {
  return (
    <div className='flex'>
        <Avatar>
            <AvatarImage src='wtf' />
            <AvatarFallback className='select-none'>W</AvatarFallback>
        </Avatar>
    </div>
  )
}
