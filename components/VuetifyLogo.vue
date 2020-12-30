<template>
  <div>
<!--    <img-->
<!--      class="VuetifyLogo"-->
<!--      alt="Vuetify Logo"-->
<!--      src="/vuetify-logo.svg"-->
<!--    >-->
    <h1
      class="VuetifyLogo"
      style="color: yellow; font-size: 90px"
    >
      NASK
    </h1>
  </div>
</template>

<style>
.VuetifyLogo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
