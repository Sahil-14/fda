import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from "../";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../components";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import OTPInputView from "@twotalltotems/react-native-otp-input";
const Otp = ({ navigation }) => {
  const [timer, setTimer] = React.useState(60);
  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication has been send to inteuron"
      titleContainerStyle={{}}
    >
      {/* Otp input section */}
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <OTPInputView
          pinCount={4}
          style={{
            width: "100%",
            height: 50,
          }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => console.log(code)}
        />
        {/* Coutndown */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Didn't receive code ?
          </Text>
          <TextButton
            label={`Resend (${timer})`}
            disabled={timer == 0 ? false : true}
            buttonContainer={{ backgroundColor: null, marginLeft: SIZES.base }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={{marginBottom:SIZES.padding}}>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
        />
        <View style={{marginTop:SIZES.padding,alignItems:'center'}}>
          <Text style={{color:COLORS.darkGray,...FONTS.body3}}>By signing up ,you agree our.</Text>
          <TextButton
          label="Terms and Conditions"
          buttonContainerStyle={{
        
            backgroundColor: null,
          }}
          labelStyle={{color:COLORS.primary,...FONTS.body3}}
        />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
