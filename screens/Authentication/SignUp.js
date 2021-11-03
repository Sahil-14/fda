import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "../";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
  TextIconbutton2
} from "../../components";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [usernameError, setUsernameEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [showpass, setShowpass] = React.useState(false);

  const isEnabledSignup = () => {
    return (
      email != "" &&
      username != "" &&
      password != "" &&
      emailError == "" &&
      passwordError == "" &&
      usernameError == ""
    );
  };
  return (
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue!"
      titleContainerStyle={{ marginTop: SIZES.radius }}
    >
      {/* Form input and signup */}
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
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
                    : icons.cross
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
        <FormInput
          label="Username"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) => setUsername(value)}
          errorMsg={usernameError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  username == "" || (username != "" && usernameError == "")
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username == ""
                      ? COLORS.gray
                      : username != "" && usernameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <FormInput
          label="Password"
          secureTextEntry={!showpass}
          autoCompletetype="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setPassword(!showpass)}
            >
              <Image
                source={showpass ? icons.eye_close : icons.eye}
                style={{ height: 20, width: 20, tintColor: COLORS.gray }}
              />
            </TouchableOpacity>
          }
        />

        {/* Sign up and signin */}
        <TextButton
          label="Sign Up"
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledSignup()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          disabled={isEnabledSignup() ? false : true}
          onPress={() => navigation.navigation("Otp")}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Already have an account?
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={{ backgroundColor: null, marginLeft: 5 }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.navigate("Otp")}
          />
        </View>
      </View>
       {/* Footer */}

       <View style={{marginBottom:SIZES.radius}}>
        {/* Facebook */}
        <TextIconbutton2
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{tintColor:COLORS.white}}
          labelStyle={{marginLeft:SIZES.radius,color:COLORS.white}}
          label="Continue With Facebook"
        />
        {/* Google */}
        <TextIconbutton2
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            marginTop:SIZES.radius
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{tintColor:null}}
          labelStyle={{marginLeft:SIZES.radius}}
          label="Continue With Google"
        />
      </View>
    </AuthLayout>
  );
};

export default SignUp;
