var movies = ["https://ww1.cuevana3.me/", "https://pelisplus.cx/", "https://www.vudu.com/", "https://www.crackle.com.ar/", "https://rakuten.tv/", "https://vix.com/es/ondemand/peliculas", "https://rakuten.tv/uk/gardens/free", "https://www.ctv.ca/movies", "http://legalmentegratis.com/"];
var videogames = ["https://agar.io/", "https://classic.minecraft.net/", "https://got.gtarcade.com/", "https://www.friv.com/", "https://www.roblox.com/", "https://www.juegosdiarios.com/", "https://poki.com/es/divertidos", "https://playsnake.org/", "https://slither.io/"];
var study = ["https://www.freecodecamp.org/learn/", "https://www.codecademy.com/", "https://www.creativelive.com/", "https://www.coursera.org/", "https://unimooc.com/", "https://www.gutenberg.org/", "https://classpert.com/es/", "https://es.z-lib.org/", "https://chat.openai.com/"];
var fun = ["https://mondrianandme.com/", "https://hooooooooo.com/", "https://longdogechallenge.com/", "https://puginarug.com/", "https://theoatmeal.com/comics/dog_paradox", "https://www.caffeineinformer.com/death-by-caffeine", "https://www.jacksonpollock.org/", "https://strobe.cool/", "https://findtheinvisiblecow.com/"];

var peli = movies[Math.floor(Math.random()*movies.length)];
var juego = videogames[Math.floor(Math.random()*videogames.length)];
var estudio = study[Math.floor(Math.random()*study.length)];
var dive = fun[Math.floor(Math.random()*fun.length)];

document.getElementById("fun").href = dive;
document.getElementById("study").href = estudio;
document.getElementById("videogames").href = juego;
document.getElementById("movies").href = peli;