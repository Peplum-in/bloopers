<template>
  <div class="">
    <div :class="{ 'showMegaNav': showMobileNav.isOpen }" data-aos="fade" 
      class="hero section pt-0 px-0   blur-overlay   is-fullheight-with-navbar has-background-yellow" style="z-index:90"
      v-if="showMobileNav.isOpen">
      <div class="hero-header mt-6">

        <nuxt-link to="/" class="">
          <figure class="image ">
            <NuxtImg src="/bloopers-black-new.svg" class="container" style="width:200px" alt="" />
          </figure>

        </nuxt-link>
        <!-- <div class="my-6"></div> -->
      </div>
      <div class="hero-footer mt-6 has-text-centered">
        <div class="">

          <div class="menu-link ">

            <nuxt-link @click="showMobileNav.isOpen = !showMobileNav.isOpen" to='/about'
              class="is-size-2-desktop is-size-3-touch has-text-black has-text-weight-bold dela ">About</nuxt-link>
          </div>
          <div class="menu-link">

            <nuxt-link @click="showMobileNav.isOpen = !showMobileNav.isOpen" to='/work'
              class="is-size-2-desktop  is-size-3-touch has-text-black has-text-weight-bold dela">Work</nuxt-link>
          </div>
          <div class="menu-link">

            <nuxt-link @click="showMobileNav.isOpen = !showMobileNav.isOpen" to='/services'
              class="is-size-2-desktop is-size-3-touch has-text-black has-text-weight-bold dela">Services</nuxt-link>
          </div>
          <div class="menu-link">

            <nuxt-link @click="showMobileNav.isOpen = !showMobileNav.isOpen" to='/contact'
              class="is-size-2-desktop is-size-3-touch has-text-black  has-text-weight-bold dela">Contact</nuxt-link>
          </div>



          <div class="has-text-centered mt-6 ">
            <div class="container is-flex is-justify-content-center">

              <button class="hamburger-menu-container  " style=" background-color: rgba(255,255,255,1);"
                @click="showMobileNav.isOpen = !showMobileNav.isOpen">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="black" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M6 6L18 18" stroke="black" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </button>
            </div>
          </div>
        </div>
      </div>


    </div>

    <!--  -->


    <div
      class="section py-5 mt-0 pb-0 is-flex is-justify-content-center	 is-justify-content-space-between	  navbar-main is-hidden-touch ">
      <div class="is-flex is-justify-content-center " z-index:99;>
        <nuxt-link to="/services" class="has-text-black has-text-weight-semibold mr-5   is-size-5 is-clickable ">

          Services
        </nuxt-link>
        <NuxtLink to="/work" class="has-text-black has-text-weight-semibold mr-5 is-size-5 is-clickable ">

          Work
        </NuxtLink>
        <NuxtLink to="/about" class="has-text-black has-text-weight-semibold mr-5 is-size-5 is-clickable ">

          About
        </NuxtLink>
        <!-- <NuxtLink to="/services" class="has-text-black has-text-weight-semibold  is-size-5 is-clickable ">
          Build it
        </NuxtLink> -->
      </div>
      <div class="">
        <nuxt-link to="/" class=" header-logo">
          <figure class="image">
            <NuxtImg src="/bloopers-black-new.svg" style="width:200px" alt="" />
          </figure>

        </nuxt-link>

      </div>
      <div class=" ">

        <!-- <nuxt-link to="/contact" class="mr-5 bloop-btn  has-text-black has-text-weight-bold   is-size-5 is-clickable">
          Subscribe ✨
        </nuxt-link> -->
        <nuxt-link to="/contact" class="button button-bloop-new  has-text-black has-text-weight-bold is-clickable">
          CONTACT
        </nuxt-link>
      </div>

    </div>

    <!--  -->
    <div v-show="!showMobileNav.isOpen" class="level is-mobile is-hidden-desktop py-3 pl-5 pr-4 ">
      <div class="level-left">
        <!-- <p @click="showNav" id="" class="dela has-text-black level-item  is-size-5 is-clickable ">
          Menu
        </p> -->
        <nuxt-link to="/" class="level-item ">
          <figure class="image">
            <NuxtImg src="/bloopers-black-new.svg" class="container" style="width:190px" alt="" />
          </figure>

        </nuxt-link>
      </div>
      <!-- <div class="level-item">

      </div> -->
      <div class="level-right ">

        <div @click="showMobileNav.isOpen = !showMobileNav.isOpen"
          class=" hamburger-menu-container has-text-black has-text-weight-bold level-item is-size-5 is-clickable">

          <div class="hamburger-menu">
            <svg width="28" height="19" viewBox="0 0 28 19" style="border-radius:2px" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="3" fill="#1E1E1E" stroke-linecap="round" stroke-linejoin="round"></rect>
              <rect y="8" width="28" height="3" fill="#1E1E1E" stroke-linecap="round" stroke-linejoin="round"></rect>
              <rect y="16" width="28" height="3" fill="#1E1E1E" stroke-linecap="round" stroke-linejoin="round"></rect>
            </svg>
          </div>


        </div>
      </div>

    </div>


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
  console.log('OPen ')
  showMobileNav.isOpen = !showMobileNav.isOpen
};
function scrollToTop() {
  window.scrollTo(0, 0);
};

const route = useRoute();

watch(route, value => {
  showMobileNav.isOpen = false
}, { deep: true, immediate: true });

</script>

<style>
/* html{
  background-color:yellow;
} */

.header-logo {
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  z-index: -80;
}


.hamburger-menu-container {
  width: 64px;
  height: 64px;
  background-color: var(--bg-03);
  border-radius: 999px;
  flex: none;
  border: 1px solid #dbdbdb;
  justify-content: center;
  align-self: auto;
  align-items: center;
  display: flex;
  background-color: #fff000;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in;

}

.hamburger-menu-container:hover {
  border: 1px solid #818a00;
  /* justify-content: center;
  align-self: auto;
  align-items: center;
  display: flex;
  background-color: #fff000; */
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1); */

}

.hamburger-menu {
  justify-content: center;
  align-items: center;
  display: flex;
}


.line {
  width: 100%;
  height: 2px;
  background-color: black;
  position: absolute;
  transition: transform 0.3s ease;
}

.line:nth-child(1) {
  top: 0;
}

.line:nth-child(2) {
  top: 50%;
}

.line:nth-child(3) {
  bottom: 0;
  /* bottom: -1rem; */
}

/* .open .line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.open .line:nth-child(2) {
  transform: translateY(-8px) rotate(-45deg);
} */

.blur-overlay {
  height: 100%;
  width: 100vw;
  position: fixed;
  /* Stay in place */
  z-index: 90;
  /* Sit on top */
  left: 0;
  top: 0;
  transition: 1s all ease;
  /* background-color: #fefefe; */
  /* Black fallback color */
  background-color: #fff;
  /* filter: blur(3px); */
  /* Black w/opacity */
  color: #000;
  overflow-x: hidden;

  /* Disable horizontal scroll */
}

.overlay-content {
  position: relative;
  top: 25%;
  /* 25% from the top */
  width: 100%;
  /* 100% width */
  text-align: center;
  /* Centered text/links */
  margin-top: 30px;
  /* 30px top margin to avoid conflict with the close button on smaller screens */
}


.navbar-main {
  position: relative;
  z-index: 96 !important;
}

.menu {
  height: 17px;
  list-style: none;
  margin: 0;
  /* width: 60px; */
  /* position: relative; */
  /* -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg); */
  -webkit-transition: .3s all ease-in-out;
  -moz-transition: .3s all ease-in-out;
  -o-transition: .3s all ease-in-out;
  transition: .3s all ease-in-out;
}

.menu-plus {
  padding: 2rem;

  transition: .3s all ease-in-out;
}

/* .menu-plus:hover,
.menu-op:hover {
  cursor: url('/assets/icons/add-72.svg'), auto !important;
} */

.menu-right {
  padding: 2rem;

  transition: .3s all ease-in-out;
}

/* 
.menu-right:hover {
  cursor: url('/assets/icons/arrow-right-out.svg'), auto !important;
} */

.menu-ast {
  padding: 2rem;

  transition: .3s all ease-in-out;
}

/* .menu-ast:hover {
  cursor: url('/assets/icons/asterisk-2-light.png'), auto !important;
} */

a img {
  border: none !important
}

.menu-close {
  padding: 2rem;

  transition: .3s all ease-in-out;
}

/* .menu-close:hover,
.menu-cl:hover {
  cursor: url('/assets/icons/cross-sec.svg'), auto !important;
} */

/* .menu:hover {
  cursor: pointer;
  border-top: 10px solid #000;
} */


.menu-link {
  padding: 0.5rem 0;
}
</style>