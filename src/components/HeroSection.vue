<template>
    <main class="heroVideo relative">
        <!-- videoHero -->
        <div class="absolute top-0 bottom-0 right-0">
            <video ref="video" class="video" src="https://res.cloudinary.com/doxshmcth/video/upload/v1/abdulazeemportfolio/heroVid_ug674z.mp4?_s=vp-2.0.2" autoplay loop muted></video>
        </div>
        <section class="p-4 md:px-[13%] py-10 absolute top-0 bottom-0">
            <NavBar />
            <!-- bodyHero -->
            <div class="max-w-[90%] mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-white font-extrabold text-7xl max-[950px]:text-4xl max-[398px]:text-3xl tracking-tighter">A motion designer with a <b class="text-[#F6DB06]">nack</b> for awesomeness</p>
                <img class="max-[424px]:hidden" src="/img/zigzagHero.png" alt="zigzagHero">
                <img  class="min-[425px]:hidden" src="/img/zigzagForm.png" alt="zigzagHero">
            </div>
        </section>
    </main>
    
</template>
<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';

export default defineComponent({
    data(){
       
    },
    components:{
        NavBar
    }
})
</script>
<style scoped>
.heroVideo{
    height: calc(100vh);
}
.video{
    height: calc(100vh);
    width: 100vw;
    object-fit: initial;
}
</style>

