import React from 'react';
import {View, StyleSheet,Text, Image} from 'react-native';

const Header = ({imageSource}) => {
    return (<View backgroundColor={'#FFFFFF'}>
        <Image source = {require("../../assets/logo.png")} style={styles.header}/>
    </View>);
};

const styles = StyleSheet.create({
    header:{
        height:45,
        width:200,
        alignSelf:"center"
    }
});

export default Header;