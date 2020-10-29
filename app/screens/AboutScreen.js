import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text'
function AboutScreen(props) {
  return (
    <View style={styles.container}>
        <Text  >About the app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AboutScreen;

