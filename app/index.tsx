import { Link, router, Stack } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Stack.Screen options={{ title: "Página Inicial" }} />
        <Text style={styles.h1}>Bem vindo ao Habito Manager!</Text>
        <Text style={styles.p}>O que gostaria de fazer?</Text>
        <Button
          title="Criar Hábito"
          color={"#F5E727"}
          onPress={() => {
            router.push({
              pathname: "/Create",
            });
          }}
        />

        <Button
          title="Visualizar Hábitos"
          color={"#F5E727"}
          onPress={() => {
            router.push({
              pathname: "/List",
            });
          }}
        />
        <Link style={styles.h1} href="/Profile">
          Perfis
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#27A9F5",
    height: "100%",
  },
  buttons: {
    backgroundColor: "#F5E727",
  },
  h1: {
    alignItems: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  p: {
    fontSize: 14,
    color: "lightgrey",
  },
});
