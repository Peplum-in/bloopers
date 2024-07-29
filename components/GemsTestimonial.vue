<template>
    <div>

        <div class="has-background-yellow mt-6" data-aos="zoom-in">
            <br>
            <section class="section mb-4 pb-0 ">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <p class="has-text-weight-semibold" data-aos="fade-up">TESTIMONIALS </p>
                        <h1 data-aos="fade-up" class="title mb-4 dela is-size-2-desktop is-size-4-touch">
                            Happy clients whom we are pleased to work with
                        </h1>
                    </div>

                </div>



            </section>
            <div class="reel-container-alt">
                <div class="marquee-img is-hidden-touch">
                    <!-- Repeat the images in this container -->
                    <div data-aos="fade-left" class="test-img pb-4 mx-1  is-1by1 " v-for="(row, index) in brands"
                        :key="row.name">
                        <NuxtPicture :src="row.image" alt="" class="" />

                    </div>


                </div>
                <div class="marquee-img-touch is-hidden-desktop">
                    <div data-aos="fade-left"
                        class="test-img-touch mx-1 px-4  pt-3 pb-1  mb-0 is-hidden-desktop is-1by1 "
                        v-for="(row, index) in brands" :key="row.name">
                        <NuxtPicture :src="row.image" alt="" class="pb-0 mb-0" />

                    </div>

                </div>
            </div>
            <br>
            <section class="section  ">
                <div class="columns is-vcentered ">
                    <div class="column is-5 ">
                        <div class="is-flex is-justify-content-start 	 is-align-items-center	">
                            <div>

                                <figure class="image is-96x96 ">
                                    <NuxtPicture src="/work/gems/gems-people.png" alt="" />
                                </figure>
                            </div>
                            <div class="ml-4">

                                <p class="title dela is-size-4-desktop is-size-5-touch">
                                    Rachit Dhadda
                                </p>
                                <p
                                    class="subtitle has-text-black has-text-weight-semibold is-size-5-desktop is-size-6-touch">
                                    @Gems_paradise
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up" class="buttons">

                            <button class="mt-3 button button-bloop-new bloop-white ">INSTAGRAM</button>
                            <button class="mt-3 button  is-size-6 button-bloop-new bloop-white ">WEBSITE</button>
                        </div>
                    </div>
                    <div class="column is-7">
                        <p data-aos="fade-up" class="has-text-weight-semibold is-size-5-desktop is-size-6-touch mb-2">
                            Summarised with AI</p>

                        <p data-aos="fade-up" class=" is-size-4-desktop is-size5-touch">
                            "I believe she knows my brand better than me. She manages socials and marketing so I can
                            focus only on the business part. It’s been two years and we are still hooked"
                        </p>

                    </div>
                </div>
                <br>

            </section>
        </div>
    </div>
</template>

<script setup>

const brands = [
    {
        'image': '/testimonials/gems_1.jpg'
    },
    {
        'image': '/testimonials/gems_2.jpg'
    },
    {
        'image': '/testimonials/gems_3.jpg'
    },
    {
        'image': '/testimonials/gems_4.jpg'
    },
    {
        'image': '/testimonials/gems_5.jpg'
    },
    {
        'image': '/testimonials/gems_6_1.jpg'
    },
    {
        'image': '/testimonials/gems_7.jpg'
    },
    {
        'image': '/testimonials/gems_8.jpg'
    },
    {
        'image': '/testimonials/gems_9.jpg'
    },

    {
        'image': '/testimonials/gems_10.jpg'
    },
    {
        'image': '/testimonials/gems_11.jpg'
    },
    {
        'image': '/testimonials/gems_0.jpg'
    },

];


</script>

<style>
figure.is-rounded {
    border-radius: 50% !important;
}

.has-background-secondary {
    background-color: #0c0c0c000;
}

.has-background-yellow-secondary {
    background-color: #fff00028;
}
</style>