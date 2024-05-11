<script>
import { defineComponent } from 'vue';
import HeroSection from './HeroSection.vue'
import Project from './Projects.vue'
import Contact from './Contact.vue';
import Clients from './Clients.vue';

export default defineComponent({
    data(){
        return{
            
        }
    },
    components:{
        HeroSection,
        Project,
        Contact,
        Clients
    }
})
</script>
<template>
      <div class="bg-[#FFFDED] overflow-hidden">
        <HeroSection />
        <Project />
        <Contact />
        <Clients />
      </div>
</template>


