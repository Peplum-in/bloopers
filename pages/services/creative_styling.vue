<template>
  <div>

    <section class="section mb-0 pb-0">
      <div class="columns has-text-centered is-mobile is-centered">
        <div class="column is-7-desktop is-8-tablet is-12-mobile ">
          <!-- <p class="has-text-weight-semibold is-size-5-desktop is-size-6-touch ">OUR SERVICES</p> -->
          <h1 data-aos="fade-up" class="title is-size-1-desktop is-size-3-touch pt-4 dela">
            Creative Direction & Styling
          </h1>
          <h2 data-aos="fade-up" class="subtitle mt-3 mb-5 is-size-4-desktop is-size-5-touch ">
            Our creative direction goes beyond aesthetics; we delve into your brand's soul to style it with substance.
            Through meticulous design and storytelling, we ensure your brand's style resonates with your audience and
            stands out in a crowded marketplace


          </h2>
        </div>
      </div>


    </section>

    <section id="work-list" class="mt-6 ">
      <div class="columns my-0 mx-0 is-multiline">
        <div v-for="(row, index) in data_images" :key="index" data-aos="zoom-in"
          class="column work-image-box-wrapper is-hoverable px-0 py-0 has-background-yellow is-4-desktop is-relative">
          <div class="work-image-text subtitle  is-size-5-desktop is-size-6-touch has-text-black ">
            {{ row.work }} for<br>
            <span class="is-size-4-desktop  title  dela  has-text-weight-bold is-size-5-touch">{{ row.client }}</span>
          </div>

          <figure class="image  work-image-box is-relative is-3by4" style="overflow:hidden">
            <NuxtPicture class="" :src="row.image" style="z-index:0" alt="" />
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
    'image': '/creative/re/1.jpg',
    'client': 'Gems Paradise',
    'work': 'Creative shoot',
  },

  {
    'image': '/creative/re/2.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  }, {
    'image': '/creative/re/14.jpg',
    'client': 'Anuvas',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/15.jpg',
    'client': 'Anuvas',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/3.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/4.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/5.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  },

  {
    'image': '/creative/re/6.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/7.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/8.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/9.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/10.jpg',
    'client': 'Kameez by Pooja',
    'work': 'Creative shoot',
  },
  // {
  //   'image': '/creative/re/11.jpg',
  //   'client': 'VedTech',
  //   'work': 'Creative shoot',

  // },
  // {
  //   'image': '/creative/re/12.jpg',
  //   'client': 'VedTech',
  //   'work': 'Creative shoot',

  // },
  // {
  //   'image': '/creative/re/13.jpg',
  //   'client': 'VedTech',
  //   'work': 'Creative shoot',
  // },

  {
    'image': '/creative/re/16.jpg',
    'client': 'Anuvas',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/17.jpg',
    'client': 'Anuvas',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/18.jpg',
    'client': 'Anuvas',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/19.jpg',
    'client': 'Anuvas',
    'work': 'Creative shoot',
  },
  {
    'image': '/creative/re/20.jpg',
    'client': 'Gems Paradise',
    'work': 'Product shoot',
  },
  {
    'image': '/creative/re/21.jpg',
    'client': 'Gems Paradise',
    'work': 'Product shoot',
  },
  {
    'image': '/creative/re/22.jpg',
    'client': 'Gems Paradise',
    'work': 'Product shoot',
  },
  {
    'image': '/creative/re/23.jpg',
    'client': 'Gems Paradise',
    'work': 'Product shoot',
  },
  {
    'image': '/creative/re/24.jpg',
    'client': 'Gems Paradise',
    'work': 'Product shoot',
  },
  {
    'image': '/creative/re/25.jpg',
    'client': 'Gems Paradise',
    'work': 'Product shoot',
  },
  {
    'image': '/creative/re/26.jpg',
    'client': 'Gems Paradise',
    'work': 'Product shoot',
  },

]

const showFilterMobileNav = reactive({
  isOpen: false
})

function showFilter() {
  showFilterMobileNav.isOpen = !showFilterMobileNav.isOpen
};

</script>