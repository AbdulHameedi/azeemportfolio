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
    <nav class="flex items-center justify-between mb-16">
            <div class="text-white flex gap-3 items-center font-sans cursor-pointer">
                <img src="../assets/logo.png" alt="logo">
                <p class="font-extrabold text-xl max-w-[145px]">Ayomide Akanji</p>
            </div>
            <div class="gap-10 items-center text-white text-base cursor-pointer hidden md:flex">
                <p>Work</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div class="bg-[#F6DB06] p-1 rounded-sm md:hidden">
                <svg class="text-white"xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
            </div>
        </nav>
</template>