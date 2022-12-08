import React from 'react';
import  {View, StyleSheet }  from 'react-native'
import { Card } from '../components/Card';
export function Dashboard() {
    return (
        <>
            <Card style={[styles.cardOne,styles.card]} cardNumber="1" />
            <Card style={[styles.cardTwo, styles.card]}  cardNumber="2" />
            <Card style={[styles.cardThree, styles.card]}  cardNumber="3" />
        </>
    );
}

const styles = StyleSheet.create({

    cardOne:{
        backgroundColor: "orange",
    },
    cardTwo:{
        backgroundColor: "white",
        alignSelf: 'center',
    },
    cardThree:{
        backgroundColor: "green",
    },
    card:{
        width: 120,
        height: 120,
    },
})



