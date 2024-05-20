import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomInputField from '../Components/InputField.Component.jsx/CustomInputField';
import {useNavigation} from '@react-navigation/native';

const SignInTab = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const focusPasswordRef = () => {
    passwordRef.current?.focus();
  };

  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate('Order');
  };
  return (
    <>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 35,
          paddingBottom: 20,
          color: 'white',
        }}>
        Sign In
      </Text>
      <CustomInputField
        ref={usernameRef}
        title={'userName'}
        placeholder={'Enter Username'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        onSubmitEditing={focusPasswordRef}
        blurOnSubmit={false}
        placeholderTextColor={'rgba(255,255,255,.6)'}
        returnKeyType={'next'}
      />
      <CustomInputField
        ref={passwordRef}
        title={'password'}
        placeholder={'Enter Password'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        placeholderTextColor={'rgba(255,255,255,.6)'}
        returnKeyType={'done'}
      />
      <Pressable onPress={onNavigate} style={styles.signInButtonStyle}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>sign In</Text>
      </Pressable>
    </>
  );
};
const SignUpTab = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const focusPasswordRef = () => {
    passwordRef.current?.focus();
  };
  const focusPassworConfirmdRef = () => {
    passwordConfirmRef.current?.focus();
  };
  return (
    <>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 35,
          paddingBottom: 20,
          color: 'white',
        }}>
        Sign Up
      </Text>
      <CustomInputField
        ref={usernameRef}
        title={'userName'}
        placeholder={'Enter Username'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        onSubmitEditing={focusPasswordRef}
        blurOnSubmit={false}
        placeholderTextColor={'rgba(255,255,255,.6)'}
        returnKeyType={'next'}
      />
      <CustomInputField
        ref={passwordRef}
        title={'password'}
        placeholder={'Enter Password'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        onSubmitEditing={focusPassworConfirmdRef}
        blurOnSubmit={false}
        placeholderTextColor={'rgba(255,255,255,.6)'}
        returnKeyType={'next'}
      />
      <CustomInputField
        ref={passwordConfirmRef}
        title={'password'}
        placeholder={'Confirm Password'}
        inputStyles={styles.textInputStyle}
        wrapperStyles={styles.wrapperStyles}
        titleStyles={styles.titleStyles}
        placeholderTextColor={'rgba(255,255,255,.6)'}
        returnKeyType={'done'}
      />
      <Pressable style={styles.signInButtonStyle}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>sign Up</Text>
      </Pressable>
    </>
  );
};
const Auth = () => {
  const [state, setState] = useState('signIn');
  const usernameRef = useRef();
  const passwordRef = useRef();
  const focusPasswordRef = () => {
    passwordRef.current?.focus();
  };

  const moveToSignInTab = () => {
    setState('signIn');
  };
  const moveToSignUpTab = () => {
    setState('signUp');
  };
  return (
    <View style={styles.containerStyle}>
      <View style={styles.mainWrpperStyle}>
        {state === 'signIn' ? <SignInTab /> : <SignUpTab />}
        <View style={styles.switchTextContiner}>
          <Text style={{color: 'white'}}>
            {state === 'signIn'
              ? "don't have an account? "
              : "don't have an account? "}
          </Text>
          <Pressable
            onPress={state === 'signIn' ? moveToSignUpTab : moveToSignInTab}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {state === 'signIn' ? 'Sign Up' : 'Sign In?'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 9999,
    paddingHorizontal: 10,
    color: 'white',
  },
  wrapperStyles: {paddingTop: 20},
  titleStyles: {paddingBottom: 5, fontSize: 16, color: 'white'},
  signInButtonStyle: {
    width: '100%',
    borderWidth: 1,
    height: 40,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 9999,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mainWrpperStyle: {
    width: '90%',

    padding: 10,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 10,
    paddingBottom: 20,
  },
  switchTextContiner: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

export default Auth;
