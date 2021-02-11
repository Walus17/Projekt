function myFunction() {
    var txt;
    var r = confirm("Potwierdź swój wybór!");
    if (r == true) {
      txt = "Potwierdzono!";
    } else {
      txt = "Anulowano";
    }
    document.getElementById("demo").innerHTML = txt;
  }