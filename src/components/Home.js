import React, {useState, useEffect, useCallback} from 'react';
import {useDebounce} from 'use-debounce';
import {getAllProducts, getSearchProducts} from '../services/productServices';
import {View, StyleSheet, FlatList} from 'react-native';
import {Searchbar, List, Title} from 'react-native-paper';
import {RenderProductItem} from '../components/';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalMax, setTotalMax] = useState(0);
  const [debounceValue] = useDebounce(searchQuery, 1000);

  const fetchProducts = useCallback(async (total = 0, query) => {
    try {
      const {data} = await getAllProducts(total, query);
      setTotalMax(data.total);
      setProducts(current => [...current, ...data.products]);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  const searchProduct = useCallback(async query => {
    try {
      const {data} = await getSearchProducts(query);
      setSearchProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  useEffect(() => {
    if (debounceValue) {
      searchProduct(debounceValue);
    }
  }, [debounceValue, searchProduct]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleLoadMore = () => {
    if (products.length < totalMax) {
      fetchProducts(products.length);
    }
  };
  console.log({products});

  const usedData = debounceValue ? searchProducts : products;

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search products"
        value={searchQuery}
        onChangeText={value => setSearchQuery(value)}
      />
      <List.Section style={styles.containerSection}>
        <Title style={styles.recommendTitle}>Products</Title>
        <View style={styles.productContainer}>
          <FlatList
            data={usedData}
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
    padding: 16,
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
