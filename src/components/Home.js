import React, {useState, useEffect, useCallback} from 'react';
import {getAllProducts} from '../services/productServices';
import {View, StyleSheet, FlatList} from 'react-native';
import {List, Title} from 'react-native-paper';
import {RenderProductItem} from '../components/';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [totalMax, setTotalMax] = useState(0);

  const fetchProducts = useCallback(async (total = 0, query) => {
    try {
      const {data} = await getAllProducts(total, query);
      setTotalMax(data.total);
      setProducts(current => [...current, ...data.products]);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleLoadMore = () => {
    if (products.length < totalMax) {
      fetchProducts(products.length);
    }
  };

  return (
    <View style={styles.container}>
      <List.Section style={styles.containerSection}>
        <Title style={styles.recommendTitle}>Products</Title>
        <View style={styles.productContainer}>
          <FlatList
            data={products}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={item => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            renderItem={({item}) => <RenderProductItem product={item} />}
            numColumns={2}
          />
        </View>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  containerSection: {
    flex: 1,
  },
  recommendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default Home;
