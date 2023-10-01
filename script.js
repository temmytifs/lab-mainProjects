
// $(document).ready(function () {
//   $('#testimonial-carousel').carousel();
// });



// $(document).ready(function () {
//   $(".portfolio-links button").click(function () {
//     var project = $(this).data("project");
//     $(".project-content").removeClass("active");
//     $("#" + project).addClass("active");
//   });
// });


let diff = 0;
const txt = ["DESGINER", "DEVELOPER", "CALLUM"];
const speed = 100;
let interv;

function typeWriter() {
  const dis = document.getElementById("workType");
  if (diff < txt[0].length) {
    dis.innerHTML += txt[0].charAt(diff);
    diff++;
  } else {
    clearInterval(interv);
    txt.push(txt.shift());
    diff = 0;
    dis.innerHTML = "";
    startTyping();
  }
}

function startTyping() {
  interv = setInterval(typeWriter, 1000);
}

startTyping();