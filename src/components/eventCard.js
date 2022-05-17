import React from 'react'
import { StyleSheet, Text, View, StatusBar,Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const EventCard = () => {
    return(
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.containerCardCalendar} >
                <View style={styles.containerInfo}>
                    <Text style={styles.TextTime}>SAT, 21 MAY - 13:00 GTM+7</Text>
                    <Text style={styles.TextName}>Bachata Dance Class</Text>
                    <Text>Salsa and Bachata in Ho Chi Minh (Saigon)</Text>
                </View>
                <View style={styles.containerImageGroup}>
                    <Image style={styles.ImageGroup} source={require('../../assets/imageGroup.jpeg')} />
                </View>
            </View>
            <View style={styles.containerButton} >
                <Text style={styles.TextAttend}> 3 going</Text>
                <TouchableOpacity style={[{paddingRight: 5}]}>
                    <Icon name='star-o' size={20}  />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>

    );
};

const styles=StyleSheet.create({
    cardContainer:{
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    containerCardCalendar:{
        flexDirection:'row',
    },
    containerInfo:{
        flex: 3,
        paddingTop: 20,
    },
    TextTime:{
        color: 'pink',
        fontWeight: 'bold',
    },
    TextName:{
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 30
    },
    containerImageGroup:{
        flex: 1.5,
        paddingRight: 20,
        marginTop: 40
    },
    ImageGroup:{
        width: '120%',
        height: 80,
        borderRadius: 5
    },
    containerButton:{
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    TextAttend:{
        color: '#c4c4c4'
    }
})

export default EventCard;