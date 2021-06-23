<template>
  <div>
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="writeToFirestore">
          <span>Write now</span>
        </button>
      </div>
    </div>
    <div>
      <h2>
        Read from Firestore.
      </h2>
      <div>
        <button @click="readFromFirestore">
          <span>Read now</span>
        </button>
      </div>
      <p>SSR Rendered: {{ title }}</p>
    </div>
    <v-col cols="12">
      <v-file-input
        v-model="File"
        accept="audio/mp3"
        color="deep-purple accent-4"
        counter
        multiple
        placeholder="Выберите файл"
        prepend-icon="mdi-bookmark-music"
      >
        <template>
          <v-file-input
            counter
            label="File input"
            multiple
            show-size
          />
        </template>
      </v-file-input>
    </v-col>
    <v-btn
      color="blue darken-1"
      text
      type="submit"
      @click="writeToFirestore(File)"
    >
      Сохранить
    </v-btn>
  </div>
</template>

<script>
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '~/plugins/firebase.js'

export default {
  name: 'Admin',
  // async fetch () {
  //   const ref = doc(db, 'testCollection', 'testDoc')
  //   try {
  //     const document = await getDoc(ref)
  //     this.title = document.data().text
  //   } catch (e) {
  //     console.error(e)
  //   }
  // },
  data () {
    return {
      File: [],
      title: null
    }
  },
  methods: {
    async writeToFirestore (File) {
      console.log('File', File)

      const ref = doc(db, 'testCollection', 'testDoc')
      const document = {
        text: 'Firebase 9 rocks!'
      }
      try {
        await setDoc(ref, document)
        alert('Success!')
      } catch (e) {
        alert('Error!')
        console.error(e)
      }
    },
    async readFromFirestore () {
      const ref = doc(db, 'testCollection', 'testDoc')
      try {
        const document = await getDoc(ref)
        this.title = document.data().text
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
