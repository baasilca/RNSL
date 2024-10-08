import React, {memo, useEffect} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Svg, Path} from 'react-native-svg';
import {useAppSelector} from '../../slice/store';
import {onAddSuccess} from '../../App';
import {debounce} from 'lodash';
import Header from '../../components/header/header';
import HeaderFilters from '../../components/headerFilterItems';
import BottomNavBar from '../../components/bottomNavigation';

function GetStarted({navigation: {navigate}}: any) {
  const task = useAppSelector((state: any) => state?.card);
  const dbnc = debounce(() => onAddSuccess(), 100);
  useEffect(() => {
    if (task?.length > 0) {
      dbnc();
    }
  }, [dbnc, task?.length]);

  return (
    <View style={{flex: 1,backgroundColor:"#fff"}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        animated
        translucent
      />
      <Header/>
      <HeaderFilters/>
      <BottomNavBar/>
    </View>
  );
}

export default memo(GetStarted);
