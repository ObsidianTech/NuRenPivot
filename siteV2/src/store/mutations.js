const addVideoListToStore = (state, videoPayload) => {
  state.videoList = videoPayload.keys;
  state.videoObjects = videoPayload.videoObjects;
  state.currentGallery = state.videoList;
};

const toggleLoading = (state) => {
  state.loadingData = !state.loadingData;
};

const setCurrentVideo = (state, videoId) => {
  state.currentVideo = state.videoContentObjs.find(vid => vid._id === videoId);
};

const resetGallery = (state) => {
  state.currentGallery = state.videoList;
};

const resetCurrentVideo = (state) => {
  state.currentVideo = null;
}

const analyzeList = (state) => {
  state.currentGallery = state.videoList;
  if(state.currentVideo) {
    state.currentGallery
      .splice(state.currentGallery
        .indexOf(state.currentGallery
          .find(duplicate =>
            duplicate === state.currentVideo )), 1);
  }
}

const addVideoContentToStore = (state, videoContent) => {
  state.videoContentObjs = videoContent;
}

const setShowAOTL = (state, showAOTL) => {
  state.showAOTL = showAOTL;
}
export default {
  addVideoListToStore,
  toggleLoading,
  setCurrentVideo,
  resetGallery,
  analyzeList,
  resetCurrentVideo,
  addVideoContentToStore,
  setShowAOTL,
};