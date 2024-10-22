import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'

export default function Virtual() {
  return (
    <View className='flex-1 bg-black'>
      <Header name="Virtual" />
    </View>
  )
}