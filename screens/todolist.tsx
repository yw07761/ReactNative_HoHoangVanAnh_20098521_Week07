import React from 'react';
import { View, Text, TextInput, Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Sử dụng thư viện react-native-vector-icons
import { useNavigation } from '@react-navigation/native';

export default function ToDoList() {
      const navigation = useNavigation();

  return (
    <View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: 'flex-start', // Đặt icon sát lề trái
            marginLeft: 10,
            marginTop: 10,
          }}>
         <TouchableOpacity onPress={() => navigation.navigate('ToDo')}>
            <Icon name="arrow-back" size={25} color="gray" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -20,
            marginRight: 20,
            justifyContent: 'flex-end', // Đảm bảo nội dung bên phải vẫn giữ nguyên
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
          flexDirection: 'row', // Căn TextInput và Image theo chiều ngang
          alignItems: 'center', // Căn giữa theo trục dọc
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#9095A0',
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <Image
          source={require('../assets/Search.png')}
          style={{ width: 20, height: 20, marginRight: 10 }} // Đặt kích thước và khoảng cách của hình ảnh
        />
        <TextInput
          style={{ flex: 1 }} // Để chiếm toàn bộ chiều rộng còn lại
          placeholder="Search"
        />
      </View>
      <View>
        

      </View>
    </View>
  );
}
