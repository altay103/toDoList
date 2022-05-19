import type { NextPage } from 'next'
import React from 'react'

import { ChakraProvider} from '@chakra-ui/provider'
import { Center,VStack} from '@chakra-ui/react'
import Header from '../componets/header'
import Category from '../componets/category'
import CategoryManager from '../componets/category-manager'


const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Header></Header>
          <CategoryManager></CategoryManager>
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default Home
