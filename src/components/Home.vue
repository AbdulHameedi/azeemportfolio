<script>
import { defineComponent } from 'vue';
import HeroSection from './HeroSection.vue'
import Project from './Projects.vue'
import Contact from './Contact.vue';

export default defineComponent({
    data(){
        return{
            
        }
    },
    components:{
        HeroSection,
        Project,
        Contact
    }
})
</script>
<template>
      <div>
        <HeroSection />
        <Project />
        <Contact />
      </div>
</template>


