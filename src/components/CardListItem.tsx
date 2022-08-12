import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../interfaces/Card";
import { deleteCardAsync, updateCardAsync } from "../redux/actions/cardActions";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { BsBucket, BsChevronDown } from "react-icons/bs";
import { Bucket } from "../interfaces/Bucket";
import { RiFolderTransferLine } from "react-icons/ri";

const CardListItem = ({ card }: { card: Card }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteCardAsync(card.id, bucketID));
  };
  const handleCardClick = () => {
    setIsVideoModal(true);
    onOpen();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState(card.name);
  const [url, setUrl] = React.useState(card.url);
  const [isVideoModal, setIsVideoModal] = useState(true);

  const bucketID = useSelector((state: any) => state.buckets.bucket.id);
  const buckets = useSelector((state: any) => state.buckets.buckets).filter(
    (bucket: Bucket) => bucket.id !== bucketID
  );

  const toast = useToast();
  const handleNameChange = (event: any) => setName(event.target.value);
  const handleURLChange = (event: any) => setUrl(event.target.value);

  const handleOptionsClick = () => {
    setIsVideoModal(false);
    onOpen();
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (name.length >= 2) {
      dispatch(
        updateCardAsync(
          {
            name,
            id: card.id,
            bucketID,
            url,
          },
          bucketID
        )
      );

      onClose();
    } else {
      toast({
        title: "Name is too short",
        status: "error",
      });
    }
  };

  const handleTransferCard = (newBucketID: string) => {
    dispatch(
      updateCardAsync(
        {
          name: card.name,
          id: card.id,
          bucketID: newBucketID,
          url: card.url,
        },
        bucketID
      )
    );
  };

  return (
    <>
      <div className="w-64 h-64 group flex flex-col justify-center items-center rounded-xl overflow-hidden border hover:bg-gradient-to-r from-indigo-50 to-pink-50 relative">
        <div className="absolute w-full justify-end top-0 p-2 py-2 hidden group-hover:flex z-10">
          <Menu>
            <MenuButton className="bg-blue-800/50 rounded p-1">
              <IoEllipsisVertical className="text-xl text-white" />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleOptionsClick} icon={<AiOutlineEdit />}>
                Edit card
              </MenuItem>
              <MenuItem
                color="red.500"
                onClick={handleDeleteClick}
                icon={<AiOutlineDelete />}
              >
                Delete card
              </MenuItem>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <div className="w-full flex justify-start items-center px-3">
                      <RiFolderTransferLine />
                      <span className="mx-1" />
                      <MenuButton
                        isActive={isOpen}
                        as={Button}
                        rightIcon={<BsChevronDown />}
                        className="flex items-center"
                      >
                        Transfer to
                      </MenuButton>
                    </div>
                    <MenuList className="ml-4">
                      {buckets.map((bucket: Bucket) => {
                        return (
                          <MenuItem
                            id={bucket.id}
                            onClick={() => {
                              handleTransferCard(bucket.id);
                            }}
                            icon={<BsBucket />}
                          >
                            {bucket.name}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </>
                )}
              </Menu>
            </MenuList>
          </Menu>
        </div>
        <button
          className="w-full h-full flex flex-col items-center justify-start"
          onClick={handleCardClick}
        >
          <>
            <div className="w-full h-full overflow-hidden">
              <img
                src={`http://i1.ytimg.com/vi/${card.url.replace(
                  "https://www.youtube.com/watch?v=",
                  ""
                )}/0.jpg`}
                alt=""
                className="h-full w-full object-cover scale-[1.8]"
              />
            </div>
            <Text className="text-xl h-16 flex items-center">{card.name}</Text>
          </>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {!isVideoModal ? (
          <ModalContent>
            <form onSubmit={handleFormSubmit}>
              <ModalHeader>Update Card</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Name</Text>
                <Input
                  colorScheme="purple"
                  focusBorderColor="purple.500"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Name for your card"
                  size="lg"
                />
                <div className="my-4" />
                <Text>Youtube URL</Text>
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
                    UPDATE
                  </Button>
                </div>
              </ModalFooter>
            </form>
          </ModalContent>
        ) : (
          <ModalContent className="overflow-hidden">
            <LiteYouTubeEmbed
              id={card.url.replace("https://www.youtube.com/watch?v=", "")}
              title={card.name}
            />
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default CardListItem;
