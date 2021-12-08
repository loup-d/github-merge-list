chrome.webRequest.onCompleted.addListener(
  (request) => {
    if (request.method === "GET" && request.url.includes("merging")) {
      getCurrentTab().then((tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["script.js"],
        });
      });
    }
  },
  { urls: ["https://github.com/*"] }
);

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
