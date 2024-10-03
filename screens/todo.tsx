import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Sử dụng thư viện react-native-vector-icons
import { useNavigation } from '@react-navigation/native';

export default function ToDo() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: 'flex-end', // Đặt icon sát lề trái
            marginRight: 20,
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Icon name="arrow-back" size={25} color="gray" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -20,
            marginLeft: 30,
            justifyContent: 'flex-start', // Đảm bảo nội dung bên phải vẫn giữ nguyên
          }}>
          <View
            style={{
              width: 50, // Chiều rộng hình tròn
              height: 50, // Chiều cao hình tròn
              borderRadius: 50, // Để tạo thành hình tròn
              backgroundColor: '#D9CBF6', // Màu nền
              overflow: 'hidden', // Cắt hình ảnh theo hình tròn
              marginRight: 10, // Khoảng cách giữa hình và văn bản
            }}>
            <Image
              source={require('../assets/Rectangle.png')}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold' }}>Hi Twinkle</Text>
            <Text>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row', // Để hiển thị text và icon theo chiều ngang
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <h1 style={{ color: '#171A1F', fontFamily: 'Helvetica' }}>
          ADD YOUR JOB
        </h1>
      </View>
      <View
        style={{
          flexDirection: 'row', // Căn TextInput và Image theo chiều ngang
          alignItems: 'center', // Căn giữa theo trục dọc
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#9095A0',
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginHorizontal: 20,
        }}>
        <Image
          source={require('../assets/input.png')}
          style={{ width: 20, height: 20, marginRight: 10 }} // Đặt kích thước và khoảng cách của hình ảnh
        />
        <TextInput
          style={{ flex: 1 }} // Để chiếm toàn bộ chiều rộng còn lại
          placeholder="input your job"
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
          onPress={() => navigation.navigate('ToDoList')}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              marginRight: 10,
              fontFamily: 'Helvetica',
            }}>
            FINISH
          </Text>
          <Icon name="arrow-forward" size={25} color="white" />
        </TouchableOpacity>
        <Image
          source={require('../assets/Image1.png')}
          style={{ width: 160, height: 160, marginTop: 40, marginLeft: 90 }}
        />
      </View>
    </View>
  );
}
