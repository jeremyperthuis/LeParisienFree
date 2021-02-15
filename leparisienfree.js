setTimeout(function(){ 
//Remove paywall
var test = document.getElementsByClassName("sticky below_nav piano-paywall relative");
test[0].remove();

//Disable blur effect on text
var test2 = document.getElementsByClassName("blurText");
for(let item of test2){item.style.filter="none";}
}, 3000);


var target = document.querySelector("blurText");

var observer = new MutationObserver(function(mutations) {
  
  mutations.forEach(function(mutation) {
    console.log("MUTATION");
  });
});

var config = {
  attributes: true,
  childList: true,
  characterData: true
};

observer.observe(target, config);