"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
    "Help": {
        "Title": "Help",
        "Subtitle": "Some useful Links",
        "Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
    }
};

// Define the notifications used in the game
let notifications = {};

// Define the Particles JS Configurations used in the game
let particles = {};

// Define the music used in the game.
const music = {
    "Theme1": "Tea Break Mission.mp3",
    "Theme2": "The First Promise.mp3",
    "Radio": "Dancin' Blue.wav"
};

// Define the voice files used in the game.
const voice = {};

// Define the sounds used in the game.
const sound = {
    "blanket": "blanket.wav",
    "hanger": "hangers sliding.mp3",
    "dressed": "getting dressed.mp3",
    "cleaning": "pants wipe.mp3",
    "thud": "hand hitting table.mp3",
    "downstairs": "running downstairs.mp3",
    "vape": "juul.wav",
};

// Define the videos used in the game.
const videos = {};

// Define the images used in the game.
const images = {};

// Define the backgrounds for each scene.
const scenes = {
    "bedroom": "bedroom_day.jpg",
    "kitchen": "kitchen.png",
    "classroom_day": "classroom_day.jpg",


};

// Define the Characters
const characters = {
    "r": {
        "Name": "Ritsu",
        "Color": "#a0e7ff",
        "Images": {
            "Normal": "Ritsu.png",
        }
    },
    "n": {
        "Name": "Nobuo",
        "Color": "#a0e7ff"
    },
    "k": {
        "Name": "Kenzo",
        "Color": "#a0e7ff",
        "Images": {
            "Normal": "Kenzo.png",
        }

    },
    "h": {
        "Name": "Hibiki",
        "Color": "#ffaada",
        "Images": {
            "Normal": "Hibiki.png",
        }

    },
    "dj": {
        "Name": "Announcer",
        "Color": "#ffffff"
    },
    "sensei": {
        "Name": "Teacher",
        "Color": "#ffffff",
    },

};

let script;
script = {
    // The game starts here.
    "Start": [
        "scene bedroom with fadeIn",
        "play music Radio",
        "dj Good morning Fujiramoto, its DJ Yohji Yamamoto coming back at you again for your early morning dose of old school cool!",
        "dj Today's weather is  to be sunny with a high of 25&#176; and a low of 15&#176;, so get up on out of your homes people and enjoy this beautiful day!",
        "dj You are currently listening to Anri - Dancin' Blue and up next is the hour of power; one hour of uninterrupted music and nothin' but good vibes!",
        "play sound thud",
        "n ...",
        "play sound thud",
        "n ....",
        "play sound thud",
        "n .....",
        "play sound thud",
        "stop music",
        "n ......!",
        "play music Theme1 loop",
        "My hand finally slams down on the clock after missing three times.",
        "n Hnnnnnnnnnnnnnnnnnnnnnnnnnggggggggggggggggggggg...",
        "n That all-nighter was totally not worth it, I feel like trash and I remember nothing.",
        "Its been a rough week with senior finals coming up, well for me at least...",
        "Almost every other senior goes through these exams not worrying about absurd things such as graduating senior year due to their good grades.",
        "That's what delinquents  like me have to worry about instead.",
        "I'm in danger of failing Calculus due to me throwing in the towel way too early and as a result I need an 85 on this exam or I'm going to become a 'Super Senior'.",
        "n C'mon Nobuo, get your shit together. You can do this... I think.",
        "play sound blanket",
        "I get up and get changed into my uniform while tousling my hair.",
        "play sound hanger",
        "Not that it matters anyways, every delinquent has their hair styled the same way, haphazardly cut with tufts sticking out and angled in any direction that they see fit.",
        "I would change up my cut, but combs are for the gays and you can miss me with that gay shit.",
        "scene kitchen with fadeIn",
        "play sound downstairs",
        "I head downstairs to go grab a piece of toast or two but my brother is eating the last slice of bread with some Nutella.",
        "n Way to go man, I totally didn't want that last piece of toast or anything.",
        "show r Normal with fadeInRight",
        "r You snooze you lose, I guess.",
        "That's my younger brother Ritsu, the smarter one and as a result the more pompous one as well.",
        "n You know what....",
        "While pretending to go get something behind him, I whip out my vape and I take a fat hit and blow it on his face.",
        "play sound vape",
        "r Aaahhh, what the hell man? I'm going to get lung cancer and die because of you! I hope you will be happy at my funeral!",
        "n That's what you get for being a dick 99% of the time whenever I talk to you.",
        "Believe it or not I'm actually a kind and caring brother.",
        "n Shit, I'm gonna be late for class if I don't get going soon!",
        "r Hey, aren't you gonna get something to eat first?",
        "n Nah, I have my vape, I dont need anything till lunch! See you later Ritsu!",
        "play music Theme2 loop",
        "scene classroom_day with fadeInDown",
        "I run to class with barely two minutes to spare, thank goodness for being on the track team for all these years or I definitely would have been late.",
        "My best friend Kenzo is daydreaming at his desk, and I sneak up behind him and I whisper in his ear seductively.",
        "He's always dreaming about his biggest crush Yanai Dori, so I decided to have some fun with him.",
        "n Of course I'll go on a date with you Kenzo-tan, you know I've always l-liked you for the longest time since I met you in middle school.",
        "k Mmmmm.... Oh Dori-chan, I can't wait for our date tommorrow!",
        "I shake him awake, interrupting his slumber. Forgive me Kenzo, this dream was getting too weird for me.",
        "n Oi Sleepy Beauty, wake up, class is going to start soon.",
        "show character k Normal with fadeIn",
        "k Hey screw you man, I was enjoying precious beauty rest back there.",
        "n Oh yeah? If I left you for any longer, you would have had a big wet spot in between your legs.",
        "k Seriously Nobuo, piss off. Sometimes I wonder why I'm even friends with you sometimes.",
        "hide character k with fadeOut",
        "sensei Ok everyone settle down, and be quiet for a bit, alright? Today we got a new transfer student, although I'm not sure why the fuck she is here in the middle of the school year but fuck it, her name is Wataru Hibiki.",
        "show character h Normal with fadeInRight",
        "h Hello everyone, My name is Wataru Hibiki and yes I'm a boy regardless what color my name is. I will run up on anyone who tries to tell me otherwise, so don't screw with me and we'll all get along fine.",
        "k Oi, Nobuo, what do you think about that transfer, she seems kind of mental but also kind of cute. I think im going to end up confessing to her four weeks from now, my heart's already set on her!",
        "k Oi, Nobuo, you there?",
        "k Earth to Nobuo? Do you read?",
        "Im too dumb founded to respond to Kenzo and his tempermental heart. Wataru gives me a major case of deja-vu but I haven't the slightest idea of where I have seen him before.",
        "He takes the seat next to me and starts fidgeting, almost like he is going through a nicotine withdrawal.",
        "n Hey you look like...",
        "h I swear to Christ that if you say that I look like a woman, Im going to kick that smug look off of your face.",
        "n What, no? I was going to offer you a hit, because you look like you are shaking really badly. And for the record, I think you do look like a girl regardless of what anyone else thinks.",
        "He hesitates and reaches out for a second, but then pulls his hand close to him again.",
        "h Sorry, I'm trying to quit vaping, it's terrible for your body and I dont want to end up like the woman on the TV.",
        "h Hey where are you staring off to? I'd tell you my eyes are up here, but if you got a thing for pecs then I have news for you!",
        "I'm too busy blankly staring at the faint scar on his wrist that's barely hidden by the jacket sleeve to notice Wataru's remarks. This sets off a fresh wave of deja-vu and I can't help but satisfy my curiosity.",
        "n Hey, this is going to come off super rude, but how did you get that scar?",
        "h Oh this thing? I got it in a car accident when I was younge....",
        "My pencil drops on the floor and I'm too frozen in shock to go apologise and pick it up. My body's alarm bells are ringing like crazy and I just figured out where I have seen Wataru before.",
        "Telling my dad to hurry it up or we are going to be late.",
        "On the Ginza express driving in a hurry to beat the morning rush hour.",
        "A limp body on the cracked windshield.",
        "I've seen Wataru before and he shouldn't be in this classroom.",
        "He shouldn't be in any school for that matter, since Wataru Hibiki was pronounced dead in a automotive accident ten years ago on this date.",
        "end",


    ],


};