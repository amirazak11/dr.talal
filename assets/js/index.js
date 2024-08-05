

let navBar = document.getElementById("navBar");
let footer = document.getElementById("footer");

let navBarcontainer= `      <div class=" navContainer border-bottom border-black">
<nav class="  shadow-sm py-2">
  <div class="container nav d-block  navbar-expand-lg bg-body-tertiary ">
    <div class="row align-items-center justify-content-between">
      <div class="col-lg-3 col-10">
        <a class="navbar-brand py-2 text-center  m-0" href="index.html">
          <img class="px-3" src="assets/imgs/home/doctorTala.svg" />
        </a>
      </div>
      <div class="col-lg-9  col-2 " >
        <div class="container-fluid nav-container">
          <a class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars text-dark fs-3"></i>
            </a>

          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <a class="navbar-brand  py-2 text-center  m-0" href="index.html">
                  <img class="" src="assets/imgs/home/doctorTala.svg" />


                </a>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
              <i class="fa-solid fa-xmark text-white"></i>
              </button>
            </div>

            <div class="offcanvas-body header ">

              <ul class="navbar-nav w-100  gap-lg-3 gap-2  align-items-lg-center">

                <li class="nav-item px-2 ">
                  <a class="nav-link active " aria-current="page" href="index.html">
                    <span >
                      Home
                    </span>
                  </a>
                </li>
                <li class="nav-item px-2  ">
                  <a class="nav-link " aria-current="page" href="index.html#services">
                    <span class="">Services</span>
                  </a>
                </li>
                <li class="nav-item  px-2 ">
                  <a class="nav-link " aria-current="page" href="index.html#about"><span class="">About us</span></a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link " aria-current="page" href="index.html#contactUs"><span class="">Contact us</span></a>
                </li>      
              
              </ul>
                  <ul class="navbar-nav w-100  gap-lg-3 gap-2 justify-content-lg-end align-items-lg-center">                     
<li>
<a href="booking.html" class="bg-black btn w-auto my-3 rounded-2 text-white fw-semibold px-3">Book a Consultation</a>    
</li>
<li>
<div class="px-2 LanguageMenu " role="button">

<span class="lan" id="LanguageText">العربية</span>
<span >
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12.5C2 13.5519 2.18046 14.5617 2.51212 15.5M13.0137 9.5H21.5015M11 15.5H2.51212M21.5015 9.5C20.266 6.00442 16.9323 3.5 13.0137 3.5C14.6146 3.5 15.9226 7.26201 16.0091 12M21.5015 9.5C21.7803 10.2887 21.9522 11.1278 22 12M2.51212 15.5C3.74763 18.9956 7.08134 21.5 11 21.5C9.45582 21.5 8.18412 18 8.01831 13.5" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 5.79734C2 4.69897 2 4.14979 2.18738 3.72389C2.3861 3.27223 2.72861 2.90921 3.15476 2.6986C3.55661 2.5 4.07478 2.5 5.11111 2.5H6C7.88562 2.5 8.82843 2.5 9.41421 3.12085C10 3.7417 10 4.74095 10 6.73944V8.99851C10 9.87026 10 10.3061 9.73593 10.4559C9.47186 10.6057 9.12967 10.3639 8.4453 9.88036L8.34103 9.80669C7.84086 9.45329 7.59078 9.27658 7.30735 9.18563C7.02392 9.09468 6.72336 9.09468 6.12223 9.09468H5.11111C4.07478 9.09468 3.55661 9.09468 3.15476 8.89608C2.72861 8.68547 2.3861 8.32245 2.18738 7.87079C2 7.44489 2 6.89571 2 5.79734Z" stroke="#171717" stroke-width="1.5"/>
    <path d="M22 17.7973C22 16.699 22 16.1498 21.8126 15.7239C21.6139 15.2722 21.2714 14.9092 20.8452 14.6986C20.4434 14.5 19.9252 14.5 18.8889 14.5H18C16.1144 14.5 15.1716 14.5 14.5858 15.1209C14 15.7417 14 16.7409 14 18.7394V20.9985C14 21.8703 14 22.3061 14.2641 22.4559C14.5281 22.6057 14.8703 22.3639 15.5547 21.8804L15.659 21.8067C16.1591 21.4533 16.4092 21.2766 16.6926 21.1856C16.9761 21.0947 17.2766 21.0947 17.8778 21.0947H18.8889C19.9252 21.0947 20.4434 21.0947 20.8452 20.8961C21.2714 20.6855 21.6139 20.3225 21.8126 19.8708C22 19.4449 22 18.8957 22 17.7973Z" stroke="#171717" stroke-width="1.5"/>
    </svg>
    

  </span>
</div>  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>







    </div>
  </div>
</nav>

</div>
<div class="floatwhatsapp ">
<i class="fa-brands fa-whatsapp "></i>

</div>
<div class="back-to-top" id="backTop">
<i class="fa-solid fa-chevron-up"></i>

</div>

  `
navBar.innerHTML = navBarcontainer;

$(document).ready(() => {
  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > 130) {
      $("#backTop").fadeIn(10).css("display","flex");

    }
    else {
      $("#backTop").fadeOut(500)
  
    }
  })
  $("#backTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 300)
  })
  });



let FooterContainer= `
<footer>
<div class="container py-lg-5 py-3">
<div class="row justify-content-between py-lg-4 py-2" data-aos="fade-up" >
<div class="col-lg-5 col-md-6 col-12 text-white  align-items-start gap-3">
<h1>Dr. Talal Hasan</h1>
<p>With years of experience in the medical field, Dr. Talal Hasan is a trusted expert in his field.</p>
</div>
<div class="col-lg-3 col-md-6 col-12 ">
  <h4 class="">Newsletter</h4>
<form class="d-flex border-bottom border-light Newsletter">
<input class="form-control border-0" placeholder="Enter your email address" requierd/>
<button type="submit" class="btn text-white"><i class="fa-solid fa-arrow-right arrow"></i></button>
</form>

  </div>

  <div class="row justify-content-between py-lg-4 py-2" >
    <div class="col-lg-7  col-12 ">
      <h4 class="">Main Pages</h4>
  
        <ul class="p-0 fs-6 d-flex flex-md-nowrap flex-wrap gap-md-4 gap-lg-4 gap-2">
          <li class="py-1">
            <a href="index.html#about">
            About us
            </a>
          </li>
                 <li class="py-1">
            <a href="index.html#services">
              services
            </a>
          </li>

  <li class="py-1">
  <a href="terms.html">
 Terms
  </a>
</li>
  <li class="py-1">
  <a href="Policy.html">
  Privacy police
  </a>
  </li>
  
  <li class="py-1">
  <a href="index.html#contactUs">
  Contact us
  </a>
</li>
  
        </ul>
      </div>
      <div class="col-lg-3  col-12 ">
        <ul class="social d-flex ">
          <li>
            <a target="_blank" href="#">
              <i class="fab fa-facebook-f icon"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="#"><i class="fab fa-twitter icon"></i></a>
          </li>
          <li>
            <a target="_blank" href="#"><i class="fa-brands fa-instagram icon">
            </i></a>
          </li>
          <li>
            <a target="_blank" href="#"><i class="fa-brands fa-whatsapp icon"></i></a>
    
          </li>
        </ul>
      </div>
  </div>

</div>
</div>

<div class="container py-3">


<div class="row justify-content-between align-items-center border-top border-light py-4 text-white emcan"  >
<div class="col-md col-12  text-md-start text-center ">
  All Copyrights Reserved
</div>

  <div class="col-md col-12  text-md-end text-center">
    Powered by  <a  target="_blank" style="color:white;opacity: 1;" class="fw-semibold" href="https://emcan-group.com/en"> Emcan Solutions</a>
  </div>
</div>

</div>
</footer>
  `
  footer.innerHTML = FooterContainer;


//     startPage();
// CheckLanguage();
// function startPage() {
//   let lang = localStorage.getItem('Language');
//   if (lang == undefined || lang == null || lang == "") {
//   localStorage.setItem('Language',"English");
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const dropdownLanguage = document.querySelectorAll('.LanguageMenu');
//   dropdownItems.forEach(item => {
//       item.addEventListener('click', function() {
//           const selectedOption = item.textContent.trim();
//           localStorage.setItem('ViewMode',selectedOption);
//           window.location.reload();
//       });
//   });
//   dropdownLanguage.forEach(item => {
//     item.addEventListener('click', function() {
//         const selectedOption = item.textContent.trim();
//         localStorage.setItem('Language',selectedOption);
//         window.location.reload();
//     });
// });
// });

startPage();
CheckLanguage();
/////// initialize All Items needed for Running Page
function startPage() {
  let lang = localStorage.getItem('Language');
  if (lang == undefined || lang == null || lang == "") {
  localStorage.setItem('Language',"English");
  }

  
}


    document.addEventListener('DOMContentLoaded', function() {
      const dropdownLanguage = document.querySelectorAll('.LanguageMenu .lan');
      dropdownLanguage.forEach(item => {
        item.addEventListener('click', function() {
            const selectedOption = item.textContent.trim();
            localStorage.setItem('Language',selectedOption);
            window.location.reload();
        });
    });
    });

    function CheckLanguage(){
      const Language = localStorage.getItem('Language');
      if (Language == "English") {
        document.body.style.direction = "ltr";
        document.body.classList.remove("arabicVersion");

      }
      else if(Language == "العربية"){
        document.body.style.direction = "rtl";
        const Language = document.getElementById('LanguageText');
        Language.textContent = "English" ;
    document.body.classList.add("arabicVersion");
      }
    }

    
    document.addEventListener('DOMContentLoaded', function() {
      const dropdownLanguage = document.querySelectorAll('.LanguageMenu .lan');
      dropdownLanguage.forEach(item => {
        item.addEventListener('click', function() {
            const selectedOption = item.textContent.trim();
            localStorage.setItem('Language',selectedOption);
            window.location.reload();
        });
    });
    });
