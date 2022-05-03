import { VStack, Flex, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import Task from "./task";


export class TaskProps {
    static Id = 0;
    public taskId: number=0;
    public taskName: string ="";
    public taskEnabled: boolean = true;
    constructor( name: string) {
        this.taskName = name;
        this.taskId = TaskProps.Id++;
    }
}
function TaskManager() {
    const [text, setText] = useState<string>("")
    const [taskList, setTaskList] = useState<TaskProps[]>([]);

    function control() {
        if (text != "") {
            let task:TaskProps = new TaskProps(text);

            setTaskList(taskList.concat(task));
            setText("");
        } else {
            alert("Input field can not be empty!");
        }

    }



   
    return (

        <VStack>
            <Flex width='500px'>
                <Input onChange={event => setText(event.target.value)} value={text} />
                <Button onClick={control} >Add</Button>
            </Flex>
            {taskList.map((task) => {
                return <Task key={task.taskId}
                    taskName={task.taskName}
                    taskEnabled={task.taskEnabled}
                    taskId={task.taskId} 
                    setTaskList={setTaskList} 
                    taskList={taskList} />
            })}
        </VStack>

    )
}

export default TaskManager;