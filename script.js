
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
const words = ["DEVLOPER", "DEGSINER", "CALLIUM"];
        const typewriterElement = $("#typewriter");

        function typeWriter(text, i, callback) {
          if (i < text.length) {
              typewriterElement.text(text.substring(0, i + 1));
              setTimeout(function() {
                  typeWriter(text, i + 1, callback);
              }, 100); // Adjust typing speed (milliseconds)
          } else {
              setTimeout(callback, 1000); // Delay before erasing (milliseconds)
          }
      }

      function cycleWords(words, index) {
          index = index || 0;

          if (index < words.length) {
              typeWriter(words[index], 0, function() {
                  setTimeout(function() {
                      typewriterElement.text("");
                      cycleWords(words, (index + 1) % words.length); // Wrap around to the first word
                  }, 1000); // Delay before starting next word (milliseconds)
              });
          }
      }

      $(document).ready(function() {
          cycleWords(words);
      });



// let diff = 0;
// const txt = ["DESGINER", "DEVELOPER", "CALLUM"];
// const speed = 100;
// let interv;

// function typeWriter() {
//   const dis = document.getElementById("workType");
//   if (diff < txt[0].length) {
//     dis.innerHTML += txt[0].charAt(diff);
//     diff++;
//   } else {
//     clearInterval(interv);
//     txt.push(txt.shift());
//     diff = 0;
//     dis.innerHTML = "";
//     startTyping();
//   }
// }

// function startTyping() {
//   interv = setInterval(typeWriter, 1000);
// }

// startTyping();