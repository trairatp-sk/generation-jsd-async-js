const STORAGE_KEY = 'numberOfClick';

let counter = 0;

window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY) {
    updateCounter(window.localStorage.getItem(STORAGE_KEY));
  }
});

function onClick() {
  updateCounter(counter + 1);
  window.localStorage.setItem(STORAGE_KEY, counter);
}

function updateCounter(newValue) {
  counter = newValue;
  document.getElementById('counter').textContent = counter;
}
