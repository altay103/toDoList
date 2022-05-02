import { VStack ,Flex,Button,Input } from "@chakra-ui/react";
import { useState } from "react";
import Task from "./task";


function TaskManager(){
    const [text,setText]=useState<string>("")
    const [taskList,setTaskList]=useState([]);
    const control=()=>{
        if(text!=""){
            setTaskList(taskList.concat(<Task taskName={text}/>))
            
            setText("")
        }else{
            alert("Input field can not be empty!")
        }
        
    }
    
    
    return(
      
        <VStack>
            <Flex width='500px'>
                <Input onChange={event=>setText(event.target.value)} value={text}/>
                <Button onClick={control} >Add</Button>
            </Flex>
            {taskList}
        </VStack>

    )
}

export default TaskManager;