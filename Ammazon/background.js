chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var url = request.url;
    // Call the Amazon API to get the product price
    // If the price changes, send a notification
  });