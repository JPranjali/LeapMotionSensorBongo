window.addEventListener( "message",
          function (e) {
          	var position=e.data;
              if(position[1]>-40 && position[1] <= -31)
     {document.getElementById("audio").src='sounds/e2.mp3';
                 // document.getElementById("audio").play();
    }

          },
          false);