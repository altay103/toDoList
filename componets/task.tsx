import { Button, Center, Flex, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { TaskProps } from "./task-manager";


interface taskProps {
    taskEnabled: boolean;
    taskName: string;
    taskId: number;
    setTaskList: any;
    taskList: any;
    category: string;
}
function Task(props: taskProps) {
    const [hide, setHide] = useState(true);
    const [enabled, setEnabled] = useState(props.taskEnabled);
    const changeType = () => {

        let tempTaskList: TaskProps[] = props.taskList;
        for (let i = 0; i < props.taskList.length; i++) {
            if (tempTaskList[i].taskId == props.taskId) {
                tempTaskList[i].taskEnabled = !tempTaskList[i].taskEnabled;

            }
        }

        props.setTaskList(tempTaskList);
        setEnabled(!enabled);

    }

    useEffect(() => {
        //@ts-ignore
        let todos: any = JSON.parse(localStorage.getItem("todos"))

        for (let i = 0; i < todos[props.category].length; i++) {
            if (todos[props.category][i].taskId === props.taskId) {
                todos[props.category][i].taskEnabled = enabled;
                localStorage.setItem("todos", JSON.stringify(todos))
                break;
            }
        }


    }, [enabled]);



    function type(enabled: boolean) {
        //console.log(props.taskEnabled ? "enabled" : "disabled");
        if (enabled) {
            return "samp";
        } else {
            return "del";
        }
    }
    //console.log(props.taskName+" rendered");
    if (hide) {
        return (
            <Center>

                <Flex w='500px' >
                    <Button flex={1} variant='ghost' onClick={changeType}>
                        <Text as={type(enabled)}>{props.taskName}</Text>
                    </Button>

                    <IconButton
                        icon={<AiOutlineClose />}
                        onClick={() => setHide(false)}
                        aria-label={""}>
                    </IconButton>
                </Flex>

            </Center>
        )
    } else {

        let tempTaskList: TaskProps[] = [];
        for (let i = 0; i < props.taskList.length; i++) {
            if (props.taskList[i].taskId !== props.taskId) {
                tempTaskList = tempTaskList.concat(props.taskList[i]);
            }
        }
        props.setTaskList(tempTaskList);

        return <div></div>
    }
}

export default Task;


