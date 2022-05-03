import { Button, Center, Flex, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useCallback, useState } from "react";
import TaskManager, { TaskProps } from "./task-manager";


interface taskProps {
    taskEnabled: boolean;
    taskName: string;
    taskId: number;
    setTaskList: any;
    taskList: any;
}
function Task(props: taskProps) {
    const [hide, setHide] = useState(true);
    const [enabled,setEnabled] = useState(props.taskEnabled);
    const changeType=()=>{
        console.log(props.taskList.length);
        let tempTaskList: TaskProps[] = props.taskList;
        for (let i = 0; i < props.taskList.length; i++) {
            if (tempTaskList[i].taskId == props.taskId) {
                tempTaskList[i].taskEnabled = !tempTaskList[i].taskEnabled;
                
            }
        }
        
        props.setTaskList(tempTaskList);
        setEnabled(!enabled);
        

    }
        
    
    function type(enabled:boolean){
        //console.log(props.taskEnabled ? "enabled" : "disabled");
        if(enabled){
            return "cite";
        }else{
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
        return false
    }
}

export default Task;


