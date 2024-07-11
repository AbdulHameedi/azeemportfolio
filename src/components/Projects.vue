<template>
    <div class="max-w-[1536px] mx-auto">
        <main class="pt-28 pb-14 px-4 max-[1536px]:px-[100px]" id="work">
            <p class="mb-14 font-[600] text-[32px] tracking-tightest" data-aos="fade-left">Projects</p>
            <section class="grid xl:grid-cols-2 gap-[28px]">
                <router-link to="/joinebo"><ProjectCard projectType="Join Ebo" description="A booking platform" imgSource="/img/join-home.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1720304262/abdulazeemportfolio/Reel_Check_wqwwse.mp4" data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
                <router-link to="/mte"><ProjectCard projectType="Muslim Tech Expo" description="A Muslim Tech Community" imgSource="/project_2.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1720304106/abdulazeemportfolio/MTE_preview_knjq7g.mp4    " data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
                <router-link to="/mooyi"><ProjectCard projectType="Mooyi Reward" description="A marketing tool" imgSource="/img/mooyi_home.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1716672004/abdulazeemportfolio/projectVideo_3_zwcbwc.mp4" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
                <ProjectCard projectType="Deex Options" description="A Trading Platform" imgSource="/project_1.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1/abdulazeemportfolio/MTEEE_omedpy.mp4?_s=vp-2.0.2" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
                <ProjectCard projectType="Ellance" description="A Design Agency" imgSource="/project_5.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1716672486/abdulazeemportfolio/projectVideo_4_acjufo.mp4" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
                <ProjectCard projectType="Random Stuffs" description="Just me playing around" imgSource="/project_6.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1716672004/abdulazeemportfolio/projectVideo_3_zwcbwc.mp4" data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
            </section>
        </main>
    </div>
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


