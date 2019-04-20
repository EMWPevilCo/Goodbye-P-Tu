chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          //Below this line (comment) is a solution to fix url on extensions
          /*pageUrl: {
              hostEquals: 'facebook.com'
              urlContains: 'facebook'
          }*/
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

})
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.id, {
    file: 'inject.js', 'inject.css'
	});
});



