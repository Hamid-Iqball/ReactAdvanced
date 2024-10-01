/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

const ModalContext = createContext();

export function Modal({ children ,open,handleOpen}) {

  return (
    <ModalContext.Provider value={{ open, handleOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function ModalTrigger({ children }) {
  const { handleOpen } = useContext(ModalContext);
  return <Button onClick={handleOpen}> {children}</Button>;
}

function ModalContent({children,handleSubmit}) {
const {open,handleOpen} = useContext(ModalContext)
  return (
    <Dialog
      size="xs"
      open={open} 
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          {children}
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleOpen} type="submit" onSubmit={handleSubmit} fullWidth>
            Add
          </Button>
        </CardFooter>
      </Card>
    </Dialog>

);
}


Modal.ModalTrigger = ModalTrigger;
Modal.ModalContent = ModalContent;
