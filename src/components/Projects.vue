<template>
<main class="px-4 pt-24 md:pt-24 md:px-[13%] pb-14">
    <p class="mb-14 font-bold text-3xl tracking-tighter" data-aos="fade-left">Projects</p>
    <section class="grid grid-cols-2 gap-5 max-[1127px]:grid-cols-1">
       <ProjectCard projectType="Deex Options" description="A Trading Platform" videoFile="/heroVideo.mp4" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
       <ProjectCard projectType="Muslim Tech Expo" description="A Muslim Tech Community" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/projectVideo_3_zwcbwc.mp4?_s=vp-2.0.2" data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
       <ProjectCard projectType="IVC by MSSN Lagos" description="Islamic Vacation Course" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1/abdulazeemportfolio/projectVideo_4_acjufo.mp4?_s=vp-2.0.2" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
       <ProjectCard projectType="Mission Telecom" description="A 501 C4 Non-Profit Foundation" videoFile="/video_2.mp4" data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
       <ProjectCard projectType="Elance" description="A Design Agency" videoFile="/heroVideo.mp4" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
       <ProjectCard projectType="Random Stuffs" description="Just me playing around" videoFile="/video_2.mp4" data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
    </section>
</main>
</template>
<script>
import { defineComponent } from 'vue';
import ProjectCard from './ProjectCard.vue';

export default defineComponent({
    data(){
        return{
            
        }
    },
    components:{
        ProjectCard
    }
})
</script>


