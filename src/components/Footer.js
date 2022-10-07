import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (<View style={styles.footerStyle}>
        <Text style={styles.titleStyle}>Life's brighter under the sun</Text>
        <Text style={styles.bodyStyle}>© Sun Life Assurance Company of Canada.</Text>
        <Text style={styles.bodyStyle}>All rights reserved</Text>
    </View>);
};

const styles = StyleSheet.create({
    footerStyle: {
        backgroundColor: "#004C6C",
        height: 130,
        textAlign: 'center',
        alignItems: 'center',
        marginTop:50,
    },
    titleStyle: {
        color: "gold",
        fontSize: 18,
        marginTop:20,
        marginBottom:15
    },
    bodyStyle: {
        color: "white",
        fontSize: 16,
        
    }
});

export default Footer;