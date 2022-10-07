import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput
                placeholder="Enter keyword"
                style={styles.inputStyle}
            />
            <View style={styles.iconViewStyle}>
                <View style={styles.imageBox}>
                    <Feather name='search' style={styles.iconStyle} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "white",
        height: 70,
        borderColor:'black',
        borderWidth:1,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:26
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        marginLeft:10
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        left:5
    },
    iconViewStyle:{
        borderColor:'black',
        //borderWidth:1,
        borderLeftWidth:1,
        //alignItems:'center',
    },
    imageBox:{
        backgroundColor:'#FFCB05',
        flexDirection:"row",
        marginHorizontal:20,
        marginTop:17,
        borderRadius:6,
        width:36,
        height:36,
        alignItems:"center"
    }
});

export default SearchBar;