import {PermissionsAndroid, Platform} from 'react-native';
import {
  request as PermissionRequest,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

export const hasWritePermission = async () => {
  if (Platform.OS === 'android') {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasAndroidPermission = await PermissionsAndroid.check(permission);
    if (hasAndroidPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === PermissionsAndroid.RESULTS.GRANTED;
  } else if (Platform.OS === 'ios' || Platform.OS === 'macos') {
    const hasAndroidPermission = await PermissionRequest(
      PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
    );
    return hasAndroidPermission === RESULTS.GRANTED;
  }
};

export const hasReadPermission = async () => {
  if (Platform.OS === 'android') {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const hasAndroidPermission = await PermissionsAndroid.check(permission);
    if (hasAndroidPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === PermissionsAndroid.RESULTS.GRANTED;
  } else {
    return true;
  }
};
