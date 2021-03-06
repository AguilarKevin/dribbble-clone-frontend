import { Image } from '@chakra-ui/image'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import Logo from '../../assets/logo.svg'

export default function AppLogo() {
  return (
    <Flex pl="10" align="center" justify="center">
      <Image w="76px" h="60px" src={Logo} alt="dribble logo" />
    </Flex>
  )
}
