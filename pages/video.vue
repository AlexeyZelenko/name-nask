<template>
  <div>
    <template>
      <v-item-group>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="video in videoList"
              :key="video.id"
            >
              <v-item>
                <div
                  class="display-3 flex-grow-1 text-center"
                  text-center
                >
                  <v-card
                    class="mx-auto"
                    max-width="400"
                  >
                    <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
<!--                    <vue-plyr>-->
<!--                      <div class="plyr__video-embed">-->
<!--                        <iframe-->
<!--                          allowfullscreen-->
<!--                          allowtransparency-->
<!--                          :src='`https://www.youtube.com/embed/${video.linkIdYoutube}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`'-->
<!--                        ></iframe>-->
<!--                      </div>-->
<!--                    </vue-plyr>-->
                    <!-- vimeo iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
                    <vue-plyr>
                      <div class="plyr__video-embed">
                        <iframe
                          :src="`https://player.vimeo.com/video/${video.linkIdVimeo}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`"
                          allowfullscreen
                          allowtransparency
                          allow="autoplay"
                        ></iframe>
                      </div>
                    </vue-plyr>

                    <v-card-title>{{video.title}}</v-card-title>

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
  name: 'video',
  data () {
    return {
      videoList: [
        {
          id: 1,
          title: 'NASK - Holy Night',
          linkIdYoutube: 'A5MrLlrDqwE',
          linkIdVimeo: '496361462'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
