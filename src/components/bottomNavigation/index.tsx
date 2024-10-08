import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ionicons for icons

const BottomNavBar = () => {
  const [selected, setSelected] = useState('Home');

  // Using Animated values for both size and background color
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const menuItems = [
    { name: 'Home', icon: 'home-outline' },
    { name: 'Files', icon: 'copy-outline' },
    { name: 'Search', icon: 'search-outline' },
    { name: 'Profile', icon: 'person-outline' }
  ];

  const animateIcon = () => {
    // Animate icon scaling
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1.3, // Scale up the selected icon
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1, // Fade in the text
        duration: 300,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Reverse the scale animation to bring the icon back to normal size
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }).start();
    });
  };

  const handlePress = (itemName) => {
    setSelected(itemName);
    animateIcon();
  };

  const renderMenuItem = (item) => {
    const isActive = selected === item.name;

    return (
      <TouchableOpacity
        key={item.name}
        style={styles.menuItem}
        onPress={() => handlePress(item.name)}
        activeOpacity={0.8}
      >
        <View style={[styles.inactiveButton, isActive && styles.activeButton]}>
          <Animated.View
            style={{
              transform: [{ scale: isActive ? scaleAnim : 1 }],
              opacity: isActive ? opacityAnim : 1,
            }}
          >
            <Icon
              name={item.icon}
              size={24}
              color={isActive ? '#fff' : '#bbb'}
            />
          </Animated.View>
          {isActive && (
            <Animated.Text style={[styles.activeText, { opacity: opacityAnim }]}>
              {item.name}
            </Animated.Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {menuItems.map(renderMenuItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, // For Android shadow
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#505050',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20, // Border radius for the active button
    flexDirection: 'row',
    alignItems: 'center',
  },
  inactiveButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20, // Apply borderRadius for consistency
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default BottomNavBar;
