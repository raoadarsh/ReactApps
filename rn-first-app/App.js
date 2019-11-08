import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [mystate, setmystate] = useState(false);

  const setTextChange = () => {
    setmystate(!mystate);
  };
  return (
    <View style={styles.container}>
      <Text>{mystate ? "adarsh" : "Sarvesh"}</Text>
      <Button title="Change text" onPress={setTextChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
