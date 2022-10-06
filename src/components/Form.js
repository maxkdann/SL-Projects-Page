import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { CheckBox} from 'react-native-elements';
import FormButton from './FormButton';

const Form = () => {
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [checked, setChecked] = useState(false);

    const isMale = () => {
        setMale(true);
        setFemale(false);
    }

    const isFemale = () => {
        setMale(false);
        setFemale(true);
    }

    const isChecked = () => {
        if (checked) {
            setChecked(false)
        }
        else {
            setChecked(true);
        }
    };

    return (
        <View style={styles.formStyle}>
            <Text style={styles.titleStyle}>First Name</Text>
            <View style={styles.backgroundStyle}>
                <TextInput style={styles.inputStyle}></TextInput>
            </View>
            <Text style={styles.titleStyle}>Last Name</Text>
            <View style={styles.backgroundStyle}>
                <TextInput style={styles.inputStyle}></TextInput>
            </View>
            <Text style={styles.titleStyle}>Date of Birth</Text>
            <View style={styles.backgroundStyle}>
                <TextInput style={styles.inputStyle}></TextInput>
            </View>
            <Text style={styles.titleStyle}>Sex</Text>
            <View style={styles.radioButtonsStyle}>
                <CheckBox
                    title="Male"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={isMale}
                    checked={male}
                    containerStyle={{ backgroundColor: 'transparent' }}
                />
                <CheckBox
                    title="Female"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={isFemale}
                    checked={female}
                    containerStyle={{ backgroundColor: 'transparent' }}
                />
            </View>
            <CheckBox
                title="I accept terms and conditions"
                onPress={isChecked}
                checked={checked}
                containerStyle={{ backgroundColor: 'transparent' }}
            />
            <View style={styles.submitButtonStyle}>
                <FormButton title="Submit"></FormButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    submitButtonStyle: {
        alignItems: 'flex-end',
        marginRight: 15
    },
    radioButtonsStyle: {
        flexDirection: 'row',
        alignSelf: "flex-start"
    },
    formStyle: {
        marginHorizontal: 15,
    },
    backgroundStyle: {
        height: 50,
        backgroundColor: 'white',
        marginBottom: 20,
        borderColor: 'black'
    },
    inputStyle: {
        flex: 1,
        fontSize: 16,
        borderColor: 'black'
    },
    titleStyle: {
        marginLeft: 2,
        fontSize: 16,
        marginBottom: 2
    }
});

export default Form;