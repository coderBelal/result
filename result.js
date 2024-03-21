function calculate() {
  event.preventDefault();

  var a = parseInt(document.getElementById("bookOne").value);
  console.log(a);
  var b = parseInt(document.getElementById("bookTwo").value);
  var c = parseInt(document.getElementById("bookThree").value);
  var d = parseInt(document.getElementById("bookFour").value);
  var e = parseInt(document.getElementById("bookFive").value);
  var f = parseInt(document.getElementById("bookSix").value);

  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100 || f > 100) {
    alert("Please Enter Correct Number");
  } else {
    var obtain = a + b + c + d + e + f;
    console.log(obtain);
    // document.getElementById("obtain").innerHTML = obtain;
    // var per = (obtain / 500) * 100;
    // document.getElementById("per").innerHTML = per;

    // if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40 && f > 40) {
    //   document.getElementById("remark").innerHTML = "Passed";
    // } else {
    //   document.getElementById("remark").innerHTML = "Passed";
    // }
    // return false;
  }
}
