import React, { useState } from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function Login() {

    const [username, setUsername] = useState("");

    const navigation = useNavigation()

    function navegar() {
        navigation.navigate('Home', { user: username} )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Gerenciador de Estúdio de Tatuagem</Text>
            
            <Text style={styles.text}>Área Restrita</Text>
            <TextInput 
                style={styles.input}
                placeholder="login"
                onChangeText={(value) => setUsername(value)}
            />
            <TextInput 
                style={styles.input}
                placeholder="senha"
            />
            <View style = {styles.button}>
                <Button 
                    title="Autenticar"
                    onPress={() => navegar()}
                    color = "black"
                />
            </View>
        </View>
    )
}

export default Login

