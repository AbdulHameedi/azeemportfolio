<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            
        }
    }
})
</script>
<template>
<main class="bg-[#FFFDED] p-24">
    <p class="mb-14 text-xl font-bold text-3xl tracking-tighter">Projects</p>
    <section class="bg-[#FFFDED] grid grid-cols-2">
        <div class="bg-white rounded-[9%] p-8">
            <div class="flex justify-between items-center">
                <p class="font-bold text-5xl tracking-tighter">Deex Options</p>
                <svg class="text-[#F6DB06]"xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/></svg>
            </div>
            <p>A Trading Platform</p>
            <div class="w-full">
                <img class="w-full"src="../assets/project_img.jpeg" alt="">
            </div>
        </div>
    </section>
</main>
</template>


