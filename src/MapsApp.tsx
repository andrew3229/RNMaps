import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StyleSheet } from 'react-native'
import { StackNavigator } from './presentation/navigations/StackNavigator';
import { PermissionsCheker } from './presentation/providers/PermissionsCheker';
export const MapsApp = () => {
    return (
        <NavigationContainer>
            <PermissionsCheker>
                <StackNavigator />
            </PermissionsCheker>
        </NavigationContainer>
    )
}