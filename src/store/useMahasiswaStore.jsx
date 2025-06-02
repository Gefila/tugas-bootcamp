import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useMahasiswaStore = create(
  persist(
    set => ({
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
    }),
    {
      name: 'mahasiswa-storage',
      storage: {
        getItem: async name => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async name => {
          await AsyncStorage.removeItem(name);
        },
      },
    },
  ),
);

export default useMahasiswaStore;
