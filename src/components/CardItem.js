import React, {memo} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Title, Paragraph} from 'react-native-paper';

function RenderProductItem({product}) {
  const {title, discountPercentage, price, thumbnail} = product;
  const navigation = useNavigation();
  // Calculate the price with discount
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ProductDetail', {product})}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <View style={styles.content}>
        <Title style={styles.title}>{title}</Title>
        {discountPercentage > 0 && (
          <Paragraph style={styles.discount}>
            Original Price: ${price.toFixed(2)}
          </Paragraph>
        )}
        <Paragraph style={styles.price}>
          {discountPercentage > 0
            ? `Discounted Price: $${discountedPrice.toFixed(2)}`
            : `Price: $${price.toFixed(2)}`}
        </Paragraph>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '48%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
    padding: 20,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  discount: {
    textDecorationLine: 'line-through',
    color: 'gray',
    marginTop: 8,
    fontSize: 14,
  },
  price: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default memo(RenderProductItem);
