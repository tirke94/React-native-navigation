import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Payments = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>

            <Text>Payments</Text>
            <Button title='Open drawer' onPress={() => navigation.openDrawer()} />
            <Button title='Go back' onPress={() => navigation.goBack()} />

        </View>
    )
}

export default Payments