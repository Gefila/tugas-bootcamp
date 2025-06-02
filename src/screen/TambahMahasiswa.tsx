import {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import GenderInput from '../components/GenderInput';

export default function TambahMahasiswa() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [umur, setUmur] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');

  function tambahMahasiswa() {
    if (nama && nim && jurusan && umur) {
      const newMhs = {
        id: +new Date(),
        nama,
        nim,
        jurusan,
        umur,
      };
      setMahasiswa([...mahasiswa, newMhs]);
      setNama('');
      setNim('');
      setJurusan('');
      setUmur('');
    } else {
      alert('Semua data mahasiswa wajib diisi!');
    }
  }

  function hapusMahasiswa(id) {
    setMahasiswa(mahasiswa.filter(item => item.id !== id));
  }

  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={styles.title}>Tambah Data Mahasiswa</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Nama"
          style={styles.input}
          onChangeText={text => setNama(text)}
          value={nama}
        />
        <TextInput
          placeholder="NIM"
          style={styles.input}
          onChangeText={text => setNim(text)}
          value={nim}
        />
        <TextInput
          placeholder="Jurusan"
          style={styles.input}
          onChangeText={text => setJurusan(text)}
          value={jurusan}
        />
        <TextInput
          placeholder="Umur"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={text => setUmur(text)}
          value={umur}
        />
        <GenderInput jenisKelamin={jenisKelamin} setJenisKelamin={setJenisKelamin}/>
        <TouchableOpacity style={styles.button} onPress={tambahMahasiswa}>
          <Text style={styles.textButton}>Tambah Mahasiswa</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    color: '#4361ee',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    color: 'black',
    backgroundColor: '#fff',
  },
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  task: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 10,
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
