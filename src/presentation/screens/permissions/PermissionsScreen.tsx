import { Text, View, StyleSheet, Pressable } from 'react-native'
import { globalStyles } from '../../../config/theme/style'
import { usePermissionsStore } from '../../store/permissions/usePermissionsStore'
export const PermissionsScreen = () => {

    const { locationStatus, requestLocationPermission } = usePermissionsStore();


    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{ color: 'black' }}> Habilitar Ubicación</Text>

            <Pressable
                style={globalStyles.btnPrimary}
                onPress={requestLocationPermission}
            >
                <Text style={{ color: 'white' }}> Habilitar Localizacion</Text>
            </Pressable>

            <Text style={{ color: 'black' }}>Estado Actual: {locationStatus} </Text>

        </View>
    )
}