import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import HeroBanner from '../components/HeroBanner';
import Welcome from '../components/Welcome';
import Card from '../components/Card';
import Form from '../components/Form';

const ProjectsScreen = () => {
    return <ScrollView>
        <View style={styles.divider}></View>
        <Header />
        <BreadCrumb />
        <HeroBanner />
        <Welcome />
        <SearchBar />
        <Card />
        <Form />
    </ScrollView>
};

const styles = StyleSheet.create({
    divider: {
        backgroundColor: "gold",
        height: 10,
    }
});

export default ProjectsScreen;