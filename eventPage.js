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
      let vidURLObject="";
      let vidURL ="";
      jsonPage = currentTabUrl + ".json";
      console.log(jsonPage);
      
      vidURLObject = requestVid(jsonPage)
      .then(()=> {
        vidURL = String(vidURLObject);
        chrome.tabs.create({url: vidURL}, callback);
      });
    });
  }
})



async function requestVid(jsonPage) {
  let response = await fetch(jsonPage);
  let data = await response.json();
  return data.fallback_url;



}