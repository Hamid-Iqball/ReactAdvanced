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
 
export function DialogWithForm({name,handleOpen, open , handleSubmit,value,setName}) {

 
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
            <Input label="name" size="lg" type="text" value={value} onChange={(e)=>setName(e.target.value)} />
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient"  fullWidth type="submit" onClick={handleSubmit}>
            {name}
            </Button>
         
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}