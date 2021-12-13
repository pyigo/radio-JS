// creating object radio
// creating property stations 
// giving stations object properties of name and songs
// songs property is an array with elements title and artist

let radio = {
    stations: [
        {
            name: '99.fm',
            songs: [
                {
                    title: 'Easy on me',
                    artist: 'Adele'
                },
                {
                    title: 'work',
                    artist: 'Rihana'
                },
                {
                    title: 'woman no cry',
                    artist: 'Bob Marley'
                }
            ]
        },
        {
            name: 'Fun hits',
            songs: [
                {
                    title: 'Bokoko',
                    artist: 'Roga Roga'
                },
                {
                    title: 'Halo',
                    artist: 'Beyonce'
                },
                {
                    title: 'Little birds',
                    artist: 'Bob Marley'
                }
            ]
        }
    ]
}

// create a function to generate random radio chanel
function changeRadio(radioObject) {
    let stationIndex = Math.floor(Math.random() * radioObject.stations.length);

    station = radioObject.stations[radioIndex];

    let songIndex = Math.floor(Math.random() * station.songs.length);
    console.log("Now Playing: " + station.songs[songIndex].title + " by " + station.songs[songIndex].artist)
}

changeRadio(radio);

