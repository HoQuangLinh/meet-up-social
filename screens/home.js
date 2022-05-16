import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Cart from './../components/groupCard'

const Home = () => {
    return (
      <View>
        <View style={styles.headerTitle}>
          <Text style={styles.sectionTitle}>Groups của bạn</Text>
          <Text style={styles.buttonText}>See all</Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </ScrollView>
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
  headerTitle:{
    flexDirection: 'row',
    padding: 20
  },
  sectionTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
    
  },
  buttonText:{
    fontSize: 20,
    color: '#50C7C7',
    fontWeight:'bold'
  }
})
export default Home