let song_genre = document.getElementById('song_genre');
let song_name = document.getElementById('song_name');
let song_audio = document.getElementById('song_audio');

const url = "http://localhost:8080/api/v1/song";
const audio_prefix = "http://api.mp3.zing.vn/api/streaming/audio/";
const audio_suffix = "/320";

load();

function load() {
    fetch(url, {
        headers: {
            authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0iLCJpYXQiOjE2ODQxNjUxODQsImV4cCI6MTk5OTUyNTE4NH0.4jBxdQC-dFCwvAMxWxIZ2XtITy2xbiNkVVAqTcJM-iJTVPCdLao98fiFEh_PF91wy3E4gh6emcg9sAtTTfkYDw'
        }
    })
        .then(songs => songs.json())
        .then(songs => {
            if (songs.length > 0) {
                song_genre.innerHTML = songs[1].genres[0].name;
                song_name.innerHTML = songs[1].name;
                song_audio.src = audio_prefix + songs[1].audio + audio_suffix;
            }
        })
        .catch(reason => {
            console.log(reason);
        })
}