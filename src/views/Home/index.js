import React from 'react'
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function Home({route}) {

    const navigation = useNavigation()
    const {user} = route.params

    function navegar() {
        navigation.navigate('Cadastrar')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Seja bem-vindo</Text>
            <Text style={styles.text}>{user}</Text>
            <Button 
                title="Navegar / Cadastrar"
                onPress={() => navegar()}
                color = "black"
            />
        </View>
    )
}

export default Home

