import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Sử dụng thư viện react-native-vector-icons
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
    const [name, setName]= useState('');

  return (
    <View>
      <Image
        source={require('../assets/Image1.png')}
        style={{ width: 271, height: 271, marginTop: 30, marginLeft: 40 }}
      />
      <View
        style={{
          flexDirection: 'row', // Căn TextInput và Image theo chiều ngang
          alignItems: 'center', // Căn giữa theo trục dọc
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#9095A0',
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginHorizontal: 20
        }}>
        <Image
          source={require('../assets/Frame.png')}
          style={{ width: 20, height: 20, marginRight: 10 }} // Đặt kích thước và khoảng cách của hình ảnh
        />
        <TextInput
          style={{ flex: 1, paddingHorizontal: 15 }}
          placeholder="Enter your name"
          value = {name}
          onChangeText={setName}
        />
      </View>

      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row', // Để hiển thị text và icon theo chiều ngang
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00BDD6', // Màu nền của button
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 80,
            marginTop: 50,
          }}
          onPress={() => navigation.navigate('ToDoList', {name})} >
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              marginRight: 10,
              fontFamily: 'Helvetica',
            }}>
            GET STARTED
          </Text>
          <Icon name="arrow-forward" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
