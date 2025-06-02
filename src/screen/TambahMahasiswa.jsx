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
import useMahasiswaStore from '../store/useMahasiswaStore';

export default function TambahMahasiswa() {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [angkatan, setAngkatan] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');

  const tambahMahasiswa = useMahasiswaStore(state => state.addMahasiswa);

  function clearForm() {
    setNama('');
    setNim('');
    setJurusan('');
    setAngkatan('');
    setJenisKelamin('');
  }

  function handleTambahMahasiswa() {
    if (!nama || !nim || !jurusan || !angkatan || !jenisKelamin) {
      alert('Semua field harus diisi!');
      return;
    }
    const newMahasiswa = {
      id: Math.random().toString(36).substring(7),
      nama,
      nim,
      jurusan,
      angkatan,
      jenisKelamin,
    };
    tambahMahasiswa(newMahasiswa);
    clearForm();
  }

  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={styles.title}>Tambah Data Mahasiswa</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nama</Text>
          <TextInput
            placeholder="Nama"
            style={styles.input}
            onChangeText={text => setNama(text)}
            value={nama}
            autoCapitalize="words"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>NIM</Text>
          <TextInput
            placeholder="NIM"
            style={styles.input}
            onChangeText={text => setNim(text)}
            value={nim}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Jurusan</Text>
          <TextInput
            placeholder="Jurusan"
            style={styles.input}
            onChangeText={text => setJurusan(text)}
            value={jurusan}
            autoCapitalize="words"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Angkatan</Text>
          <TextInput
            placeholder="Angkatan"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={text => setAngkatan(text)}
            value={angkatan}
          />
        </View>
        <GenderInput
          jenisKelamin={jenisKelamin}
          setJenisKelamin={setJenisKelamin}
        />
        <TouchableOpacity style={styles.button} onPress={handleTambahMahasiswa}>
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
  label: {
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 3,
  },
});
