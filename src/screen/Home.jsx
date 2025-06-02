import {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Mahasiswa from '../components/Mahasiswa';
import {useNavigation} from '@react-navigation/native';
import useMahasiswaStore from '../store/useMahasiswaStore';

export default function Home() {
  const navigation = useNavigation();
  const listMahasiswa = useMahasiswaStore(state => state.listMahasiswa);
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Selamat Datang di Aplikasi Mahasiswa</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TambahMahasiswa')}>
          <Text style={styles.textButton}>Tambah Mahasiswa</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={listMahasiswa}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Mahasiswa data={item} />}
          style={{width: '100%'}}
          contentContainerStyle={{paddingBottom: 200}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    width: '100%',
    boxShadow: '4px 4px 0px rgb(0, 0, 0)',
    borderWidth: 2,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
