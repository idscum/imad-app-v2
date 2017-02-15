var button = document.getElementById('counter');

button.onclick = function() {
    
    //creating the req
    var request = new XMLHttpRequest();
  
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


//Name inputs

var submit = document.getElementById('submit_btn');

submit.onclick = function() {
    
     //creating the req
    var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status === 200)//request successful
          {
            var names= request.responseText;
            names = JSON.parse(names);
            
            var list = '';
    
            for(var i=0; i<names.length; i++)
            {
                list += '<li>' + names[i] + '</li>';
            }
    
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
          }
      }
    };
  
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  
  //making the req
  request.open('GET', "http://idscum.imad.hasura-app.io/submit-name?name?=" + name, true);
  request.send(null); 
  
  
    
};