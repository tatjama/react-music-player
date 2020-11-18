import { v4 as uuidv4} from 'uuid';
import buenaVistaImage from './images/buena-vista-social-club-album-cover.jpg';
import comandanteCheGevara from './music/Buena Vista Social Club - Hasta Siempre - Comandante Che Guevara.mp3';
import chanChan from './music/Buena Vista Social Club - Chan Chan (Official Audio).mp3';
import gipsyKingsImage from './images/Gipsy_Kings.jpg';
import moorea from'./music/Gipsy Kings - Moorea.mp3';
import unAmore from './music/Gipsy Kings - Un Amor.mp3';
import tuQueresVolver from './music/Gipsy Kings - Tu Quieres Volver.mp3';
import santanaImage from './images/santana.jpg';
import blackMagicWomen from './music/Santana - Black Magic Woman (Official Audio).mp3';
import corazonEspinado from './music/Santana - Corazon Espinado ft. Mana (Official Video).mp3';
import putYourLightsOn from './music/Santana - Put Your Lights On ft. Everlast (Official Video).mp3';
import smooth from './music/Santana - Smooth ft. Rob Thomas (Official Video).mp3';
import metallicaImage from './images/metallica.jpg';
import one from './music/Metallica One (Official Music Video).mp3';
import unforgiven from './music/Metallica The Unforgiven (Official Music Video).mp3';
import edSheeranImage from './images/ed_sheeran.jpg';
import shapeOfYou from './music/Ed Sheeran - Shape of You [Official Video].mp3';
import takeMeBackToLondon from './music/Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. Stormzy, Jaykae & Aitch].mp3';
import loseYourselfImage from './images/lose-yourself.jpeg';
import loseYourself from './music/Eminem - Lose Yourself (Lyrics).mp3';
import rapGodImage from './images/rap-god.jpg';
import rapGod from './music/Eminem - Rap God (Explicit) [Official Video].mp3';
import slimShadyImage from './images/slim-shady.png';
import slimShady from './music/Eminem - The Real Slim Shady (Official Video - Clean Version).mp3';
import notAfraidImage from './images/not-afraid.jpg';
import notAfraid from './music/Eminem - Not Afraid (Official Video).mp3';
import loveWayLieImage from './images/love-the-way-you-lie.jpeg';
import loveWayLie from './music/Eminem - Love The Way You Lie ft. Rihanna.mp3';
import river from './music/Eminem - River ft. Ed Sheeran (Official Video).mp3';
import whenImGoneImage from './images/When_Im_Gone.jpg';
import whenImGone from './music/Eminem - When Im Gone (Official Music Video).mp3';
import frozenImage from './images/frozen.jpeg';
import frozen from './music/FROZENLet It Go Sing-alongOfficial Disney UK.mp3';
import frozen2Image from './images/frozen2.jpeg';
import frozen2 from './music/Frozen - All Is Found (From Frozen 2Lyric Video).mp3';
import friendsImage from './images/friends.jpeg';
import friends from './music/Marshmello & Anne-Marie - FRIENDS (Lyric Video) OFFICIAL FRIENDZONE ANTHEM.mp3';
import danceMankeyImage from './images/dance-monkey.jpeg';
import danceMonkey from './music/Tones and I - Dance Monkey (Lyrics).mp3';
import heyBrotherImage from './images/hey-brother.jpeg';
import addictedToYou from './music/Avicii - Addicted To You.mp3';
import heyBrother from './music/Avicii - Hey brother.mp3';
import levels from './music/Avicii - Levels.mp3';
import waitingForLove from './music/Avicii - Waiting For Love.mp3';
import wakeMeUp from './music/Avicii - Wake Me Up (Official Video).mp3';


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
        },
        {
            name: "Comandante Che Guevara",
            cover: buenaVistaImage,
            artist: "Buena Vista Social Club",
            audio: comandanteCheGevara,
            color: ["#D9C586", "#8F2E29"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Chan Chan",
            cover: buenaVistaImage,
            artist: "Buena Vista Social Club",
            audio: chanChan,
            color: ["#D9C586", "#8F2E29"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Moorea",
            cover: gipsyKingsImage,
            artist: "Gipsy Kings",
            audio: moorea,
            color: ["#E6CA5D", "#853712"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Tu Queres Volver",
            cover: gipsyKingsImage,
            artist: "Gipsy Kings",
            audio: tuQueresVolver,
            color: ["#E6CA5D", "#853712"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Un Amore",
            cover: gipsyKingsImage,
            artist: "Gipsy Kings",
            audio: unAmore,
            color: ["#E6CA5D", "#853712"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Black Magic Women",
            cover: santanaImage,
            artist: "Santana",
            audio: blackMagicWomen,
            color: ["#D87859", "#5D6A9C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Corason Espinado",
            cover: santanaImage,
            artist: "Santana",
            audio: corazonEspinado,
            color: ["#D87859", "#5D6A9C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Put Your Lights On",
            cover: santanaImage,
            artist: "Santana",
            audio: putYourLightsOn,
            color: ["#D87859", "#5D6A9C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Smooth",
            cover: santanaImage,
            artist: "Santana",
            audio: smooth,
            color: ["#D87859", "#5D6A9C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "One",
            cover: metallicaImage,
            artist: "Metallica",
            audio: one,
            color: ["#FDDC29", "#A55A55"],
            id: uuidv4(),
            active: false
        },
        {
            name: "The Unforgiven",
            cover: metallicaImage,
            artist: "Metallica",
            audio: unforgiven,
            color: ["#FDDC29", "#A55A55"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Addicted to You",
            cover: heyBrotherImage,
            artist: "Avicci",
            audio: addictedToYou,
            color: ["#41F3A0", "#599D9B"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Hey brother",
            cover: heyBrotherImage,
            artist: "Avicci",
            audio: heyBrother,
            color: ["#41F3A0", "#599D9B"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Levels",
            cover: heyBrotherImage,
            artist: "Avicci",
            audio: levels,
            color: ["#41F3A0", "#599D9B"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Waiting for Love",
            cover: heyBrotherImage,
            artist: "Avicci",
            audio: waitingForLove,
            color: ["#41F3A0", "#599D9B"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Wake me up",
            cover: heyBrotherImage,
            artist: "Avicci",
            audio: wakeMeUp,
            color: ["#41F3A0", "#599D9B"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Dance Monkey",
            cover: danceMankeyImage,
            artist: "Tones and I",
            audio: danceMonkey,
            color: ["#F3E550", "#E96146"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Friends",
            cover: friendsImage,
            artist: "Marshmello & Anne-Marie",
            audio: friends,
            color: ["#EDDA17", "#982178"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Let it go",
            cover: frozenImage,
            artist: "Frozen",
            audio: frozen,
            color: ["#DEDAC6", "#77B7D0"],
            id: uuidv4(),
            active: false
        },
        {
            name: "All is found",
            cover: frozen2Image,
            artist: "Frozen 2",
            audio: frozen2,
            color: ["#BAC3CD", "#586285"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Shape of you",
            cover: edSheeranImage,
            artist: "Ed Sheeran",
            audio: shapeOfYou,
            color: ["#66B5D9", "#252621"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Take me back to London",
            cover: edSheeranImage,
            artist: "Ed Sheeran",
            audio: takeMeBackToLondon,
            color: ["#66B5D9", "#252621"],
            id: uuidv4(),
            active: false
        },
        {
            name: "River",
            cover: whenImGoneImage,
            artist: "Eminem & Ed Sheeran",
            audio: river,
            color: ["#96B978", "#FDFDFD"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Lose Yourself",
            cover: loseYourselfImage,
            artist: "Eminem",
            audio: loseYourself,
            color: ["#CDBF33", "#514848"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Rap God",
            cover: rapGodImage,
            artist: "Eminem",
            audio: rapGod,
            color: ["#53D659", "#E1053D"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Slim Shady",
            cover: slimShadyImage,
            artist: "Eminem",
            audio: slimShady,
            color: ["#FF1A08", "#A2C5E9"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Not Afraid",
            cover: notAfraidImage,
            artist: "Eminem",
            audio: notAfraid,
            color: ["#178CD0", "#9D8F9A"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Love the way you lie",
            cover: loveWayLieImage,
            artist: "Eminem",
            audio: loveWayLie,
            color: ["#D53E38", "#DDC7B0"],
            id: uuidv4(),
            active: false
        },
        {
            name: "When Im gone",
            cover: whenImGoneImage,
            artist: "Eminem",
            audio: whenImGone,
            color: ["#96B978", "#FDFDFD"],
            id: uuidv4(),
            active: false
        }
    ]
}

export default chillHop;