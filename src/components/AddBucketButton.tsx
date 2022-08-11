import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import useGenerateUniqueRandomString from "../hooks/useGenerateUniqueRandomString";
import { addBucketAsync } from "../redux/actions/bucketActions";

const AddBucketButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = React.useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const generateURS = useGenerateUniqueRandomString();
  const handleChange = (event: any) => setName(event.target.value);
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (name.length >= 2) {
      dispatch(addBucketAsync({ name, id: generateURS() }));
      onClose();
    } else {
      toast({
        title: "Name is too short",
        status: "error",
      });
    }
  };
  return (
    <>
      <button
        className="h-64 w-64 rounded-xl border flex justify-center items-center border-indigo-500/30 text-indigo-500/60 hover:text-indigo-500 hover:bg-indigo-500/10"
        onClick={onOpen}
      >
        <BsPlus className="text-6xl" />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleFormSubmit}>
            <ModalHeader>Create a new Bucket</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb="8px">Name: {name}</Text>
              <Input
                colorScheme="purple"
                focusBorderColor="purple.500"
                value={name}
                onChange={handleChange}
                placeholder="Name for your bucket"
                size="lg"
              />
            </ModalBody>

            <ModalFooter>
              <div className="w-full flex justify-center">
                <Button
                  className="w-full max-w-sm"
                  colorScheme="purple"
                  size="lg"
                  type="submit"
                >
                  CREATE
                </Button>
              </div>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddBucketButton;
