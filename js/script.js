$("#add").click(function(){
  let imageLink = $("#image").val();
  let img='<img class="thumbnail" src="'+imageLink+'"/>';
  $("#playlist").append(img);
  
});

$("#add").click(function(){
let imageLink = $("#image").val();
  let img='<img class="thumbnail" src="'+imageLink+'"/>';
  $("#playlist").append(img)
});

let Snames= ["location", "sky"]
let Sartists= ["playboi carti","playboi carti"]
let Slengths=["2:50","2:35"]
let Imglinks=["https://images.genius.com/d3648154d6d90501b1fd53f863ebd4da.933x1000x1.jpg","https://images.genius.com/d3648154d6d90501b1fd53f863ebd4da.933x1000x1.jpg"]
let Slinks=["link","link1"]

for (let Sname of Snames){
  $("#playlist").append(Sname)
  $("#playlist").append("<br>")
}

for (let Sartist of Sartists){
  $("#playlist").append(Sartist)
  $("#playlist").append("<br>")
}

for (let Imglink of Imglinks){
  $("#playlist").append(`<img class="thumbnail" src= ${Imglink}>`)
  $("#playlist").append("<br>")
}

for (let Slength of Slengths){
  $("#playlist").append(Slength)
  $("#playlist").append("<br>")
}

for (let Slink of Slinks){
  $("#playlist").append(Slink)
  $("#playlist").append("<br>")
}

function addNewSong(name, artist, img, length, link){
  Snames.push(name)
  Sartists.push(artist)
  Imglinks.push(img)
  Slengths.push(length)
  Slinks.push(link)
}

$("#add").click(function(){
  var [song, artist] = $("#song").val().split(":")
  var img = $("#image").val
  var 
});