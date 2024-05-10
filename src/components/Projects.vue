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
<template>
<main class="bg-[#FFFDED] px-4 pt-24 md:pt-24 md:px-24 pb-14">
    <p class="mb-14 font-bold text-3xl tracking-tighter">Projects</p>
    <section class="bg-[#FFFDED] grid grid-cols-2 gap-5 max-[1127px]:grid-cols-1">
       <ProjectCard projectType="Deex Options" description="A Trading Platform" videoFile="../src/assets/heroVideo.mp4"/>
       <ProjectCard projectType="Muslim Tech Expo" description="A Muslim Tech Community" videoFile="../src/assets/video_2.mp4"/>
       <ProjectCard projectType="IVC by MSSN Lagos" description="Islamic Vacation Course" videoFile="../src/assets/heroVideo.mp4"/>
       <ProjectCard projectType="Mission Telecom" description="A 501 C4 Non-Profit Foundation" videoFile="../src/assets/video_2.mp4"/>
       <ProjectCard projectType="Elance" description="A Design Agency" videoFile="../src/assets/heroVideo.mp4"/>
       <ProjectCard projectType="Random Stuffs" description="Just me playing around" videoFile="../src/assets/video_2.mp4"/>
    </section>
</main>
</template>


