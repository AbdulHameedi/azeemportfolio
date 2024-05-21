<script>
import { defineComponent } from 'vue';
import HeroSection from './HeroSection.vue'
import Project from './Projects.vue'
import Contact from './Contact.vue';
import Clients from './Clients.vue';
import Foot from './Foot.vue';

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
        Foot
    },
    mounted(){
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]")
        window.addEventListener("mousemove", function(e){
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // cursorOutline.style.left = `${posX}px`;
            // cursorOutline.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {duration: 800,fill:"forwards"});
        })
    }
})
</script>
<template>
    <div class="cursor-dot" data-cursor-dot></div>
    <div class="cursor-outline" data-cursor-outline></div>
      <div class="bg-[#FFFDED] overflow-hidden">
        <HeroSection />
        <Project />
        <Contact />
        <Foot />
      </div>
</template>
<style>
body{
    cursor: none;
}

*{
    font-family: "Work Sans", sans-serif;
}
.cursor-dot{
    width: 5px;
    height: 5px;
    background-color: black;
}
.cursor-outline{
    width: 30px;
    height: 30px;
    border: 2px solid #F6DB06;
}
.cursor-dot, .cursor-outline{
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    z-index: 999;
    pointer-events: none;
}
@media screen and (max-width:425px){
    body{
        cursor: pointer;
    }
}
</style>



