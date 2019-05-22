var showForPages = ["*://www.reddit.com/r/*/comments/*"];


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
      let currentTabUrl = tab.url;
      let vidURL=""
      jsonPage = currentTabUrl + ".json"
      requestVid(jsonPage)
      .then(url => {
      chrome.tabs.create({url: vidURL}, callback);
      });
    });
  }
})



async function requestVid(jsonPage) {
  let response = await fetch(jsonPage);
  let data = await response.json();
  console.log("got here")
  console.log(data)
  return data.fallback_url;



}