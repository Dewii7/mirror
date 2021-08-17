import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export default function AuthButton(props) {
  const styles = StyleSheet.create({
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
      fontSize: moderateScale(15),
    },

    container: {
      backgroundColor: '#f3efa4',
      borderRadius: widthPercentageToDP(2),
      height: moderateScale(40),
      alignItems: 'center',
    },

    fullContainer: {
      justifyContent: 'center',
      width: widthPercentageToDP(50),
      borderRadius: widthPercentageToDP(2),
    },
  });

  return (
    <View style={props.center ? {alignItems: 'center'} : {}}>
      <Button
        raised={props.full ? true : false}
        title={props.judul}
        titleStyle={styles.textStyle}
        containerStyle={
          props.full ? styles.fullContainer : {justifyContent: 'center'}
        }
        buttonStyle={styles.container}
        onPress={props.submit}
        disabled={props.disabled}
        test={styles.container}
      />
    </View>
  );
}
