import habits from "@/services/habits";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function List() {
  const { showActionSheetWithOptions } = useActionSheet();
  const options = ["Deletar", "Cancelar"];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 1;

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        console.log("Selected: " + buttonIndex);
      }
    );
  };

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <FlatList
        data={habits}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Habito: {item.name}</Text>
            <Text>Descrição: {item.description}</Text>
            <Text>Frequencia: {item.frequency}</Text>
            <Button title="Open ActionSheet" onPress={handleOpen} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: "lightgrey",
    margin: 4,
  },
});
