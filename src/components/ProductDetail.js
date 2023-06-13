import React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';

const ProductDetail = ({route}) => {
  const {product} = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: product?.thumbnail}} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Title style={styles.title}>{product.title}</Title>
        <Paragraph style={styles.description}>{product.description}</Paragraph>
        <Paragraph style={styles.price}>Price: ${product.price}</Paragraph>
        <Paragraph style={styles.brand}>Brand: {product.brand}</Paragraph>
        <Paragraph style={styles.category}>
          Category: {product.category}
        </Paragraph>
        <Paragraph style={styles.stock}>Stock: {product.stock}</Paragraph>
        <Paragraph style={styles.rating}>Rating: {product.rating}</Paragraph>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  price: {
    fontWeight: 'bold',
  },
  brand: {
    marginBottom: 4,
  },
  category: {
    marginBottom: 4,
  },
  stock: {
    marginBottom: 4,
  },
  rating: {
    marginBottom: 4,
  },
});

export default ProductDetail;
