

var showForPages = ["*://www.reddit.com/r/*/comments/*"];

var vidURL="www.blackle.com"
var jsonPage = "https://www.google.com"



function callback(data){
  console.log(data);
}


var contextMenuItem ={
  "id": "getVid",
  "title": "Video Url for reddit",
  "documentUrlPatterns":showForPages
};

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(clickData){
  if(clickData.menuItemId == "getVid"){
    chrome.tabs.getSelected(null,function(tab) {
      var tablink = tab.url;
      jsonPage = tablink + ".json"
      requestVid()
      chrome.tabs.create({url: vidURL}, callback);
    });
  }
})



function requestVid() {
  fetch(jsonPage)
  .then(response => response.json())
  .then(data => {
    var redditJSON = JSON.parse();
    vidURL = redditJSON.fallback_url;
    console.log(data) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))
  
}
