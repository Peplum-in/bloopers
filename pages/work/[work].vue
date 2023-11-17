<template>
    <div>
        <section class="section mb-6">
            <div class="columns">
                <div class="column is-4 is-offset-1-desktop">
                    <h1 class="title is-size-1-desktop">Social media management for Anuvas</h1>
                    <h2 class="subtitle is-size-3-desktop mt-1">Some description about the work</h2>
                    <br>

                    <button class="button button-bloop">
                        READ MORE
                    </button>
                </div>
                <div class="column is-5 is-offset-1-desktop">

                    <figure class="image has-background-yellow is-16by9">
                        <img src="" alt="">
                    </figure>
                </div>
            </div>
        </section>
        <div class="columns">
            <div class="column has-background-yellow">
                <div class="section mx-6 has-background-yellow  is-size-4-desktop">
                    Vegan and sustainable #thatsnatural! You might think Nature Box Beauty are another wannabe sustainable
                    brand. But they’re actually pretty sustainable despite their colourful appearance. Nature Box products
                    are made of 100% natural cold-pressed oils and other natural ingredients on a vegan formula. Also, they
                    support social and environmental projects.

                </div>
            </div>
            <div class="column">
                <div class="section mx-6 is-size-4-desktop">
                    Bloopers was challenged with building and improving the social media presence of the brand.

                </div>
            </div>
        </div>
        <figure class="has-background-grey image is-3by1">

        </figure>
        <section class="section mb-6">
            <div class="columns">
                <div class="column is-3 is-offset-1-desktop">
                    <p class="title is-size-2-desktop">Our Approach</p>
                </div>
                <div class="column is-5 is-offset-1-desktop">

                    <p class="is-size-5-desktop">
                        Vegan and sustainable #thatsnatural! You might think Nature Box Beauty are another wannabe
                        sustainable
                        brand. But they’re actually pretty sustainable despite their colourful appearance. Nature Box
                        products
                        are made of 100% natural cold-pressed oils and other natural ingredients on a vegan formula. Also,
                        they
                        support social and environmental projects.
                    </p>
                </div>
            </div>
        </section>
        <section class="section mb-6 has-background-light">
            <div class="columns">
                <div class="column is-6 is-offset-1-desktop">
                    <p class="title is-size-2-desktop">Results</p>
                    <p class="is-size-5-desktop">
                        Vegan and sustainable #thatsnatural! You might think Nature Box Beauty are another wannabe
                        sustainable
                        brand. But they’re actually pretty sustainable despite their colourful appearance. Nature Box
                        products
                        are made of 100% natural cold-pressed oils and other natural ingredients on a vegan formula. Also,
                        they
                        support social and environmental projects.
                    </p>
                </div>

            </div>
        </section>
        <section class="section my-0 py-0">
            <div class="columns">
                <div class="column is-6 is-offset-1-desktop">
                    <div class="buttons">
                        <div class="button button-bloop-sec mr-6">BACK TO WORKS</div>
                        <div class="button button-bloop-sec ml-4">CONTACT US</div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>
<script setup>
const route = useRoute();
function getCapitalizedText(text) {
    return text[0].toUpperCase() + text.substring(1)
}
const photo_string = getCapitalizedText(route.params.work);
const text_string = getCapitalizedText(route.params.work);
const { data: work } = await useAsyncData('work', () => queryContent('/work').where({ 'tag': route.params.work }).find())
// const { data: page } = await useAsyncData('nav', () => queryContent('/nav').where({ 'title': photo_string }).find())
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
