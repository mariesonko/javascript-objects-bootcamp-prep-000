var playlist = {artistName: "songTitles"}

function updatePlaylist (playlist, artistName, songTitles ){
  return Object.assign(playlist, {[artistName]: "songTitles"})
}

function removeFromPlaylist (playlist, artistName){
  var playlist = {artistName: "songTitles"}
  delete playlist.artistName
  return playlist 

}
