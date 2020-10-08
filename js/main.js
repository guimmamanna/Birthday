var node = document.getElementById('waben');
var btn = document.getElementById('download');
btn.onclick = function() {
  domtoimage.toBlob(document.getElementById('waben'))
    .then(function(blob) {
      window.saveAs(blob, 'my-node.png');
    });
}
