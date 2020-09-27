import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
        Filter Coach Button
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
