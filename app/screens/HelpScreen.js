import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text'
function HelpScreen(props) {
  return (
    <View style={styles.container}>
        <Text  >Help</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default HelpScreen;

