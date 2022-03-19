import React,{useState} from 'react';
import {Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import {Navigator} from './Src/Navigation/index'

const loadFonts = () => {
  return Font.loadAsync({
    'Cairo-Black' : require('./assets/fonts/Cairo-Black.ttf'),
    'Cairo-Bold' : require('./assets/fonts/Cairo-Bold.ttf'),
    'Cairo-ExtraBold' : require('./assets/fonts/Cairo-ExtraBold.ttf'),
    'Cairo-ExtraLight' : require('./assets/fonts/Cairo-ExtraLight.ttf'),
    'Cairo-Light' : require('./assets/fonts/Cairo-Light.ttf'),
    'Cairo-Medium' : require('./assets/fonts/Cairo-Medium.ttf'),
    'Cairo-Regular' : require('./assets/fonts/Cairo-Regular.ttf'),
    'Cairo-SemiBold' : require('./assets/fonts/Cairo-SemiBold.ttf')
  });
}


export default function App() {

  const[isFontLoading,setIsFontLoading]=useState(false);

  if(!isFontLoading){
    return(
      <AppLoading
       startAsync={loadFonts}
       onFinish={()=> setIsFontLoading(true)}
       onError={console.log()} />
    )
  }
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}
