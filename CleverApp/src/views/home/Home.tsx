import React from 'react'
import { View } from 'react-native'
import styles from './Styles';
import { RoundedButton } from '../../../src/components/RoundedButton';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={{marginTop:30}}>
            <RoundedButton text='word 1' onPress={()=>{
                console.log('Email')                
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text='word 1' onPress={()=>{
                console.log('Email')                
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text='word 1' onPress={()=>{
                console.log('Email')                
            }} />
        </View>

        <View style={{marginTop:30}}>
            <RoundedButton text='word 1' onPress={()=>{
                console.log('Email')                
            }} />
        </View>
    </View>
  );
}
