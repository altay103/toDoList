import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";



class TodoProps {
    static Id:number=0;
    todoId:number=0;
    todoName: string;

    constructor(name:string){
        this.todoName=name;
        this.todoId=TodoProps.Id++;
    }
}


function Todo(props: TodoProps) {

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
                <MenuItem></MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open...</MenuItem>
                <MenuItem>Save File</MenuItem>
                </MenuList>
            </Menu>
            <IconButton
                icon={<AiOutlineClose />}
                aria-label={""}>
            </IconButton>

        </Flex>
    )
}

export default Todo;
export {TodoProps};