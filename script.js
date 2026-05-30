const playlist = {

    playlist: '<iframe src="https://open.spotify.com/embed/playlist/524pfxEmj0QzxIN0tAdb5J?si=dXFWJ--ySaes1JAJjMffdw&pi=k0VyZ5iBRlieK?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
};
function loadPlaylist(option) {
    const player = document.getElementById('player-container');
    player.innerHTML = playlist[option] || '';
}