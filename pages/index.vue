<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <vuetify-logo />
      </div>
      <v-card>
        <v-img
          class="white--text align-end"
          height="300px"
          :src="Cover"
        >
          <v-btn
            class="ma-2"
            outlined
            color="yellow"
            nuxt
            to="/inspire"
          >
            listen
          </v-btn>
        </v-img>
      </v-card>
      <div>
        <logo />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
    arrayCover: [
      'https://drive.google.com/uc?export=view&id=1_2IhyppaWsySdwogIXaf0MwGEHbVlOfH',
      'https://drive.google.com/uc?export=view&id=147FdQhU3A97uu7rbiTOieNZTm9Yeiy2Q',
      'https://drive.google.com/uc?export=view&id=1XHYdN2q5KsKe6DLUsfTEb6bCnl6Wl5qB'
    ]
  }),
  computed: {
    Cover () {
      return this.arrayCover[Math.floor(Math.random() * this.arrayCover.length)]
    }
  }
}
</script>
