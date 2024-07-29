<template>
  <div>

    <section class="section mb-0 pb-0">
      <div class="columns has-text-centered is-mobile is-centered">
        <div class="column is-7-desktop is-8-tablet is-12-mobile ">
          <!-- <p class="has-text-weight-semibold is-size-5-desktop is-size-6-touch ">OUR SERVICES</p> -->
          <h1 data-aos="fade-up" class="title is-size-1-desktop is-size-3-touch pt-4 dela">
            UGCs, Influencers & Collaborations
          </h1>
          <h2 data-aos="fade-up" class="subtitle mt-3 mb-5 is-size-4-desktop is-size-5-touch ">
            We cast creators, produce campaign assets and video ads, and do all the content-creation heavy lifting that
            brands or services need.


          </h2>
        </div>
      </div>


    </section>
    <section id="work-list " class="section mb-0 pb-0">

      <div class="columns is-mobile is-variable is-1 mb-0 is-multiline is-grouped">
        <div v-for="(row, index) in 20" :key="index" class="column is-3-desktop is-6-touch is-relative"
          data-aos="zoom-in" :class="row.col">
          <figure class="image has-background-grey-light is-9by16" style="overflow:hidden;border-radius: 15px;">

            <video controls muted playsinline loop style="border-radius:15px">
              <source :src="`/services/ugc/(${row}).webm`" class=""
                style="object-fit: cover; height:100%; border-radius:15px" type="video/webm">
            </video>
          </figure>


        </div>


      </div>

    </section>
    <div class="vl"></div>


    <div class="columns is-mobile is-centered">
      <div class="column has-text-centered  is-7-desktop is-10-touch">
        <p class="dela title is-size-1-desktop is-size-4-touch" data-aos="zoom-in">Storytelling makes your content
          becomes binge-able.
          And if your content is bingeable, your business will be irresistible.</p>
        <p class="subtitle is-size-5-touch mt-3" data-aos="fade-up">Here's some proof 👍</p>
      </div>
    </div>
    <div class="reel-container-alt py-3">
      <div class="marquee-img-alt is-hidden-touch" data-aos="fade-left">
        <!-- Repeat the images in this container -->
        <div class="test-img pb-4 mx-1  is-1by1 " v-for="(row, index) in stats_data" :key="row.name">
          <NuxtPicture :src="row.image" sizes="lg:30vw md:40vw sm:100vw" alt="" class="" />

        </div>


      </div>
      <div class="marquee-img-touch-alt is-hidden-desktop" data-aos="fade-left">
        <div class="test-img-touch mx-1 px-4  pt-3 pb-0  mb-0 is-hidden-desktop is-1by1 "
          v-for="(row, index) in stats_data" :key="row.name">
          <NuxtPicture :src="row.image" sizes="lg:30vw md:40vw sm:100vw" alt="" class="pb-0 mb-0" />

        </div>

      </div>
    </div>

  </div>
</template>

<script setup>

const route = useRoute();
const data_images = [
  {
    'image': '/services/social/gram_1.png',
    'client': 'Anuvas',
    'work': 'Guftagu Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-4-desktop ',
  },
  {
    'image': '/services/social/8.png',
    'client': 'Anuvas',
    'work': 'Kids Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-4-desktop ',
  },
  {
    'image': '/services/social/5.png',
    'client': 'Symetree',
    'ratio': 'is-1by1',
    'work': 'Social Grid for Jewellery brand ',
    'col': 'is-4-desktop ',

  },
  {
    'image': '/services/social/itminan.png',
    'client': 'Itminan',
    'ratio': 'is-5by3',
    'work': 'Social Media & Spotify Assets',
    'col': 'is-8-desktop ',
  },
  {
    'image': '/services/social/25.png',
    'client': 'Spirit Animal',
    'ratio': 'is-1by1',
    'work': 'Social media post for sportswear brand',
    'col': 'is-4-desktop ',
  },
  {
    'image': '/services/social/1.png',
    'client': 'Spirit Animal',
    'ratio': 'is-1by1',
    'work': 'Social media grid for collection launch',
    'col': 'is-4-desktop ',
  },
  {
    'image': '/services/social/gems_10.jpg',
    'client': 'Gems Paradise',
    'ratio': 'is-1by1',
    'work': 'Social Media Post',
    'col': 'is-4-desktop ',
  },
  {
    'image': '/services/social/2.png',
    'client': 'Gems Paradise',
    'ratio': 'is-1by1',
    'work': 'Social Media Post',
    'col': 'is-4-desktop ',
  },
  {
    'image': '/services/social/anu_valentine.jpg',
    'client': 'Improve customer engagement with social media',
    'ratio': '',
    'work': 'Improve customer engagement with social media, using a story narrative for valentine’s day ',
    'col': 'is-6-desktop ',
  },
  {
    'image': '/services/social/anu_30.jpg',
    'client': 'Gems Paradise',
    'ratio': '',
    'work': 'Social Media Post',
    'col': 'is-6-desktop ',
  },
  {
    'image': '/services/social/3.png',
    'client': 'Gems Paradise',
    'ratio': 'is-1by1',
    'work': 'Social Media Post',
    'col': 'is-4-desktop ',
  },
  {
    'image': '/services/social/4.png',
    'client': 'Gems Paradise',
    'ratio': 'is-1by1',
    'work': 'Social Media Post',
    'col': 'is-4-desktop ',
  },
  {
    'image': '/services/social/6.png',
    'client': 'Gems Paradise',
    'ratio': 'is-1by1',
    'work': 'Social Media Post',
    'col': 'is-4-desktop ',
  },




]
const stats_data = [
  {
    'image': '/services/social/stats/1.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/2.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/3.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/4.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/5.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/6.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/7.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/8.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/9.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/10.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/11.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/social/stats/12.jpg',
    'client': 'Anuvas',
    'work': 'Grid for Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },





]

const showFilterMobileNav = reactive({
  isOpen: false
})

function showFilter() {
  showFilterMobileNav.isOpen = !showFilterMobileNav.isOpen
};

</script>