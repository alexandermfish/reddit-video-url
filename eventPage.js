
var showForPages = ["*://www.reddit.com/r/*/comments/*"];
var jsonPage = "https://www.google.com";


chrome.tabs.create({url: jsonPage}, callback);

function callback(data){
  console.log(data);
}

var contextMenuItem ={
  "id": "getVid",
  "title": "Video Url for reddit",
  "documentUrlPatterns":showForPages
};

chrome.contextMenus.create(contextMenuItem);
