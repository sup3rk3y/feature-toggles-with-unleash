import { UnleashClient } from 'unleash-proxy-client'

/**
 * @description - the following plugin is just a small example of how to use feature-toggles with Unleash.
 *                Make sure you have set-up Unleash and have created some toggles that you can poll.
 *                More info to set-up Unleash here: https://github.com/Unleash/unleash#get-started-in-2-steps
 */

const unleashPlugin = ({ store }, inject) => {
  let activeFeatureToggles = []

  const unleash = new UnleashClient({
    url: 'https://app.unleash-hosted.com/demo/api/proxy',
    clientKey: 'proxy-123',
    appName: 'my-webapp',
    disableRefresh: true, // You can enable if you want to auto-refresh between some time interval.
  })

  // A function to restart the background polling for toggles.
  async function restartUnleash() {
    unleash.stop()
    await unleash.start()
  }

  restartUnleash()

  unleash.on('update', () => {
    // activeFeatureToggles - is an array with all the toggles from Unleash that are toggled ON (only).
    activeFeatureToggles = unleash.getAllToggles()
    // console.log(activeFeatureToggles)

    // Can also store all the toggles that are TRUE
    store.commit('feature-toggles/setFeatureToggles', activeFeatureToggles)
  })

  // Access the feature flag from within any component with this.$isToggleEnabled('name-of-your-toggle')
  // Make sure that the name of the toggle passed is exactly the same as created in Unleash UI.
  inject('isToggleEnabled', (name) => unleash.isEnabled(name))
}

export default unleashPlugin
