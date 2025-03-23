// here we used window because we want to add event listener to the window
// and the addEventListner is used to add event listener keydown means when we press a key
// the we create a function and the value "e" represents the event object of keydown

// window.addEventListener('keydown', function(e) {
//     console.log(e);
// });

// now if we change the e in the console.log to e.keycode the codes will be displayed
// window.addEventListener('keydown', function(e) {
//     console.log(e.keyCode);
// });

// now we will use queryselector because we will look for a single aurdio if we were looking for multiple audios we would use queryselectorall

// now why we used `` if we use '' the function will be applied to our (e) but we want it to be applied to our (e.keyCode) to do that we use `` now lets see why we used audio[] we used it to get the audio that we want to play now inside data-key we used the e.keyCode to get the audio that we want to play and then ${} it is a template literal that gets key code from the keyboard event that means if we press any key on the keyboard it will get the key code of that key

window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //this is to show the key that we pressed to play the sound
    console.log(audio);
    if (!audio) return;
    // here the !audio means if there is no audio then return
    audio.currentTime = 0; //this will reset the audio to the start so that it can be played again
    audio.play();
    key.classList.add('playing');//this is to add that .playing class to the key so that we it is pressed on the keyboard the styling is triggered we can add classes remove or toggle using this .classlist.add,remove,toggle

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', function(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }));

});