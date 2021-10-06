import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'

import { Show } from '@chakra-ui/media-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserActionButtons() {
  const navigate = useNavigate()
  return (
    <Flex flex={{ base: '0', md: '1' }} justify="end" align="center">
      <Button
        size="lg"
        fontWeight="regular"
        fontSize="md"
        color="#8E8E97"
        variant="ghost"
        onClick={() => {
          navigate('/session/new')
        }}
      >
        Sign in
      </Button>
      <Show above="md">
        <Button
          borderRadius={8}
          fontSize={14}
          paddingBlock="0px"
          paddingInline="4"
          mr="8"
          color="white"
          bg="pink.500"
          colorScheme="pink"
        >
          Sign up
        </Button>
      </Show>
    </Flex>
  )
}
