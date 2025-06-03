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
  const removeMahasiswa = useMahasiswaStore(state => state.removeMahasiswa);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Selamat Datang di Aplikasi Mahasiswa</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('FormMahasiswa', {
              name: 'Tambah Mahasiswa',
              state: 'add',
            })
          }>
          <Text style={styles.textButton}>Tambah Mahasiswa</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <View style={styles.box}>
            <Text>Daftar Mahasiswa</Text>
          </View>
          <View style={styles.box}>
            <Text>
              Jumlah Mahasiswa ({listMahasiswa.length})
            </Text>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={listMahasiswa}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Mahasiswa data={item} onDeleteMahasiswa={removeMahasiswa} />
          )}
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
    backgroundColor: '##dcebfe',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
    backgroundColor: '#5294ff',
    borderRadius: 5,
    width: '100%',
    boxShadow: '4px 4px 0px rgb(0, 0, 0)',
    borderWidth: 2,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  box: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#dcebfe',
    borderRadius: 5,
    boxShadow: '4px 4px 0px rgb(0, 0, 0)',
    borderWidth: 2,
    alignSelf: 'flex-end',
  },
});
