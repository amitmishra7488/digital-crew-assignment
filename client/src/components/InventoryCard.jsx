import React, { useEffect, useState } from 'react'
import "./InventoryCard.css"
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios'
import { fetchInventoryData, updateInventoryData } from '../Redux/action';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteInventoryData } from '../Redux/action';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    useDisclosure,
    Input,
    Button
} from '@chakra-ui/react'

export default function InventoryCard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(data => data)

    // implementing update 
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const [input, setInput] = useState({
    //     title: "",
    //     image: "",
    //     description: "",
    //     category: "",
    //     price: "",
    // });

    // const handleChange = (e) => {
    //     setInput({ ...input, [e.target.name]: e.target.value })
    // }

    // const updateItem = async (data, id) => {
    //     try {
    //         const res = await axios.put(`https://digital-crew-assignment-a8ld.vercel.app/inventory/${id}`,
    //             data,
    //         );
    //         console.log(res.data.data);
    //         dispatch(updateInventoryData(res.data.data));

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const handleSubmit = (id) => {
    //     updateItem(input);
    // }


    const display = async () => {
        try {
            const res = await axios.get("https://digital-crew-assignment-a8ld.vercel.app/inventory");
            dispatch(fetchInventoryData(res.data.data));

        } catch (error) {
            console.log(error);
        }
    }
    const handleClick = (id) => {
        navigate(`/inventory/${id}`);
    };
    
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`https://digital-crew-assignment-a8ld.vercel.app/inventory/${id}`);
            dispatch(deleteInventoryData(id));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        display();
    }, [])
    return (
        <div>
            <div className="container">
                {state.inventoryData && state.inventoryData.length > 0 ? state.inventoryData.map((el, i) => {
                    return (
                        <div className="card" key={i.toString()} >
                            <img
                                onClick={() => handleClick(el._id)}
                                src={el.image}
                                alt="Inventory"
                            />
                            <div className="card-body">
                                <h2 className="card-title" onClick={() => handleClick(el._id)}>{el.title}</h2>
                                <p className="card-price">${el.price}</p>
                                <div className="card-buttons">
                                    <button className="edit-button" >
                                        <FaEdit />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(el._id)}>
                                        <FaTrash />
                                    </button>
                                </div>
                                {/* <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Modal Title</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <FormControl mb={5}>
                                            <Input
                                                type="text"
                                                name="title"
                                                placeholder='Add Title'
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                        <FormControl mb={5}>
                                            <Input
                                                type="text"
                                                name="image"
                                                placeholder='Add Image Link'
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                        <FormControl mb={5}>
                                            <Input
                                                type="text"
                                                name="category"
                                                placeholder='Add Category'
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                        <FormControl mb={5}>
                                            <Input
                                                type="text"
                                                name="description"
                                                placeholder='Add Description'
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                        <FormControl mb={5} >
                                            <Input
                                                type="number"
                                                name="price"
                                                placeholder='Add Price'
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                        <Button colorScheme='whatsapp' onClick={()=>handleSubmit(el._id)}>Submit</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal> */}
                            </div>


                        </div>
                    )
                })
                    : "Loading..."
                }
            </div>


        </div>
    )
}
