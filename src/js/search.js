const input_sans = document.getElementById('search_sans');
const button_sans = document.getElementById('but2');

button_sans.addEventListener('click', function() {

  const value = input_sans.value.toLowerCase().trim();

  if (value === 'dust sans' || value === 'dustsans') {
    location.href = '../../html/dust_sans.html';
  } else if (value === 'sans') {
    location.href = '../../html/sans.html';
  } else {
    location.href = '../../html/error.html';
  }
});

/* ------------------------------------------------_*/

const input_papyrus = document.getElementById('search_papyrus');
const button_papyrus = document.getElementById('but1');

button_papyrus.addEventListener('click', function() {

  const value = input_papyrus.value.toLowerCase().trim();

  if (value === 'papyrus') {
    location.href = '../../html/papyrus.html';
  } else if (value === 'emerald papyrus' || value === 'emeraldpapyrus') {
    location.href = '../../html/emerald_papyrus.html';
  } else {
    location.href = '../../html/error.html';
  }
});
