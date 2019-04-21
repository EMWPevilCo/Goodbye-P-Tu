document.getElementById("normal-trigger").onclick = function() {
    console.log("test")
    chrome.runtime.sendMessage({ msg: "startFunc" });
};
