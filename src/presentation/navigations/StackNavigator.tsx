
import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/loading/LoadinScreen';
import { MapsScreen } from '../screens/maps/MapsScreen';
import { PermissionsScreen } from '../screens/permissions/PermissionsScreen';

export type RootStackParam = {
    LoadingScreen: undefined;
    PermissionsScreen: undefined;
    MapsScreen: undefined;
}

const Stack = createStackNavigator<RootStackParam>();



export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='LoadingScreen'
            screenOptions={
                {
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: '#f2f3f5',
                    },
                    

                }
            }
        >
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="MapsScreen" component={MapsScreen} />
            <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        </Stack.Navigator>
    )
}