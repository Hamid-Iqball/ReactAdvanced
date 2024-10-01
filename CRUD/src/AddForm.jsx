/* eslint-disable no-unused-vars */
import { Button, Card, CardBody, CardFooter, Dialog, Input, Typography } from '@material-tailwind/react'
import React from 'react'

// eslint-disable-next-line react/prop-types
function AddForm() {
  return (
    
 <>
          <Typography variant="h4" color="blue-gray">
            Add Your Name
          </Typography>
          <Typography className="-mb-2" variant="h6">
            Your Name
          </Typography>
          <Input label="Name" size="lg" />
 </>
      
        
  
  )
}

export default AddForm