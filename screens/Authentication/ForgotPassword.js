import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "../";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconbutton2,

} from "../../components";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
const isEnabledRecovery = () => {
    return email != "" && emailError == "";
}
  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email address to recover your password"
    >
    
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label="Email"
          KeyboardType="email-address"
          autoCompletetype="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  email == "" || (email != "" && emailError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ""
                      ? COLORS.gray
                      : email != "" && emailError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <View>
      <TextButton
          label="Send Email"
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledRecovery()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          disabled={isEnabledRecovery() ? false : true}
        />
      </View>
      </View>
      
    </AuthLayout>
  );
};

export default ForgotPassword;
