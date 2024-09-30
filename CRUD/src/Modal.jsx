/* eslint-disable react/prop-types */

import {

  Dialog,
  Card,
  CardBody,
  CardFooter,


} from "@material-tailwind/react";
import { children, createContext, useContext, useState } from "react";
 


const ModalContex = createContext()
function Modal(){

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
    return <ModalContex.Provider value={{open,handleOpen}}>
     <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
            >
            <Card className="mx-auto w-full max-w-[24rem]">

         {children}
            </Card>
            </Dialog>
            </ModalContex.Provider>
}


function ModalTrigger({children}){
    const {handleOpen} = useContext(ModalContex)
return <div onClick={handleOpen}>{children}</div>
}


function ModalBody({children}){
    return <CardBody>
        {children}
    </CardBody>
}

function ModalFooter({children}){
    return <CardFooter className="pt-0">
    {children}
    </CardFooter>
}

Modal.ModalTrigger = ModalTrigger
Modal.ModalBodY=ModalBody
Modal.ModalFooter = ModalFooter

export default Modal