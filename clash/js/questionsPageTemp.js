     function dispmodal(){
      var modal= document.getElementById("quitmodal");
      modal.style.display="block";
     }
          function dispmodal2(){
      var modal1= document.getElementById("inst1");
      modal.style.display="block";
     }
     function hidemodal(){
      var modal= document.getElementById("quitmodal");
       modal.style.display="none";
     }
      function hidemodal1(){
      var modal1= document.getElementById("inst1");
       modal.style.display="none";
     }

      function value1()
      {
          document.getElementById("radio5").value=1;
      }
     
      
                pie2();
                function pie2()
                {
                  document.getElementById("piebg").hidden=true;
                  document.getElementById("pie13").hidden=true;
                  document.getElementById("pie23").hidden=true;
                  document.getElementById("pie33").hidden=true;
                }
                  var y=0;
                  pie();
                  function pie()
                  {
                    if(y=='0')
                    {
                      document.getElementById("pie13").hidden= false;
                    }
                    if(y=='1')
                    {
                      document.getElementById("pie13").hidden= false;
                      document.getElementById("pie23").hidden= false;
                    }
                    if(y=='2')
                    {
                      document.getElementById("pie13").hidden= false;
                      document.getElementById("pie23").hidden= false;
                      document.getElementById("pie33").hidden= false;
                    }
                    if (y=='3') 
                    {
                      y=-1;
                    }
                    y=y+1;

                  }
                
                