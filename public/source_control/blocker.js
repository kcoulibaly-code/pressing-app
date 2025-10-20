let host = window.location.protocol + "//" + window.location.host;
sourceViewBlocker();

function sourceViewBlocker(){


    // document.onkeydown = function(e) {
    //         if (e.ctrlKey &&
    //             (e.keyCode === 67 ||
    //              e.keyCode === 86 ||
    //              e.keyCode === 85 ||
    //              e.keyCode === 117)) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    // };
    document.addEventListener("keypress", function(e) {
      if (e.key === "u" && e.ctrlKey) {
        e.preventDefault(); // Prevents the default behavior of the key press
      }
    });
    // $(document).keypress("u",function(e) {
    //   if(e.ctrlKey)
    //   {
    // return false;
    // }
    // else
    // {
    // return true;
    // }
    // });


  document.onkeydown = function(e) {
  if(event.keyCode == 123) {
    console.log('You cannot inspect Element');
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  }
  // prevents right clicking
  document.addEventListener('contextmenu', e => e.preventDefault());


}
