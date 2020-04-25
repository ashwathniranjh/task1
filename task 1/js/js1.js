
var h = document.getElementById("timee");
var bt = document.getElementsByClassName("besttimes");
var a=0,i=1;
var seconds = 0, mseconds = 0,interval,interval2,elapsedTime=0,k=0;

    if(typeof(Storage)!=="undefined")
    {
      var btret = window.localStorage.getItem('best times');
      if(btret == null)
      {
      btret = [0,0,0,0,0];
      }
      else
       {
        btret = JSON.parse(btret);
      }
    }

function quit(s)
{
  s.style.display = "none";
  document.getElementById("restart").style.display = "block";
  var ob = document.getElementsByClassName("button");
  for( var i=0;i<ob.length;i++)
  {
    ob[i].setAttribute('style',"visibility:hidden;");
  }
  Besttimes(0);
}

  function startTimer(s)
  {
    s.style.display="none";
    var display = document.getElementById("countdown");
    var timer = 3,seconds;
    interval2=setInterval(function () {
       seconds = parseInt(timer % 60, 10);
       document.getElementById("countdown").style.display = "inline-block";
       display.textContent =  seconds;
        if (timer--==0)
        {
            timer = 3;
            seconds = 3;
            document.getElementById("countdown").style.display = "none";
            document.getElementById("quit").style.display = "block";
            gang();
        }
    }, 1000);

 }


  function restart(s)
  {
    i=1;
    a=0;
    startTimer(s);
  }

function Besttimes(abc)
{
    clearInterval(interval);
    if(abc!=0)
    {
  for(var i=0;i<5;i++)
   {
    if(btret[i]==0)
    {
      btret[i]= abc;
      break;
    }
    else if( (abc) < (btret[i]) )
    {
      for(var j = 4;j>i;j--)
      {
        btret[j]=btret[j-1];
      }
      btret[i] = abc;
      break;
    }
   }
     document.getElementById("restart").style.display = "block";
 }
 console.log(btret);
  for(i=0;i<5;i++)
  {
    if(btret[i]!=0)
      bt[i].innerHTML = "->" + btret[i];
    else
    {
      bt[i].innerHTML = "->";
    }

    localStorage.setItem('best times', JSON.stringify(btret));
}
}




function shuffle()
{
  var i=nos.length,j=0,temp;
  while(i--)
  {
    j= Math.floor(Math.random()*(i+1));
    temp=nos[i];
    nos[i]=nos[j];
    nos[j]=temp;
  }
  for(i=0;i<nos.length;i++)
  {
    ind[nos[i]-1]=i;
  }
}
var nos=[];var ind=[];
for(var i=1;i<26;i++)
{
  nos[i-1]=i;
  ind[i-1]=0;
}
shuffle();





function gang()
{
  console.log('HELLO');
  clearInterval(interval2);
  shuffle();
  var startTime = Date.now();


  interval = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      h.innerHTML = (elapsedTime / 1000).toFixed(3);
  }, 10);


  var ob = document.getElementsByClassName("button");
  for( var i=0;i<ob.length;i++)
  {
    ob[i].setAttribute('style',"visibility:visible;");
  }


  document.getElementById("submain").style.visibility="visible";


  for(var i=1;i<=nos.length;i++)
  {
    document.getElementById("b"+ i).value = nos[i-1];
  }
  document.getElementById("b"+(ind[0]+1)).style.pointerEvents="auto";

}






function change(s)
{

  if(parseInt(s.value)<=15)
  {
    s.value = parseInt(s.value)+25;
    s.style.pointerEvents="none";
    document.getElementById("b" + (ind[i++]+1)).style.pointerEvents = "auto";
  }
  else
  {
    if(i<25)
    {
      s.style.visibility="hidden";
      s.style.pointerEvents="none";
      document.getElementById("b" + (ind[i++]+1)).style.pointerEvents = "auto";
    }
    else
    {
      s.style.visibility="hidden";
      s.style.pointerEvents="none";
      if(s.value==40)
      {
        document.getElementById("quit").style.display = "none";
        Besttimes((elapsedTime / 1000).toFixed(3));
      }
      document.getElementById("b" + (ind[a++]+1)).style.pointerEvents = "auto";

      }

  }

}
