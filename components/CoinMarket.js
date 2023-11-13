import React from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native-web";
const CoinMarket = ({ route }) => {

  const { item } = route.params;
  const coinItem = [item]

  return (
    <View style={styles.containerItem}>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a Coin"
          placeholderTextColor="#858585"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>

      <View>
        <Button
          color="#121212"
          style={styles.button}
          title="Back"
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <View>
        <FlatList
          style={styles.list}
          data={coinItem}
          renderItem={({ item }) => (
            <View>
              {Object.keys(item).map((key) => (
                <View
                  key={key}
                  style={styles.listText}
                >
                  <Text
                    style={styles.text}
                  >
                    {key}
                  </Text>
                  <Text
                    style={styles.text}
                  >
                    {item[key]}
                  </Text>
                </View>
              ))}
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer"
  },
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
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
  title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  list: {
    width: "100%",
  },
  listText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    alignItems: 'center',
    border: '1px solid #e1e1e188',
    padding: '15px'
  },
});

export default CoinMarket

