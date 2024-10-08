import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {s} from '../../utils/scale';

const AuthHeader: React.FC<any> = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable onPress={navigation.goBack}>
        <Ionicons name="chevron-back" color={"red"} size={s(20)} />
      </Pressable>
      {/* <Image source={{uri: 'kseblogoblack'}} style={styles.logo} />  */}
      <Image
            // source={{ uri: 'kseblogoblack' }}
            source={require('../../assets/imgs/ksebLogo.png')}
            resizeMethod="scale"
            resizeMode="contain"
            style={styles.logo}
          />
          
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: s(56),
    height: s(25),
    marginLeft: s(12),
  },
});

export default AuthHeader;
