import {create} from 'zustand';

const useMahasiswaStore = create(set => ({
  listMahasiswa: [],
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
