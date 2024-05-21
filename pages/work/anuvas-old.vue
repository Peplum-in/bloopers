<template>
    <div class="gh-bg" style="background">
        <section class="section mb-0 pb-0">
            <!-- <figure data-aos="zoom-in" class="image is-3by1 is-hidden-touch ">
                <NuxtImg src="/work/anuvas/banner.jpg"></NuxtImg>
            </figure>
            <figure data-aos="zoom-in" class="image is-1by1 is-hidden-desktop ">
                <NuxtImg src="/work/anuvas/banner-touch.jpg"></NuxtImg>
            </figure> -->
            <div class="columns mt-4 is-vcentered is-centered is-mobile is-variable is-0">
                <div class="column  has-text-centered is-6-desktop is-12-tablet is-12-mobile ">
                    <!-- <figure class="image container mb-5 is-hidden-touch" data-aos="fade-up" style="width:200px">
                        <img src="/work/gems/case-gems.png" class="container" alt="">
                    </figure>
                    <figure class="image container mb-5 is-hidden-desktop" style="width:150px" data-aos="fade-up">
                        <img src="/work/gems/case-gems.png" class="container" alt="">
                    </figure> -->

                    <figure class="image is-5by3">
                        <img src="/work/anuvas/hero.png" class="container"> 
                    </figure>
                    <br>
                    <h1 class="title  is-size-1-desktop is-size-3-touch dela" data-aos="fade-up">
                        Building brand presence for a handicraft clothing brand
                    </h1>
                    <h2 class="subtitle mb-0 is-size-3-desktop is-size-5-touch has-text-grey has-text-weight-semibold" data-aos-delay="260" data-aos="fade-up">
                        Anuvas, Jaipur - India</h2>
                    <br>
                    <!-- <div class="buttons mt-0" data-aos="fade-up" data-aos-delay="300">

                        <button class="button button-bloop-new">
                            VIEW INSTAGRAM
                        </button>
                    </div> -->
                </div>
                <!-- <div class="column is-6-desktop">

                </div> -->

            </div>
        </section>
        <!-- INSTAREEL -->
        <div class="reel-container-white-bg" data-aos="fade-left">
            <div class="marquee-img is-hidden-touch">
                <!-- Repeat the images in this container -->
                <div class="yellow-img  pb-4 mx-1  is-1by1 " v-for="(row, index) in brands" :key="row.name">
                    <NuxtImg :src="row.image" alt="" class=""></NuxtImg>

                </div>


            </div>
            <div class="marquee-img-touch is-hidden-desktop">
                <figure class="yellow-img-touch mx-1 px-4  pt-3 pb-1  mb-0 is-hidden-desktop is-1by1 "
                    v-for="(row, index) in brands" :key="row.name">
                    <NuxtImg style="width:100%" :src="row.image" alt="" class="pb-0 mb-0" />

                </figure>

            </div>
        </div>
        <br>
        <section class="section ">
            <div class=" container ">
                <div data-aos="fade-in" class="notification is-hidden-touch  is-white blooper-noti">
                    <p class="title is-size-5">Quick Stats Review ✨</p>
                    <p class="subtitle is-size-5 has-text-grey has-text-weight-semibold">Since 2021</p>
                    <div class="columns is-multiline is-mobile is-variable is-2">
                        <div class="column is-3-desktop is-6-touch">
                            <div data-aos="fade-up" class="notification bloop-box has-background-white">
                                <figure data-aos="zoom-in" class="image container is-1by1 ">
                                    <NuxtImg src="/ui/love.png" class="container"></NuxtImg>
                                </figure>
                                <br>
                                <p class="title has-text-centered has-text-black has-text-weight-bold is-size-2-desktop is-size-4-touch dela ">30K+</p>
                                <p class="subtitle has-text-centered is-size-4-desktop is-size-5-touch dela">follows</p>

                            </div>
                        </div>
                        <div class="column is-3-desktop is-6-touch">
                            <div data-aos="fade-up" class="notification bloop-box has-background-white">
                                <figure data-aos="zoom-in" class="image container is-1by1 ">
                                    <NuxtImg src="/ui/eye.png" class="container"></NuxtImg>
                                </figure>
                                <br>
                                <p class="title has-text-centered has-text-black has-text-weight-bold is-size-2-desktop is-size-4-touch dela ">30K+</p>
                                <p class="subtitle has-text-centered is-size-4-desktop is-size-5-touch dela">follows</p>
                            </div>
                        </div>
                        <div class="column is-3-desktop is-6-touch">
                            <div data-aos="fade-up" class="notification bloop-box has-background-white">
                                <figure data-aos="zoom-in" class="image container is-1by1 ">
                                    <NuxtImg src="/ui/save.png" class="container"></NuxtImg>
                                </figure>
                                <br>
                                <p class="title has-text-centered has-text-black has-text-weight-bold is-size-2-desktop is-size-4-touch dela ">30K+</p>
                                <p class="subtitle has-text-centered is-size-4-desktop is-size-5-touch dela">follows</p>
                            </div>
                        </div>
                        <div class="column is-3-desktop is-6-touch">
                            <div data-aos="fade-up" class="notification bloop-box has-background-white">
                                <figure data-aos="zoom-in" class="image container is-1by1 ">
                                    <NuxtImg src="/ui/share.png" class="container"></NuxtImg>
                                </figure>
                                <br>
                                <p class="title has-text-centered has-text-black has-text-weight-bold is-size-2-desktop is-size-4-touch dela ">30K+</p>
                                <p class="subtitle has-text-centered is-size-4-desktop is-size-5-touch dela">follows</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-in" class="is-hidden-desktop  is-white">
                    <p class="title is-size-5">Quick Stats Review ✨</p>
                    <p class="subtitle is-size-5 has-text-grey">Since 2021</p>
                    <div class="columns is-multiline is-mobile is-variable is-2">
                        <div class="column is-3-desktop is-6-touch">
                            <div data-aos="fade-up" class=" bloop-box has-background-white">
                                <figure data-aos="zoom-in" class="image container  is-1by1 ">
                                    <NuxtImg src="/ui/love.png" class="container px-5 py-5"></NuxtImg>
                                </figure>
                                <p class="title has-text-centered is-size-2-desktop is-size-4-touch dela mb-3">100K+</p>
                                <!-- <p class="subtitle has-text-centered is-size-4">likes</p> -->
                                <p class="subtitle has-text-centered is-size-3-desktop is-size-5-touch dela">likes</p>
                            </div>
                        </div>
                        <div class="column is-3-desktop is-6-touch">
                            <div data-aos="fade-up" class=" bloop-box has-background-white">
                                <figure data-aos="zoom-in" class="image container is-1by1 ">
                                    <NuxtImg src="/ui/eye.png" class="container  px-5 py-5"></NuxtImg>
                                </figure>
                               
                                <p class="title has-text-centered is-size-2-desktop is-size-4-touch dela mb-3">30K+</p>
                                <p class="subtitle has-text-centered is-size-3-desktop is-size-5-touch dela">follows</p>
                            </div>
                        </div>
                        <div class="column is-3-desktop is-6-touch">
                            <div data-aos="fade-up" class=" bloop-box has-background-white">
                                <figure data-aos="zoom-in" class="image container is-1by1 ">
                                    <NuxtImg src="/ui/save.png" class="container  px-5 py-5"></NuxtImg>
                                </figure>
                           
                                <p class="title has-text-centered is-size-2-desktop is-size-4-touch dela mb-3">10K+</p>
                                <p class="subtitle has-text-centered is-size-3-desktop is-size-5-touch dela">saves</p>
                            </div>
                        </div>
                        <div class="column is-3-desktop is-6-touch">
                            <div data-aos="fade-up" class=" bloop-box has-background-white">
                                <figure data-aos="zoom-in" class="image container is-1by1 ">
                                    <NuxtImg src="/ui/share.png" class="container  px-5 py-5"></NuxtImg>
                                </figure>
                               
                                <p class="title has-text-centered is-size-2-desktop is-size-4-touch dela mb-3">5K+</p>
                                <p class="subtitle has-text-centered is-size-3-desktop is-size-5-touch dela">shares</p>
                            </div>
                        </div>
                    </div>

                </div>
                <br>
                <br>
                <div class="columns is-variable is-8">
                    <div class="column is-6">
                        <p class="title dela " data-aos="fade-up">
                            Building the Gram
                        </p>
                        <p class="is-size-4-desktop is-size-5-touch" data-aos="fade-up">
                            We started with Gems paradise with a social first Strategy and build their gram.
                        </p>
                        <br>
                        <br>
                        <p class="is-size-4-desktop is-size-6-touch" data-aos="fade-up">
                            We started with Gems paradise with a social first Strategy and build their gram. Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit. Error voluptas iste accusantium asperiores at est
                            perferendis. Aspernatur nemo quaerat labore maiores, ex magnam harum est mollitia autem dolores
                            perferendis veniam!
                        </p>
                    </div>
                </div>
                
                <div>
            <section class="py-6">

                <!-- Bnto GRid -->
                <div class="fixed-grid has-4-cols has-2-rows ">
                    <div class="grid  ">
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-2by3 ">
                                    <img src="/work/anuvas/reel_3.jpg" class=" container" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-2by3 ">
                                    <img src="/work/anuvas/reel_2.jpg" class=" container" alt="" />
                                </figure>

                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-2by3 ">
                                    <img src="/work/anuvas/reel_1.jpg" class=" container" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-2by3 ">
                                    <img src="/work/anuvas/reel_2.jpg" class=" container" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-2-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-1by1 ">
                                    <img src="/work/anuvas/gram_2.png" class=" container" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-2-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-1by1 " >
                                    <img src="/work/anuvas/gram_1.png" style="object-fit:cover"  alt="" />
                                </figure>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
                <br>
                <div class="columns is-variable is-8">
                    <div class="column is-6">
                        <p class="title dela " data-aos="fade-up">
                            Campaign Direction
                        </p>
                        <p class="is-size-4-desktop is-size-5-touch" data-aos="fade-up">
                            We started with Gems paradise with a social first Strategy and build their gram.
                        </p>
                        <br>
                        <br>
                        <p class="is-size-4-desktop is-size-6-touch" data-aos="fade-up">
                            We started with Gems paradise with a social first Strategy and build their gram. Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit. Error voluptas iste accusantium asperiores at est
                            perferendis. Aspernatur nemo quaerat labore maiores, ex magnam harum est mollitia autem dolores
                            perferendis veniam!
                        </p>
                    </div>
                </div>


            </div>
        </section>
        <section class="section pt-0">
            <div class="container">
                <figure class="mb-6 has-background-yellow box box-bloop-bento-no image is-hidden-touch is-3by1" data-aos="zoom-in">
                    <NuxtImg src="/work/anuvas/cam_banner.png"></NuxtImg>
                </figure>
                <figure class="mb-6 has-background-yellow image is-hidden-desktop is-5by4" data-aos="zoom-in">
                    <NuxtImg src="/work/anuvas/cam_banner_touch.png"></NuxtImg>
                </figure>

                <div class="columns is-variable is-8">
                    <div class="column is-6">
                        <p class="title dela " data-aos="fade-up">
                            Re-branding
                        </p>
                        <p class="is-size-4-desktop is-size-5-touch" data-aos="fade-up">
                            We started with Gems paradise with a social first Strategy and build their gram.
                        </p>
                        <br>
                        <br>
                        <p class="is-size-4-desktop is-size-6-touch" data-aos="fade-up">
                            We started with Gems paradise with a social first Strategy and build their gram. Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit. Error voluptas iste accusantium asperiores at est
                            perferendis. Aspernatur nemo quaerat labore maiores, ex magnam harum est mollitia autem dolores
                            perferendis veniam!
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <section  class="section py-0">
            <div class="container box-bloop-bento-no px-6 py-6 is-hidden-touch">
                <p  data-aos="fade-up" class="title is-size-4-desktop">Reels & Stories</p>
                <p data-aos="fade-up" class="subtitle is-size-5-desktop">40+ created with 2.5M reach</p>

                <div class="columns is-variable is-" data-aos="fade-left">
                    <div class="column is-4" >
                        <figure class="image box box-bloop-bento is-2by3 has-background-black">
                            <NuxtImg src="/work/anuvas/reel_1.jpg"></NuxtImg>
                        </figure>
                    </div>
                    <div class="column is-4">
                        <figure  class="image box box-bloop-bento is-2by3 has-background-black">
                            <NuxtImg src="/work/anuvas/reel_2.jpg"></NuxtImg>
                        </figure>
                    </div>
                    <div class="column is-4">
                        <figure  class="image box box-bloop-bento is-2by3 has-background-black">
                            <NuxtImg src="/work/anuvas/reel_3.jpg"></NuxtImg>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="container is-hidden-desktop">
                <hr>
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <div>

                                <p class="title is-size-4-desktop is-size-5-touch">Reels & Stories</p>
                                <p class=" is-size-5-desktop is-size-6-touch">200+ created with 2.5M reach</p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="level-right">
                        <div class="level-item">
                            <p class="is-size-6 has-text-grey has-text-weight-semibold">1/3</p>                  
                        </div>
                    </div> -->
                </div>

                <div class="columns is-variable is-grouped-multiline is-mobile scroll-columns" style="">
                    <div class="column is-4-desktop is-10-touch">
                        <figure class="image box box-bloop-bento-no is-2by3 has-background-black">
                            <NuxtImg src="/work/anuvas/reel_1.jpg"></NuxtImg>
                        </figure>
                    </div>
                    <div class="column is-4-desktop is-10-touch">
                        <figure class="image box box-bloop-bento-no is-2by3 has-background-black">
                            <NuxtImg src="/work/anuvas/reel_2.jpg"></NuxtImg>
                        </figure>
                    </div>
                    <div class="column is-4-desktop is-10-touch">
                        <figure class="image box box-bloop-bento-no is-2by3 has-background-black">
                            <NuxtImg src="/work/anuvas/reel_3.jpg"></NuxtImg>
                        </figure>
                    </div>
                </div>
            </div>
        </section>


        <Testimonials />
        <Audit />
    </div>
</template>
<script setup>
const brands = [
    {
        'image': '/testimonials/anu_1.jpg'
    },
    {
        'image': '/testimonials/anu_2.jpg'
    },
    {
        'image': '/testimonials/anu_3.jpg'
    },
    {
        'image': '/testimonials/anu_4.jpg'
    },
    {
        'image': '/testimonials/anu_5.jpg'
    },
    {
        'image': '/testimonials/anu_6.jpg'
    },
    {
        'image': '/testimonials/anu_7.jpg'
    },
    {
        'image': '/testimonials/anu_8.jpg'
    },
    {
        'image': '/testimonials/anu_8_2.jpg'
    },

    {
        'image': '/testimonials/anu_9.jpg'
    },
    {
        'image': '/testimonials/anu_10.jpg'
    },

];
</script>