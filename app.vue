<template>
  <div>

    <PepNavbar />


    <!-- Type 2 -->

    <div class="">
      <section class=" ">
        <NuxtLoadingIndicator color="black" />
        <NuxtPage class="" />
      </section>




    </div>
    <PepFooter />
  </div>
</template>

<script setup>


const showMobileNav = reactive({
  isOpen: false
})
const showSubMobileNav = reactive({
  isOpen: false
})

function showNav() {
  showMobileNav.isOpen = !showMobileNav.isOpen
};
function scrollToTop() {
  window.scrollTo(0, 0);
};

const { data: navigation } = await useAsyncData('navigation', () => queryContent('/nav').only(['title', 'link_text']).find());

const route = useRoute();

watch(route, value => {
  showMobileNav.isOpen = false
}, { deep: true, immediate: true });


</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');

* {
  font-family: 'Figtree', sans-serif !important;
  color:#000;
}

html {

  scroll-behavior: smooth;

}

.is-size-1{
  font-size:4rem !important; 
}
.is-size-0{
  font-size:5rem !important; 
}

.has-background-yellow{
  background-color: #ffff00;
}

.has-text-yellow{
 color: #ffff00 !important;
}

.button-bloop{
  background-color: #ffff00;
  color: #000;
  border:2px solid #000;
  font-weight: 700 !important;
  padding:1.5rem !important;
  transition: 0.2s all ease-in;
  
}

.sec-border-top {
    border-top: 1px solid #0c0c0c41;
    padding-top: 1rem;
}
.button-bloop:hover{
  color: #000;
  background-color: #ffff00 !important;
  border:2px solid #000 !important;
  font-weight: 700 !important;
  padding:1.5rem !important;
  transform: rotate(-10deg) scale(1.2);
}

.button-bloop-sec{
  border: none;
  background-color: #ffff00;
  font-weight: 700 !important;
  color: #000;
  padding:1.5rem !important;
  transition: 0.2s all ease-in;
  
}
.button-bloop-sec:hover{
  color: #000;
  background-color: #ffee02 !important;
  font-weight: 700 !important;
  padding:1.5rem !important;
  transform: scale(1.1);
}



.has-background-black {
  background-color: #000 !important;

}


.button{
  border-radius: 0px !important;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 1rem;
}

.is-size-0{
  font-size:4rem;
}
.title {

  color:black;
  font-weight: 600 !important;

}


.has-background-transparent {
  background-color: rgba(255, 255, 255, 0);
}





a.tag:hover {
  text-decoration: none;
}
</style>