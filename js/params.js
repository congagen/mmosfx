var isInitUI = false;
var isInitAudio = false;
var audioCtx;

var currentChannelName = "Lobby";
var currentUserId = "";
var currentSessionId = "";
var currentFbToken = "";

var originalSeq = "";

var playSeq = false;
var seqChars = [];
var seqIndexMaster = 0;
var seqIndex = 0;

var fibonaIndex = 0;
var fiboSeq = [];
let fibonacci = [0,1];

let charlist = ["0","1","2","3","4","5","6","7","8","9","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x",
    "c","v","b","n","m",",",".","-","!","#","€","%","/","(",")","0","`","^","*","'","¨",">","<","°","§","©","@","£","$",
    "∞","§","|","[","]","≈","±","~","™","•","Ω","é","®","†","µ","ü","ı","œ","π","˙","","ß","∂","ƒ","¸","˛","√","ª","ø",
    "÷","≈","ç","‹","›","‘","◊","…","–","1","2","3","4","5","6","7","8","9","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x",
    "c","v","b","n","m",",",".","-","!","#","€","%","/","(",")","0","`","^","*","'","¨",">","<","°","§","©","@","£","$",
    "∞","§","|","[","]","≈","±","~","™","•","Ω","é","®","†","µ","ü","ı","œ","π","˙","","ß","∂","ƒ","¸","˛","√","ª","ø",
    "÷","≈","ç","‹","›","‘","◊","…","-"]