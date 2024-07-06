<template>
    <div>
        <section class="section mb-0 pb-0">
            <div class="columns has-text-centered is-mobile is-centered">
                <div class="column is-7-desktop is-8-tablet is-12-mobile ">
                    <h1 data-aos="fade-up" class="title is-size-1-desktop is-size-3-touch pt-6 dela">
                        Let's start something <br>
                        completely new together.
                    </h1>
                    <p class="has-text-weight-semibold is-size-5-desktop is-size-6-touch "> Drop us a line, and we'll
                        get in touch.
                        <br>
                        We'll see if we're a match and how we can help each other.
                    </p>
                    <br>
                    <div class="buttons is-centered">

                        <nuxt-link data-aos="fade-up" data-aos-delay="250" to="#send-brief"
                            class="button button-bloop-new is-size-5">
                            START A PROJECT
                        </nuxt-link>
                        <!-- <a data-aos="fade-up" data-aos-delay="250" to="#send-brief"
                            class="button button-bloop-new bloop-white is-size-5">
                            DM TO COLLABORATE
                    </a> -->
                    </div>
                    <br>
                    <br>
                    <p class="has-text-weight-semibold is-size-6 "> REACH OUT AT </p>
                    <div class=" columns py-6 is-multiline is-centered is-mobile">
                        <div class="column is-4-desktop is-10-mobile">

                            <div class="columns is-6-desktop is-mobile is-multiline is-size-10-touch">


                                <a href="https://www.instagram.com/wearebloopers/" target="_blank" class="column is-4">
                                    <div class="box-bloop-bento " style="">
                                        <figure class="image is-1by1 ">

                                            <NuxtImg src="/contact/instagram.png" class="px-2 py-2 container" alt="" />
                                        </figure>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/company/wearebloopers/" target="_blank"
                                    class="column is-4">
                                    <div class="box-bloop-bento " style="">
                                        <figure class="image is-1by1 ">

                                            <NuxtImg src="/contact/linkedin.png" class="px-2 py-2 container" alt="" />
                                        </figure>
                                    </div>
                                </a>

                                <a href="mailto:hello@wearebloopers.com" target="_blank" class="column is-4">
                                    <div class="box-bloop-bento " style="">
                                        <figure class="image is-1by1 ">

                                            <NuxtImg src="/contact/gmail.png" class="px-2 py-2 container" alt="" />
                                        </figure>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/wearebloopers/" target="_blank" class="column is-4">
                                    <div class="box-bloop-bento " style="">
                                        <figure class="image is-1by1 ">

                                            <NuxtImg src="/contact/call.png" class="px-2 py-2 container" alt="" />
                                        </figure>
                                    </div>
                                </a>


                            </div>
                        </div>
                        <!-- <div class="columns is-mobile is-multiline">
                        </div> -->
                    </div>
                </div>
            </div>


        </section>

        <div id="send-brief" class="section is-hidden-touch">

            <section class="box-bloop-bento-no py-6 px-6"
                style="background-color: lightyellow; border-color:#ff000050;">
                <div class="columns is-vcentered is-varaible is-8" data-aos="fade-up">
                    <div class="column is-5">
                        <div>
                            <h1 class="title is-size-2-desktop is-size-4-touch dela pr-6">
                                Reach out with your idea, and we'll help you build it.
                            </h1>

                            <br>
                            <br>
                            <p class="is-size-5-desktop is-size-6-touch">
                                Add your project briefs so we have a better understanding of your requirements. We'll
                                get back to you with a plan of action.
                            </p>


                            <div style="position: fix; height: 150px;"></div>
                            <div class="mt-6">
                                <figure class="image is-128x128">
                                    <NuxtPicture src="/services/blooper-person.png" alt="" />
                                </figure>
                                <p class="title is-size-2-desktop is-size-4-touch dela">
                                    Book a free discovery call.
                                </p>

                                <button class="button button-bloop-new">
                                    BOOK A CALL
                                </button>

                            </div>
                        </div>

                    </div>
                    <div class="column is-5-desktop is-12-touch is-offset-2-desktop">
                        <form name="gform" class="" v-if="sent">
                            <div class="">

                                <p class="heading is-size-5 has-text-weight-semibold dela">Name</p>
                                <input name="name" type="text" placeholder="Please enter your name"
                                    class="is-size-5 bloop-input">
                            </div>
                            <div class="mt-6">

                                <p class="heading is-size-5 has-text-weight-semibold dela">Email*</p>

                                <input name="email" type="email" placeholder="Please enter your e-mail"
                                    class=" is-size-5 bloop-input">
                            </div>
                            <div class="mt-6">

                                <p class="heading is-size-5 has-text-weight-semibold dela">Whatsapp/Contact No.</p>
                                <input name="contact" type="text" placeholder="Please enter your contact number"
                                    class="is-size-5 bloop-input">
                            </div>
                            <div class="mt-6">

                                <p class="heading is-size-5 has-text-weight-semibold dela">Project Brief</p>
                                <input name="message" type="textarea" placeholder="Please enter your requirements"
                                    class=" is-size-5 bloop-input">
                            </div>

                            <button @click.prevent="myHandler()" class="mt-6 button button-bloop-new">
                                SUBMIT </button>
                        </form>
                        <div v-else class="">
                            <figure class="image container" data-aos="zoom-in" style="width: 100px;">
                                <NuxtImg src="/ui/confetti.png" class=" container" alt="" />
                            </figure>
                            <p class="title has-text-centered mt-3" data-aos="fade-in">We've received your message. <br>
                                we'll reach out to you shortly.
                                <br>
                                <br>
                                Psst. <br> We are always up for a chai meet!
                            </p>
                        </div>



                    </div>


                </div>



            </section>
        </div>
        <div id="send-brief" class=" is-hidden-desktop"
            style=" border-top:1px solid #dbdbdb;   background-color: #f9f8f6;">

            <section class=" section" style="background-color: lightyellow; border-color:#ff000050;">
                <div class="columns is-vcentered is-varaible is-8" data-aos="fade-up">
                    <div class="column is-5">
                        <div>
                            <h1 class="title is-size-2-desktop is-size-4-touch dela pr-6">
                                Reach out with your idea, and we'll help you build it.
                            </h1>


                            <p class="is-size-5-desktop is-size-6-touch">
                                Add your project briefs so we have a better understanding of your requirements. We'll
                                get back to you with a plan of action.
                            </p>


                        </div>

                    </div>
                    <br>
                    <div class="column is-5-desktop is-12-touch is-offset-2-desktop">
                    
                        <form name="gform" class="" v-if="!sent">
                            <div class="">

                                <p class="heading is-size-5 has-text-weight-semibold dela">Name</p>
                                <input name="name" type="text" v-model="form.name" placeholder="Please enter your name"
                                    class="is-size-5 bloop-input">
                            </div>
                            <div class="mt-6">

                                <p class="heading is-size-5 has-text-weight-semibold dela">Email*</p>

                                <input name="email" type="email" v-model="form.email"
                                    placeholder="Please enter your e-mail" class=" is-size-5 bloop-input">
                            </div>
                            <div class="mt-6">

                                <p class="heading is-size-5 has-text-weight-semibold dela">Whatsapp/Contact No.</p>
                                <input name="contact" type="text" v-model="form.contact"
                                    placeholder="Please enter your contact number" class="is-size-5 bloop-input">
                            </div>
                            <div class="mt-6">

                                <p class="heading is-size-5 has-text-weight-semibold dela">Project Brief</p>
                                <input name="message" type="textarea" v-model="form.message"
                                    placeholder="Please enter your requirements" class=" is-size-5 bloop-input">
                            </div>

                            <button v-if="!sending" @click.prevent="myHandler()" class="mt-6 button button-bloop-new">
                                SUBMIT </button> 
                            <button v-if="sending" @click.prevent="myHandler()" class="mt-6 button button-bloop-new">
                                PLEASE WAIT ... </button> 

                        </form>

                        <div v-else class="" data-aos="fade-in">
                            <!-- <hr class="has-background-dark"> -->

                            <figure class="image " data-aos="zoom-in" style="width: 100px;">
                                <NuxtImg src="/ui/confetti.png" class=" container" alt="" />
                            </figure>
                            <p class=" is-size-5-touch   mt-3" data-aos="fade-in">We've
                                received your message. <br>
                                we'll reach out to you shortly.
                                <br>
                                <strong>
                                Psst.
                                </strong>
                                 We are always up for a chai meet!
                            </p>
                        </div>
                    </div>






                </div>



            </section>
        </div>


    </div>
</template>

<script>

export default {
    data() {
        return {
            sent: false,
            sending: false,
            errors: {},
            form: {
                name: null,
                contact: null,
                email: null,
                message: null,
                honey: null,
            },
        };
    },
    methods: {
        myHandler() {
            var url =
                "https://script.google.com/macros/s/AKfycbwnXguG0Z46Zt9m6G9AxNWoJaJd7kiq5Xt_-FcdsHmQ24J0NKs7siOi0LgTyQ4gp3djVQ/exec"// Check Data
            this.errors = {};
            Object.keys(this.form).forEach((item) => {
                if (!this.form[item]) {
                    if (item != "honey") {
                        this.errors[item] = true;
                    }
                }
                return this.form[item];
            });
            let check = Object.keys(this.form).every((item) => {
                if (item != "honey") {
                    return this.form[item];
                } else {
                    return true;
                }
            });
            if (check) {
                const form = document.forms["gform"];
                var sendingData = new FormData(form);
                this.sending = true;
                fetch(url, { method: "POST", body: sendingData })
                    .then((response) => {
                        this.sent = true;
                        this.sending = false;
                    })
                    .catch((error) => console.error("Error!", error.message));
            }
        },
    },

}
</script>
<style>
.bloop-sec {
    transition: 0.3s all ease-in;
}

.bloop-sec:hover {
    transform: scale(1.05);
    /* cursor: url('/assets/icons/right-out-72.svg'), auto; */
}

.bloop-pri {
    transition: 0.3s all ease-in;
}

.bloop-pri:hover {
    transform: scale(1.05);
    /* cursor: url('/assets/icons/right-72.svg'), auto; */
}

.has-background-pink {
    background-color: #fff000;
}


.bloop-check {
    border: 2px solid #0a0a0a;
    /* border-left:5px solid #0a0a0a; */
    border-radius: 0;
    color: black !important;
    background-color: transparent;
    box-shadow: none;
    /* cursor: url('/assets/icons/add-out-72.svg'), auto !important; */
    transition: 0.2s all ease-in;
}

.check-yes {

    color: white !important;
    /* cursor: url('/assets/icons/cross-sec.svg'), auto !important; */
    background-color: #0a0a0a;
}

.check-yes p {

    color: white !important;
    /* cursor: url('/assets/icons/cross-sec.svg'), auto !important;
    background-color: blue; */
}

.bloop-input {
    width: 100%;
    padding: 1rem 0;
    outline: none;
    border: none;
    transition: 0.2s all ease-in;
    border-bottom: 1px solid #0a0a0a50;
    background-color: transparent;
}

.bloop-input::placeholder {
    color: #0a0a0a60;
}

.bloop-input:focus,
.bloop-input:active {
    width: 100%;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid #0a0a0a;
}
</style>