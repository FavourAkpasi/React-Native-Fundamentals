import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput style={styles.textInput} defaultValue="You can type in me" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    height: "auto",
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});
