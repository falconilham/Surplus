import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {clearError} from '../redux/errorSlice';
import {
  IconButton,
  useTheme,
  Portal,
  Modal as PaperModal,
} from 'react-native-paper';

const ErrorModal = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <PaperModal
      visible={Boolean(error)}
      onDismiss={handleClose}
      contentContainerStyle={styles.contentContainer}>
      <IconButton
        icon="close"
        color={colors.primary}
        size={24}
        onPress={handleClose}
        style={styles.closeButton}
      />
      <Text style={styles.errorMessage}>{error}</Text>
    </PaperModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    minHeight: 200,
    width: '80%',
    alignSelf: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default ErrorModal;
