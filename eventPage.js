
var showForPages = ["*://www.reddit.com/r/*/comments/*"];

var contextMenuItem ={
  "id": "getVid",
  "title": "Get Reddit Vid",
  "documentUrlPatterns":showForPages
};

chrome.contextMenus.create(contextMenuItem);