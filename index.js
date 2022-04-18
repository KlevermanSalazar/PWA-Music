if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Register SW sucessful', reg))
    .catch(err => console.warn('Register Error', err))
}