document.getElementById("normal-trigger").click(() => {
    chrome.extension.sendMessage({ msg: "startFunc" });
})