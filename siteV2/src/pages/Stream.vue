<template>
  <div class="page-container">
    <navBar class="navBar" />
    <div v-if="currentVideo" class="pageContent">
      <section-head>{{ currentVideo.displayName }}</section-head>
      <p>{{ currentVideo.description }}</p>
      <div class="stream" v-html="currentVideo.vimeoLink">
        {{ currentVideo.vimeoLink }}
      </div>
      <section-head>See More</section-head>
      <gallery />
    </div>
    <h1 v-else class="sorry">
      If you're seeing this message, you may have accidently gone to the wrong page.
      Please go to the <router-link to="/">Home</router-link> page.
    </h1>
  </div>
</template>

<script>
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import gallery from '../components/molecules/Gallery/Gallery.vue';
import navBar from '../components/atoms/Header/NavigationBar.vue';

export default {
  name: 'Stream',
  components: { sectionHead, gallery, navBar },
  computed: {
    currentVideo() {
      return this.$store.state.currentVideo;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
.page-container {
  margin: 0 auto;

  p {
    text-align: center;
    font-size: 25px;
    margin: 0 0 6px;
  }
}

.stream {
  text-align: center;
  outline: none;
  height: 500px;

  @include tablet {
    height: 400px;

  }

  @include phone {
    height: 250px;
  }
}

.sorry {
  text-align: center;
  padding: 120px;
}

.navBar {
  padding: 25px;
}
</style>