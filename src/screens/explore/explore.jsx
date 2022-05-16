import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constans/theme';
import styles from './styles';
import ExploreMeetup from '../../components/exploreMeetup/exploreMeetup';
import DATA from '../../../assets/json/exploreData.json';
const Explore = () => {

    const filterData = (type) => (DATA.popular).filter((result) => result.type == type)

    return (
      <View >
        <View style={styles.top}>
            <View style={styles.searchBox}>
                <Icon name= "search" size={25} color ={COLORS.grey} />
                <TextInput placeholder='Search upcoming events' style={styles.search} />
            </View>
        </View>
        <ScrollView>  
            <View style={styles.findEvents}>
                <Text> Find events near </Text>
                <View style={styles.location}>
                  <Text style={styles.title}> Ho Chi Minh, HCM</Text>
                  <View style={styles.location_end}>
                    <Icon  name='location-arrow' size={25} color={COLORS.blue} />
                    <Text style={styles.title2} color={COLORS.blue}> CHANGE </Text>
                  </View>
                </View>
            </View>
            <View style={styles.findEvents_components}>
                <Text style={styles.text_components}>Starting soon</Text>
                <Text style={styles.text_components}>Today</Text>
            </View>
            <View style={styles.findEvents_components}>
                <Text style={styles.text_components}>Tomorrow</Text>
                <Text style={styles.text_components}>This week</Text>
            </View>
            <View style={styles.findEvents_components}>
                <Text style={styles.text_components}>This weekend</Text>
                <Text style={styles.text_components}>Next week</Text>
            </View>
            <View style={styles.findEvents_components}>
                <Text style={styles.text_components}>Next weekend</Text>
                <Text style={styles.text_components}>All up comming</Text>
            </View>
            <View style={styles.findGroup}>
              <Icon name= "fort-awesome" size={30} color ={COLORS.blue} />
              <View style={styles.findGroupRight}>
                <Text style={styles.title3}>Find a group you like</Text>
                <Text color={COLORS.grey}>Match your interests</Text>
              </View>
            </View>
            <View>
              <Text style={styles.title4}>Explore Meetup</Text>
              <ExploreMeetup title='Popular now' data ={ filterData("1")}/>
              <ExploreMeetup title='Career and Business' data ={ filterData("1")}/>
              <ExploreMeetup title='Language and Culture' data ={ filterData("2")}/>
            </View>
        </ScrollView>
      </View>
    );
};

export default Explore