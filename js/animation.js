function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } 
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

$(document).ready(function(){
  
  $('.open-modal').click(function(){
    $('.modal-body iframe').attr('src', 'https://www.youtube.com/embed//F0p82zEIsL4');
  });
  
  $("#myModal").on('hidden.bs.modal', function(){
     $('.modal-body iframe').removeAttr('src');
  });
});
