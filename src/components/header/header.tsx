import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Linking, Pressable, StyleSheet, View } from 'react-native';
import { s } from '../../utils/scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header: React.FC<{
  showRatingIcon?: boolean;
  showShareIcon?: boolean;
  hideNotification?: boolean;
  hideSideNav?: boolean;
  hideHome?: boolean;
  customercare?: boolean
}> = ({
  showRatingIcon,
  showShareIcon,
  hideSideNav = false,
  hideHome = false,
  customercare = false
  // hideNotification = false,
}) => {
    const { colors } = useTheme();
    const { navigate } = useNavigation();
    const route = useRoute();

    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>

          <Image
            // source={{ uri: 'kseblogoblack' }}
            source={require('../../assets/imgs/hamburger.png')}
            resizeMethod="scale"
            resizeMode="contain"
            style={styles.menu}
          />
          <Image
            // source={{ uri: 'kseblogoblack' }}
            source={require('../../assets/imgs/logo.png')}
            resizeMethod="scale"
            resizeMode="contain"
            style={styles.logo}
          />
          <Image
            // source={{ uri: 'kseblogoblack' }}
            source={require('../../assets/imgs/search.png')}
            resizeMethod="scale"
            resizeMode="contain"
            style={styles.search}
          />

        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    width: '100%',
    backgroundColor:"#fff"
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    width:"100%"
  },
  ham: {
    height: '100%',
    paddingVertical: s(20),
    paddingRight: s(10),
  },
  logo: {
    width: s(170),
    height: s(50),
    paddingVertical: s(20),
  },
  menu: {
    width: s(30),
    height: s(30),
    paddingVertical: s(20),
    marginLeft:s(20)
  },
  search: {
    width: s(30),
    height: s(30),
    paddingVertical: s(20),
    marginRight:s(20)
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ml20: {
    marginLeft: s(20),
    paddingVertical: s(20),
  },
  ml28: {
    marginLeft: s(28),
    paddingVertical: s(20),
  },
});

export default Header;
