import { v4 as uuidv4} from 'uuid';

function chillHop(){
    return[
        {
            name: "Bookshelves",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10022",
            color: ["#55737F", "#889E9D"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Chiaroscuro",
            cover: "https://i.scdn.co/image/f224e10c60520c54ef64638a8b6ce44a812243d5",
            artist: "Toonorth",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7841",
            color: ["#3AA36B", "#FA683F"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Better, Together, Forever",
            cover: "https://i.scdn.co/image/ab67616d00001e024b24d2de142e1d4dc3a698b1",
            artist: "Team Astro",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9253",
            color: ["#8C7677", "#4E5558"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Lagoons",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-300x300.jpg",
            artist: "Strehlow, Chris Mazuera",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9266",
            color: ["#BA4A46", "#FDF0DD"],
            id: uuidv4(),
            active: false
        },
        {
            name: "There and Back",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-300x300.jpg",
            artist: "Shopan",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10311",
            color: ["#CEB6C6", "#1F487C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Beyond Clouds",
            cover: "https://i.scdn.co/image/ab67616d00001e024b24d2de142e1d4dc3a698b1",
            artist: "Saib",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9297",
            color: ["#8C7677", "#4E5558"],
            id: uuidv4(),
            active: false
        },
        {
            name: "String Along",            
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-300x300.jpg",
            artist: "Miscel",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10315",
            color: ["#CEB6C6", "#1F487C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Jazz Cabbage",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-300x300.jpg",
            artist: "Ian Ewing, Strehlow",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
            color: ["#FCF1D5", "#937084"],
            id: uuidv4(),
            active: false
        }
    ]
}

export default chillHop;