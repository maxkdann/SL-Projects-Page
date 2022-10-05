import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';

const HeroBanner = () => {
    return (<View style={styles.backgroundStyle}>
        <Image source={require("../../assets/team.jpg")} style={styles.imageStyle} />
        <Text style={styles.titleStyle}>Projects</Text >
        <Text style={styles.textStyle}>Find, reuse and contribute to projects to improve software and related assets and save time and effort</Text>
    </View>);
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "blue",
        height: 320,
    },
    imageStyle: {
        height: 180,
        aspectRatio: 2.5,
    },
    titleStyle: {
        color: "white",
        fontWeight: "bold",
        marginTop: 30,
        fontSize: 18,
        marginLeft: 15,
    },
    textStyle: {
        marginTop: 5,
        color: "white",
        marginLeft: 15,
        marginRight: 30,
        fontSize:16
    }
});

export default HeroBanner;