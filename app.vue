<template>
  <div class="has-background-white">
    <!-- <div class="top-body">

    </div> -->
    <PepNavbar data-aos="fade-down" />


    <!-- Type 2 -->

    <div class="">
      <section class=" ">
        <NuxtLoadingIndicator color="black" />
        <NuxtPage class="" />
      </section>




    </div>
    <PepFooter data-aos="fade-in" />
  </div>
</template>

<script setup>


const showMobileNav = reactive({
  isOpen: false
})
const showSubMobileNav = reactive({
  isOpen: false
})

function showNav() {
  showMobileNav.isOpen = !showMobileNav.isOpen
};
function scrollToTop() {
  window.scrollTo(0, 0);
};

// const { data: navigation } = await useAsyncData('navigation', () => queryContent('/nav').only(['title', 'link_text']).find());

const route = useRoute();

watch(route, value => {
  showMobileNav.isOpen = false
}, { deep: true, immediate: true });


</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css";
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

* {
  font-family: 'DM Sans', sans-serif !important;
  color: #000;
  overflow: hidden;
}


.dela {
  font-weight: 9000 !important;
  font-family: 'Outfit', sans-serif !important;
}

.mono {
  font-weight: 400 !important;
  font-family: 'DM Mono', sans-serif !important;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}

.bloop-tag {
  font-family: 'DM Mono', monospace !important;
  font-weight: 500 !important;
  /* font-size: 1rem !important; */
  /* letter-spacing: 2px; */
  text-transform: uppercase;
  color: #000 !important;
  border: 1px solid #000 !important;
  /* border-radius: 50px; */
  padding: 1rem 1.25rem !important;
  transition: 0.2s all ease-in;
  background-color: #fff000;

}

/* .path-cn {

    transition: 0.2s all ease-in;
}
.path-cn:hover  {
  transform: translateX(50px);

} */

.box-bloop {
  background-color: #fff;
  /* border:2px solid #e6d600; */
  box-shadow: none;
  border-radius: 50px;
}

.box-bloop-pri {

  border: 2px solid #fff000;
  box-shadow: none;
  border-radius: 50px;
}


.box-bloop-header {

  /* border:2px solid #e6d600;
box-shadow:none;
border-radius:50px; */
}

html {

  scroll-behavior: smooth;

}

.is-size-1 {
  font-size: 4rem !important;
}

.is-size-0 {
  font-size: 5rem !important;
}

.has-background-yellow {
  background-color: #fff000;
}

.has-text-yellow {
  color: #fff000 !important;
}

.button-bloop {
  background-color: #fff000;
  color: #000;
  border: 2px solid #000;
  font-weight: 700 !important;
  padding: 1.5rem !important;
  transition: 0.2s all ease-in;

}

.button-bloop-simple {
  background-color: #fff000;
  color: #000;
  border: 2px solid #000;
  font-weight: 700 !important;
  padding: 1.5rem !important;
  transition: 0.2s all ease-in;

}

.sec-border-top {
  border-top: 1px solid #0c0c0c41;
  padding-top: 1rem;
  transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* .sec-border-top:hover {
  background-color: #fff000;
  padding-left:1.5rem;
} */
.sec-border-top-hv {
  border-top: 1px solid #0c0c0c41;
  padding-top: 1rem;
  transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

.sec-border-top-hv:hover {
  background-color: #fff000;
  padding-left: 1.5rem;
  /* font-family: 'Dela Gothic One' !important; */
}

.sec-border-top-hv:hover p {
  font-family: 'Dela Gothic One' !important;
}

.sec-border-top-hv-bl {
  border-top: 1px solid #0c0c0c41;
  padding-top: 1rem;
  transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

.sec-border-top-hv-bl:hover {
  background-color: #fff000;
  padding-left: 1.5rem;
  /* font-family: 'Dela Gothic One' !important; */
}

.sec-border-top-hv-bl:hover p {
  font-family: 'Dela Gothic One' !important;
  color: black !important;
  font-weight: 500 !important;
}

.button-bloop:hover {
  color: #000;
  background-color: #fff000 !important;
  border: 2px solid #000 !important;
  font-weight: 700 !important;
  padding: 1.5rem !important;
  transform: rotate(-10deg) scale(1.2);
}

.has-text-black {
  color: #000 !important;
}

.has-background-black {
  background-color: #000 !important;
}

.button-bloop-sec {
  border: none;
  background-color: #fff000;
  font-weight: 700 !important;
  color: #000;
  padding: 1.5rem !important;
  transition: 0.2s all ease-in;

}

.button-bloop-sec:hover {
  color: #000;
  background-color: #ffee02 !important;
  font-weight: 700 !important;
  padding: 1.5rem !important;
  transform: scale(1.1);
}



.has-background-black {
  background-color: #000 !important;

}


.button {
  border-radius: 0px !important;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 1rem;
}

.is-size-0 {
  font-size: 4rem;
}

.title {

  color: black;
  /* font-weight: 600 !important; */

}

.title.dela {

  line-height: 1.35 !important;
  /* font-weight: 600 !important; */

}


.has-background-transparent {
  background-color: rgba(255, 255, 255, 0);
}





a.tag:hover {
  text-decoration: none;
}

.sec-border-top {
  border-top: 1px solid #0c0c0c41;
  padding-top: 1rem;
}

.pri-border-top {
  border-top: 1px solid #fefefe50;
  padding: 1.5rem 0;
  /* opacity:0.5 */
}

.invert {
  filter: invert(100%);
}

.bloop-text {
  /* -webkit-text-stroke: 1px #fff; */
  /* border:2px solid #fff; */
}



/* Bottom  */


.top-body {
  background: linear-gradient(0deg, #ffffff00, #ffee0080);
  /* background-size: 400% 400%; */
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 30%;
  width: 100%;
}

.center-body {
  background: rgb(255, 238, 0);
  background: radial-gradient(circle, rgba(255, 238, 0, 0.3) 0%, rgba(255, 255, 255, 1) 50%);
  /* background: radial-gradient( transparent, #ffee0080); */
  /* background-size: 400% 400%; */
  position: absolute;
  text-align: center;
  z-index: -1;
  /* top: 0; */
  margin-left: 7%;
  /* margin-right: 0; */
  height: 700px;
  border-radius: 100%;
  width: 700px;
}

.button-bloop-new {
  border: 1px solid #dbdbdb;
  color: #0a0a0a;
  background-color: #fff000;
  border-radius: 10px !important;
  font-weight: 800 !important;
  font-family: 'Outfit' !important;
  padding: 0.75rem 1.5rem !important;
  transition: all 0.3s ease-in;
  letter-spacing: calc(0.07em);

}
.button-bloop-new-rounded {
  /* border: 1px solid #dbdbdb; */
  color: #0a0a0a;
  border: 3px solid #948a0031;
  background-color: #fff000;
  /* border-radius: 10px !important; */
  font-weight: 800 !important;
  font-family: 'Outfit' !important;
  padding: 1rem !important;
  border-radius: 100%;
  transition: all 0.1s ease-in;
  letter-spacing: calc(0.07em);
  /* opacity:0.; */
}
.button-bloop-new-rounded:hover {
  border: 3px solid #47430031;
  background-color: #ffee0048;
  /* opacity:0.6; */
  /* box-shadow: 0 1px 1px 1px rgba(199, 174, 174, 0.5); */
}


.button-bloop-new:hover {
  border: 1px solid #cec000;
  background-color: #fff78e;
  border-radius: 10px !important;
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.1);
}

.button-bloop-new:focus {
  border: 1px solid #cec000;
  background-color: #fff78e;
  border-radius: 10px !important;
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.1);
}

.bloop-white {
  /* color:#0a0a0a; */
  background-color: #fff;
}


figure.is-rounded {
  border-radius: 50% !important;
}

.has-background-secondary {
  background-color: #0c0c0c000;
}

.has-background-yellow-secondary {
  background-color: #fff00028;
}


.box-bloop-bento-no {
  background-color: #f9f8f6;
  box-shadow: none;
  border-radius: 25px;
  border: 1px solid #dbdbdb;
  padding: 0rem;
  transition: all 0.2s ease-in;
}

.image {
  outline: none;
  box-shadow: none
}

.box-bloop-bento {
  background-color: #f9f8f6;
  box-shadow: none;
  border-radius: 25px;
  border: 1px solid #dbdbdb;
  padding: 0rem;
  scale: 1;
  transition: all 0.3s ease-in;
}

.box-bloop-bento-row {
  transition: all 0.2s ease-in;
  background-color: #f9f8f6;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  box-shadow: none;
  border-radius: 40px !important;
}

.box-bloop-bento-row:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #c9c9c9;

}

.box-bloop-bento-row h2 {
  transition: all 0.2s ease-in;
}

.box-bloop-bento-row img {
  transition: all 0.2s ease-in;
  display: inline-block;

}

.box-bloop-bento-row:hover img {
  transform: scale(1.1);

}

.box-bloop-bento-row:hover h2 {
  transform: translateX(1rem);
  z-index: 99;

}

.box-bloop-bento-row:hover img {
  transform: scale(1.1);

}

.box-bloop-bento-border {
  background-color: #f9f8f6;
  box-shadow: none;
  border-radius: 25px;
  border: 1px solid #dbdbdb;
  padding: 0rem;
  transition: all 0.2s ease-in;
}

.box-bloop-bento:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #c9c9c9;
}
.box-bloop-bento img{
  scale:1 !important;
  transition: all 0.2s ease-in;
  border-radius: 10px;; 
  /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #c9c9c9; */
}
.box-bloop-bento:hover img{
  scale:0.95 !important; 
  /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #c9c9c9; */
}


/* Serivces CSS Every */

.work-image-box-wrapper {

  position: relative;
}

.work-image-box-wrapper .work-image-text {
  transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
  position: absolute;
  left: 10%;
  /* margin-right: 45%; */
  opacity: 0;
}

.work-image-box-wrapper:hover .work-image-text {
  transform: translate3d(0, 25px, 0px);
  /* transform: translate3d(15px, 15px, 0px) scale3d(1, 1, 2) rotateX(0deg) rotateY(0deg) rotateZ(3deg) skew(0deg, 0deg); */
  /* display: absolute; */
  opacity: 1;
}

.work-image-box-wrapper .work-image-box{
  transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

.font-mono{
  font-family: 'Courier New', Courier, monospace !important;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  
}

.work-image-box:hover{
  transform: translateY(2rem) scale(0.8);
  border-radius: 25px !important;
  /* padding:5rem; */
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #c9c9c9;
  /* transform: ; */
}

.avatar{
  border:2px solid #fff;
  box-shadow: 0.5px 0.7px 7px 0.3px rgba(10, 10, 10, 0.16);
}

.vl {
  border-left: 3px solid #dbdbdb;
  height: 250px;
  margin:3rem 0;
  position: relative;
  left: 50%;
  margin-left: -3px;
  top: 0;
  list-style: circle;
}
</style>