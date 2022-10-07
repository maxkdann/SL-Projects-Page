import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


const FormButton = ({ title }) => {
    return (<TouchableOpacity style={styles.buttonViewStyle}>
        <Text style={styles.buttonStyle}>{title}</Text>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    buttonStyle: {
        color: 'white',
        textAlign: 'center',
        marginTop: 25,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonViewStyle: {
        backgroundColor: '#004C6C',
        borderRadius: 6,
        width: 175,
        height: 70,
        marginLeft: 40,
        //alignSelf:'flex-end'
    },
});

export default FormButton;