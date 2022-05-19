import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

import { ChakraProvider, } from '@chakra-ui/provider'
import { Center,VStack} from '@chakra-ui/react'
import Header from '../componets/header'
import TaskManager from '../componets/task-manager'

const Home: NextPage = () => {
  const [task,setTask]=useState<string>("-1")

  useEffect(() => {
  
    const data=localStorage.getItem("active");
    if(data!==null)setTask(data)
  },[])
  useEffect(() => {
    console.log("active:",task)
  })

  function getName(){
    //@ts-ignore
    let categories=JSON.parse(localStorage.getItem("categories"))["categories"]
    for(let i=0;i<categories.length;i++){
      for(let j=0;j<categories[i].todos.length;j++){
        if(categories[i].todos[j].todoId.toString()===task){
          return categories[i].todos[j].todoName;
        }
      }
    } 
    return "error"
  }

  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header></Header>
          {
            task!="-1" && <TaskManager category={task} header={getName()}></TaskManager>
          }
          
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default Home
