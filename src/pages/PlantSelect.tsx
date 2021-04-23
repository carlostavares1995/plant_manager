import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import colors from "../styles/colors";
import {Header} from "../components/Header";

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.background,
  }
});
