<template>
    <div class="2xl:flex flex-col items-center">
        <main class="pt-28 pb-14 max-[640px]:px-4 max-[1536px]:px-[100px]" id="work">
            <div class="flex lg:justify-between flex-col lg:flex-row lg:items-center mb-14 ">
                <p class="font-[600] text-[32px] tracking-tightest" data-aos="fade-left">Projects</p>
                <div class="flex items-center gap-4">
                    <p class="font-[500] md:text-[32px] text-[20px] tracking-tightest">Hover on each frame to play</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
                </div>
            </div>
            <section class="grid xl:grid-cols-2 gap-[28px]">
                <router-link to="/joinebo"><ProjectCard projectType="Join Ebo" description="A booking platform" imgSource="/img/join-home.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1721463042/abdulazeemportfolio/Ebo_Preview_oe2rtc.mp4" data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
                <router-link to="/mte"><ProjectCard projectType="Muslim Tech Expo" description="A Muslim Tech Community" imgSource="/project_2.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1720304106/abdulazeemportfolio/MTE_preview_knjq7g.mp4    " data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
                <router-link to="/mooyi"><ProjectCard projectType="Mooyi Reward" width="w-[387px]" description="A marketing tool" imgSource="/img/mooyi_home.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1721461812/abdulazeemportfolio/Mooyi_preview_uekpz5.mp4" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
                <router-link to="/deex"><ProjectCard projectType="Deex Options" description="A Trading Platform" imgSource="/project_1.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1721462843/abdulazeemportfolio/Deex_Preview_vqgdzx.mp4" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
                <router-link to="/ellance"><ProjectCard projectType="Ellance" description="A Design Agency" imgSource="/project_5.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1721341467/abdulazeemportfolio/ellancevid_hytdly.mp4" data-aos="fade-right" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
                <router-link to="/"><ProjectCard projectType="Random Stuffs" description="Just me playing around" imgSource="/project_6.png" videoFile="https://res.cloudinary.com/doxshmcth/video/upload/v1721462030/abdulazeemportfolio/Random_Preview_znhl4b.mp4" data-aos="fade-left" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/></router-link>
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


