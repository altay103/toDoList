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

  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header></Header>
          {
            task!="-1" && <TaskManager category={task}></TaskManager>
          }
          
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default Home
