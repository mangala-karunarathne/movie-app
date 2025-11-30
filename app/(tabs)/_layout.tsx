import React from 'react'
import { Tabs } from 'expo-router'
import { Image, ImageBackground } from 'react-native'
import { images } from '@/constants/images'


const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
        name='index'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon:({focused})=>(
                focused ? <>
                <ImageBackground
                source={images.highlight}
                >
                    <Image source={images.home} />

                </ImageBackground>
                </> : <></>
            )
        }}
        />
        <Tabs.Screen
        name='search'
        options={{
            title: 'Search',
            headerShown: false,
        }}
        />
        <Tabs.Screen
        name='save'
        options={{
            title: 'Save',
            headerShown: false,
        }}
        />
        <Tabs.Screen
        name='profile'
        options={{
            title: 'Profile',
            headerShown: false,
        }}
        />
    </Tabs>
  )
}

export default _layout