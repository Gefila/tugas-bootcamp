import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function GenderInput({jenisKelamin, setJenisKelamin}) {
  const genders = ['Laki-laki', 'Perempuan'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Jenis Kelamin</Text>
      {genders.map(gender => (
        <TouchableOpacity
          key={gender}
          style={styles.optionContainer}
          onPress={() => setJenisKelamin(gender)}>
          <View style={styles.radioCircle}>
            {jenisKelamin === gender && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.optionText}>{gender}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2e86de',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2e86de',
  },
  optionText: {
    marginLeft: 7,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default GenderInput;
