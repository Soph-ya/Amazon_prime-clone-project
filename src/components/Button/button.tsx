import React from "react";
import {Text, TouchableOpacity} from "react-native";
import { styles } from './style'

const Button = ({ title, onPress, color }) => {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

export default Button;