module.exports = {
  injectChanges: false, files: ['./**/*.{html,htm,css,js}'],
  watch: false,
  watchOptions: { 
    ignored: './**/*.{html,htm,css,js}' 
  },
  server: { baseDir: './' }
}