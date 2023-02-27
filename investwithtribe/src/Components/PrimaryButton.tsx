import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  onPress: () => void;
  content: string;
  buttonStyle?: ViewStyle;
  textStyle?: ViewStyle;
}

const PrimaryButton: React.FC<Props> = ({
  onPress,
  content,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
