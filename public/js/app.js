// console.log("hello World");


setInterval(()=>{

    $('.first-con1').removeClass("first-con")  ;
  $('.first-con1').addClass("first-container")  ;
    $(".form").style.top = "200px"

},6000)


let heading = document.getElementById("title");
let buttonLength = document.querySelectorAll(".drum").length;
for(let i = 0;i<buttonLength;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",function(click){
       soundPlay(click.target.innerHTML);
       buttonAnimation(click.target.innerHTML);
      
 })


}

document.addEventListener("keydown",(click)=>{

  soundPlay(click.key);
  buttonAnimation(click.key);


})





function soundPlay(clickButton){
    if(clickButton=="w"){
        let firstAudio = new Audio("/sounds/crash.mp3");
        firstAudio.play();
    }
    if(clickButton=="a"){
        let secondAudio = new Audio("/sounds/kick-bass.mp3");
        secondAudio.play();
    }
    if(clickButton=="s"){
        let thirdAudio = new Audio("/sounds/snare.mp3");
        thirdAudio.play();
    }
    if(clickButton=="d"){
        let fourthAudio = new Audio("/sounds/tom-1.mp3");
        fourthAudio.play();
    }
    if(clickButton=="j"){
        let fifthAudio = new Audio("/sounds/tom-2.mp3");
        fifthAudio.play();
    }
    if(clickButton=="k"){
        let sixthAudio = new Audio("/sounds/tom-3.mp3");
        sixthAudio.play();
    }
    if(clickButton=="l"){
        let seventhAudio = new Audio("/sounds/tom-4.mp3");
        seventhAudio.play();
    }



}
function buttonAnimation(clickAnimate){
    let getAnimateButton = document.querySelector("."+clickAnimate);
    getAnimateButton.classList.add("pressed");

    setTimeout(() => {
        getAnimateButton.classList.remove('pressed');
    }, 100);
}