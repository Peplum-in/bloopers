<template>
  <div>


    <section class="work-list">
      <section class="section mb-0 pb-5" data-aos="fade-up">
        <div class="columns my-6 is-mobile ">
          <div class="column is-7-desktop is-12-touch">

            <h1 class="title dela is-size-2-desktop is-size-4-touch">
              Web Design & Development
            </h1>
            <h2 class="subtitle mt-3 mb-5 is-size-4-desktop is-size-5-touch ">
              We blend form and function to build websites that are not only visually striking but also technically
              robust. Utilizing the latest technologies, we ensure your site is intuitive, responsive, and primed for the
              future.


            </h2>
            <p class=" dela is-size-5 mt-3 has-text-dark">
              *User Experience Design, Responsive Design, Technical Development, Content Management Systems,

              <span class=" dela is-size-5 has-text-link">
                *8x-10x faster than Wordpress</span>
            </p>

            <!-- <span class=" mr-2">includes</span> -->
            <!-- <span class="is-size-6 px-4 my-1  has-text-grey">/</span> -->
            <!-- <span class=" title bloop-tag  my-1  is-inline-block is-size-5-desktop is-size-6-touch">1. Brand Storytelling</span>
              <span class="title bloop-tag my-1 mx-3 is-inline-block is-size-5-desktop is-size-6-touch">2. Visual Identity</span>
              <span class="title bloop-tag my-1  is-inline-block is-size-5-desktop is-size-6-touch">3. Styling Guidelines</span> -->
            <!-- <span class="is-size-6 px-4 my-1   has-text-grey">/</span> -->
          </div>
        </div>
      </section>
      <div class="has-background-yellow is-hidden-touch py-4">
        <div class="marquee">
          <div>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop title ">Take a look at our pun-tastic work. </span>

          </div>
        </div>

      </div>
      <div class="has-background-yellow is-hidden-desktop py-2">
        <div class="marquee-mobile">
          <div>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>
            <span class="is-size-3-desktop is-size-4-touch title ">Take a look at our pun-tastic work. </span>

          </div>
        </div>

      </div>
    </section>
    <section id="work-list" class=""  data-aos="zoom-in">
      <div class="columns my-0 mx-0 is-multiline">
        <div v-for="(row, index) in data_images" :key="index"
          class="column work-image-box-wrapper  px-0 py-0 has-background-yellow is-4-desktop is-relative">
          <!-- <div class="work-gradient"></div> -->
          <div class="work-image-text has-text- is-size-5 title has-text-black has-text-weight-bold">
            {{ row.work }} for<br><span class="is-size-3-desktop is-size-4-touch">{{ row.client }}</span>
          </div>

          <figure class="image  is-relative is-3by4" style="overflow:hidden">
            <NuxtPicture class="work-image-box" :src="row.image" style="z-index:0" alt="" />
          </figure>
        </div>


      </div>
    </section>

  </div>
</template>
    
<script setup>

const route = useRoute();
const data_images = [];


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

// const { data: navigation } = await useAsyncData('navigation', () => queryContent('/nav').only(['title', 'link_text']).find());

// const { data: posts } = await useAsyncData('work', () => queryContent('/work').find())


</script>
    
  
<style>
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

.work-image-box-wrapper .work-image-box {
  transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* .work-image-box p {
    transition: 0.3s all ease-in;
  } */

.work-image-box-wrapper:hover .work-image-box {
  transform: translateY(2rem) scale(0.8);
  border-radius: 3px;
  /* transform: ; */
}
</style>