<template>
<div>
  <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
  <vue-plyr>
    <div class="plyr__video-embed">
      <iframe
        src="https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
        allowfullscreen
        allowtransparency
        allow="autoplay"
      ></iframe>
    </div>
  </vue-plyr>

  <!-- youtube div element -->
  <vue-plyr>
    <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
  </vue-plyr>
</div>
</template>

<script>
export default {
  name: 'video'
}
</script>

<style scoped>

</style>
