<template>
    <div style="overflow:hidden" class="marquee-container">
        <div class="marquee">
            <img class="image-cont" v-for="row in brands" :src="row.image" alt=""> 
            <figure class="image is-1by1">
            </figure>
        </div>
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
<style scoped>

.marquee-container{
    
}
.marquee {
    width: 400px;
    /* Adjust width as needed */
    height: 100vh;
    /* Adjust height as needed */
    overflow: hidden;
    position: relative;
}

.marquee img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    /* Adjust spacing between images */
}

.marquee img:last-child {
    margin-bottom: 0;
}

.marquee img {
    animation: marquee 7s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
}

.image-cont{
    background-color: white;
    padding:1.3rem;
    border-radius: 7px;;
}
</style>