<template>
  <div>
    <!-- audio element -->
    <vue-plyr>
      <audio controls crossorigin playsinline>
        <source
          src='/HolyNight.mp3'
          type='audio/mp3'
        />
        <source
          src="/path/to/audio.ogg"
          type="audio/ogg"
        />
      </audio>
    </vue-plyr>

  </div>
</template>
