import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={style.header}>
            <View>
                <Text style={styles.headerText}></Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
    }
})
export default Header