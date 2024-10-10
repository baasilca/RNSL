import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

interface ImageComponentProps {
  source: string;
  containerStyle?: object;
  style?: object;
  children?: React.ReactNode;  // To allow passing child components like overlays or text
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  source,
  containerStyle,
  style,
  children,
}) => {

  const cleanedSource = source?.uri?.replace('/media/', '');
  return (
      <Image source={{ uri: `https://images-dev.deshabhimani.info/${cleanedSource}` }} style={style} />
  );
};

const styles = StyleSheet.create({
});

export default ImageComponent;
