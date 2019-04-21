document.getElementById("normal-trigger").onclick = function() {
    console.log("test")
    chrome.extension.sendMessage({ msg: "startFunc" });
};
