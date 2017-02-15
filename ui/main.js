var button = document.getElementById('counter');

button.onclick = function() {
    
    //creating the req
    var request = new AMLHttpRequest();
  
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status === 200)//request successful
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
  };
  
  //making the req
  request.open('GET', "http://idscum.imad.hasura-app.io/counter", true);
  request.send(null); 
};
