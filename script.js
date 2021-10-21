var detourText = ["On a social media app, stay on each post for 3 minutes before moving on to the next one.",
                  "On a social media app, scroll until you see an ad. Why did the app show you this ad?",
                  "Play an \"endless runner\" game for exactly 2 minutes and then stop. How do you feel?",
                  "Try to find the button to delete your Google account."];
var usedText = [];

function setFirstDetour() {
  var detours = document.getElementsByClassName("detour");
  var text = document.createElement("p");
  var index = Math.floor(Math.random() * detourText.length);
  usedText.push(index);
  text.innerHTML = detourText[index];
  detours[0].appendChild(text);
}

function buttonPushed() {
  var newDetour = document.createElement("div");
  newDetour.setAttribute("class", "detour");
  
  document.body.appendChild(newDetour);
  
  var detours = document.getElementsByClassName("detour");
  
  var text = document.createElement("p");
  var index = Math.floor(Math.random() * detourText.length);
  if (usedText.length >= detourText.length) {
    usedText = [];
  }
  while (usedText.includes(index)) {
    index = Math.floor(Math.random() * detourText.length);
  }
  usedText.push(index);
  text.innerHTML = detourText[index];
  detours[detours.length - 1].appendChild(text);
  
  for (var i = 0; i < detours.length - 1; i++) {
    var styleTop = "calc(10% + " + (408 + (detours.length - i - 2) * 220) + "px)";
    detours[i].style.top = styleTop;
    if (i == detours.length - 2) {
      detours[i].style.height = "220px";
      detours[i].style.borderBottom = "8px dotted black"
      detours[i].childNodes[0].style.marginTop = "40px";
    }
  }
}