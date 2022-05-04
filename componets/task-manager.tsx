import { VStack, Flex, Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Task from "./task";


export class TaskProps {
    static Id = 0;
    public taskId: number = 0;
    public taskName: string = "";
    public taskEnabled: boolean = true;
    constructor(name: string) {
        this.taskName = name;
        this.taskId = TaskProps.Id++;
    }
}

interface taskManagerProps {
    category: any;
}
function TaskManager(props: taskManagerProps) {
    const [text, setText] = useState<string>("")
    const [taskList, setTaskList] = useState<TaskProps[]>([]);
 

    useEffect(()=>{//load tasks
        let todos:any={};
            if (localStorage.getItem("todos") !== undefined && localStorage.getItem("todos") !== null) {
                console.log("getting");
                todos = JSON.parse(localStorage.getItem("todos"));
                let tempTaskList: TaskProps[]=[];

                for (let i = 0; i < todos[props.category].length; i++) {
                    let tempTask:TaskProps=new TaskProps("test");
                    tempTask.taskName=todos[props.category][i].taskName;
                    tempTask.taskEnabled=todos[props.category][i].taskEnabled;
                    tempTaskList=tempTaskList.concat(tempTask);
                }
            
                setTaskList(tempTaskList)
                
                taskList.forEach((task)=>{
                    console.log(task.taskId+" "+task.taskName+" "+task.taskEnabled);
                })
            } else {
                todos[props.category]=[]
            }
         
    },[])
            
      
    function control() {
        if (text != "") {
            let task: TaskProps = new TaskProps(text);

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