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
import { useDispatch, useSelector } from "react-redux";
import useGenerateUniqueRandomString from "../hooks/useGenerateUniqueRandomString";
import { addCardAsync } from "../redux/actions/cardActions";

const AddCardButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");
  const generateURS = useGenerateUniqueRandomString();

  const toast = useToast();
  const dispatch = useDispatch();
  const bucketID = useSelector((state: any) => state.buckets.bucket.id);

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleURLChange = (event: any) => setUrl(event.target.value);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (name.length >= 2) {
      dispatch(
        addCardAsync(
          {
            name,
            id: generateURS(),
            bucketID,
            url,
          },
          bucketID
        )
      );
      setName("");
      setUrl("");
      onClose();
    } else {
      toast({
        title: "Name or YoutubeURL is too short",
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
            <ModalHeader>Create a new Card</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Name {name}</Text>
              <Input
                colorScheme="purple"
                focusBorderColor="purple.500"
                value={name}
                onChange={handleNameChange}
                placeholder="Name for your card"
                size="lg"
              />
              <div className="my-4" />
              <Text>Youtube URL {name}</Text>
              <Input
                colorScheme="purple"
                focusBorderColor="purple.500"
                value={url}
                onChange={handleURLChange}
                placeholder="https://www.youtube.com/watch?v=some1video2id"
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

export default AddCardButton;
