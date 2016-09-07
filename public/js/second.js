/**
 * Created by jorten on 16/9/4.
 */
// var next = $('.next'), time = 2, compress = $("#compress"), now = $("#second");
// var startX, startY, moveEndX, moveEndY, dx, dy, percent, lastPercent = 50;
//     index = {
//         3: '#3f51b5',
//         4: '#03a9f4',
//         5: '#673ab7',
//     }
// $(".next").on('touchstart', function(e) {
//     console.log(e)
//     var screenX = e.touches[0].pageX;
//     var screenY = e.touches[0].pageY;
//     var ink = $("<span class='ink inkAnimation'>");
//     ink.css('left', screenX + 'px');
//     ink.css('top', screenY + 'px')
//     next.append(ink);
//     ink.on('webkitAnimationEnd', function() {
//         ink.remove()
//         if(time < 6) {
//             compress.css('transform', 'translateY(-' + (time - 1) + '00%)');
//             $("img").css('opacity', '0')
//             now = now.next('div');
//             time++;
//             next.css('background-color', index[time]);
//             now.children('img').addClass('imgAnimation');
//         }
//     })
// })
//
// $(".img4").on('webkitAnimationEnd', function(e) {
//     $(".img4").css('opacity', '1');
//     $(".text1").addClass('textAnimation');
// })
// $(".text1").on('webkitAnimationEnd', function() {
//     $(".text1").css('opacity', '1');
//     $(".text2").addClass('textAnimation');
// })
// $(".text1").on('webkitAnimationEnd', function() {
//     $(".text2").css('opacity', '1');
// })
// $(".text").on('touchstart', function(e) {
//     e.preventDefault()
//     startX = e.touches[0].pageX;
//     startY = e.touches[0].pageY;
// })
// $('.text').on('touchmove', function(e) {
//     e.preventDefault();
//     // console.log(e.touches[0])
//     moveEndX = e.touches[0].pageX;
//     moveEndY = e.touches[0].pageY;
//     dx = moveEndX - startX;
//     dy = moveEndY - startY;
//     if(Math.abs(dy) > Math.abs(dx)) {
//         percent = lastPercent + dy / 10;
//         if(percent >= 50) {
//             percent = 50;
//             e.currentTarget.previousElementSibling.style.width = "50%";
//             e.currentTarget.previousElementSibling.style.marginBottom = "1rem";
//         }
//         e.currentTarget.previousElementSibling.style.width = percent + "%";
//         e.currentTarget.previousElementSibling.style.marginBottom = percent / 50 + "%";
//
//         if(percent <= 15) {
//             percent = 15;
//             e.currentTarget.previousElementSibling.style.width = "10%";
//             e.currentTarget.previousElementSibling.style.marginBottom = "0.3rem";
//         }
//         e.currentTarget.previousElementSibling.style.width = percent + "%";
//         e.currentTarget.previousElementSibling.style.marginBottom = percent / 50 + "rem";
//     }
// })
//
// $('.text').on('touchend', function(e) {
//     lastPercent = percent;
// });