function generatepdf() {
  var element = document.getElementById("htmlContent");
  var download = document.getElementById("download1");

  // This will implicitly create the canvas and PDF objects before saving.
  var worker = html2pdf().from(element).save("PDF");
}
