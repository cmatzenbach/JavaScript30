var elms = document.getElementsByTagName('input');

for (var i = 0, len = elms.length; i < len; i++) {
    elms[i].addEventListener('change', handleChange);
    elms[i].addEventListener('mousemove', handleChange);
}

function handleChange () {
  console.log('working');
}
