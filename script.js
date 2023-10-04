

const words = ["DEVELOPER", "DESIGNER", "TEMMYRITE"];
        const typewriterElement = $("#typewriter");

        function typeWriter(text, i, callback) {
          if (i < text.length) {
              typewriterElement.text(text.substring(0, i + 1));
              setTimeout(function() {
                  typeWriter(text, i + 1, callback);
              }, 100); 
          } else {
              setTimeout(callback, 1000); 
          }
      }

      function cycleWords(words, index) {
          index = index || 0;

          if (index < words.length) {
              typeWriter(words[index], 0, function() {
                  setTimeout(function() {
                      typewriterElement.text("");
                      cycleWords(words, (index + 1) % words.length);
                  }, 1000);
              });
          }
      }

      $(document).ready(function() {
          cycleWords(words);
      });


      


