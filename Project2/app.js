let data = [
  {
  name: 'deezz',
  age: '29'
  },
  {
    name: 'nuts',
    age: '25'
  },
  {
    name: 'Kray',
    age: '23'
  },
  {
    name: 'zee',
    age: '30'
  }
];

const info = document.querySelector('#info');

let rinci = data.map(function(item) {
  return '<div>' + item.name + ' ' + item.age + ' tahun' + '</div>'
});

info.innerHTML = rinci.join('\n');