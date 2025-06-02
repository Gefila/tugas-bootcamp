import {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Mahasiswa from '../components/Mahasiswa';

export default function Home() {
  const [listMahasiswa, setListMahasiswa] = useState([
    {
      id: 1,
      nama: 'Gefila Zona Pranata',
      nim: '123456789',
      jurusan: 'Teknik Informatika',
      angkatan: '2020',
      jenisKelamin: 'Laki-laki',
    },
    {
      id: 2,
      nama: 'Jane Smith',
      nim: '987654321',
      jurusan: 'Sistem Informasi',
      angkatan: '2021',
      jenisKelamin: 'Perempuan',
    },
    {
      id: 3,
      nama: 'Alice Johnson',
      nim: '456789123',
      jurusan: 'Teknik Komputer',
      angkatan: '2022',
      jenisKelamin: 'Perempuan',
    },
    {
      id: 4,
      nama: 'Bob Brown',
      nim: '321654987',
      jurusan: 'Teknik Elektro',
      angkatan: '2023',
      jenisKelamin: 'Laki-laki',
    },
    {
      id: 5,
      nama: 'Charlie White',
      nim: '654321789',
      jurusan: 'Teknik Mesin',
      angkatan: '2024',
      jenisKelamin: 'Laki-laki',
    }
  ]);
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Selamat Datang di Aplikasi Mahasiswa</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Tambah Mahasiswa</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={listMahasiswa}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Mahasiswa data={item} />}
          style={{width: '100%'}}
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
