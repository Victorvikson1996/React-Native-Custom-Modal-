import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../utils";

type ButtonProps = {
  onPress: () => void;
  title: string;
};

const Button = ({ onPress, title }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.button}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: "65%",
    backgroundColor: COLORS.red,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Button;
