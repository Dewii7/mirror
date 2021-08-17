import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Input} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import AuthButton from '../../Component/AuthButton';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {COLORS} from '../../Utils/Color';

export default function Login(props) {
  const keHome = () => {
    props.navigation.navigate('Main');
  };
  return (
    <SafeAreaView>
      <View style={styles.RR}>
        <Image
          source={require('../../Assets/Images/logomirrorRЯ.png')}
          resizeMode={'center'}
        />
      </View>

      <View>
        <Input
          containerStyle={styles.emailHolder}
          inputContainerStyle={styles.emailHolder1}
          // onChangeText={text => setEmail(text)}
          placeholder="Email"
          style={styles.emailHolder2}
        />

        <Input
          containerStyle={styles.passHolder}
          inputContainerStyle={styles.passHolder1}
          // onChangeText={text => setEmail(text)}
          placeholder="Password"
          style={styles.passHolder2}
        />

        <AuthButton center submit={keHome} full judul="Log In" />

        <View style={styles.signUpContainer}>
          <Text style={styles.logIn}>Don't have an account?</Text>

          <TouchableOpacity>
            <Text style={styles.signUp}>Sign Up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  RR: {
    marginTop: moderateScale(50),
    alignItems: 'center',
  },
  emailHolder: {
    height: heightPercentageToDP(7),
    marginBottom: moderateScale(10),
  },
  emailHolder1: {
    borderWidth: 1,
    paddingLeft: moderateScale(15),
    borderRadius: 5,
    borderColor: COLORS.softBlack,
  },
  emailHolder2: {
    fontSize: moderateScale(16),
  },
  passHolder: {
    height: heightPercentageToDP(7),
    marginBottom: moderateScale(50),
  },
  passHolder1: {
    borderWidth: 1,
    paddingLeft: moderateScale(15),
    borderRadius: 5,
    borderColor: COLORS.softBlack,
  },
  passHolder2: {
    fontSize: moderateScale(16),
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logIn: {
    fontSize: moderateScale(15),
    textAlign: 'center',
    color: COLORS.grey,
    fontWeight: '500',
    paddingTop: moderateScale(20),
    letterSpacing: moderateScale(0.5),
  },
  signUp: {
    fontSize: moderateScale(15),
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: '500',
    paddingTop: moderateScale(20),
    letterSpacing: moderateScale(0.5),
    paddingLeft: moderateScale(5),
  },
});
