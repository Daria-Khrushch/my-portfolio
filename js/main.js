$(function(){
    $('.slider').slick({
        dots: false,
         slidesToShow: 3,
        variableWidth: true,
        centerMode: true,
        prevArrow: '<img class="arrow arrow-left" src="./images/arrow-left.png" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="./images/arrow-right.png" alt="">',
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    arrows: false,
        
                },
                breakpoint: 950,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    arrows: false,
                }
            }
            
  ]
    });
});

// $(function(){
//     $('.slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//         prevArrow: '<img class="arrow arrow-left" src="./images/arrow-left.png" alt="">',
//         nextArrow: '<img class="arrow arrow-right" src="./images/arrow-right.png" alt="">',
//         responsive: [
//             {
//                 breakpoint: 470,
//                 settings: {
//                     variableWidth: true,
//                     slidesToShow: 1,
//                 }
//             }
            
//   ]
//     });
// });

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