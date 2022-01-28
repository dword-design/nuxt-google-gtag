import packageName from 'depcheck-package-name'

export default function (options) {
  return this.addModule(packageName`@nuxtjs/google-gtag`, {
    config: {
      anonymize_ip: true,
      ...options.config,
    },
    debug: true,
    id: process.env.GOOGLE_ANALYTICS_ID,
    ...options,
  })
}
