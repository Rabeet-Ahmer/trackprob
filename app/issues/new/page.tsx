import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const newIssuePage = () => {
  return (
    <div className='max-w-xl space-y-4 mx-auto my-10 items-end'>
        <TextField.Root placeholder='Title' size={"3"} color='green' radius='large' variant="soft"/>
        <TextArea  placeholder='Description' variant='soft' color='yellow' radius='large' size={"3"} className='h-36'/>
        <Button className='' variant='soft' color='orange' size={"3"} >Submit New Issue</Button>
    </div>
  )
}

export default newIssuePage