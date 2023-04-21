import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RoundedButton } from '../../components/RoundedButton'
import { View , Image, Text, TextInput, ToastAndroid} from 'react-native'
import styles from './Styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App'

const LoginScreen = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
<View style={ styles.container } >
    <Image 
    source={ require('../../../assets/chef.jpg')} 
    style = { styles.imageBackground }
    />

    <View style={ styles.logoContainer }>
        <Image 
            source={ require('../../../assets/logo.png') }
            style={ styles.logoImage }
        />
        <Text style={ styles.logoText }>CLEVER IT GROUP</Text>
    </View>

    <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>

        <View style={styles.formInput}>
            <Image 
                source={require('../../../assets/email.png')}
                style={styles.formIcon}
            />
            <TextInput
                style={styles.formTextInput}
                placeholder='Correo electrónico'
                keyboardType='email-address'
                value= { email }
                onChangeText={ text => setEmail(text) }
            />
        </View>

        <View style={styles.formInput}>
            <Image 
                source={require('../../../assets/password.png')}
                style={styles.formIcon}
            />
            <TextInput
                style={styles.formTextInput}
                placeholder='Password'
                keyboardType='default'
                secureTextEntry={true}
                value= { password }
                onChangeText={ text => setPassword( text ) }
            />
        </View>

        <View style={{marginTop: 30}}>
            <RoundedButton text='LOGIN' onPress={
                () => {    
                    if (email == '') {
                        ToastAndroid.show('Falta ingresar el correo electronico.!', ToastAndroid.SHORT);
                        return
                    }    
                    if (password == '') {
                        ToastAndroid.show('Falta ingresar el password.!', ToastAndroid.SHORT);
                        return
                    }             
                    if (password == '123456') {
                        navigation.navigate('HomeScreen');
                    } else {
                        ToastAndroid.show('Password incorrecto.!!', ToastAndroid.SHORT);
                    }
                }
            }/>
        </View>        
    </View>

</View>
  )
}

export default LoginScreen
