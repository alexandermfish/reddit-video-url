var showForPages = ["*://www.reddit.com/r/*/comments/*"];

function callback(data) {
  console.log(data);
}

var contextMenuItem = {
  "id": "getVid",
  "title": "Video Url for reddit",
  "documentUrlPatterns":showForPages
};

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(clickData) {
  if(clickData.menuItemId === "getVid") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
      let currentTabUrl = tab.url;
      let jsonUrl = currentTabUrl + ".json";
      fetch(jsonUrl)
      .then(response => response.json())
      .then((out) => {
        let vidURL = out[0].data.children[0].data.media.reddit_video.fallback_url;
        chrome.tabs.create({url: vidURL}, callback);
      })
      .catch(err => { throw err });
    });
  }
});





