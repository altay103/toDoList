import type { NextPage } from 'next'
import React from 'react'

import { ChakraProvider} from '@chakra-ui/provider'
import { Center,VStack} from '@chakra-ui/react'
import Header from '../componets/header'
import Category from '../componets/category'
import CategoryManager from '../componets/category-manager'

/**
 * 3.)categori managerda silinen todolar veri yapısında da silincek
 * 4.)geri dönme eylemi gerçekleştirilcek vs
 * 5.)uyarı mesajları ve imputlar önceden doldurulcak vs
 */
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
