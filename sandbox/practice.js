// 'use strict';

// var component = document.getElementById('nav--4');
// var wrapper = component.children[0];

// handle(activate, true);

// function activate() 
// {
//   requestAnimationFrame(function () {
//     component.classList.add('nav--tall');
//     handle(deactivate, true);
//   });
//   handle(activate, false);
// }

// function deactivate(evt) 
// {
//   if (evt.target === wrapper) {
//     component.classList.remove('nav--tall');
//     handle(deactivate, false);
//     handle(activate, true);
//   }
// }

// function handle(callback, addOrRemove) 
// {
//   if (addOrRemove) {
//     wrapper.addEventListener('touchstart', callback);
//     wrapper.addEventListener('mouseover', callback);
//   }
//   else {
//     wrapper.removeEventListener('touchstart', callback);
//     wrapper.removeEventListener('mouseover', callback);
//   }
// }