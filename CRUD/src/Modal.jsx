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
 
export function DialogWithForm({mode, handleOpen, open , handleSubmit,value,setName}) {
let isEditMode = mode === 'edit'
 
  return (
    <>
      <Button onClick={handleOpen}>{isEditMode? "Edit ": "Add Name"}</Button>
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
        {isEditMode ? "Edit Name" :"Add Name"}
            </Typography>
            <Typography className="-mb-2" variant="h6">
            Enter your Name
            </Typography>
            <Input label="name" size="lg" type="text" value={value} onChange={(e)=>setName(e.target.value)} />
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient"  fullWidth type="submit" onClick={handleSubmit}>
            {isEditMode?"Edit":"Add"}
            </Button>
         
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}