<template>
  <!-- <PepFooterBento /> -->

  <div class=" footer has-background-white  pt-6 mt-6">

    <!-- <p class="title dela has-text-black">Get a free brand audit</p> -->
    <section class="section  ">
      <figure class="image is-hidden-touch" data-aos="zoom-in">
        <NuxtImg format="webp" src="/bloopers-black-new.svg" class="container " style="width:350px" alt="" />
      </figure>
      <figure class="image is-hidden-desktop" data-aos="zoom-in">
        <NuxtImg format="webp" src="/bloopers-black-new.svg" class="container " style="width:250px" alt="" />
      </figure>
      <p class="heading has-text-black has-text-centered is-size-6 has-text-grey mt-5" data-aos="fade-up">JAIPUR - INDIA
      </p>


      <div class="section container">

        <div class="is-">
          <div class=" has-text-centered" data-aos="fade-up">

            <div class="menu-link px-4 is-inline-desktop ">

              <nuxt-link @click="showMobileNav.isOpen = !showMobileNav.isOpen" to='/about'
                class="is-size-2-desktop is-size-3-touch has-text-black has-text-weight-bold dela ">About</nuxt-link>
            </div>
            <div class="menu-link px-4 is-inline-desktop">

              <nuxt-link @click="showMobileNav.isOpen = !showMobileNav.isOpen" to='/work'
                class="is-size-2-desktop  is-size-3-touch has-text-black has-text-weight-bold dela">Work</nuxt-link>
            </div>
            <div class="menu-link px-4 is-inline-desktop">

              <nuxt-link @click="showMobileNav.isOpen = !showMobileNav.isOpen" to='/services'
                class="is-size-2-desktop is-size-3-touch has-text-black has-text-weight-bold dela">Services</nuxt-link>
            </div>
            <div class="menu-link px-4 is-inline-desktop">

              <nuxt-link @click="showMobileNav.isOpen = !showMobileNav.isOpen" to='/contact'
                class="is-size-2-desktop is-size-3-touch has-text-black  has-text-weight-bold dela">Contact</nuxt-link>
            </div>




          </div>
        </div>


      </div>

      <p data-aos="zoom-in"
        class="has-text-weight-semibold is-size-6-desktop is-size-7-touch has-text-grey has-text-centered "> REACH OUT
        AT </p>
      <div class="columns mt-4  is-centered is-mobile" data-aos="zoom-in">
        <div class="column is-4-fullhd is-6-desktop  is-5-tablet is-10-mobile">
          <div class="columns is-mobile is-centered is-multiline">

            <a href="https://www.instagram.com/wearebloopers/" target="_blank" class="column is-2-desktop is-4-touch">
              <div class="box-bloop-bento " style="">
                <figure class="image is-1by1 ">

                  <NuxtImg format="webp" placeholder src="/contact/instagram.png" class="px-2 py-2 container" alt="" />
                </figure>
              </div>
            </a>

            <a href="mailto:hello@wearebloopers.com" target="_blank" class="column is-2-desktop is-4-touch">
              <div class="box-bloop-bento " style="">
                <figure class="image is-1by1 ">

                  <NuxtImg format="webp" placeholder src="/contact/gmail.png" class="px-2 py-2 container" alt="" />
                </figure>
              </div>
            </a>
            <a href="https://wa.me/+918258964050" target="_blank" class="column is-2-desktop is-4-touch">
              <div class="box-bloop-bento " style="">
                <figure class="image is-1by1 ">

                  <NuxtImg format="webp" placeholder src="/contact/call.png" class="px-2 py-2 container" alt="" />
                </figure>
              </div>
            </a>


          </div>
        </div>

      </div>

    </section>
  </div>
</template>

<script>
export default {
}
</script>pt-6

<style>
/* html{
  background-color:yellow;
} */

footer a {
  color: white;
}

.footer-bloop {
  position: fixed;
  overflow: hidden;
  /* bottom: -10rem; */
  /* top:1rem */
  /* overflow: hidden; */
}

.footer-bloop-logo {
  scale: 1.1;
  position: relative;
  bottom: -1rem;
  filter: invert(100%);
  /* opacity: 0.5; */
  overflow: hidden;
}

.invert {
  filter: invert(100%);

}
</style>