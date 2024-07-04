<template>
        <section class="py-10 bg-[#2F2F2F] w-full px-4 sm:px-[100px]">
            <NavBar />
            <div class="xl:flex flex-col items-center">
                <div>
                    <div class="mb-[159px]" data-aos="fade-up" data-aos-duration="300" data-aos-offset="200"  data-aos-easing="ease-in-out">
                        <p class="text-white font-[700] leading-[1] tracking-tighter text-[50px] lg:text-[96.78px] max-w-[1300px]">A motion designer with a <b class="text-[#F6DB06]">nack</b> for awesomeness</p>
                        <img  class="" src="/img/zigzagHero.png" alt="zigzagHero">
                    </div>
                    <div data-aos="fade-up" data-aos-duration="300" data-aos-offset="200"  data-aos-easing="ease-in-out">
                            <video ref="video" class="video h-[527px] w-full rounded-[4%]" src="https://res.cloudinary.com/doxshmcth/video/upload/v1/abdulazeemportfolio/MTEEE_omedpy.mp4?_s=vp-2.0.2" autoplay loop muted></video>
                    </div>
                </div>
            </div>
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

