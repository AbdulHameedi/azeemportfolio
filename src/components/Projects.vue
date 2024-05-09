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
<main class="bg-[#FFFDED] px-4 py-24 md:p-24">
    <p class="mb-14 font-bold text-3xl tracking-tighter">Projects</p>
    <section class="bg-[#FFFDED] grid grid-cols-2 gap-5 max-[1127px]:grid-cols-1">
       <ProjectCard />
       <ProjectCard />
       <ProjectCard />
    </section>
</main>
</template>


