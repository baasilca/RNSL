import {Platform} from 'react-native';
import Geolocat from '@react-native-community/geolocation';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import deviceInfoModule from 'react-native-device-info';
import {addError, addLocation} from '../store/slices/location';
import {logout} from '../store/slices/user';
import showToast from './showToast';
import {onLogout} from '../navigations';

export const CheckDeviceLocationEnabled = async (): Promise<boolean> =>
  await deviceInfoModule.isLocationEnabled();

const getLocation = async (dispatch: (t: any) => any): Promise<any> => {
  const enabled = await CheckDeviceLocationEnabled();
  if (!enabled) {
    throw new Error('Please turn on the location manually.');
  }
  if (enabled) {
    try {
      // setRNConfiguration();
      await Geolocat.getCurrentPosition(
        pos => {
          dispatch(addLocation(pos?.coords));
        },
        (err: any) => {
          dispatch(addError(err?.message));
          dispatch(logout());
          onLogout();
          if (err?.code === '2') {
            showToast(
              `${err?.message}, Please turn on the location on your device.`,
            );
          } else {
            showToast(`${err?.message}, Please check the location.`);
          }
        },
        {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
      );
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }
};

export const setRNConfiguration = () =>
  Geolocat.setRNConfiguration({
    enableBackgroundLocationUpdates: true,
    skipPermissionRequests: false,
    authorizationLevel: 'whenInUse',
    locationProvider: 'auto',
  });

const requestPermission = async (dispatch: (t: any) => any): Promise<any> => {
  try {
    const permission =
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    const result = await request(permission);
    if (result === RESULTS.GRANTED) {
      // Permission granted, you can now access geolocation services
      try {
        await getLocation(dispatch);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    } else {
      // Permission denied, handle this case
      throw new Error('Permission denied.');
    }
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

const requestLocationPermission = async (
  dispatch: (t: any) => any,
): Promise<any> => {
  try {
    Platform.OS === 'ios' && (await Geolocat.requestAuthorization());
    await requestPermission(dispatch);
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export {requestLocationPermission};
