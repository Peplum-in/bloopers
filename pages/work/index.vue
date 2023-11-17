<template>
  <div>


    <section class="work-list">
            <div class="has-background-yellow py-4">
                <div class="marquee">
                    <div>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>
                        <span class="is-size-3-desktop title ">Take a look at our pun-tastic work.</span>

                    </div>
                </div>

            </div>
        </section>
        <section id="work-list" class="my-6 is-hidden-tablet section">
            <div class="columns my-6">
                <div class="column  is-12-mobile">
                    <div class="notification px-3 mr-6 ml-3 my-6 has-background-yellow">
                        <figure class="image is-5by4">
                            <img class="work-image-mobile" src="/img/test1.jpg" style="z-index:0" alt="">

                        </figure>
                        <p class="title mt-1 px-3">Creative styling for Anuvaas</p>
                    </div>
                </div>
            </div>
            <div class="columns my-6">
                <div class="column  is-12-mobile">
                    <div class="notification px-3 mr-6 ml-3 my-6 has-background-yellow">
                        <figure class="image is-5by4">
                            <img class="work-image-mobile" src="/img/test2.jpg" style="z-index:0" alt="">

                        </figure>
                        <p class="title mt-1 px-3">Creative styling for Anuvaas</p>
                    </div>
                </div>
            </div>
            <div class="columns my-6">
                <div class="column  is-12-mobile">
                    <div class="notification px-3 mr-6 ml-3 my-6 has-background-yellow">
                        <figure class="image is-5by4">
                            <img class="work-image-mobile" src="/img/test3.jpg" style="z-index:0" alt="">

                        </figure>
                        <p class="title mt-1 px-3">Creative styling for Anuvaas</p>
                    </div>
                </div>
            </div>
            <div class="columns my-6">
                <div class="column  is-12-mobile">
                    <div class="notification px-3 mr-6 ml-3 my-6 has-background-yellow">
                        <figure class="image is-5by4">
                            <img class="work-image-mobile" src="/img/test4.jpg" style="z-index:0" alt="">

                        </figure>
                        <p class="title mt-1 px-3">Creative styling for Anuvaas</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="work-list" class="is-hidden-mobile">
            <div class="columns my-0 mx-0 is-multiline">
                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <div class="work-gradient"></div>
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Styling for Anuvas</h2>

                    <figure class="image  is-relative is-5by4" style="overflow:hidden">
                        <img class="work-image" src="/img/test1.jpg" style="z-index:0" alt="">
                    </figure>
                </div>

                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <!-- <div class="work-gradient"></div> -->
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Campaigns for Daily Objects</h2>

                    <figure class="image  is-relative is-5by4" style="overflow:hidden">
                        <img class="work-image" src="/img/test2.jpg" style="z-index:0" alt="">
                    </figure>
                </div>

                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <!-- <div class="work-gradient"></div> -->
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Branding for Gems Paradise</h2>

                    <figure class="image  is-relative is-5by4" style="overflow:hidden">
                        <img class="work-image" src="/img/test3.jpg" style="z-index:0" alt="">
                    </figure>
                </div>
                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <!-- <div class="work-gradient"></div> -->
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Creative shoot for Shift Alt</h2>

                    <figure class="image  is-relative is-5by4" style="overflow:hidden">
                        <img class="work-image" src="/img/test4.jpg" style="z-index:0" alt="">
                    </figure>
                </div>

            </div>
        </section>

  </div>
</template>
  
<script setup>

const route = useRoute();
const data_images = [
  {
    'image': '',
    'client': '',
    'work': '',
  }
]

const showFilterMobileNav = reactive({
  isOpen: false
})

function showFilter() {
  showFilterMobileNav.isOpen = !showFilterMobileNav.isOpen
};

function cldImage(link) {

  const x = link.split('/upload')
  const z = x[0] + '/upload/f_webp,q_80,w_600,dpr_auto/'
  const final = z + x[1]
  return final
}
function cldVideoRe(link) {

  const x = link.split('/upload')
  const z = x[0] + '/upload/f_webm,w_600,ac_none/'
  const final = z + x[1]
  return final
}
function cldVideoBase(link) {

  const x = link.split('/upload')
  const z = x[0] + '/upload/f_mp4,w_600,ac_none/'
  const final = z + x[1]
  return final
}

const { data: navigation } = await useAsyncData('navigation', () => queryContent('/nav').only(['title', 'link_text']).find());

const { data: posts } = await useAsyncData('work', () => queryContent('/work').find())


</script>
  

<style>
.work-image-box img {
  transition: 0.3s all ease-in;
}

/* .work-image-box p {
  transition: 0.3s all ease-in;
} */

.work-image-box img:hover {
  transform: translateY(-20px) scale(1.1);
  /* transform: ; */
}

</style>