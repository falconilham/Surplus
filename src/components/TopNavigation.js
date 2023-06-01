import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setSearch, clearSearch} from '../redux/searchSlice';
import {Appbar, Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const NavigationHeader = () => {
  const dispatch = useDispatch();
  const {search} = useSelector(state => state);
  const navigation = useNavigation();
  const goToSearch = () =>
    navigation.navigate('SearchProduct', {searchQuery: search});

  const handleLogout = () => {
    // Perform logout logic here
    // For example, dispatch an action to reset the state or navigate to the login screen
    dispatch(clearSearch());
    navigation.navigate('Auth');
  };
  return (
    <Appbar.Header>
      <Searchbar
        placeholder="Search products"
        value={search}
        onChangeText={param => dispatch(setSearch(param))}
        style={styles.searchBar}
        onIconPress={goToSearch}
        onSubmitEditing={goToSearch}
        onClearIconPress={() => dispatch(clearSearch())}
      />
      <Appbar.Action icon="logout" onPress={handleLogout} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    marginLeft: 16,
  },
});

export default NavigationHeader;
