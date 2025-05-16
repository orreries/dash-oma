var viz;

var vizURL = "https://public.tableau.com/views/HBCUvsPWI_17438987223610/PWIDashboard";

var options = {
    hideTabs: true,
    width: "100%",
    height: "800px"
};

function initViz() {
    var containerDiv = document.getElementById("vizContainer");
    viz = new tableau.Viz(containerDiv, vizURL, options);
}

document.addEventListener("DOMContentLoaded", initViz);

