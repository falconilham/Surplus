import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, FlatList} from 'react-native';
import {Searchbar, List, Title, Card} from 'react-native-paper';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([
    {id: '1', name: 'Product 1'},
    {id: '2', name: 'Product 2'},
    {id: '3', name: 'Product 3'},
    {id: '4', name: 'Product 4'},
    {id: '5', name: 'Product 5'},
  ]);

  const handleSearch = query => {
    setSearchQuery(query);
    // Perform search logic here, such as filtering products based on the search query
    // You can update the "products" state with the filtered results
  };
  const data = useSelector(state => state);
  const renderProductItem = ({item}) => <List.Item title={item.name} />;
  console.log({data});
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search products"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <List.Section>
        <List.Subheader>Products</List.Subheader>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={renderProductItem}
        />
      </List.Section>

      <Title style={styles.recommendTitle}>Recommended Products</Title>

      {/* Carousel component for recommended products */}
      {/* Implement the carousel component of your choice */}
      {/* You can use popular libraries like react-native-snap-carousel or react-native-swiper */}
      {/* Render the recommended products within the carousel */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recommendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default Home;
