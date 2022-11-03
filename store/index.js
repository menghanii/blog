// store/index.js
export const state = () => ({
  post: [],
});

export const mutations = {
  setPost(state, post) {
    state.post = post;
  },
};

export const getters = {
  getPosts(state) {
    return state.post;
  },
};
