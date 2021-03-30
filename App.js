import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarList from './components/CarList/index'
import Header from './components/Header/index'

export default function App() {
  return (
    <View style={styles.container}>

      <Header />
      {/* 
      <CarItem name={"Model X"}
      tagline={"Starting from $99,500 "}
      taglineCTA={"Touchless Delivery"}
      image={require('./assets/images/ModelX.jpeg')}
      /> */}

      <CarList />

      <StatusBar style='dark' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});