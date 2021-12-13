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

    station = radioObject.stations[stationIndex];

    let songIndex = Math.floor(Math.random() * station.songs.length);
    console.log("Now Playing: " + station.songs[songIndex].title + " by " + station.songs[songIndex].artist)
}

changeRadio(radio);


// **********PART TWO**********
// creating class Animal

class Animal {
    constructors(name, color, age, legs) {
        this.name = name
        this.color = color
        this.age = age
        this.legs = legs
    }

    //creating method that applies to animal

    eat() {
        console.log('This animal eats')
    }

    sleep() {
        console.log('All animals sleep at night')
    }

}