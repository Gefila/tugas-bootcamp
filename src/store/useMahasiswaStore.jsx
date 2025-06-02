import {create} from 'zustand';

const useMahasiswaStore = create(set => ({
  listMahasiswa: [
    {
      id: '1',
      nama: 'John Doe',
      nim: '123456789',
      jurusan: 'Teknik Informatika',
      angkatan: '2020',
      jenisKelamin: 'Laki-laki',
    },
    {
      id: '2',
      nama: 'Jane Smith',
      nim: '987654321',
      jurusan: 'Sistem Informasi',
      angkatan: '2021',
      jenisKelamin: 'Perempuan',
    },
  ],
  addMahasiswa: mahasiswa =>
    set(state => ({
      listMahasiswa: [...state.listMahasiswa, mahasiswa],
    })),
  removeMahasiswa: id =>
    set(state => ({
      listMahasiswa: state.listMahasiswa.filter(item => item.id !== id),
    })),
  updateMahasiswa: updatedMahasiswa =>
    set(state => ({
      listMahasiswa: state.listMahasiswa.map(item =>
        item.id === updatedMahasiswa.id ? updatedMahasiswa : item,
      ),
    })),
}));

export default useMahasiswaStore;
