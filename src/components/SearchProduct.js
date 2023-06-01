import React, {useState, useCallback, useEffect} from 'react';
import {getSearchProducts} from '../services/productServices';
import {View, StyleSheet, FlatList} from 'react-native';
import {List, Title} from 'react-native-paper';
import {RenderProductItem} from '../components/';

const SearchProduct = ({route}) => {
  const {searchQuery} = route.params;
  console.log({searchQuery});
  const [totalMax, setTotalMax] = useState(0);
  const [products, setProducts] = useState([]);

  const searchProduct = useCallback(async query => {
    try {
      const {data} = await getSearchProducts(query);
      setProducts(data.products);
      setTotalMax(data.total);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  useEffect(() => {
    if (searchQuery) {
      searchProduct(searchQuery);
    }
  }, [searchQuery, searchProduct]);

  const handleLoadMore = () => {
    if (products.length < totalMax) {
      searchProduct(products.length);
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

export default SearchProduct;
