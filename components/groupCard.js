import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const GroupCard = () => {
    return(
        <View style={styles.cardContainer}>
            <Text></Text>
        </View>
    );
};

const styles=StyleSheet.create({
    cardContainer:{
        width: 120,
        height: 160,
        backgroundColor:"green",
        borderRadius: 15,
        marginLeft:10
        
    }
})

export default GroupCard;