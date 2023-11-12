import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const CoinItem = (props) => {

  const { coin } = props;

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View
        style={styles.containerItem}
      >
        <View style={styles.coinName}>
          <View style={styles.containerNames}>
            <Text style={styles.textSymbol}>{(coin.symbol).slice(0, 3)}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.textPrice}>${coin.lastPrice}</Text>
          <Text
            style={[
              styles.pricePercentage,
              coin.priceChange > 0
                ? styles.priceUp
                : styles.priceDown,
            ]}
          >
            {coin.priceChange}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer"
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  textPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default CoinItem;
