<template>
        <section class="py-10 bg-[#2F2F2F] w-full">
            <NavBar />
            <div class="flex flex-col items-center">
                <div class="w-[700px]">
                    <div class="mb-16" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                        <p class="text-white font-extrabold leading-[1] tracking-tighter text-6xl text-center">A motion designer with a <b class="text-[#F6DB06]">nack</b> for awesomeness</p>
                        <img  class="" src="/img/zigzagForm.png" alt="zigzagHero">
                    </div>
                    <section class="" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                        <div class="">
                            <video ref="video" class="video rounded-md" src="https://res.cloudinary.com/doxshmcth/video/upload/v1/abdulazeemportfolio/MTEEE_omedpy.mp4?_s=vp-2.0.2" autoplay loop muted></video>
                        </div>
                    </section>
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

