<template>
  <div class="">
    <div class="level is-hidden-mobile px-5 py-4 pb-6">
      <div class="level-left">
        <nuxt-link to="/" class="level-item ">
          <figure class="image" >
            <!-- <iframe style="width: 200px;" id="SVGmator__u71w51699966566830" frameBorder="0" src="https://www.svgmator.com/embed/d10zAGnkG6ceESc?onload=true&onclick=false&onhover=false"></iframe> -->
            <!-- <img src="https://www.svgmator.com/embed/d10zAGnkG6ceESc?onload=true&onclick=false&onhover=false" style="width:150px" alt=""> -->
            <img src="/bloopers-og.svg" style="width:150px" alt="">
          </figure>

        </nuxt-link>
      </div>
      <div class="level-item">

        <nuxt-link to="/work" class="menu-right has-text-black  is-size-4 is-clickable px-6 has-text-weight-semibold">
          Work
        </nuxt-link>
        <nuxt-link to="/services" class=" menu-right is-size-4 is-clickable has-text-black px-6 has-text-weight-semibold">
          Services
        </nuxt-link>
        <nuxt-link to="/about" class="menu-ast has-text-black  is-size-4 is-clickable px-6 has-text-weight-semibold">
          About
        </nuxt-link>
      </div>
      <div class="level-right  menu-plus">

        <nuxt-link to="/contact"
          class="has-text-black level-item menu menu-op is-size-4 is-clickable  has-text-weight-semibold">
          Contact us
        </nuxt-link>
      </div>

    </div>
    <div v-show="!showMobileNav.isOpen" class="level is-mobile is-hidden-desktop px-5 py-4">
      <div class="level-left">
        <nuxt-link to="/" class="level-item ">
          <figure class="image">
            <img src="/bloopers-og.svg" style="width:150px" alt="">
          </figure>

        </nuxt-link>
      </div>

      <div class="level-right is-clickable" @click="showNav" id="" :class="{ 'open': showMobileNav.isOpen }">

        <div class="has-text-black level-item  is-size-4   has-text-weight-semibold">
          Menu
        </div>
      </div>

    </div>
    <div v-show="showMobileNav.isOpen" class="pb-5 has-background-yellow">
      <div class="level is-mobile is-hidden-desktop px-5 pt-4">
        <div class="level-left">
          <nuxt-link to="/" class="level-item ">
            <figure class="image">
              <img src="/bloopers-og.svg" style="width:150px" alt="">
            </figure>

          </nuxt-link>
        </div>

        <div class="level-right is-clickable" @click="showNav">

          <div class="has-text-black level-item  is-size-4   has-text-weight-semibold">
            Close
          </div>
        </div>

      </div>
      <hr class="has-background-black ">
      <div class="px-5">

        <nuxt-link to="/work">
          <div class="has-text-black  py-2   is-size-4   has-text-weight-semibold">
            Work
          </div>
        </nuxt-link>
        <nuxt-link to="/work">
          <div class="has-text-black  py-2  is-size-4   has-text-weight-semibold">
            Services
          </div>
        </nuxt-link>
        <nuxt-link to="/work">
          <div class="has-text-black   py-2 is-size-4   has-text-weight-semibold">
            About
          </div>
        </nuxt-link>
        <nuxt-link to="/work">
          <div class="has-text-black  py-2  is-size-4   has-text-weight-semibold">
            Contact us
          </div>
        </nuxt-link>
        <hr>
        <div class="pb-3">
          <p class="heading">FOLLOW US</p>
          <div class="buttons mt-3">
            <a class="">
              <figure class="image is-32x32">
                <img src="/ui/iconmonstr-instagram.svg" alt="">
              </figure>
            </a>
            <a class="">
              <figure class="image is-32x32 ml-4">
                <img src="/ui/iconmonstr-linkedin.svg" alt="">
              </figure>
            </a>

          </div>
        </div>
      </div>
    </div>

    <!-- <div class="hero  blur-overlay   is-fullheight" v-if="showMobileNav.isOpen"
      :class="{ 'animate__animated animate__slideIn': showMobileNav.isOpen, 'animate__animated animate__fadeOut': !showMobileNav.isOpen }">
      <div class="hero-header ">
        <div class="section mt-0 pt-3">
          <div class="columns is-mobile is-multiline">
            <div class="column is-6-desktop is-10-touch">

              <p class="level-item title is-size-1-desktop is-size-3-touch has-text-weight-semibold">
                Tap to say hello. Keep on tapping to listen to how we bloop.
              </p>
            </div>
            <div class="column is-6-desktop is-hidden-touch">
              <div class="is-pulled-right  menu-close " @click="showNav" id="" :class="{ 'open': showMobileNav.isOpen }">
                <div class=" menu menu-cl is-size-4 has-text-weight-semibold">

                  Close
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
      <div class="hero-footer">
        <div class="section  mobile-nav mt-6 pt-6">

          <div class="columns is-vcentered is-mobile is-multiline">
            <div class="column is-12-desktop is-7-touch">

              <div class="mt-6 bottom-menu is-size-3-desktop is-size-4-touch">
                <ul>
                  <li>
                    <nuxt-link to="/" class="has-text-black has-text-weight-semibold">Home</nuxt-link>

                  </li>
                  <li>
                    <nuxt-link to="/work" class="has-text-black has-text-weight-semibold">Work</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/services" class="has-text-black has-text-weight-semibold">Services</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/about" class="has-text-black has-text-weight-semibold">About</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact" class="has-text-black has-text-weight-semibold">Contact</nuxt-link>
                  </li>
                </ul>
                <br>


              </div>

            </div>
            <div class="column is-6-desktop is-hidden-desktop">
              <div style="position: relative; bottom: 0; right: 1rem;" class="is-pulled-right  menu-close " @click="showNav" id="" :class="{ 'open': showMobileNav.isOpen }">
                <div class=" menu menu-cl is-size-4-desktop is-size-5-touch has-text-weight-semibold">

                  Close
                </div>

              </div>

            </div>
          </div>



        </div>

      </div>

    </div> -->

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

const route = useRoute();

watch(route, value => {
  showMobileNav.isOpen = false
}, { deep: true, immediate: true });

</script>

<style>
/* html{
  background-color:yellow;
} */

.blur-overlay {
  height: 100%;
  width: 100vw;
  position: fixed;
  /* Stay in place */
  z-index: 6;
  /* Sit on top */
  left: 0;
  top: 0;
  transition: 1s all ease;
  /* background-color: #fefefe; */
  /* Black fallback color */
  background-color: #fff;
  /* filter: blur(3px); */
  /* Black w/opacity */
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

.menu-plus:hover,
.menu-op:hover {
  cursor: url('/assets/icons/add-72.svg'), auto !important;
}

.menu-right {
  padding: 2rem;

  transition: .3s all ease-in-out;
}

.menu-right:hover{
cursor: url('/assets/icons/arrow-right-out.svg'), auto !important;
}
.menu-ast {
  padding: 2rem;

  transition: .3s all ease-in-out;
}

.menu-ast:hover{
cursor: url('/assets/icons/asterisk-2-light.png'), auto !important;
}
a img {border:none !important}

.menu-close {
  padding: 2rem;

  transition: .3s all ease-in-out;
}

.menu-close:hover,
.menu-cl:hover {
  cursor: url('/assets/icons/cross-sec.svg'), auto !important;
}

/* .menu:hover {
  cursor: pointer;
  border-top: 10px solid #000;
} */
</style>