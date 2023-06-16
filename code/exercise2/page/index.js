const tdDom = document.getElementsByTagName('td');
Array.from(tdDom).forEach((item) => {
  item.onclick = function () {
    this.style.background = '#ccc';
  };
});
