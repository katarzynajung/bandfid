//get form content
var form = document.getElementsByClassName('contactModal')[0];
// get open form button
var formBtn = document.getElementById('openForm');
// Get close button
var closeBtn = document.getElementById('closebtn');

//Listen for open click
formBtn.addEventListener('click', openForm);
//Listen for close click
closeBtn.addEventListener('click', closeForm);

//Function to open modal
function openForm(){
  form.style.display = "block";
}
// close modal
function closeForm(){
  form.style.display = "none";
}

//scroll page
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
