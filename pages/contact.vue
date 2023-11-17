<template>
    <div class="section ">
        <div class=" py-6 my-6">
            <div class="py-6">

                <h1 class="title is-size-1-desktop is-size-2-touch">
                    Let's start something <br> 
                    completely new together
                </h1>
                <p class=" is-size-3-desktop is-size-4-touch">
                    Drop us a line, and we'll get in touch.
                    <br>
                    We'll see if we're a match and how we can help each other.
                </p>
                <br>
                <nuxt-link to="#send-brief" class="button button-bloop is-size-5">
                    START A PROJECT </nuxt-link>

                <br>
                <div class="columns mt-6 is-vcentered">
                    <div class="column is-2">

                        <figure class="image  is-1by1">
                            <img class="container" src="/gifs/puzzle-inbox-message.png" alt="">
                        </figure>
                    </div>
                    <div class="column pl-6">
                        <div class="is-size-4">
                            <div class="is-inline-block">

                                <p class="is-size-5 has-text-weight-semibold">DM</p>
                                <a href="">@wearebloopers</a>
                            </div>
                            <div class="is-inline-block ml-5">

                                <p class="is-size-5 has-text-weight-semibold">EMAIL</p>
                                <a href="">hello@wearebloopers.com</a>
                            </div>
                            <div class="mt-4">

                                <p class="is-size-5 has-text-weight-semibold">CALL</p>
                                <a href="">+91-8258964050</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
    <div id="send-brief" class="section  is-medium has-background-pink">

        <h2 class="tile is-size-2-desktop has-text-weight-semibold">It's form fill up time</h2>
        <div class="mt-6">
            <div class="">

                <p class="heading is-size-4">YOUR NAME</p>
                <input type="text" placeholder="Please enter your name" class="is-size-3 bloop-input">
            </div>
            <div class="mt-6">

                <p class="heading is-size-4">YOUR EMAIL</p>

                <input type="email" placeholder="Please enter your e-mail" class="is-size-3 bloop-input">
            </div>
            <div class="mt-6">

                <p class="heading is-size-4">YOUR DIGITS - WHATSAPP FRIENDLY</p>
                <input type="text" placeholder="Please enter your contact number" class="is-size-3 bloop-input">
            </div>
            <div class="mt-6">

                <p class="heading is-size-4">PROJECT BRIEF</p>
                <input type="textarea" placeholder="Please enter your requirements" class="is-size-3 bloop-input">
            </div>
            
            <button class="mt-6 button button-bloop is-size-5">
                    SEND YOUR BLOOP </button>
        </div>


    </div>
    <!-- <div class="section container animate__animated animate__fadeIn">
        <div class="">
            <div class="columns is-8 is-centered is-variable">
                <div class="column">

                    <ul class="">

                        
                      
                    </ul>
                    
                </div>

            </div>

        </div>

    </div> -->
</template>

<script setup>

const form = ref({
    'req': {
        'social': false,
        'website': false,
        'branding': false,
        'creative': false,
        'strategy': false,
        'marketing': false,
        'application': false,
    }
})
function sendMessage() {
    // Gmail - Spreadsheet integration
}
</script>

<style>
.bloop-sec {
    transition: 0.3s all ease-in;
}

.bloop-sec:hover {
    transform: scale(1.05);
    cursor: url('/assets/icons/right-out-72.svg'), auto;
}

.bloop-pri {
    transition: 0.3s all ease-in;
}

.bloop-pri:hover {
    transform: scale(1.05);
    cursor: url('/assets/icons/right-72.svg'), auto;
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
    cursor: url('/assets/icons/add-out-72.svg'), auto !important;
    transition: 0.2s all ease-in;
}

.check-yes {

    color: white !important;
    cursor: url('/assets/icons/cross-sec.svg'), auto !important;
    background-color: #0a0a0a;
}

.check-yes p {

    color: white !important;
    /* cursor: url('/assets/icons/cross-sec.svg'), auto !important;
    background-color: blue; */
}

.bloop-input {
    width: 100%;
    padding:1rem 0;
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
}</style>