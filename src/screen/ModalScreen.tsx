import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

import { Button } from "../Components/Buttons";
import { Entypo } from "@expo/vector-icons";

import ModalLayout from "../Components/Modals/ModalLayout";

const ModalScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ModalLayout visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Entypo
                name="cross"
                style={{ height: 30, width: 30 }}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require(".././assets/imageIcons/success.png")}
            style={{ height: 150, width: 150, marginVertical: 10 }}
          />
        </View>

        <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}>
          Transaction Successful
        </Text>
      </ModalLayout>
      <Button title="Show Modal" onPress={() => setVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default ModalScreen;
