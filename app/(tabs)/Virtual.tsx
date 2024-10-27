import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '@/components/Header'

export default function Virtual() {
  return (
    <View className='flex-1 bg-black'>
      <Header name="Virtual" />
      <View className='flex-1  items-center justify-center'>
        <Image
          source={require('@/assets/images/venus 1.png')}
          className='w-48 h-48'
        />
      </View>
    </View>
  )
}