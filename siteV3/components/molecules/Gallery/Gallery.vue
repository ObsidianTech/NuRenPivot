<template>
  <span class="galleryWrapper">
    <div class="galleryContainer">
      <span
        v-for="obj in contentObjs"
        v-bind:key="obj.id"
      >
        <gallery-item
          :videoContent="obj"
        >
          <img :src="videoThumbnail(obj.thumbnail)" />
        </gallery-item>
      </span>
    </div>
  </span>
</template>

<script>
import galleryItem from '../../atoms/GalleryItem/GalleryItem.vue';
import config from '../../../config.js';

export default {
  name: 'Gallery',
  components: { galleryItem },
  computed: {
    contentObjs() {
      return this.$store.state.videoContentObjs;
    },
  },
  methods: {    
    getApiUrl() {
      return config.currentSecurity() + config.currentEnvAPI() + '/content/';
    },
    videoThumbnail(src) {
      return this.getApiUrl() + src;
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_variables.scss';
.galleryContainer {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @include tablet {
    grid-template-columns: 1fr 1fr;    
  }
  
  @include phone {
    grid-template-columns: 1fr; 
  }
}
</style>