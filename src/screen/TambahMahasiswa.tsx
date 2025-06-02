import {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function tambahMahasiswa() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [umur, setUmur] = useState('');

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
        <Text style={styles.title}>Data Mahasiswa</Text>
        <Text style={styles.text}>Tambahkan dan kelola data mahasiswa</Text>
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
        <Button title="Tambah Mahasiswa" onPress={tambahMahasiswa} />
      </View>

      <FlatList
        data={mahasiswa}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MahasiswaCard item={item} hapusMahasiswa={hapusMahasiswa} />
        )}
        ListEmptyComponent={
          <Text style={styles.text}>Belum ada data mahasiswa</Text>
        }
      />
    </SafeAreaView>
  );
}

function MahasiswaCard({item, hapusMahasiswa}) {
  return (
    <View style={styles.taskContainer}>
      <View>
        <Text style={styles.task}>Nama: {item.nama}</Text>
        <Text style={styles.task}>NIM: {item.nim}</Text>
        <Text style={styles.task}>Jurusan: {item.jurusan}</Text>
        <Text style={styles.task}>Umur: {item.umur}</Text>
      </View>
      <Button
        title="Hapus"
        color="red"
        onPress={() => hapusMahasiswa(item.id)}
      />
    </View>
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
});
