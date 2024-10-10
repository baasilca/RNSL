import React from 'react';
import { Image, Pressable, StyleSheet, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { s } from '../../../utils/scale';
import { categories } from '../../../data/categories'; // Assuming the categories array is imported from the correct path
import ImageComponent from '../../../components/Image';

export default function SpecialBlock() {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryName: string) => {
    // Navigate to the relevant category screen (assuming you have screens set up)
    navigation.navigate('CategoryScreen', { category: categoryName });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      {categories.map((category, index) => (
        <Pressable key={index} onPress={() => handleCategoryPress(category.categoryName)} style={styles.categoryContainer}>
          <Image source={{ uri: category.iconUrl }} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>{category.categoryName}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: s(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryContainer: {
    marginHorizontal: s(10),
    alignItems: 'center',
  },
  categoryIcon: {
    width: s(60),
    height: s(60),
    borderRadius: s(30),
    borderWidth: 2,
    borderColor: '#ddd',
  },
  categoryText: {
    marginTop: s(5),
    fontSize: s(14),
    color: '#333',
    textAlign: 'center',
  },
});
