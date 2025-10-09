import { router, Stack } from "expo-router";
import React from "react";
import { Button, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateHabito() {
  const [habitName, onChangeHabitName] = React.useState("");
  const [habitDescription, onChangeHabitDescription] = React.useState("");
  const [segundaOption, setSegundaOption] = React.useState(false);
  const [tercaOption, setTercaOption] = React.useState(false);
  const [quartaOption, setQuartaOption] = React.useState(false);
  const [quintaOption, setQuintaOption] = React.useState(false);
  const [sextaOption, setSextaOption] = React.useState(false);
  const [sabadoOption, setSabadoOption] = React.useState(false);
  const [domingoOption, setDomingoOption] = React.useState(false);

  const handleSubmit = () => {
    console.log({ habitName });
    console.log({ habitDescription });
    console.log("Segunda? = " + segundaOption);
    console.log("Terça? = " + tercaOption);
    console.log("Quarta? = " + quartaOption);
    console.log("Quinta? = " + quintaOption);
    console.log("Sexta? = " + sextaOption);
    console.log("Sábado? = " + sabadoOption);
    console.log("Domingo? = " + domingoOption);
  };

  return (
    <SafeAreaView>
      <View>
        <Stack.Screen options={{ headerShown: false }} />
        <TextInput
          onChangeText={onChangeHabitName}
          placeholder="Insira o nome do seu hábito"
        />
        <TextInput
          onChangeText={onChangeHabitDescription}
          placeholder="Insira a descrição do Hábito"
        />
        <Text>Defina a frequência dessa rotina:</Text>
        <Text>Segunda feira</Text>
        <Switch onValueChange={setSegundaOption} value={segundaOption} />
        <Text>Terça feira</Text>
        <Switch onValueChange={setTercaOption} value={tercaOption} />
        <Text>Quarta feira</Text>
        <Switch onValueChange={setQuartaOption} value={quartaOption} />
        <Text>Quinta feira</Text>
        <Switch onValueChange={setQuintaOption} value={quintaOption} />
        <Text>Sexta feira</Text>
        <Switch onValueChange={setSextaOption} value={sextaOption} />
        <Text>Sábado</Text>
        <Switch onValueChange={setSabadoOption} value={sabadoOption} />
        <Text>Domingo</Text>
        <Switch onValueChange={setDomingoOption} value={domingoOption} />
        <Button onPress={handleSubmit} title="Criar Rotina" />
        <Button
          onPress={() => {
            router.back();
          }}
          title="Voltar"
        />
      </View>
    </SafeAreaView>
  );
}
