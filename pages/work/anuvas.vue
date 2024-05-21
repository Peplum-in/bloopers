<template>
    <div class="gh-bg" style="background">
        <section class="section mb-0 pb-0">

            <div class="columns mt-4 is-vcentered is-multiline is-centered is-mobile is-variable is-8">
                <div class="column  is-6-desktop is-12-touch is-12-mobile ">


                    <h1 class="title  is-size-1-desktop is-size-3-touch dela" data-aos="fade-up">
                        Building brand presence for a handicraft clothing brand</h1>
                    <!-- <h2 class="subtitle  is-size-2-desktop is-size-4-touch dela has-text-dark" data-aos="fade-up">
                        Here's how we rebuilt a 200yr old fine jewellery brand for the social audience
                    </h2> -->
                    <h3 class="subtitle mb-0 is-size-3-desktop is-size-5-touch has-text-grey has-text-weight-semibold"
                        data-aos-delay="260" data-aos="fade-up">
                        Anuvas, Jaipur - India</h3>
                    <br>

                </div>
                <div class="column  has-text-centered is-6-desktop is-12-touch ">

                    <figure class="image is-5by3">
                        <NuxtPicture src="/work/anuvas/hero.png" class="container" />
                    </figure>

                </div>

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
        <section class="section  ">
            <div class=" container ">
                <div data-aos="fade-in" class="notification is-hidden-touch  is-white blooper-noti">


                    <section class="container ">
                        <div class="columns">
                            <div class="column">
                                <div class="columns is-vcentered ">
                                    <div class="column ">
                                        <div class="is-flex is-justify-content-start 	 is-align-items-center	">
                                            <div class="p-2">

                                                <figure class="image is-96x96 is-rounded avatar ">
                                                    <NuxtPicture src="/work/anuvas/logo.jpg" alt="" />
                                                </figure>
                                            </div>
                                            <div class="ml-5">

                                                <p class="title dela is-size-4-desktop is-size-5-touch">
                                                    Anuvas
                                                </p>
                                                <p
                                                    class="subtitle has-text-black has-text-weight-semibold is-size-5-desktop is-size-6-touch mb-0 pb-0">
                                                    Jaipur, India
                                                </p>
                                                <p class=" has-text-grey is-size-6 mt-0 pt-0">
                                                    Fashion & Apparel
                                                </p>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <a href="https://instagram.com/anuvas" target="_blank"
                                    class="button button-bloop-new bloop-white" data-aos="fade-up">VIEW INSTAGRAM
                                    ↗</a>

                            </div>
                            <div class="column pl-6" style="border-left: 1px solid #f1f1f1;">
                                <p class="dela title is-size-6 mb-2">SERVICES</p>
                                <ul>
                                    <li>
                                        <NuxtLink class="is-size-5 has-text-grey mr-2">Brand Positioning & Strategy
                                        </NuxtLink>
                                        <span class="is-size-5 has-text-grey mr-2">Photography</span>
                                        <span class="is-size-5 has-text-grey mr-2">Social Media</span>
                                        <span class="is-size-5 has-text-grey mr-2">Marketing</span>
                                        <span class="is-size-5 has-text-grey mr-2">Collabs & Events</span>
                                    </li>

                                </ul>
                                <br>
                                <p class="dela title is-size-6 mb-2">QUICK STATS</p>
                                <p class=" is-size-5 has-text-grey">450+ days, 350GB+ Data, 800+ Creatives and counting
                                </p>

                            </div>

                        </div>
                    </section>


                </div>

                <br>
                <br>

                <br>
                <div class="columns is-variable is-8">
                    <div class="column is-6">
                        <p class="subtitle dela " data-aos="fade-up">
                            01. CREATIVES
                        </p>
                        <p class="title dela " data-aos="fade-up">
                            Creative Styling & Direction
                        </p>

                        <p class="is-size-4-desktop is-size-5-touch" data-aos="fade-up">
                            Our agency took a holistic approach to revitalize Anuvas' brand through innovative creative
                            direction. We began with an in-depth analysis of Anuvas' core values, target audience, and
                            competitive landscape. This informed our strategy to blend traditional artistry with modern
                            design aesthetics, ensuring the brand's authenticity and appeal.

                        </p>
                    </div>

                </div>

                <section class="py-6">

                    <!-- Bnto GRid -->
                    <div class="fixed-grid has-4-cols has-2-rows ">
                        <div class="grid  ">
                            <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                                data-aos="zoom-in">
                                <div class="">
                                    <figure class="image is-2by3 ">
                                        <NuxtPicture src="/work/anuvas/reel_3.jpg" class=" container" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                                data-aos="zoom-in">
                                <div class="">
                                    <figure class="image is-2by3 ">
                                        <NuxtPicture src="/work/anuvas/reel_2.jpg" class=" container" alt="" />
                                    </figure>

                                </div>
                            </div>
                            <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                                data-aos="zoom-in">
                                <div class="">
                                    <figure class="image is-2by3 ">
                                        <NuxtPicture src="/work/anuvas/reel_1.jpg" class=" container" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                                data-aos="zoom-in">
                                <div class="">
                                    <figure class="image is-2by3 ">
                                        <NuxtPicture src="/work/anuvas/extra/reel_6.jpeg" class=" container" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div class="cell is-col-span-2-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                                data-aos="zoom-in">
                                <div class="">
                                    <figure class="image is-1by1 ">
                                        <NuxtPicture src="/work/anuvas/gram_2.png" class=" container" alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div class="cell is-col-span-2-desktop is-row-span-1-desktop is-col-span-4-mobile   box-bloop-bento"
                                data-aos="zoom-in">
                                <div class="">
                                    <figure class="image is-1by1 ">
                                        <NuxtPicture src="/work/anuvas/gram_1.png" style="object-fit:cover" alt="" />
                                    </figure>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <br>

                <div class="columns is-variable is-8">
                    <div class="column is-6">
                        <p class="subtitle dela " data-aos="fade-up">
                            03. SOCIAL MEDIA
                        </p>
                        <p class="title dela " data-aos="fade-up">
                            Building social media presence
                        </p>


                    </div>

                </div>
                <!-- Bnto GRid -->
                <div class="fixed-grid has-4-cols has-2-rows py-5 ">
                    <div class="grid  ">
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-2-mobile   box-bloop-bento"
                            data-aos="zoom-in is-1by1">
                            <div class="">
                                <figure class="image  ">
                                    <NuxtImg src="/work/anuvas/extra/thumb.png" class=" " alt="" />
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-2-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-1by1 ">
                                    <NuxtImg src="/work/anuvas/extra/thumb_2.png" class=" " alt="" />
                                </figure>

                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-2-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-1by1 ">
                                    <NuxtImg src="/work/anuvas/extra/thumb_3.png" class=" " alt="" />
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-2-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-1by1 ">
                                    <NuxtImg src="/work/anuvas/extra/thumb_4.png" class=" " alt="" />
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-2-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-2by3 ">
                                    <NuxtImg src="/work/anuvas/extra/reel_1.jpeg"></NuxtImg>
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-2-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-2by3 ">
                                    <NuxtImg src="/work/anuvas/extra/reel_2.jpg"></NuxtImg>
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-2-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-2by3 ">
                                    <NuxtImg src="/work/anuvas/extra/reel_3.jpg"></NuxtImg>
                                </figure>
                            </div>
                        </div>
                        <div class="cell is-col-span-1-desktop is-row-span-1-desktop is-col-span-2-mobile   box-bloop-bento"
                            data-aos="zoom-in">
                            <div class="">
                                <figure class="image is-2by3 ">
                                    <NuxtImg src="/work/anuvas/extra/reel_5.jpeg"></NuxtImg>
                                </figure>
                            </div>
                        </div>





                    </div>
                </div>



            </div>
        </section>
        <!-- <section class="section pt-0">
            <div class="container">
                <figure class="mb-6 has-background-yellow box box-bloop-bento-no image is-hidden-touch is-3by1"
                    data-aos="zoom-in">
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
                            We started with Gems paradise with a social first Strategy and build their gram.
                            Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit. Error voluptas iste accusantium
                            asperiores at est
                            perferendis. Aspernatur nemo quaerat labore maiores, ex magnam harum est mollitia
                            autem dolores
                            perferendis veniam!
                        </p>
                    </div>
                </div>

            </div>
        </section> -->



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