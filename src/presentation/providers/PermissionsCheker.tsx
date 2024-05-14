import { PropsWithChildren, useEffect } from 'react'
import { AppState } from 'react-native'
import { usePermissionsStore } from '../store/permissions/usePermissionsStore'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParam } from '../navigations/StackNavigator'
export const PermissionsCheker = ({ children }: PropsWithChildren) => {

    const { locationStatus, checkLocationPermission } = usePermissionsStore()

    const navigation = useNavigation<NavigationProp<RootStackParam>>();

    useEffect(() => {
        if (locationStatus === "granted") {
            // navigation.navigate("MapsScreen");

            navigation.reset({ index: 0, routes: [{ name: "PermissionsScreen" }] })


        } else if (locationStatus !== "undetermined") {
            navigation.navigate("PermissionsScreen");
        }
    })

    useEffect(() => {
        checkLocationPermission()
    }, []);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'active') {
                checkLocationPermission();
            }
        });

        return () => {
            subscription.remove();
        }

    }, [])

    return (
        <>
            {children}
        </>
    )
}