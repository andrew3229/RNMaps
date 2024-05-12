
import { PERMISSIONS, PermissionStatus as RNPermissionsStatus, check, openSettings, request } from "react-native-permissions";
import type { PermissionsStatus } from "../../infrastructure/interfaces/permissions";
import { Platform } from "react-native";
export const requestLocationPermission = async (): Promise<PermissionsStatus> => {
    let status: RNPermissionsStatus = "unavailable";


    if (Platform.OS === "ios") {
        status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === "android") {
        status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    else {
        throw new Error("Platform not supported");

    }


    if (status === "blocked") {
        await openSettings();
    }


    const permissionMapper: Record<RNPermissionsStatus, PermissionsStatus> = {
        granted: "granted",
        denied: "denied",
        limited: "limited",
        blocked: "blocked",
        unavailable: "unavailable"
    }

    return permissionMapper[status] ?? "unavailable";

}

export const checkLocationPermission = async (): Promise<PermissionsStatus> => {
    let status: RNPermissionsStatus = "unavailable";


    if (Platform.OS === "ios") {
        status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === "android") {
        status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    else {
        throw new Error("Platform not supported");

    }

    const permissionMapper: Record<RNPermissionsStatus, PermissionsStatus> = {
        granted: "granted",
        denied: "denied",
        limited: "limited",
        blocked: "blocked",
        unavailable: "unavailable"
    }

    return permissionMapper[status] ?? "unavailable";


}