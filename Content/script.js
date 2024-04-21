//Navbar
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrolled = window.scrollY > 0;
  if(scrolled) {
    navbar.classList.add('navbar-scrolled');
    console.log('add');
  } else {
    navbar.classList.remove('navbar-scrolled');
    console.log('remove');
  }
});

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});


//Career
let container_career = document.querySelector('.container-school')
let but_more = document.querySelector('.but .more');
let high_school_more = document.querySelector('.high-school-info .more');
let but_details = document.querySelector('.but-details');
let high_school_details = document.querySelector('.high-school-details');
let line = document.querySelector('.container-school .deco .line');
let high_school = document.querySelector('.high-school');

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

high_school_details.style.height = "0px";
but_details.style.height = "0px";

but_more.addEventListener('click', ()=>{
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width > 880) {
    if(high_school_details.style.height =="0px") {
      if(but_details.style.height == "0px"){
        but_more.style.color = "#212529";
        but_details.style.height = "300px";
        line.style.height = "360px";
        high_school.style.marginTop = "26rem";
        container_career.style.height = "576px";
      } else {
        but_more.style.color = "#F7F7EF";
        but_details.style.height = "0px";
        line.style.height = "260px";
        high_school.style.marginTop = "20rem";
        container_career.style.height = "30rem";
      } 
    } else {
      if(but_details.style.height == "0px"){
        but_more.style.color = "#212529";
        but_details.style.height = "300px";
        high_school.style.marginTop = "1.25rem";
      } else {
        but_more.style.color = "#F7F7EF";
        but_details.style.height = "0px";
        high_school.style.marginTop = "1.25rem";
      }
    }
  } else {
    if(but_details.style.height == "0px"){
      but_more.style.color = "#212529";
      but_details.style.height = "300px";
      high_school.style.marginTop = "1.25rem";
      
    } else {
      but_more.style.color = "#F7F7EF";
      but_details.style.height = "0px";
      high_school.style.marginTop = "1.25rem";
    }
  }
  
});

high_school_more.addEventListener('click', ()=> {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width > 880) {
    if(but_details.style.height =="0px") {
      if(high_school_details.style.height == "0px"){
        high_school_more.style.color = "#212529";
        high_school_details.style.height = "580px";
        line.style.height = "542px";
        high_school.style.marginTop = "1.25rem";
        container_career.style.height = "750px";
      } else {
        high_school_more.style.color = "#F7F7EF";
        high_school_details.style.height = "0px";
        line.style.height = "260px";
        high_school.style.marginTop = "20rem";
        container_career.style.height = "30rem";
        container_career.style.height = "30rem";
      }
    } else {
      if(high_school_details.style.height == "0px"){
        high_school_more.style.color = "#212529";
        high_school_details.style.height = "580px";
        line.style.height = "542px";
        high_school.style.marginTop = "1.25rem";
        container_career.style.height = "750px";
      } else {
        high_school_more.style.color = "#F7F7EF";
        high_school_details.style.height = "0px";
        line.style.height = "360px";
        high_school.style.marginTop = "26rem";
        container_career.style.height = "580px";
      }

    }
  } else {
    if(high_school_details.style.height == "0px"){
      high_school_more.style.color = "#212529";
      high_school_details.style.height = "580px";
      high_school_details.style.marginTop = "2rem";
      high_school_details.style.width = "100%";
    } else {
      high_school_more.style.color = "#F7F7EF";
      high_school_details.style.height = "0px";
    }
  }
})

//Copy

function copy() {
  var copied = document.querySelector('.container-contact .copied');

  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(event.target);
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');
  selection.removeAllRanges();

  copied.style.visibility = "visible";

  setTimeout(function() {
    copied.style.visibility = "hidden";
  }, 1500);
  
}