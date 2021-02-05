<template>
  <div>
    <template>
      <v-card
        max-width="400"
        class="mx-auto"
      >
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card
                color="#385F73"
                dark
              >
                <v-card-subtitle>
                  Listen to tracks anytime, anywhere.
                </v-card-subtitle>
              </v-card>
            </v-col>

            <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12"
            >
              <v-card
                :color="item.color"
                dark
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="headline"
                      v-text="item.title"
                    />

                    <v-card-subtitle v-text="item.artist" />
                  </div>

                  <v-avatar
                    class="ma-3"
                    size="125"
                    tile
                  >
                    <v-img :src="item.src" />
                  </v-avatar>
                </div>
                <!-- audio element -->
                <vue-plyr>
                  <audio controls crossorigin playsinline>
                    <source
                      :src="item.treck"
                      type="audio/mp3"
                    />
                  </audio>
                </vue-plyr>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://drive.google.com/uc?export=view&id=1WS1uTcVAtAsnTZ4rgisHirR6CB5ARisk',
        title: 'Holy Night',
        artist: 'NASK',
        treck: '/HolyNight.mp3'
      },
      {
        color: '#091704',
        src: 'https://drive.google.com/uc?export=view&id=1s31H2jopuxpD3mLUK6SVNjDsm2rcS-Zl',
        title: 'Pray to God',
        artist: 'NASK',
        treck: '/Prayer.mp3'
      },
      {
        color: '#9018cc',
        src: 'https://drive.google.com/uc?export=view&id=1XHYdN2q5KsKe6DLUsfTEb6bCnl6Wl5qB',
        title: 'Psalm 152',
        artist: 'NASK',
        treck: '/nask3.mp3'
      }
    ]
  })
}
</script>
