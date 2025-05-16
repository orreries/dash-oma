var viz;

function loadDashboard(url) {
  const container = document.getElementById("vizContainer");

  // Dispose of previous viz if it exists
  if (viz) {
    viz.dispose();
  }

  const options = {
    hideTabs: true,
    width: "100%",
    height: "800px"
  };

  viz = new tableau.Viz(container, url, options);
}

// Load default dashboard on page load
document.addEventListener("DOMContentLoaded", function () {
  loadDashboard("https://public.tableau.com/views/HBCUvsPWI_17438987223610/PWIDashboard");

  // Optional: add export button handlers
  document.getElementById("exportPDF").addEventListener("click", function () {
    if (viz) viz.showExportPDFDialog();
  });

  document.getElementById("exportImage").addEventListener("click", function () {
    if (viz) viz.showExportImageDialog();
  });
});
