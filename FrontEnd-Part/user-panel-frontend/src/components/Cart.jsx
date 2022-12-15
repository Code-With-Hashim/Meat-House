import React from 'react'
import {BsCart2} from "react-icons/bs"
import {ImCancelCircle} from 'react-icons/im'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
  } from '@chakra-ui/react'

  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='red' onClick={onOpen}>
         <BsCart2/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            
            <DrawerHeader><span> 
               < ImCancelCircle  style={{marginLeft:"-60px",fontSize:"35px",color:"white"}} onClick={onClose}/>
              </span> </DrawerHeader>
           
  
            <DrawerBody>
              
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }

 const Cart = () => {
  return (
    <div>
        <DrawerExample/>
       

    </div>
  )
}
export default Cart
