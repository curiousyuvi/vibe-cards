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
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bucket } from "../interfaces/Bucket";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteBucketAsync,
  updateBucketAsync,
} from "../redux/actions/bucketActions";

const BucketListItem = ({ bucket }: { bucket: Bucket }) => {
  const handleDeleteClick = () => {
    dispatch(deleteBucketAsync(bucket.id));
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(bucket.name);
  const toast = useToast();
  const dispatch = useDispatch();
  const handleChange = (event: any) => setName(event.target.value);
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (name.length >= 2) {
      dispatch(updateBucketAsync({ name, id: bucket.id }));
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
      <div className="w-64 h-64 group p-4 flex flex-col justify-center items-center rounded-xl border hover:bg-gradient-to-r from-indigo-50 to-pink-50 relative">
        <div className="absolute w-full justify-end top-0 p-2 py-4 hidden group-hover:flex">
          <Menu>
            <MenuButton>
              <IoEllipsisVerticalOutline className="text-xl" />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onOpen} icon={<AiOutlineEdit />}>
                Edit bucket
              </MenuItem>
              <MenuItem
                color="red.500"
                onClick={handleDeleteClick}
                icon={<AiOutlineDelete />}
              >
                Delete bucket
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Link
          to={`/${bucket.id}`}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <>
            <img
              src="/bucket-clr.svg"
              alt=""
              className="h-24 w-24 hidden group-hover:flex"
            />
            <img
              src="/bucket-bw.svg"
              alt=""
              className="h-24 w-24 flex group-hover:hidden"
            />
            <span className="my-2" />
            <Text className="text-xl">{bucket.name}</Text>
          </>
        </Link>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleFormSubmit}>
            <ModalHeader>Update Bucket</ModalHeader>
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
                  UPDATE
                </Button>
              </div>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BucketListItem;
