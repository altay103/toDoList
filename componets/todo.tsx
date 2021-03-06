import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";



class TodoProps {
    static Id: number = 0;
    public todoId: number = 0;
    public todoName: string;
    public category: any;
    public setCategoryList: any;
    categoryList: any;
    constructor(name: string, categoryList: any) {
        this.categoryList = categoryList;
        let biggerId = -1;
        for (let i = 0; i < this.categoryList.length; i++) {
            for (let j = 0; j < this.categoryList[i].todos.length; j++) {
                if (this.categoryList[i].todos[j].todoId > biggerId) {
                    biggerId = this.categoryList[i].todos[j].todoId;
                }
            }
        }
        TodoProps.Id = ++biggerId;

        this.todoName = name;
        this.todoId = TodoProps.Id;
    }
}
function Todo(props: TodoProps) {

    useEffect(() => {
        props.setCategoryList(props.categoryList);
        console.log(props.categoryList);
    }, [props.categoryList])
    function deleteTodo() {
        if (localStorage.getItem("todos") !== undefined && localStorage.getItem("todos") !== null) {
            console.log("inside deleteTodo")
            //@ts-ignore
            let todos = JSON.parse(localStorage.getItem("todos"))
            
            delete todos[props.todoId.toString()]
            localStorage.setItem("todos",JSON.stringify(todos))
        }




        props.setCategoryList(props.categoryList.map((el:any) =>
            el.categoryName === props.category.categoryName
                ? { ...el, todos: [...props.category.todos.filter((c:any) => c.todoId !== props.todoId)] }
                : el));
    }
    function moveTodo(name: string) {

        props.setCategoryList(props.categoryList.map((el:any) => {
            if (el.categoryName === name) {
                let todo: TodoProps = new TodoProps(props.todoName, props.categoryList);
                todo.todoId = props.todoId;
                return { ...el, todos: [...el.todos, todo] }
            } else if (el.categoryName === props.category.categoryName) {
                return { ...el, todos: el.todos.filter((todo:any) => todo.todoId !== props.todoId) }
            }
            else {
                return el;
            }


        }))

    }
    function setTaskPage() {
        localStorage.setItem("active", props.todoId.toString())
        window.location.href = "/task-page";
    }
    return (
        <Flex w='450px' gap="1" justify="center">
            <Button flex={1} onClick={setTaskPage}>
                <Text>{props.todoName}</Text>
            </Button>
            <Menu>
                <MenuButton
                    as={Button}
                >Move</MenuButton>
                <MenuList>
                    {
                        props.categoryList.map((value: any) => {
                            if (value.categoryName !== props.category.categoryName) {
                                return (<MenuItem onClick={() => { moveTodo(value.categoryName) }}>
                                    {value.categoryName}</MenuItem>)
                            } else {
                                return false
                            }

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