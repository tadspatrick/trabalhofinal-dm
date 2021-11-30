import React from 'react'
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function Contact({route}) {

    const navigation = useNavigation()

    function navegar() {
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Contato</Text>
            <Button 
                title="Navegar / Home"
                onPress={() => navegar()}
                color = "black"
            />
        </View>
    )
}

export default Contact