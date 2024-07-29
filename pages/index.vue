<template>
    <div>
        <section class="section px-0 has-background-yellow-gradient hero is-fullpage-with-navbar">
            <div class="columns is-hidden-mobile is-variable is-8 mt-1 is-vcentered">
                <div class="column container section is-6-desktop is-12-mobile">
                    <h1 data-aos="fade-up" data-aos-delay="100"
                        class="has-text-centered-touch title dela is-size-1-desktop is-size-4-touch"
                        style="font-weight: 200!">
                        People call us an agency, production studio, content creators, nut heads and
                        literally whatever. As long as we can help. <br />
                    </h1>
                    <nuxt-link data-aos="fade-up" to="/services" data-aos-delay="150"
                        class="button button-bloop-new has-text-black has-text-weight-bold is-clickable">
                        HERE'S HOW WE CAN HELP
                    </nuxt-link>
                </div>
                <div class="column is-6-desktop">
                    <div class="hero-grid-container">
                        <figure class="Hero-Reel video is-16by9" data-aos="zoom-in" data-aos-delay="100">
                            <video autoPlay muted loop playsinline style="border-radius: 15px">
                                <source src="/bloopers-reel.webm" class="" style="border-radius: 15px"
                                    type="video/mp4" />
                            </video>
                        </figure>
                        <div class="Pop">
                            <figure class="image" data-aos="fade-left" data-aos-delay="120">
                                <NuxtPicture placeholder src="/ui/hero-assets/gemspara-2.png" alt="" />
                            </figure>
                        </div>
                        <div class="Pop Pop-alt">
                            <figure class="image" data-aos="fade-up" data-aos-delay="110">
                                <NuxtPicture placeholder src="/ui/hero-assets/image_60.png" alt="" />
                            </figure>
                        </div>
                        <div class="pop">
                            <figure class="image" data-aos="fade-up" data-aos-delay="120">
                                <NuxtPicture placeholder src="/ui/hero-assets/Group_299.png" alt="" />
                            </figure>
                        </div>
                        <div class="pop2">
                            <figure class="image" data-aos="fade-up" data-aos-delay="10">
                                <NuxtPicture placeholder src="/ui/hero-assets/roas-2.png" alt="" />
                            </figure>
                        </div>
                        <div class="pop3">
                            <figure class="image" data-aos="fade-right" data-aos-delay="130">
                                <NuxtPicture placeholder src="/ui/hero-assets/Group_295.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-hidden-tablet is-variable is-8 mt-1 is-vcentered">
                <div class="column is-6-desktop">
                    <div class="hero-grid-container">
                        <figure class="Hero-Reel video is-16by9" data-aos="zoom-in" data-aos-delay="100">
                            <video autoPlay muted loop playsinline style="border-radius: 15px">
                                <source src="/bloopers-reel.webm" class="" style="border-radius: 15px"
                                    type="video/mp4" />
                            </video>
                        </figure>
                        <div class="Pop">
                            <figure class="image" data-aos="fade-left" data-aos-delay="120">
                                <NuxtPicture placeholder src="/ui/hero-assets/gemspara.png" alt="" />
                            </figure>
                        </div>
                        <div class="Pop Pop-alt">
                            <figure class="image" data-aos="fade-up" data-aos-delay="110">
                                <NuxtPicture placeholder src="/ui/hero-assets/image_60.png" alt="" />
                            </figure>
                        </div>
                        <div class="pop">
                            <figure class="image" data-aos="fade-up" data-aos-delay="120">
                                <NuxtPicture placeholder src="/ui/hero-assets/Group_299.png" alt="" />
                            </figure>
                        </div>
                        <div class="pop2">
                            <figure class="image" data-aos="fade-up" data-aos-delay="10">
                                <NuxtPicture placeholder src="/ui/hero-assets/roas-2.png" alt="" />
                            </figure>
                        </div>
                        <div class="pop3">
                            <figure class="image" data-aos="fade-right" data-aos-delay="130">
                                <NuxtPicture placeholder src="/ui/hero-assets/Group_295.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="column container section is-6-desktop is-12-mobile">
                    <h1 data-aos="fade-up" data-aos-delay="100"
                        class="has-text-centered-touch title dela is-size-1-desktop is-size-4-touch"
                        style="font-weight: 200!">
                        People call us a branding agency, creative studio, developers, nut heads and
                        literally whatever. As long as we can help. <br />
                    </h1>
                </div>
            </div>
        </section>

        <section class="work-list mt-6">
            <!-- <tape/> -->
            <div class="section">
                <p class="has-text-weight-semibold is-size-3-desktop has-text-centered is-size-5-touch dela"
                    data-aos="fade-up">
                    Featured Work
                </p>
                <br />
                <div class="columns is-variable is-0 mb-0">
                    <nuxt-link to="/work/gems-paradise"
                        class="column is-clickable work-card-wrapper is-4-desktop is-relative" data-aos="zoom-in">
                        <div class="work-card">
                            <figure class="image is-relative is-5by4" style="overflow: hidden; border-radius: 3px">
                                <NuxtPicture placeholder sizes="lg:50vw md:50vw sm:100vw" src="/work/gems/4.png"
                                    style="z-index: 0" alt="" />
                            </figure>
                        </div>
                        <div class="px-4 py-5">
                            <p class="title dela is-size-4-desktop is-size-5-touch has-text-weight-bold">
                                Gems Paradise
                            </p>
                            <p class="subtitle is-size-5 is-size-6-touch mb-0">
                                Rebranding a 200yr old legacy
                            </p>
                            <p class="is-size-6 mt-2 has-text-grey">
                                Branding, Creative Shoots, Social Media, Marketing
                            </p>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/work/anuvas" class="column is-clickable work-card-wrapper is-4-desktop is-relative"
                        data-aos="zoom-in">
                        <div class="work-card">
                            <figure class="image is-relative is-5by4" style="overflow: hidden; border-radius: 20px">
                                <NuxtPicture placeholder sizes="md:50vw sm:100vw" src="/extra/creative.jpg"
                                    style="z-index: 0" alt="" />
                            </figure>
                        </div>
                        <div class="px-4 py-5">
                            <p class="title dela is-size-4-desktop is-size-5-touch has-text-weight-bold">
                                Anuvas
                            </p>
                            <p class="subtitle is-size-5 is-size-6-touch mb-0">
                                Building social presence for a Handicraft D2C brand.
                            </p>
                            <p class="is-size-6 mt-2 has-text-grey">Social Media, Creative Shoots</p>
                        </div>
                    </nuxt-link>
                    <!-- <div 
                        class="column is-clickable  work-card-wrapper  is-4-desktop is-relative" data-aos="zoom-in">
                        <div class="work-card ">
                            <figure class="image is-relative is-5by4" style="overflow:hidden;border-radius: 20px;">
                                <NuxtPicture placeholder sizes="md:50vw sm:100vw" src="/work/do/hero.jpeg"
                                    style="z-index:0" alt="" />
                            </figure>

                        </div>
                        <div class="px-4 py-5">

                            <p class="   title  dela  is-size-4-desktop  is-size-5-touch has-text-weight-bold">
                                </p>
                            <p class="subtitle  is-size-5 is-size-6-touch mb-0 ">Creative direction and styling for
                                daily accessories </p>
                            <p class="  is-size-6  mt-2 has-text-grey">Creative Shoots, Campaigns
                            </p>
                        </div>


                    </div> -->
                </div>
                <div class="has-text-centered">
                    <nuxt-link to="/work" class="button button-bloop-new">VIEW ALL WORKS</nuxt-link>
                </div>
            </div>
        </section>
        <div class="section">
            <section class="py-6 has-background-white" style="">
                <p class="has-text-weight-semibold has-text-centered is-size-5-desktop is-size-6-touch">
                    SERVICES
                </p>
                <h1 class="title is-size-2-desktop has-text-centered is-size-4-touch dela">
                    Here's some of the ways we can help you with
                </h1>

                <div class="fixed-grid has-4-cols has-4-rows pt-4">
                    <div class="grid">
                        <NuxtLink to="/services/branding"
                            class="cell is-col-span-1-desktop is-col-span-1-fullhd is-col-span-4-mobile is-col-span-2-tablet box-bloop-bento-section"
                            data-aos="zoom-in">
                            <div class="">
                                <h2 class="pt-5 px-5 pb-0 title is-size-4-touch is-size-3-desktop">
                                    Branding <br />& Strategy
                                </h2>
                                <figure class="image is-1by1">
                                    <div class="img-stack">
                                        <NuxtPicture placeholder src="/ui/services-hero/branding.jpg" alt="" />
                                    </div>
                                    <div class="img-stack-2"></div>
                                </figure>
                                <div class="px-5">
                                    <p class="py-5 subtitle is-size-5-desktop is-size-6-touch">
                                        Take your branding to the next level. With strategies that will help
                                        your brand scale.
                                    </p>
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/services/creative_styling"
                            class="is-clickable cell is-col-span-1-desktop is-col-span-2-tablet is-col-span-4-mobile box-bloop-bento-section"
                            data-aos="zoom-in">
                            <div class="">
                                <h2 class="pt-5 px-5 pb-0 title is-size-4-touch is-size-3-desktop">
                                    Creative Direction <br />
                                    & Styling
                                </h2>
                                <figure class="image is-1by1">
                                    <div class="img-stack">
                                        <NuxtPicture placeholder src="/ui/services-hero/creative.jpg" alt="" />
                                    </div>
                                    <div class="img-stack-2"></div>
                                </figure>
                                <p class="py-5 px-5 subtitle is-size-5-desktop is-size-6-touch">
                                    Take your wildest ideas and transform them into jaw-dropping realities.
                                    From concept to execution, we're the architects of imagination.
                                </p>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/services/creative_styling"
                            class="is-clickable cell is-col-span-1-desktop is-col-span-2-tablet is-col-span-4-mobile box-bloop-bento-section"
                            data-aos="zoom-in">
                            <div class="">
                                <h2 class="pt-5 px-5 pb-0 title is-size-4-touch is-size-3-desktop">
                                    Social Media <br />& Management
                                </h2>
                                <figure class="image is-1by1">
                                    <div class="img-stack">
                                        <NuxtPicture placeholder src="/ui/services-hero/social.jpg" class="" alt="" />
                                    </div>
                                    <div class="img-stack-2"></div>
                                </figure>
                                <p class="py-5 px-5 subtitle is-size-5-desktop is-size-6-touch">
                                    Our content strategists are the puppet masters of words and visuals,
                                    weaving stories that make hearts skip a beat.
                                </p>
                            </div>
                        </NuxtLink>

                        <NuxtLink to="/services/ugc_influencers_collaborations"
                            class="cell is-col-span-1-desktop is-col-span-4-mobile is-col-span-2-tablet is-row-span-1-tablet box-bloop-bento-section"
                            data-aos="zoom-in">
                            <div class="">
                                <h2 class="pt-5 px-5 pb-0 title is-size-4-touch is-size-3-desktop">
                                    UGC, Influencers
                                    <br />& Collaborations
                                </h2>
                                <figure class="image is-1by1">
                                    <div class="img-stack">
                                        <NuxtPicture placeholder src="/ui/services-hero/influencer.jpg" class=""
                                            alt="" />
                                    </div>
                                    <div class="img-stack-2"></div>
                                </figure>
                                <p class="py-5 px-5 subtitle is-size-5-desktop is-size-6-touch">
                                    From captivating campaigns to media magic, we'll put your brand in the
                                    spotlight it deserves.
                                </p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <div class="has-text-centered">
                    <nuxt-link to="/services" class="button button-bloop-new">ALL SERVICES & PROCESS</nuxt-link>
                </div>
            </section>
        </div>
        <section class="section my-0 mt-6 pb-0">
            <h3 class="is-size-2-desktop is-size-4-touch dela has-text-centered title has-text-weight-bold"
                data-aos="fade-up">
                Brands that we work with
            </h3>
        </section>
        <div class="reel-container my-6">
            <div class="marquee-img">
                <!-- Repeat the images in this container -->
                <div class="image-img is-hidden-touch ml-3 mt-5 my-3" v-for="(row, index) in brands" :key="row.name">
                    <figure class="image is-5by4">
                        <NuxtPicture placeholder :src="row.image" alt="" class="" />
                    </figure>
                </div>
                <div class="image-img-touch is-hidden-desktop ml-3 mt-3 mb-0" v-for="(row, index) in brands"
                    :key="row.name">
                    <figure class="image is-5by4">
                        <NuxtPicture placeholder :src="row.image" alt="" class="" />
                    </figure>
                </div>
            </div>
        </div>
       
       <TestimonialStack/>
     

        <audit class="mt-6" />
    </div>
</template>
<script setup>
const data_work = [
    {
        image: "/work/gems/gems.jpg",
        image_touch: "/work/gems/gems-touch.jpg",
        client: "Gems Paradise",
        work: "Product shoot",
        description:
            "We rebranded this 200yr old fine jewellery brand from Jaipur, took their social media to new heights.",
    },
];
const brands = [
    {
        name: "Daily Objects",
        image: "/brands/Frame_32.png",
    },
    {
        name: "Calvin Klien",
        image: "/brands/Frame_33.png",
    },
    {
        name: "Mastani",
        image: "/brands/Frame_62.png",
    },
    {
        name: "Wooden Street",
        image: "/brands/Frame_40.png",
    },
    {
        name: "Amaya",
        image: "/brands/Frame_41.png",
    },
    {
        name: "Jaipur Watch Company",
        image: "/brands/Frame_42.png",
    },
    {
        name: "Kaksh",
        image: "/brands/Frame_30.png",
    },
    {
        name: "Sprint animal",
        image: "/brands/Frame_34.png",
    },
    {
        name: "TIRBARI",
        image: "/brands/Frame_35.png",
    },
    {
        name: "Wemen",
        image: "/brands/Frame_36.png",
    },
    {
        name: "Anuvas",
        image: "/brands/Frame_37.png",
    },
    {
        name: "symetree",
        image: "/brands/Frame_38.png",
    },
    {
        name: "June Studios",
        image: "/brands/Frame_39.png",
    },
    {
        name: "AMATRI",
        image: "/brands/Frame_43.png",
    },
    {
        name: "Confetti",
        image: "/brands/Frame_61.png",
    },
    {
        name: "Kameez by Pooja",
        image: "/brands/Frame_63.png",
    },
];
</script>

<style>
.bloop-box {
    border: 1px solid #dbdbdb;
    background-color: #0a0a0a05 !important;
    border-radius: 20px !important;
    padding: 2rem;
    /* box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.1); */
}

.blooper-noti {
    border: 1px solid #d1d1d150;
    border-radius: 25px;
    padding: 2rem 2rem;
}

.bloop-img {
    border-radius: 0px;
    border: 20px solid #ffee00;
}

.scroll-columns {
    overflow-x: scroll;
}

.bloop-rnd {
    border-radius: 25px;
}

.bloop-img-touch {
    border-radius: 0px;
    border: 5px solid #ffee00;
}

@media (max-width: 768px) {

    /* Your styles for touch devices with max width here */
    .title-appear {
        z-index: 3;
        /* margin-top: 40px; */
        margin-left: 25px;
        /* margin-right: 20px; */
        bottom: 25px;
        position: absolute;
    }
}

@media (min-width: 769px) {

    /* Your styles for touch devices with max width here */
    .title-appear {
        z-index: 3;
        /* margin-top: 40px; */
        /* margin-right: 40px; */
        margin-left: 40px;
        bottom: 40px;
        position: absolute;
    }
}

/* .bloop-logo {
        transform: rotateX(30deg);
    }
} */

.upper-bar {
    border-top: 0.5px solid #fefefe70;
    margin-top: 1.5rem;
    padding-top: 0.8rem;
}

.bloop-logo {
    display: inline;
    padding: 0;
    opacity: 0.6;
    cursor: pointer;
    transition: 0.2s all ease-in;
    /* transform: rotateX('30'); */
}

.test-arrow {
    transition: 0.2s all ease-in;
}

.test-arrow:hover {
    translate: 2px;
    /* transform: translateX("2px"); */
}

.bloop-tag {
    background-color: white;
    /* opacity: 0.6; */
    /* transition: 0.2s all ease-in; */
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
    background-image: linear-gradient(#000, rgba(0, 0, 0, 0.75) 0%, transparent);
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
    scale: 1.1;
    /* transform:; */
}

.work-image-text {
    /* z-index: 2; */
    /* transition: 0.4s t ease; */
    transition: 0.7s all ease;
    display: inline-block;
    opacity: 0;
}

.work-image:hover {
    /* z-index: 3; */
    transform: translate3d(15px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) skew(0deg, 0deg);
    filter: grayscale(100%);
    transform-style: preserve-3d;
    /* opacity: 0.7; */
    cursor: url("/assets/icons/right-72.svg"), auto;
}

/* work Card */

.work-card-wrapper {
    transition: 0.4s all ease;
    border-radius: 30px;
    margin-bottom: 1rem;
}

.work-card-wrapper p {
    transition: 0.4s all ease;
}

.work-card {
    box-sizing: border-box;
    border-radius: 25px !important;
    border: 7px solid rgba(0, 0, 0, 0);
    transition: all 0.2s ease-in;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    /* padding:1rem; */
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid #c9c9c9;
}

.work-card p {
    transition: all 0.2s ease-in;
}

.work-card h2 {
    transition: all 0.2s ease-in;
}

.work-card-wrapper:hover p {
    transform: translateY(-0.4rem);
    /* border:1px solid #0a0a0a80;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid #c9c9c9; */
}

.work-card:hover h2 {
    /* transform: translateY(-0.4rem); */
    /* border:1px solid #0a0a0a80;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid #c9c9c9; */
}

/* Marquee */

.marquee {
    height: 40px;
    width: 120%;

    overflow: hidden;
    position: relative;
}

.marquee-mobile {
    height: 30px;
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

.marquee-mobile div {
    display: block;
    width: 300%;
    height: 40px;

    position: absolute;
    overflow: hidden;

    animation: marquee 4s linear infinite;
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

.reel-container {
    /* width: 120%; */
    transform: rotate(-1deg);
    width: 100%;
    background-color: #fff000;
    overflow: hidden;
}

.reel-container-alt {
    /* width: 120%; */
    margin-top: 6rem;
    margin-bottom: 6rem;
    transform: rotate(1deg);
    width: 100%;
    background-color: #fff000;
    overflow: hidden;
}

.reel-container-white-bg {
    /* width: 120%; */
    margin-top: 6rem;

    transform: rotate(1deg);
    width: 100%;
    background-color: #fff;
    overflow: hidden;
}

.box-bloop-bento-section {
    /* background-color: #fff00040; */
    border-radius: 15px;
    cursor: pointer;
    background-color: white;
    border: 1px solid #dbdbdb;
    transition: 0.3s all ease;
    /* transition: 0.2s all ease-in-out; */
}

.box-bloop-bento-section:hover {
    background-color: #fff000;
    border-radius: 15px;
    cursor: pointer;
    /* border: 1px solid #dbdbdb; */
}

.box-bloop-bento-section img {
    transition: 0.2s all ease-in-out;
    /* border: 3px inset yellow; */
    /* padding:10px; */
    z-index: 2;
    border: 13px solid #fff !important;
    background-color: white;
    border-radius: 25px;
    /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1); */
}

.box-bloop-bento-section:hover img {
    scale: 0.8;
    /* transform: rotateX(30deg); */
    transform: rotate(3deg);
    z-index: 2;
    /* border: 15px solid black; */
    border: 14px solid #fff !important;
    border-radius: 15px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 15px 4px rgba(0, 0, 0, 0.1);
}

.box-bloop-bento-section .img-stack-2 {
    background: #dbdbdb;
    width: 100%;
    height: 100%;
    /* scale: 0.8; */
    z-index: 1;

    /* transform: rotateX(30deg); */
    /* transform: rotate(10deg); */

    /* border: 15px solid black; */
    border: 14px solid #fff !important;
    border-radius: 15px;
    transition: 0.2s all ease-in-out;
    /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 15px 3px rgba(0, 0, 0, 0.1); */
}

.box-bloop-bento-section:hover .img-stack-2 {
    background: #dbdbdb;
    width: 100%;
    height: 100%;
    scale: 0.8;
    z-index: 1;

    /* transform: rotateX(30deg); */
    transform: rotate(12deg);

    /* border: 15px solid black; */
    border: 14px solid #fff !important;
    border-radius: 15px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 15px 3px rgba(0, 0, 0, 0.1);
}

.image-img {
    background-color: white;
    display: inline-block;
    width: 250px;
    /* Adjust the width as per your requirement */
    padding: 1.5rem;
    height: auto;
    border-radius: 7px;
    border: 1px solid #dbcd00;

    /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1); */
}

.image-img-touch {
    background-color: white;
    display: inline-block;
    width: 180px;
    /* Adjust the width as per your requirement */
    padding: 1.5rem;
    height: auto;
    border-radius: 7px;
    border: 1px solid #dbcd00;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    /* box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.1); */
}

.test-img {
    background-color: white;
    display: inline-block;
    width: 350px;
    /* Adjust the width as per your requirement */
    padding: 1.5rem;
    height: auto;
    border-radius: 7px;
    border: 1px solid #dbcd00;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1);
}

.test-img img {
    border-radius: 5px;
    border: 1px solid #dbdbdb;
}

.test-img-touch img {
    border-radius: 5px;
    border: 1px solid #dbdbdb;
}

.test-img-touch {
    background-color: white;
    display: inline-block;
    width: 250px;
    border-radius: 7px;
    border: 1px solid #dbcd00;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);

    /* Adjust the width as per your requirement */
    /* padding: 1rem; */
    height: auto;
}

.yellow-img {
    background-color: #fff000;
    display: inline-block;
    width: 350px;
    border-radius: 7px;
    border: 1px solid #dbcd00;
    /* Adjust the width as per your requirement */
    padding: 1.5rem;
    height: auto;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
}

.yellow-img img {
    border: 1px solid #dbcd00;
    border-radius: 5px;
    /* Adjust the width as per your requirement */
}

.yellow-img-touch {
    background-color: #fff000;
    display: inline-block;
    border-radius: 5px;
    width: 250px;
    border: 1px solid #dbcd00;
    /* Adjust the width as per your requirement */
    /* padding: 1rem; */
    height: auto;
}

.marquee-img {
    display: inline-block;
    white-space: nowrap;
    animation: marquee-img 20s linear infinite;
    /* Adjust the animation duration as per your requirement */
}

.marquee-img-touch {
    display: inline-block;
    white-space: nowrap;
    animation: marquee-img 30s linear infinite;
    /* Adjust the animation duration as per your requirement */
}

.marquee-img-alt {
    display: inline-block;
    white-space: nowrap;
    animation: marquee-img-alt 20s linear infinite;
    /* Adjust the animation duration as per your requirement */
}

.marquee-img-touch-alt {
    display: inline-block;
    white-space: nowrap;
    animation: marquee-img-alt 30s linear infinite;
    /* Adjust the animation duration as per your requirement */
}

@keyframes marquee-img {
    0% {
        /* left:-10%; */
        transform: translateX(-1%);
    }

    100% {
        transform: translateX(-45%);
    }
}

@keyframes marquee-img-alt {
    0% {
        /* left:-10%; */
        transform: translateX(-1%);
    }

    100% {
        transform: translateX(-45%);
    }
}

@keyframes marquee-img-alt-11 {
    0% {
        /* left:-10%; */
        transform: translateX(-1%);
    }

    100% {
        transform: translateX(-25%);
    }
}

.vid-above {
    border: 1px solid #fff;
    background-color: #fff;
    padding: 2px;
    display: inline;
    border-radius: 10px;
}

.vid-frame {
    position: relative;
    /* box-/: 11px solid #debede; */
    /* border: 10px solid #fff;
    border-radius: 20px !important;
    /* border:1px solid #dbdbdd; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
    /* padding:2rem; */
    transform: rotate(-3deg) translateY(-1.8rem);
    z-index: -1;
}

.vid-frame video {
    /* width: 550px; */
    /* transform: scale(1.3); */
    /* position: absolute; */
    /* left: 0; */
    /* box-/: 11px solid #debede; */
    /* border: 7px solid #fefefe; */
    border-radius: 15px !important;
    border: 1px solid gray;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    /* padding:2rem; */
}

.hero-grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr 1fr; */
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". Hero-Reel Hero-Reel pop2"
        "Pop Hero-Reel Hero-Reel ."
        ". Hero-Reel Hero-Reel pop3"
        "pop Hero-Reel Hero-Reel .";
}

.Hero-Reel {
    grid-area: Hero-Reel;
    z-index: 50;
}

.Pop {
    grid-area: Pop;
    /* position: absolute; */
    /* width: 200px; */
    transform: translateX(30%) translateY(-30%) rotate(-4deg);
    z-index: 10;
}

.Pop-alt {
    grid-area: Pop;
    /* position: absolute; */
    /* width: 200px; */
    transform: translateX(45%) translateY(-130%) rotate(-4deg) scale(0.4) rotateZ(280deg);
    z-index: 60;
}

.pop {
    grid-area: pop2;
    /* position: absolute; */
    /* width: 200px; */
    transform: translateX(-50%) translateY(30%) rotate(4deg);
    z-index: 60;
}

.pop2 {
    grid-area: pop;
    /* position: absolute; */
    /* width: 200px; */
    transform: translateX(50%) translateY(-30%) rotate(4deg);
    z-index: 60;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
}

.pop2 {
    grid-area: pop;
    /* position: absolute; */
    /* width: 200px; */
    transform: translateX(50%) translateY(-70%) rotate(4deg);
    z-index: 60;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
    /* box-shadow: @apply shadow-md;? */
}

.pop3 {
    grid-area: pop3;
    /* width: 200px; */
    transform: translateX(-50%) translateY(-10%) rotate(4deg);
    z-index: 60;
}

.has-background-yellow-gradient {
    background: linear-gradient(to top, lightyellow, transparent),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fill-opacity='0.9'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3C/g%3E%3C/svg%3E"),
        radial-gradient(circle at bottom, yellow, transparent);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    /* max-height: 90vh; */
    /* background: linear-gradient(to top, yellow, transparent); */
    /* background-image: ur l("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 100 100'><g fill='#ffffff' fill-opacity='0.1'><path d='M0 0h100v100H0z'/></g></svg>"); */
}
</style>
