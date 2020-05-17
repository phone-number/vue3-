export default app => {
  app.component('btn', import('./btn'))
  app.component('slider', require('./slider').default)
  app.component('panel', require('./panel').default)
}