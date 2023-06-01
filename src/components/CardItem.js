import React, {memo} from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

function RenderProductItem({product}) {
  const {title, discountPercentage, price, thumbnail} = product;
  // Calculate the price with discount
  const discountedPrice = price - (price * discountPercentage) / 100;
  return (
    <Card style={styles.container}>
      <Card.Cover source={{uri: thumbnail}} style={styles.cover} />
      <Card.Content style={styles.cardContent}>
        <Title>{title}</Title>
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
      </Card.Content>
    </Card>
  );
}

const styles = {
  container: {
    marginBottom: 20,
    width: '48%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  cover: {
    height: 150,
    width: '100%',
    // maxWidth: 150,
    resizeMode: 'contain',
    padding: 20,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
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
};

export default memo(RenderProductItem);
