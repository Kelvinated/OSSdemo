// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// addEventListener("direct-upload:initialize", event => {
//   const { target, detail } = event
//   const { id, file } = detail
//   target.insertAdjacentHTML("beforebegin", `
//     <div id="direct-upload-${id}" class="direct-upload direct-upload--pending">
//       <div id="direct-upload-progress-${id}" class="direct-upload__progress" style="width: 0%"></div>
//       <span class="direct-upload__filename">${file.name}</span>
//     </div>
//   `)
// })

addEventListener("direct-uploads:start", event => {
  const { target, detail } = event
  const { id } = event.detail
  // SHOW the spinnerr
  // const element = document.getElementById(`direct-upload-${id}`)
  // element.classList.remove("direct-upload--pending")
  target.insertAdjacentHTML("afterend", `
    <div id="status"><H1>BOOOOOOM!!!!</H1></div>
  `)
})

addEventListener("direct-upload:progress", event => {
  const { id, progress } = event.detail
  console.log(progress)
  const progressElement = document.getElementById("status")
  progressElement.style.width = `${progress}%`
  // CHANGE number in spinner
  // const progressElement = document.getElementById(`direct-upload-progress-${id}`)
  // progressElement.style.width = `${progress}%`
  var ProgressBar = require('progressbar.js')
  var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    // var value = Math.round(circle.value() * 100);
    if (progress === 0) {
      circle.setText('');
    } else {
      circle.setText(progress);
    }
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';
bar.animate(1.0);  // Number from 0.0 to 1.0




})














