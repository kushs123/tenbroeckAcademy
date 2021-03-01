function show(){
    document.getElementById("box").style.display = "block";
  }
  function hide() {
    document.getElementById("box").style.display = "none";
  }

function selectOther(val){
  var element=document.getElementById('other');
  if(val=='other'){
    element.style.display='block';
  }else{
    element.style.display = 'none';
  }
}