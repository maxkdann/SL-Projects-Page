import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const BreadCrumb = () => {
    return <View style={styles.backgroundStyle}>
        <Text style={styles.textStyle}>InnerSource {'>'} Projects</Text>
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:"teal",
        height:30,
        flexDirection:"row"
    },
    textStyle:{
        color:"white",
        alignSelf:"center",
        marginLeft:15
    }
});

export default BreadCrumb;