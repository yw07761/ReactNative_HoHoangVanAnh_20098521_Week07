import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ToDoList() {
  const navigation = useNavigation();
  const route = useRoute();
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (route.params?.job) {
      setJobs((prevJobs) => [...prevJobs, route.params.job]);
    }
    if (route.params?.editedJob) {
      const { oldJob, newJob } = route.params.editedJob;
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job === oldJob ? newJob : job))
      );
    }
  }, [route.params]);

  const filteredJobs = jobs.filter((job) =>
    job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'flex-start', marginLeft: 10, marginTop: 10 }}>
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
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: '#D9CBF6',
            overflow: 'hidden',
            marginRight: 10,
          }}>
          <Image
            source={require('../assets/Rectangle.png')}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold' }}>Hi Twinkle</Text>
          <Text>Have a great day ahead</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
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
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <FlatList
        data={filteredJobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#D0D3D4',
              padding: 10,
              borderRadius: 10,
              marginVertical: 5,
              marginHorizontal: 20,
            }}>
            <Image source={require('../assets/check.png')} />
            <Text style={{ flex: 1, textAlign: 'center' }}>{item}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ToDo', { job: item, isEdit: true })
              }>
              <Image source={require('../assets/edit.png')} />
            </TouchableOpacity>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00BDD6',
            borderRadius: 50,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
          }}
          onPress={() => navigation.navigate('ToDo')}>
          <Icon name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
