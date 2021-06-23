<template>
  <div>
    <template>
      <v-item-group>
        <v-container>
          <v-row>
            <v-col
              v-for="video in videoList"
              :key="video.id"
              cols="12"
              md="4"
            >
              <v-item>
                <div
                  class="display-3 flex-grow-1 text-center"
                >
                  <v-card
                    class="mx-auto"
                    max-width="400"
                  >
                    <vue-plyr>
                      <div class="plyr__video-embed">
                        <iframe
                          :src="`https://www.youtube.com/embed/${video.linkIdYoutube}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
                          allowfullscreen
                          allowtransparency
                          allow="autoplay"
                        />
                      </div>
                    </vue-plyr>

                    <v-card-title>{{ video.title }}</v-card-title>
                  </v-card>
                </div>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoList: [
        {
          id: 1,
          title: 'NASK - Holy Night',
          linkIdYoutube: 'A5MrLlrDqwE',
          linkIdVimeo: '496361462'
        },
        {
          id: 2,
          title: 'NASK - Pray to God',
          linkIdYoutube: '0eqMMd-09Jc',
          linkIdVimeo: ''
        },
        {
          id: 3,
          title: 'NASK - Psalm 152(субтитры)',
          linkIdYoutube: 'vnFSu_rcxUs',
          linkIdVimeo: ''
        },
        {
          id: 4,
          title: 'NASK - Psalm 152 new',
          linkIdYoutube: 'nILGtOXiiyY',
          linkIdVimeo: ''
        },
        {
          id: 5,
          title: 'NASK - Faith',
          linkIdYoutube: 'PLE37oXBL5g',
          linkIdVimeo: ''
        },
        {
          id: 6,
          title: 'NASK - MIX',
          linkIdYoutube: '6Z4XkpPdsSw',
          linkIdVimeo: ''
        },
        {
          id: 7,
          title: 'NASK - Evening of christian rap',
          linkIdYoutube: 'fKJWZJuk30E',
          linkIdVimeo: ''
        },
        {
          id: 8,
          title: 'NASK - recording studio#1',
          linkIdYoutube: 'ySwwdRsTZKc',
          linkIdVimeo: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
