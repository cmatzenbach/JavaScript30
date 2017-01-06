var elms = document.getElementsByTagName('input');

for (var i = 0, len = elms.length; i < len; i++) {
  elms[i].addEventListener('change', handleChange);
  elms[i].addEventListener('mousemove', handleChange);
  console.log(elms[i]);
}
console.log(elms);

function handleChange () {
  var suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
