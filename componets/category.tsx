import { Box, Button, Center, Flex, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CategoryProps } from "./category-manager"
import { MdAdd } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash } from "react-icons/bs"
import Todo, { TodoProps } from "./todo";

function Category(props: CategoryProps): JSX.Element {
    const [active, setActive] = useState(false);
    const [text, setText] = useState("");

    function addButton() {
        setActive(true);
    }
    function spawnTodo() {
        if (text != "") {
            setText("");
            
            for (let i = 0; i < props.categoryList.length; i++) {
                if(props.categoryList[i].categoryId===props.categoryId){
                    let tempCategoryList: CategoryProps[]=props.categoryList;
                    tempCategoryList[i].todos=tempCategoryList[i].todos.concat(new TodoProps(text));
                   
                    props.setCategoryList(tempCategoryList);
                    break;
                }
            }
        } else {
            alert("Input field can not be empty!");
        }
    }
    function closeButton() {
        setActive(false);
    }
    function deleteCategory() {
        let tempCategoryList: CategoryProps[] = [];
        for (let i = 0; i < props.categoryList.length; i++) {
            if (props.categoryId !== props.categoryList[i].categoryId) {
                tempCategoryList = tempCategoryList.concat(props.categoryList[i]);
            }
        }
        props.setCategoryList(tempCategoryList);
    }
    return (
        <VStack>
            <Box width="500px" bgColor="gray.100">
                <Flex width="500px" justify="center" gap="1">
                    <Center>
                        <Text isTruncated
                            width="300px"
                            align="center"
                            fontSize="xl">{props.categoryName}</Text>
                    </Center>

                    {!active ?
                        <>
                            <IconButton
                                icon={<MdAdd size="25px" />}
                                isRound={true}
                                aria-label={""}
                                onClick={addButton}
                            />
                            <IconButton
                                icon={<BsTrash size="25px" />}
                                isRound={true}
                                aria-label={""}
                                onClick={deleteCategory}
                            />
                        </>
                        :
                        <>
                            <Input width="200px"
                                onChange={event => setText(event.target.value)}
                                value={text} />
                            <Button
                                onClick={spawnTodo}>Add</Button>
                            <IconButton
                                icon={<AiOutlineClose />}
                                onClick={closeButton}
                                aria-label={""}>
                            </IconButton>
                        </>
                    }
                </Flex>
            </Box>
            <Box width="450px" bgColor="gray.100">
                <VStack>
                    {props.todos.map((todo) =>{
                        return(
                            <Center>
                                <Todo todoId={todo.todoId} todoName={todo.todoName} ></Todo>
                            </Center>
                        )   
                    })}
                </VStack>


            </Box>

        </VStack>
    )
}

export default Category;


