var bjpCounter=0;
var mnsCount=0;
var congCount=0;

document.getElementById("bjp").addEventListener('click', function(){
    bjpCounter = bjpCounter+1;
    document.getElementById("bjpVote").innerHTML = bjpCounter;
});

document.getElementById("congress").addEventListener('click', function(){
    congCount = congCount+1;
    document.getElementById("congressVote").innerHTML = congCount;
});

document.getElementById("mns").addEventListener('click', function(){
    mnsCount = mnsCount+1;
    document.getElementById("mnsVote").innerHTML = mnsCount;
});

document.getElementById("submit").addEventListener('click', function(){
 document.getElementById("total").innerHTML=`BJP got Vote:${bjpCounter} Congress got vote:${congCount} MNS got Vote:${mnsCount}`
});




