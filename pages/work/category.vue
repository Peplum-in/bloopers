<template>
    <div>



        <section id="work-list" class="my-6 is-hidden-tablet section">
            <div class="columns my-6">
                <div class="column  is-12-mobile">
                    <div class="notification px-3 mr-6 ml-3 my-6 has-background-yellow">
                        <figure class="image is-5by4">
                            <img class="work-image-mobile" src="/profile/product_photography/airpods-pro-intermediate.jpg"
                                style="z-index:0" alt="">

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
        <section id="work-list" class="">
            <div class="columns my-0 mx-0 is-multiline">
                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <div class="work-gradient"></div>
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        for Daily Object</h2>

                    <figure class="image  is-relative " style="overflow:hidden">
                        <img class="work-image-mobile " src="/profile/product_photo/airpods-pro-intermediate.jpg" />
                    </figure>
                </div>

                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <!-- <div class="work-gradient"></div> -->
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Campaigns for Daily Objects</h2>

                    <figure class="image  is-relative " style="overflow:hidden">
                        <img class="work-image-mobile" src="/profile/product_photo/asd (1).png" />
                        <!-- <img class="work-image" src="/img/asd (1).jpg" style="z-index:0" alt=""> -->
                    </figure>
                </div>

                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <!-- <div class="work-gradient"></div> -->
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Branding for Gems Paradise</h2>

                    <figure class="image  is-relative is-5by4" style="overflow:hidden">
                        <img class="work-image-mobile" src="/profile/product_photo/IMG_5763-1.jpg" />
                        <!-- <img class="work-image" src="/img/test3.jpg" style="z-index:0" alt=""> -->
                    </figure>
                </div>
                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <!-- <div class="work-gradient"></div> -->
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Creative shoot for Shift Alt</h2>

                    <figure class="image  is-relative is-5by4" style="overflow:hidden">
                        <img class="work-image-mobile" src="/profile/product_photo/party-ensemble.jpg" />
                        <!-- <img class="work-image" src="/img/test4.jpg" style="z-index:0" alt=""> -->
                    </figure>

                </div>
                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <!-- <div class="work-gradient"></div> -->
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Creative shoot for Shift Alt</h2>

                    <figure class="image  is-relative is-5by4" style="overflow:hidden">
                        <img class="work-image-mobile" src="/profile/product_photo/post.png" />
                        <!-- <img class="work-image" src="/img/test4.jpg" style="z-index:0" alt=""> -->
                    </figure>
                </div>
                <div class="column rotate-box px-0 py-0 has-background-yellow is-6-desktop is-relative">
                    <!-- <div class="work-gradient"></div> -->
                    <h2 class="work-image-text  title title-appear has-text-yellow is-size-1-desktop has-text-weight-bold">
                        Creative shoot for Shift Alt</h2>

                    <figure class="image  is-relative is-5by4" style="overflow:hidden">
                        <img class="work-image-mobile" src="/profile/product_photo/travel.jpg" />
                        <!-- <img class="work-image" src="/img/test4.jpg" style="z-index:0" alt=""> -->
                    </figure>
                </div>
            </div>
        </section>

        <section id="brand-list" class="section  py-6 has-background-white">
            <div class=" px-6 py-6">

                <div class="columns py-6 is-flexbox is-vcentered my-0 mx-0 is-multiline">
                    <div class="column px-0 py-0 is-6-desktop is-relative">
                        <h3 class="title is-size-1-desktop has-text-black">
                            Brands that we work with
                        </h3>

                    </div>


                </div>

                <div class="columns is-8 is-variable  is-multiline">
                    <div class="column  is-2-desktop" v-for="(row, index) in brands" :key="row.name">
                        <figure class="image is-4by3 bloop-logo">
                            <img :src="row.image" alt="" class="">
                        </figure>
                    </div>


                </div>



            </div>
        </section>



    </div>
</template>
<script setup>

const brands = [
    {
        'name': 'Daily Objects',
        'image': '/profile/brands/Frame 32.png'
    },
    {
        'name': 'Calvin Klien',
        'image': '/profile/brands/Frame 33.png'
    },
    {
        'name': 'Confetti',
        'image': '/profile/brands/Frame 29.png'
    },
    {
        'name': 'Wooden Street',
        'image': '/profile/brands/Frame 40.png'
    },
    {
        'name': 'Amaya',
        'image': '/profile/brands/Frame 41.png'
    },
    {
        'name': 'Jaipur Women Company',
        'image': '/profile/brands/Frame 42.png'
    },
    {
        'name': 'Kaksh',
        'image': '/profile/brands/Frame 30.png'
    },
    {
        'name': 'Sprint animal',
        'image': '/profile/brands/Frame 34.png'
    },
    {
        'name': 'TIRBARI',
        'image': '/profile/brands/Frame 35.png'
    },
    {
        'name': 'Wemen',
        'image': '/profile/brands/Frame 36.png'
    },
    {
        'name': 'Anuvas',
        'image': '/profile/brands/Frame 37.png'
    },
    {
        'name': 'symetree',
        'image': '/profile/brands/Frame 38.png'
    },
    {
        'name': 'June Studios',
        'image': '/profile/brands/Frame 39.png'
    },

];
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


</script>


<style>
.title-appear {
    z-index: 3;
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    position: absolute;
}

.upper-bar {
    border-top: 0.5px solid #fefefe70;
    margin-top: 1.5rem;
    padding-top: 0.8rem;
}

.bloop-logo {
    opacity: 0.6;
    cursor: pointer;
    transition: 0.2s all ease-in;
    /* transform: rotateX('30'); */
}

.bloop-logo:hover {
    opacity: 1;
    /* transform: rotateX('30'); */
}


/* .work-gradient {
    transition: 0.4s all ease;
    opacity: 0;
} */

.rotate-box:hover>.work-gradient>img {
    /* z-index: 1; */
    width: 100%;
    height: 100%;
    opacity: 1;
    background-image: linear-gradient(#000, rgba(0, 0, 0, .95) 0%, transparent);
    position: absolute;
}

.rotate-box:hover>.work-image-text {
    /* transition: 0.4s all ease; */
    transform: translateX(20px) translate3d(15px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) skew(0deg, 0deg);
    transform-style: preserve-3d;

    /* position: relative;
    overflow: cl?p-margin: content-box; */
    display: inline-block;
    opacity: 1;
}

.work-image {
    transition: 0.4s all ease;
    position: relative;
    overflow: clip;
    
    /* z-index: 1; */
    overflow-clip-margin: content-box;
    display: inline-block;
}

.work-image-mobile {
    transition: 0.4s all ease;
    position: relative;
    overflow: clip;
    /* z-index: 1; */
    overflow-clip-margin: content-box;
    display: inline-block;
    transform: translate(2.5rem, -2rem);
    scale: 1.1
        /* transform:; */
}

.work-image-text {
    /* z-index: 2; */
    /* transition: 0.4s t ease; */
    transition: 0.7s all ease;
    display: inline-block;
    opacity: 0
}



.work-image:hover {
    /* z-index: 3; */
    transform: translate3d(15px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) skew(0deg, 0deg);
    filter: grayscale(0.8);
    transform-style: preserve-3d;
    /* opacity: 0.7; */
    /* cursor: url('/assets/icons/right-72.svg'), auto; */
}





/* Marquee */




.marquee {
    height: 40px;
    width: 120%;

    overflow: hidden;
    position: relative;
}

.marquee div {
    display: block;
    width: 300%;
    height: 40px;

    position: absolute;
    overflow: hidden;

    animation: marquee 8s linear infinite;
}

.marquee span {
    /* float: left; */
    /* width: fit-content;
    padding: 0 1vw; */
}

.marquee-work {
    height: 40px;
    width: 120%;

    overflow: hidden;
    position: relative;
}


.logo-box {
    background-color: white;
    width: 248px;
    border-radius: 3px;
    height: 248px;
}

.logo-box img {
    opacity: 0.6;
}

.marquee-work .logo-box {
    display: block;
    width: 300%;
    height: 40px;

    position: absolute;
    overflow: hidden;

    animation: marquee 8s linear infinite;
}

.marquee-work .logo-box {
    float: left;
    width: fit-content;
    padding: 0 1vw;
}

@keyframes marquee {
    0% {
        left: -10%;
    }

    100% {
        left: -100%;
    }
}
</style>