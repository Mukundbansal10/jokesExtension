document.getElementById('trackButton').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    chrome.runtime.sendMessage({url: url});
  });