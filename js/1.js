'use strict';

window.addEventListener('scroll', function() {
 
    if(pageYOffset>=550){
        document.getElementById('booking').style.position = 'fixed';
        document.getElementById('booking').style.top= "0px"; 
    }else{
        document.getElementById('booking').style.position = 'relative';  
    }
  });
  document.getElementById('davaToday').valueAsDate = new Date();
  var d = new Date();
  document.getElementById('davaToday2').valueAsDate = new Date(d.getTime() + 86400000);

  