<template>
    <CursorEffect />
      <div class="bg-[#FFFDED] overflow-hidden">
            <HeroSection />
            <Project />
            <Contact />
            <Foot />
      </div>
</template>
<script>
import { defineComponent } from 'vue';
import HeroSection from './HeroSection.vue'
import Project from './Projects.vue'
import Contact from './Contact.vue';
import Clients from './Clients.vue';
import Foot from './Foot.vue';
import CursorEffect from './CursorEffect.vue';

export default defineComponent({
    data(){
        return{
            
        }
    },
    components:{
        HeroSection,
        Project,
        Contact,
        Clients,
        Foot,
        CursorEffect
    },
    mounted(){
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]")
        window.addEventListener("mousemove", function(e){
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {duration: 800,fill:"forwards"});
        })
    }
})
</script>

<style>
*{
    font-family: "Work Sans", sans-serif;
    scroll-behavior: smooth;
}
::selection{
    background-color: #F6DB06;
    color: white
}
</style>



