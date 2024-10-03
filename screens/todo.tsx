import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ToDo() {
  const navigation = useNavigation();
  const route = useRoute();
  const [job, setJob] = useState('');

  // Nhận job từ params nếu có
  useEffect(() => {
    if (route.params?.job) {
      setJob(route.params.job);
    }
  }, [route.params?.job]);

  const handleFinish = () => {
    if (job.trim() === '') {
      Alert.alert('Please enter a job.');
    } else {
      if (route.params?.isEdit) {
        // Nếu đang chỉnh sửa, gửi oldJob và newJob
        navigation.navigate('ToDoList', {
          editedJob: { oldJob: route.params.job, newJob: job },
        });
      } else {
        // Nếu thêm mới, chỉ gửi job
        navigation.navigate('ToDoList', { job });
      }
      setJob(''); // Đặt lại trường nhập
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="arrow-back" size={25} color="gray" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 40,
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#D9CBF6',
            overflow: 'hidden',
            marginRight: 10,
          }}>
          <Image
            source={require('../assets/Rectangle.png')}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Hi Twinkle</Text>
          <Text>Have a great day ahead</Text>
        </View>
      </View>

      <Text
        style={{
          color: '#171A1F',
          fontSize: 30,
          textAlign: 'center',
          marginBottom: 20,
          fontFamily: 'Helvetica',
          fontWeight: 'bold'
        }}>
        ADD YOUR JOB
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#9095A0',
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <Image
          source={require('../assets/input.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Input your job"
          value={job}
          onChangeText={setJob}
        />
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00BDD6',
          padding: 10,
          borderRadius: 16,
          marginTop: 30,
          marginHorizontal: 70
        }}
        onPress={handleFinish}>
        <Text style={{ color: 'white', fontSize: 14, marginRight: 10 }}>
          FINISH
        </Text>
        <Icon name="arrow-forward" size={25} color="white" />
      </TouchableOpacity>

      <Image
        source={require('../assets/Image1.png')}
        style={{ width: 160, height: 160, marginTop: 40, alignSelf: 'center' }}
      />
    </View>
  );
}
