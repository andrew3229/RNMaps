import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
export const LoadingScreen = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <ActivityIndicator size={30} color="black" />
            <Text style={{ color: 'black' }}>LoadingScreen</Text>
            <Text>LoadingScreen 2</Text>
        </View>
    )
}