<template>
        <section class="p-4 md:px-[13%] py-10 bg-black pb-0 w-screen">
            <NavBar />
            <div class="max-w-[90%] mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-white font-extrabold text-7xl max-[950px]:text-4xl max-[398px]:text-3xl tracking-tighter">A motion designer with a <b class="text-[#F6DB06]">nack</b> for awesomeness</p>
                <img class="max-[424px]:hidden" src="/img/zigzagHero.png" alt="zigzagHero">
                <img  class="min-[425px]:hidden" src="/img/zigzagForm.png" alt="zigzagHero">
            </div>
            <section class="flex flex-col items-center h-[370px]" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <div class="bg-white w-[80%] flex flex-col items-center border border-[#F6DB06] rounded-sm" >
                    <video ref="video" class="h-[370px] w-full video" src="https://res.cloudinary.com/doxshmcth/video/upload/v1/abdulazeemportfolio/heroVid_ug674z.mp4?_s=vp-2.0.2" autoplay loop muted></video>
                </div>
            </section>
        </section>
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
.video{
    object-fit: initial;
}
</style>

