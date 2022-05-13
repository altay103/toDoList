import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";



class TodoProps {
    static Id: number = 0;
    todoId: number = 0;
    todoName: string;
    category: any;
    setCategoryList: any;
    categoryList: any;
    constructor(name: string) {
        this.todoName = name;
        this.todoId = TodoProps.Id++;
    }
}


function Todo(props: TodoProps) {

    useEffect(() => {
        props.setCategoryList(props.categoryList);
        console.log(props.categoryList);
    }, [props.categoryList])
    function deleteTodo() {

        props.setCategoryList(props.categoryList.map((el) =>
            el.categoryName === props.category.categoryName
                ? { ...el, todos: [...props.category.todos.filter(c => c.todoId !== props.todoId)] }
                : el));
    }
    function moveTodo(name: string){

    }

    return (
        <Flex w='450px' gap="1" justify="center">
            <Button flex={1} >
                <Text>{props.todoName}</Text>
            </Button>
            <Menu>
                <MenuButton
                    as={Button}
                >Move</MenuButton>
                <MenuList>
                    {
                        props.categoryList.map((value) => {
                            return (<MenuItem onClick={moveTodo(value.categoryName)}>{value.categoryName}</MenuItem>)
                        })
                    }
                </MenuList>
            </Menu>
            <IconButton
                icon={<AiOutlineClose />}
                aria-label={""}
                onClick={deleteTodo}>
            </IconButton>

        </Flex>
    )
}

export default Todo;
export { TodoProps };