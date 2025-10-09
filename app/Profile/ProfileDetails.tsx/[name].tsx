import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ProfileProps = {
  name: string;
  email: string;
  city: string;
};

const params = useLocalSearchParams;

export default function User(props: ProfileProps) {
  return (
    <View>
      <Text style={styles.nameStyles}>{props.name}</Text>
      <Text>{props.email}</Text>
      <Text>{props.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nameStyles: {
    fontWeight: "bold",
  },
});
