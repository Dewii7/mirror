import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements/dist/input/Input';
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
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/E8-eC05VUAQaId5?format=png&name=orig',
          }}
        />

        <View>
          <Input
            containerStyle={styles.emailHolder}
            inputContainerStyle={styles.emailHolder1}
            // onChangeText={text => setEmail(text)}
            placeholder="Phone number, username or email"
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(250),
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
  title: {
    fontSize: moderateScale(25),
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: moderateScale(50),
    paddingBottom: moderateScale(30),
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
    paddingTop: moderateScale(20),
    letterSpacing: moderateScale(0.5),
    paddingLeft: moderateScale(5),
  },
});
