import { Image } from '@chakra-ui/react'
import React from 'react'
import CardInfo from './CardInfo'

export default function Card({ image, likes, views, user }) {
  return (
    <div w="100%" h="300px">
      <Image height="230px" objectFit="cover" borderRadius="8px" src={image} />
      <CardInfo avatar={user.avatar} tag={user.tag} username={user.username} />
    </div>
  )
}
