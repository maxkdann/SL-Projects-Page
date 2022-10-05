import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Welcome = () => {
    return <View>
        <Text style = {styles.titleStyle}>Welcome to the InnerSource Community!</Text>
        <Text style = {styles.bodyStyle}>Use the search feature below to find an asset and discover how to reuse code and contribute to projects to improve software and related assets and save time and effort.</Text>
        <Text style = {styles.link}>Watch our video series to learn more</Text>
    </View>
};

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:30,
        alignSelf:"center",
        textAlign:"center",
        marginTop:30,
        marginBottom:30
    },
    bodyStyle:{
        textAlign:"center",
        marginLeft:15,
        marginRight:15,
        marginBottom:30
    },
    link:{
        textAlign:"center",
        color:"blue",
        marginBottom:32
    }

});

export default Welcome;