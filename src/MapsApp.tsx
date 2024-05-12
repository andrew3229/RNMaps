import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StyleSheet } from 'react-native'
import { StackNavigator } from './presentation/navigations/StackNavigator';
export const MapsApp = () => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}