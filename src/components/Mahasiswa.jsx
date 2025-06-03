import {useNavigation} from '@react-navigation/native';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';

export default function Mahasiswa({data, onDeleteMahasiswa}) {
  const {id, nama, nim, jurusan, angkatan, jenisKelamin} = data;
  const navigation = useNavigation();

  function confirmAlert() {
    return Alert.alert(
      'Konfirmasi Hapus',
      'Apakah Anda yakin ingin menghapus mahasiswa ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: () => onDeleteMahasiswa(id),
          style: 'destructive',
        },
      ],
    );
  }

  return (
    <View style={styles.card}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri:
              jenisKelamin == 'Laki-laki'
                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWi6fx13t3nmhNDxOwxj80l8QTzZrnf2_lA&s'
                : 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      </View>
      <View style={{flexDirection: 'column', marginLeft: 15}}>
        <View style={styles.nameWrapper}>
          <Text style={styles.nama} numberOfLines={1} ellipsizeMode="tail">
            {nama}
          </Text>
        </View>
        <Text style={styles.nim}>{nim}</Text>
        <Text>{jurusan}</Text>
      </View>
      <View style={styles.cardAngkatan}>
        <Text style={styles.angkatan}>{angkatan}</Text>
      </View>
      <View style={styles.actionButtons}>
        <Button
          title="Edit"
          onPress={() =>
            navigation.navigate('FormMahasiswa', {
              name: 'Edit Mahasiswa',
              data: {id, nama, nim, jurusan, angkatan, jenisKelamin},
              state: 'edit',
            })
          }
        />
        <Button title="Hapus" onPress={() => confirmAlert()} color={'red'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#dcebfe',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    boxShadow: '4px 4px 0px rgb(0, 0, 0)',
    borderWidth: 2,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'row',
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
    backgroundColor: '#5294ff',
    padding: 5,
    borderRadius: 3,
    marginTop: 5,
    boxShadow: '2px 2px 0px rgb(0, 0, 0)',
    borderWidth: 1,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    left: '50%',
    transform: [{translateX: -50}],
    bottom: -30,
  },
});
