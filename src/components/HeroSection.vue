<template>
        <section class="p-4 md:px-[13%] py-10 bg-[#2F2F2F] pb-0 w-screen">
            <NavBar />
            <div class="max-w-[90%] mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-white font-extrabold leading-[1] text-[5rem] max-[950px]:text-[2.25rem] max-[398px]:text-[1.875rem] tracking-tighter">A motion designer with a <b class="text-[#F6DB06]">nack</b> for awesomeness</p>
                <img class="max-[424px]:hidden" src="/img/zigzagHero.png" alt="zigzagHero">
                <img  class="min-[425px]:hidden" src="/img/zigzagForm.png" alt="zigzagHero">
            </div>
            <section class="flex flex-col items-center h-[550px] relative bottom-[-3rem]" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <div class="bg-white w-[90%] flex flex-col items-center border border-white rounded-sm" >
                    <video ref="video" class="h-[550px] w-full video" src="https://res.cloudinary.com/doxshmcth/video/upload/v1/abdulazeemportfolio/heroVid_ug674z.mp4?_s=vp-2.0.2" autoplay loop muted></video>
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

