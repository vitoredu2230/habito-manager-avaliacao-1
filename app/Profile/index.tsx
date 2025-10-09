import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import User from "./ProfileDetails.tsx/[name]";

export default function ProfilesPage() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <User
        name="Vitor Eduardo"
        email="vitorw.2024@alunos.utfpr.edu.br"
        city="Guarapuava"
      />
      <User name="Larissa Tobias" email="laratoby@gmail.com" city="Curitiba" />
      <User
        name="Andressa Marcondes"
        email="andressa.marcondes@hotmail.com"
        city="Ponta Grossa"
      />
    </View>
  );
}
