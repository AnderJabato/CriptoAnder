import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinMarket = ({CoinInfo}) => {

    return (
        <View onPress={() => Navigation.push(props.componentId, {
            component: {
                name: 'CoinMarket',
                options: {
                    topBar: {
                        title: {
                            text: 'CoinMarket'
                        }
                    }
                }
            }
        })}>
        </View>
    );

}






export default CoinMarket;