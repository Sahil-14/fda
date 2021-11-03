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
const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [showpass, setShowpass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(true);
  const isEnabledSignIn = () => {
    return email != "" && password != "" && emailError == "";
  };
  return (
    <AuthLayout
      title="Let's Sign You in"
      subtitle="Welcome back, you've been missed"
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        {/* Form input */}
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
        <FormInput
          label="Password"
          secureTextEntry={!showpass}
          autoCompletetype="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => setPassword(value)}
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
        {/* Save me & forget password */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch value={saveMe} onChange={() => setSaveMe(value)} />
          <TextButton
            label="Forget Password"
            buttonContainer={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>
        {/* Sign In */}
        <TextButton
          label="Sign In"
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          disabled={isEnabledSignIn() ? false : true}
        />
        {/* Sign up */}

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Don't have an account ?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{ backgroundColor: null, marginLeft: 3 }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.navigate("SignUp")}
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

export default SignIn;
