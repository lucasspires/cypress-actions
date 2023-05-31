const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZlODM4ZmJkLWEyYWEtNDJjNC1hOWUyLTBmYWY1MGEyZDNmYy0xNjg1NTYyNjAyMTU2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMDc4MzFhMzUtYzUwZi00MWRlLThiYjUtODAwMzM1NzIxMzMyIiwidHlwZSI6InQifQ.y_lEWHv7o0BaBa2ocVmAByA4JlSGyJKhlMkvLYUiSeM'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
