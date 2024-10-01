/* eslint-disable react/prop-types */

import {
  Button,
  Dialog,
  Card,

  CardBody,
  CardFooter,
  Typography,
  Input,

} from "@material-tailwind/react";
 
export function DialogWithForm({name, handleOpen, open , handleSubmit}) {

 
  return (
    <>
      <Button onClick={handleOpen}>{name}</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        onSubmit={handleSubmit}
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
        {name}
            </Typography>
   
          
            <Typography className="-mb-2" variant="h6">
            Enter your {name}
            </Typography>
            <Input label="name" size="lg" type="text" />
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
         
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}