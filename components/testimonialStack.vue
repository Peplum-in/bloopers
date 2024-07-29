<template>

    <div class="section ">
        <section class="box-bloop  has-background-white py-6 px-2" style="background-color: lightyellow;">
            <div class="columns is-vcentered is-multiline is-centered is-variable is-8" data-aos="fade-up">
                <div class="column is-5 has-text-centered-touch">
                    <div>
                        <h1 class="title  is-size-2-desktop is-size-4-touch has-text-weight-bold dela pr-6-desktop">
                            Our clients can’t say  <br class="is-hidden-touch">enough about us.
                        </h1>


                        <p class="is-size-4-desktop is-size-6-touch">
                            That’s pretty special to us and it should also be a good sign for you! </p>

                    </div>
                </div>
                <div class="column is-5-desktop is-12-touch  ">
                    <div class="is-hidden-touch box-bloop has-shadow has-background-white p-6 " data-aos="zoom-in"
                        style="border:1px solid #dbdbdb;">


                        <p class=" pb-0 title has-text-weight-semibold is-size-5-touch is-size--desktop">
                            "{{ testimonials[currentTestimonial].quote }}"
                        </p>
                        <div class="is-flex is-justify-content-space-between	 is-align-items-center">
                            <div class="is-flex is-justify-content-start is-align-items-center">
                                <div class="is-hidden-touch">

                                    <figure class="image is-64x64 " v-if="testimonials[currentTestimonial].image"
                                        style="border:2px solid #dbdbdb; border-radius: 50%;">
                                        <NuxtPicture :src="testimonials[currentTestimonial].image" alt="" />
                                    </figure>
                                    <figure class="image is-64x64 has-background-yellow is-rounded" v-else
                                        style="border:2px solid #dbdbdb; border-radius: 50%;">
                                    </figure>
                                </div>
                                <div class="is-hidden-desktop">

                                    <figure class="image is-64x64 "
                                        style="border:2px solid #dbdbdb; border-radius: 50%;">
                                        <NuxtPicture :src="testimonials[currentTestimonial].image" alt="" />
                                    </figure>
                                </div>

                                <div class="ml-4">

                                    <p class="title dela is-size-4-desktop is-size-6-touch">
                                        {{ testimonials[currentTestimonial].author }}
                                    </p>

                                </div>
                            </div>
                            <div class="is-flex is-justify-content-space-between">

                                <button class="button-bloop-new-rounded mr-2" @click="changeTestimonial()">
                                    <figure class="image is-16x16">
                                        <img src="/ui/right.svg" style="rotate: 180deg;" alt="">
                                    </figure>
                                </button>
                                <button class="button-bloop-new-rounded " @click="changeTestimonial()">
                                    <figure class="image is-16x16">
                                        <img src="/ui/right.svg" alt="">
                                    </figure>
                                </button>
                            </div>
                        </div>


                    </div>
                    <div class="is-hidden-desktop box-bloop has-shadow has-background-white p-4 " data-aos="zoom-in"
                        style="border:1px solid #dbdbdb; border-radius:20px;">


                        <p class=" pb-0 title has-text-weight-semibold is-size-5-touch is-size--desktop">
                            "{{ testimonials[currentTestimonial].quote }}"
                        </p>
                        <div class="is-flex is-justify-content-space-between	 is-align-items-center">
                            <div class="is-flex is-justify-content-start is-align-items-center">
                                <div class="is-hidden-touch">

                                    <figure class="image is-64x64 " v-if="testimonials[currentTestimonial].image"
                                        style="border:2px solid #dbdbdb; border-radius: 50%;">
                                        <NuxtPicture :src="testimonials[currentTestimonial].image" alt="" />
                                    </figure>
                                    <figure class="image is-64x64 has-background-yellow is-rounded" v-else
                                        style="border:2px solid #dbdbdb; border-radius: 50%;">
                                    </figure>
                                </div>
                                <div class="is-hidden-desktop">

                                    <figure class="image is-48x48 "  v-if="testimonials[currentTestimonial].image"
                                        style="border:2px solid #dbdbdb; border-radius: 50%;">
                                        <NuxtPicture :src="testimonials[currentTestimonial].image" alt="" />
                                    </figure>
                                    <figure class="image is-48x48 has-background-yellow is-rounded" v-else
                                        style="border:2px solid #dbdbdb; border-radius: 50%;">
                                    </figure>
                                </div>

                                <div class="ml-4">

                                    <p class="title dela is-size-4-desktop is-size-6-touch">
                                        {{ testimonials[currentTestimonial].author }}
                                    </p>

                                </div>
                            </div>
                            <div class="is-flex is-justify-content-space-between">

                                <button class="button-bloop-new-rounded " style="scale:0.8" @click="changeTestimonial()">
                                    <figure class="image is-16x16" >
                                        <img src="/ui/right.svg" alt="">
                                    </figure>
                                </button>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </section>

    </div>
</template>
<script>
export default {

    methods: {
        changeTestimonial() {
            this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
            console.log('changeTestimonial');
        }
    },
    data() {
        return {
            currentTestimonial: 0,
            testimonials: [
                {
                    quote:
                        "I have referred Bloopers to anyone who asks for an all rounder creative powerhouse. I’ve always felt we were more than just a client, but true partners.",
                    author: "Anuvas",
                    image: "/brands/anuvas.jpg",
                },
                {
                    quote:
                        "Amatri brings fresh, innovative ideas to the table every time, and her diverse knowledge makes a real difference. We’ve seen incredible growth thanks to her brilliant insights!",
                    author: "Symetree",
                    image: "/brands/symetree.jpg",
                },
                {
                    quote:
                        "The expertise is spot on. What I like the best is she is dependable for resolving any issue.",
                    author: "JSB Events",
                    image: "",
                },
                {
                    quote:
                        "We believe they know my brand better than us. They manage socials and marketing so we can focus only on business. It’s been two years and we are still hooked",
                    author: "Gems Paradise",
                    image: "",
                },
                {
                    quote: "Our collaboration has been nothing short of amazing.",
                    author: "ShyleByAstha",
                    image: "",
                },
            ],
        };
    },
};
</script>

<style>
.has-shadow {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* .box-bloop {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
} */

.work-card-wrapper {
    transition: 0.4s all ease;
    border-radius: 30px;
    margin-bottom: 1rem;
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


.img-stack-2 {
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
</style>