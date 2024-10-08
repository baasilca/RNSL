import React, {memo} from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {s, vs} from '../../utils/scale';

interface imgIF {
  uri: string;
}

interface inputIF {
  image: imgIF;
  onChangeText: (t: string) => void;
  onPressIn?: (t: any) => void;
  value: string;
}

function Input({image, onChangeText, onPressIn, value}: inputIF, props: any) {
  return (
    <View>
      <TextInput
        {...props}
        value={value}
        onPressIn={onPressIn}
        style={styles.textInput}
        onChangeText={onChangeText}
      />
      <Image source={image} resizeMode="contain" style={styles.image} />
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    color: '#000',
    borderWidth: s(1),
    borderRadius: s(10),
    paddingStart: s(40),
    marginHorizontal: s(20),
    backgroundColor: '#fff',
    borderColor: '#f0f0f0',
  },
  image: {
    position: 'absolute',
    left: s(30),
    marginTop: vs(16),
    width: s(25),
    height: s(25),
  },
});
export default memo(Input);
