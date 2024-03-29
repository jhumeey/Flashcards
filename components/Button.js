import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types'
import {
  textPrimary,
  lightBackground,
  disabledwhite,
  textDisabled,
  secondary,
  background
} from "../utils/colors";

const PrimaryButton = ({
  onPress,
  title,
  disabled = false,
  type = "primary",
}) => {
  const buttonStyle =
    type === "primary" ? styles.primaryBtn : styles.secondaryBtn;
  const buttonTextStyle =
    type === "primary" ? styles.primaryBtnText : styles.secondaryBtnText;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={disabled ? styles.disabledBtn : buttonStyle}
    >
      <Text style={disabled ? styles.disabledBtnText : buttonTextStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const globalFont = "Montserrat";

const styles = StyleSheet.create({
  primaryBtn: {
    padding: 10,
    backgroundColor: lightBackground,
    width: 100,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  primaryBtnText: {
    fontFamily: globalFont,
    color: background,
    textAlign: "center",
  },
  disabledBtn: {
    padding: 10,
    backgroundColor: disabledwhite,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  disabledBtnText: {
    fontFamily: globalFont,
    color: textDisabled,
    textAlign: "center",
  },
  secondaryBtn: {
    padding: 10,
    backgroundColor: "transparent",
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: lightBackground,
  },
  secondaryBtnText: {
    fontFamily: globalFont,
    color: lightBackground,
    textAlign: "center",
  },
});

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  type: PropTypes.string,
  title: PropTypes.string
}
export default PrimaryButton;
