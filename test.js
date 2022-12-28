chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "urlchanged") {
    // console.log("sdfsdfsfsdf", request.user);
    getBodyData(request.user);
  } else if (request.message === "copied") {
    getCopiedData(request.data);
  }
});

async function getBodyData(user) {
  const url = "https://api.extension.fxdatalabs.com/data/page_data/";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      page_data: JSON.stringify(document.documentElement.innerHTML),
      user_id: JSON.stringify(user),
      page_url: document.URL,
    }),
  };
  fetch(url, options);
  console.log(
    "demo",
    chrome.history.search({ text: "" }, function (results) {
      alert(results);
    })
  );
}

document.addEventListener("copy", (e) => {
  console.log(e);
});
