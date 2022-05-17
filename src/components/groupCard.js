import React from 'react'
import { StyleSheet, Text, View, StatusBar,TouchableHighlight, TouchableOpacity  } from 'react-native'

const GroupCard = () => {
    return(
        <TouchableOpacity style={styles.cardContainer}>
            
        </TouchableOpacity>

    );
};

const styles=StyleSheet.create({
    cardContainer:{
        width: 120,
        height: 165,
        backgroundColor:"#50C7C7",
        borderRadius: 15,
        marginLeft:15,
        
        
    }
})

export default GroupCard;