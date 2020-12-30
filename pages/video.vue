<template>
<div>
  <template>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 6"
            :key="n"
            cols="12"
            md="4"
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
<!--                  <v-img-->
<!--                    class="white&#45;&#45;text align-end"-->
<!--                    height="200px"-->
<!--                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"-->
<!--                  >-->
<!--                    <v-card-title>Top 10 Australian beaches</v-card-title>-->
<!--                  </v-img>-->
                  <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
                  <vue-plyr>
                    <div class="plyr__video-embed">
<!--                      <v-card-title>Top 10 Australian beaches</v-card-title>-->
                      <iframe
                        src="https://www.youtube.com/embed/A5MrLlrDqwE?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                        allowfullscreen
                        allowtransparency
                        allow="autoplay"
                      ></iframe>
                    </div>
                  </vue-plyr>

                  <v-card-title >NASK - Holy Night</v-card-title>
<!--                  <v-card-subtitle class="pb-0">-->
<!--                    NASK-->
<!--                  </v-card-subtitle>-->

<!--                  <v-card-text class="text&#45;&#45;primary">-->
<!--                    <div>Whitehaven Beach</div>-->

<!--                    <div>Whitsunday Island, Whitsunday Islands</div>-->
<!--                  </v-card-text>-->

                  <v-card-actions>
<!--                    <v-btn-->
<!--                      color="orange"-->
<!--                      text-->
<!--                    >-->
<!--                      Share-->
<!--                    </v-btn>-->

                  </v-card-actions>
                </v-card>
              </div>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </template>

  <!-- youtube div element -->
<!--  <vue-plyr>-->
<!--    <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>-->
<!--  </vue-plyr>-->
</div>
</template>

<script>
export default {
  name: 'video'
}
</script>

<style scoped>

</style>
