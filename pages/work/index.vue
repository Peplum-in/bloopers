<template>
  <div>

    <!-- <tape data-aos="fade-left"/> -->
    <section class="work-list">
      <section class="section mb-0 pb-0">
        <div class="columns has-text-centered is-mobile is-centered">
          <div class="column is-7-desktop is-8-tablet is-12-mobile ">
            <h1 data-aos="fade-up" class="title is-size-1-desktop is-size-3-touch pt-6 dela">
              We do what we do best. We don't do what we're not good at. <span data-aos="fade-up" class="dela"
                data-aos-delay="350">Simple.</span>
            </h1>
            <p class="has-text-weight-semibold is-size-5-desktop is-size-6-touch ">ALL WORKS & PROJECTS</p>
          </div>
        </div>

        <div class="columns is-variable is-0 mb-0 mt-6 ">
          <nuxt-link to="/work/gems-paradise" class="column is-clickable   work-card-wrapper   is-4-desktop is-relative"
            data-aos="zoom-in">
            <div class="work-card ">

              <figure class="image  is-relative is-5by4" style="overflow:hidden;border-radius: 3px;">
                <NuxtPicture class="" src="/work/gems/4.png" style="z-index:0" alt="" />
              </figure>
            </div>
            <div class="px-4 py-5">

              <p class="   title  dela  is-size-4-desktop  is-size-5-touch has-text-weight-bold">
                Gems Paradise</p>
              <p class="subtitle  is-size-5 is-size-6-touch mb-0 ">Rebranding a 200yr old legacy
              </p>
              <p class="  is-size-6  mt-2 has-text-grey">Branding, Creative Shoots, Social Media,
                Marketing
              </p>

            </div>

          </nuxt-link>
          <nuxt-link to="/work/anuvas" class="column is-clickable  work-card-wrapper  is-4-desktop is-relative"
            data-aos="zoom-in">
            <div class="work-card ">
              <figure class="image is-relative is-5by4" style="overflow:hidden;border-radius: 20px;">
                <NuxtPicture class="" src="/extra/creative.jpg" style="z-index:0" alt="" />
              </figure>

            </div>
            <div class="px-4 py-5">

              <p class="   title  dela  is-size-4-desktop  is-size-5-touch has-text-weight-bold">
                Anuvas</p>
              <p class="subtitle  is-size-5 is-size-6-touch mb-0 ">Building social presence for a
                Handicraft D2C brand.</p>
              <p class="  is-size-6  mt-2 has-text-grey">Social Media, Creative Shoots
              </p>
            </div>


          </nuxt-link>
          <nuxt-link to="/work/anuvas" class="column is-clickable  work-card-wrapper  is-4-desktop is-relative"
            data-aos="zoom-in">
            <div class="work-card ">
              <figure class="image is-relative is-5by4" style="overflow:hidden;border-radius: 20px;">
                <NuxtPicture class="" src="/work/do/hero.jpeg" style="z-index:0" alt="" />
              </figure>

            </div>
            <div class="px-4 py-5">

              <p class="   title  dela  is-size-4-desktop  is-size-5-touch has-text-weight-bold">
                Daily Objects</p>
              <p class="subtitle  is-size-5 is-size-6-touch mb-0 ">Creative direction and stlying for
                daily accessories </p>
              <p class="  is-size-6  mt-2 has-text-grey">Creative Shoots, Campaigns
              </p>
            </div>


          </nuxt-link>

        </div>

      </section>



    </section>

  </div>
</template>

<script setup>

const route = useRoute();
const data_work = [
  {
    'image': '/work/gems/gems.jpg',
    'image_touch': '/work/gems/gems-touch.jpg',
    'client': 'Gems Paradise',
    'work': 'Product shoot',
    'description': 'We rebranded this 200yr old fine jewellery brand from Jaipur, took their social media to new heights.',
  },

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