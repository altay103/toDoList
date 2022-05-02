import type { NextPage } from 'next'
import React from 'react'

import { ChakraProvider, } from '@chakra-ui/provider'
import { Center,VStack} from '@chakra-ui/react'
import Header from '../componets/header'
import TaskManager from '../componets/task-manager'

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header></Header>
          <TaskManager></TaskManager>
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default Home
