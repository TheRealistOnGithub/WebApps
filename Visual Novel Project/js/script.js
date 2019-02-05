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
    "Theme": "Tea Break Mission.mp3",
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
    "vape": "juul hit.wav",
};

// Define the videos used in the game.
const videos = {};

// Define the images used in the game.
const images = {};

// Define the backgrounds for each scene.
const scenes = {
    "bedroom": "bedroom_day.jpg",
    "kitchen": "kitchen.png",

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
    "dj": {
        "Name": "Announcer",
        "Color": "#ffffff"
    }
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
        "play music Theme loop",
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
        "play sound downstairs",
        "I would change up my cut, but combs are for the gays and you can miss me with that gay shit.",
        "scene kitchen with fadeIn",
        "I head downstairs to go grab a piece of bread or two but my brother is eating the last slice of bread with some Nutella",
        "n Way to go man, totally didnt want that last piece of toast or anything.",
        "show r Normal",
        "r You snooze you lose, I guess.",
        "That's my younger brother Ritsu, the smarter one and as a result the more pompous one as well.",
        "n You know what....",
        "I whip out my vape and pretend to go get something behind him and take a fat hit.",
        "play sound vape",
        "r Ahh, what the hell man? I'm going to get lung cancer and die because of you!!!",


    ],


};