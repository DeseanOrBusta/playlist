//$("#add").click(function(){
//let imageLink = $("#image").val();
 // let img='<img class="thumbnail" src="'+imageLink+'"/>';
 // $("#playlist").append(img)
//});

let Snames= ["location", "sky"]
let Sartists= ["playboi carti","playboi carti"]
let Slengths=["2:50","2:35"]
let Imglinks=["https://images.genius.com/d3648154d6d90501b1fd53f863ebd4da.933x1000x1.jpg","https://images.genius.com/d3648154d6d90501b1fd53f863ebd4da.933x1000x1.jpg"]
let Slinks=["link","link1"]

for (let Sname of Snames){
  $("#Snames").append(Sname)
  $("#Snames").append("<br>")
}

for (let Sartist of Sartists){
  $("#Sartists").append(Sartist)
  $("#Sartists").append("<br>")
}

for (let Imglink of Imglinks){
  $("#Simg").append(`<img class="thumbnail" src= ${Imglink}>`)
  $("#Simg").append("<br>")
}

for (let Slength of Slengths){
  $("#Slengths").append(Slength)
  $("#Slengths").append("<br>")
}

//for (let Slink of Slinks){
  //$("#playlist").append(Slink)
  //$("#playlist").append("<br>")
//}

function addNewSong(name, artist, img, length, link){
  Snames.push(name)
  Sartists.push(artist)
  Imglinks.push(img)
  Slengths.push(length)
  Slinks.push(link)
}
  
                
$("#add").click(function(){
  var [name, artist] = $("#song").val().split(":")
  var img = $("#image").val()
  var length = $("#length").val()
  var link = $("#link").val()
  addNewSong(name, artist, img, length, link)
  displayAllSongs()
  console.log(Snames)
});

function displayAllSongs(){
  
  $("#Snames").html("")
  for (let Sname of Snames){
  $("#Snames").append(`<p>${Sname}</p>`)
}

  $("#Sartists").html("")
for (let Sartist of Sartists){
  $("#Sartists").append(`<p>${Sartist}</p>`)
}

  $("#Simg").html("")
for (let Imglink of Imglinks){
  $("#Simg").append(`<img class="thumbnail" src= ${Imglink}>`)
}

  $("#Slengths").html("")
for (let Slength of Slengths){
  $("#Slengths").append(`<p>${Slength}</p>`)
}

}


displayAllSongs()