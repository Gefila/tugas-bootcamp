import {Image, StyleSheet, Text, View} from 'react-native';

export default function Mahasiswa({data}) {
  const {id, nama, nim, jurusan, angkatan, jenisKelamin} = data;
  return (
    <View style={styles.card}>
      <View style={styles.nameWrapper}>
        <Text style={styles.nama}>{nama}</Text>
        <View style={styles.cardAngkatan}>
          <Text style={styles.angkatan}>{angkatan}</Text>
        </View>
      </View>
      <Text style={styles.nim}>{nim}</Text>
      <Text>{jurusan}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    boxShadow: '4px 4px 0px rgb(0, 0, 0)',
    borderWidth: 2,
    marginHorizontal: 10,
  },
  nama: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  nim: {
    fontSize: 18,
    color: '#555',
  },
  angkatan: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardAngkatan: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 3,
    marginTop: 5,
    boxShadow: '2px 2px 0px rgb(0, 0, 0)',
    borderWidth: 1,
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
