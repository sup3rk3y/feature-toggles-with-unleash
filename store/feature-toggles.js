export const state = () => ({
  featureToggles: [],
})

export const mutations = {
  setFeatureToggles(state, activeToggles) {
    state.featureToggles = activeToggles
  },
}
