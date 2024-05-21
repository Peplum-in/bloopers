<template>
  <div>

    <section class="section mb-0 pb-0">
      <div class="columns has-text-centered is-mobile is-centered">
        <div class="column is-7-desktop is-8-tablet is-12-mobile ">
          <!-- <p class="has-text-weight-semibold is-size-5-desktop is-size-6-touch ">OUR SERVICES</p> -->
          <h1 data-aos="fade-up" class="title is-size-1-desktop is-size-3-touch pt-4 dela">
            Branding & Identity
          </h1>
          <h2 data-aos="fade-up" class="subtitle mt-3 mb-5 is-size-4-desktop is-size-5-touch ">
            Your brand identity is your silent ambassador. We craft distinctive branding that captures your essence and
            speaks directly to the hearts and minds of your customers, creating lasting impressions and fostering brand
            loyalty.



          </h2>
        </div>
      </div>


    </section>

    <!-- Bento Grid -->
    <section class="section">
      <div class="fixed-grid has-5-cols-desktop  has-4-cols-mobile has-3-rows ">
        <div class="grid  ">
          <div v-for="(row, index) in data_images_grid" class="cell   box-bloop-bento" :class="row.col"
            data-aos="zoom-in">
            <div class="">

              <figure class="image  is-relative " style="overflow:hidden;border-radius: 3px;">
                <NuxtPicture class="" sizes="lg:50vw md:50vw sm:100vw" :src="row.image" style="z-index:0" alt="" />
              </figure>
            </div>
            <div class="px-4 py-5">

              <p class="   title  dela  is-size-4-desktop  is-size-5-touch has-text-weight-bold">
                {{ row.client }}</p>
              <p class="subtitle dela is-size-5 is-size-6-touch mb-0 ">{{ row.work }}
              </p>

            </div>
          </div>

        </div>
      </div>


    </section>


  </div>
</template>

<script setup>

const route = useRoute();
const data_images = [
  {
    'image': '/work/gems/branding_GP.png',
    'client': 'Anuvas',
    'work': 'Guftagu Collection Launch',
    'ratio': '',
    'col': 'is-5-desktop ',
  },
  {
    'image': '/services/branding/ha.png',
    'client': 'Anuvas',
    'work': 'Kids Collection Launch',
    'ratio': 'is-1by1',
    'col': 'is-3-desktop ',
  },
  {
    'image': '/services/branding/Jadibooti.jpg',
    'client': 'Symetree',
    'ratio': 'is-1by1',
    'work': 'Social Grid for Jewellery brand ',
    'col': 'is-2-desktop ',

  },
  {
    'image': '/services/branding/mujra.jpg',
    'client': 'Symetree',
    'ratio': 'is-1by1',
    'work': 'Social Grid for Jewellery brand ',
    'col': 'is-2-desktop ',

  },
  {
    'image': '/services/branding/jadi-identity.jpg',
    'client': 'Symetree',
    'ratio': 'is-1by1',
    'work': 'Social Grid for Jewellery brand ',
    'col': 'is-3-desktop ',

  },
  {
    'image': '/services/branding/amatri.jpg',
    'client': 'Symetree',
    'ratio': 'is-1by1',
    'work': 'Social Grid for Jewellery brand ',
    'col': 'is-4-desktop ',

  },
  {
    'image': '/services/branding/peplum.jpg',
    'client': 'Symetree',
    'ratio': 'is-',
    'work': 'Social Grid for Jewellery brand ',
    'col': 'is-5-desktop ',

  },
  {
    'image': '/services/branding/panya_logo.jpg',
    'client': 'Symetree',
    'ratio': 'is-',
    'work': 'Social Grid for Jewellery brand ',
    'col': 'is-5-desktop ',

  },
]
const data_images_grid = [
  {
    'image': '/work/gems/branding_GP.png',
    'client': 'Rebranding of Gems Paradise',
    'work': 'Brand Identity, Logo, Typefaces, Color Palette, Packaging, Social Media Grids, Photography',
    'ratio': '',
    'col': 'is-col-span-2-desktop is-col-span-4-mobile is-row-span-3 ',
  },
  {
    'image': '/services/branding/ha.png',
    'client': 'Handcraft Advisor',
    'work': 'A B2B Platform for Handicrafts',
    'ratio': 'is-1by1',
    'col': 'is-col-span-2-desktop is-row-span-2-desktop is-col-span-4-mobile ',
  },
  {
    'image': '/services/branding/mujra.jpg',
    'client': 'Mujra',
    'ratio': 'is-1by1',
    'work': 'Peer to Peer Gig Platform',
    'col': 'is-col-span-1-desktop is-row-span-1 is-col-span-2-mobile ',

  },
  {
    'image': '/services/branding/amatri.jpg',
    'client': 'AMATRI',
    'ratio': 'is-1by1',
    'work': 'Identity for lifestyle brand',
    'col': 'is-col-span-1-desktop is-row-span-1 is-col-span-2-mobile ',

  },
  {
    'image': '/services/branding/Jadibooti.jpg',
    'client': 'Jadibootee',
    'ratio': 'is-1by1',
    'work': 'Dadi ke nuskhe',
    'col': 'is-col-span-1-desktop is-row-span-1 is-col-span-2-mobile ',

  },
  {
    'image': '/services/branding/wemen.jpg',
    'client': 'Wemen',
    'ratio': 'is-1by1',
    'work': 'Women first clothing brand',
    'col': 'is-col-span-1-desktop is-row-span-1 is-col-span-2-mobile ',

  },
  {
    'image': '/services/branding/kah.png',
    'client': 'KAH',
    'ratio': 'is-1by1',
    'work': 'Idenity for a hardware distributor',
    'col': 'is-col-span-1-desktop is-row-span-1 is-col-span-2-mobile ',

  },

  {
    'image': '/services/branding/peplum.jpg',
    'client': 'Arraycase',
    'ratio': 'is-',
    'work': 'Identity, UI/UX for a suite of SaaS products by arraycase',
    'col': 'is-col-span-2-desktop is-row-span-1 is-col-span-4-mobile ',

  },

  {
    'image': '/services/branding/panya_logo.jpg',
    'client': 'Panya',
    'ratio': 'is-',
    'work': 'B2B Commerce platform.',
    'col': 'is-col-span-2-desktop is-row-span-1  is-col-span-4-mobile ',

  },
]

const showFilterMobileNav = reactive({
  isOpen: false
})

function showFilter() {
  showFilterMobileNav.isOpen = !showFilterMobileNav.isOpen
};

</script>