import type { NextPage } from 'next'
import React, { useState } from 'react'

import { ChakraProvider, } from '@chakra-ui/provider'
import { Center,VStack} from '@chakra-ui/react'
import Header from '../componets/header'
import TaskManager from '../componets/task-manager'

const Home: NextPage = () => {
  const [task,setTask]=useState<string>("0")
  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header></Header>
          <TaskManager category={task}></TaskManager>
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default Home
