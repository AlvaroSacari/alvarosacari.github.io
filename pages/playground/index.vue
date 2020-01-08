<template>
  <div>
    <StartSection />

    <!-- credit card animation -->
    <div class="cont">
      <img :src="require('~/assets/images/playground/credit_card.png')" class="credit-card">
      <div class="input-images">
        <img v-for="i in 30" :key="i" :src="require('~/assets/images/playground/curita.png')">
      </div>
      <div class="output-images">
        <img v-for="i in 30" :key="i" :src="require('~/assets/images/playground/5_soles.png')">
      </div>
    </div>
    <!-- end credit card animation -->

    <ContactSection />
  </div>
</template>

<script>
import StartSection from '~/components/index_sections/Start.vue'
import ContactSection from '~/components/index_sections/Contact.vue'

export default {
  auth: false,

  components: {
    StartSection,
    ContactSection
  }
}
</script>

<style lang="scss" scoped>
.cont {
  margin-top: 100px;
  margin-bottom: 75px;
  text-align: center;
  position: relative;
  width: 100%;
  height: 300px;

  .credit-card {
    width: 400px;
    height: 250px;
    transform: rotate(-12deg) translateX(-50%);
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 1;
  }

  .input-images, .output-images {
    img {
      position: absolute;
    }
  }

  .input-images {
    z-index: 0;

    img {
      $size: 35px;
      animation: entering-the-card 3s infinite;
      width: $size;
      height: $size;
      left: calc(50% + 360px - 40px - 40px);
      top: 125px;
      animation-delay: 0s;

      &:nth-child(2n) {
        $size: 20px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 30px);

      }

      &:nth-child(3n) {
        $size: 30px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 40px - 80px);
      }

      &:nth-child(4n) {
        $size: 30px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 40px - 40px);
      }

      &:nth-child(5n) {
        $size: 15px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 40px - 110px);
      }

      &:nth-child(6n) {
        $size: 40px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 40px - 100px);
      }

      @for $i from 1 through 30 {
        &:nth-child(#{$i}) {
          animation-delay: $i*0.1s;
        }
      }
    }
  }

  .output-images {
    z-index: 2;

    img {
      z-index: 2;
      $size: 35px;
      animation: leaving-the-card 3s infinite;
      width: $size;
      height: $size;
      left: calc(50% + 360px - 40px - 40px);
      top: -125px;
      animation-delay: 0s;

      &:nth-child(2n) {
        $size: 20px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 30px);

      }

      &:nth-child(3n) {
        $size: 30px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 40px - 80px);
      }

      &:nth-child(4n) {
        $size: 60px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 40px - 40px);
      }

      &:nth-child(5n) {
        $size: 15px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 40px - 110px);
      }

      &:nth-child(6n) {
        $size: 30px;
        width: $size;
        height: $size;
        left: calc(50% + 360px - 40px - 100px);
      }

      @for $i from 1 through 30 {
        &:nth-child(#{$i}) {
          animation-delay: $i*0.1s;
        }
      }
    }
  }

  // animation entering the card
  @keyframes entering-the-card {
    0%   { transform: rotate(-270deg) translateY(360px) rotate(-110deg); opacity: 0.1; }
    30%   { opacity: 1; }
    50%   { opacity: 1; }
    100% { transform: rotate(-220deg) translateY(360px) rotate(-90deg); opacity: 0; }
  }

  // animation leaving the card
  @keyframes leaving-the-card {
    0%   { transform: rotate(0deg) translateY(90px) rotate(-70deg); opacity: 0.1; }
    30%   { opacity: 1; }
    50%   { opacity: 0; }
    100% { transform: rotate(50deg) translateY(540px) rotate(-50deg); opacity: 0; }
  }
}
</style>
