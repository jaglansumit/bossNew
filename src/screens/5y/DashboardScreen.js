import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';

export default DashboardScreen = () => {
  const {firstName, lastName, email} = useSelector(state => state.bossreducer);
  console.log('firstName', email);
  return (
    <SafeAreaView>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
      <Text>{email}</Text>
    </SafeAreaView>
  );
};
