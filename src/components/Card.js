import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import FormButton from './FormButton';
const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.topHeadingsViewStyle}>
                    <View backgroundColor={'pink'}>
                        <Image style={styles.imageStyle} source={require("../../assets/gears.png")} />
                    </View>
                    <View>
                        <View style={styles.titleViewStyle}>
                            <Text style={styles.titleStyle}>Sun Life Shared...</Text>
                        </View>
                        <View style={styles.subheadingViewStyle}>
                            <Text  style={styles.subheadingStyle}>Language: </Text>
                            <Image style={styles.jsStyle} source={require("../../assets/jslogo.png")}></Image>
                        </View>
                    </View>
                </View>
                <View style={styles.bodyViewStyle}>
                    <Text>Main DevOps pipelines via a simple Jenkins file stored within the application code.</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <FormButton title="Learn More"></FormButton>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    subheadingStyle:{
        fontSize:16
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:47
    },
    titleViewStyle:{
        flex:1,
    },
    subheadingViewStyle:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
    },
    jsStyle:{
        height:20,
        width:20
    },
    imageStyle:{
        height: 150,
        width: 150,
    },
    topHeadingsViewStyle:{
        flex:2,
        flexDirection:'row'
    },
    bodyViewStyle:{
        flex:1,
        marginHorizontal:40
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 300,
        marginHorizontal: 15,
        marginTop: 30,
        borderRadius: 8,
        marginBottom:25
    },
    topContainer: {
        flex: 1.8,
        backgroundColor: 'white',
        borderTopEndRadius: 8,
        borderTopLeftRadius: 8,
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#EAEBEB',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection:"row",
        alignItems:'center'
    },
});

export default Card;