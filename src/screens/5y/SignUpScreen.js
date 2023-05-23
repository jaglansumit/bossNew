import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {getFontSize, moderateScale} from '../../utils/responsive';
import {useDispatch} from 'react-redux';
import {signup} from '../../actions/bossAction';

export default SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const _signup = data => dispatch(signup(data));

  const _onButtonClick = async () => {
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    console.log('butbrtgbbr', data);
    _signup(data);
    navigation.navigate('DashboardScreen');
  };

  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: moderateScale(20),
          marginTop: moderateScale(50),
        }}>
        <Text style={{fontFamily: 'Axiforma-Black', fontSize: getFontSize(20)}}>
          Let's Sign Up
        </Text>

        <View style={{marginTop: moderateScale(40)}}>
          <TextInput
            value={firstName}
            style={styles.input}
            onChangeText={text => setFirstName(text)}
            placeholder="Enter First Name"
          />
          <TextInput
            value={lastName}
            style={styles.input}
            onChangeText={text => setLastName(text)}
            placeholder="Enter Last Name"
          />
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email Address"
          />
        </View>

        <TouchableOpacity
          onPress={() => _onButtonClick()}
          style={{
            marginTop: moderateScale(40),
            padding: moderateScale(10),
            borderWidth: 0.5,
            backgroundColor: 'black',
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.4,
    padding: moderateScale(10),
    marginTop: moderateScale(16),
  },
});
