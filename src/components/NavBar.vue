<template>
    <!-- responsive navbar -->
     <section v-if="mobileNav" class="md:hidden fixed left-0 top-0 w-full h-screen bg-[#F6DB06] z-40" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
        <div class="relative flex flex-col items-center gap-6 text-white text-xl font-bold py-6 cursor-pointer">
            <p><a href="#work">Work</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="contact">Contact</a></p>
            <svg @click="mobileNav = false" class="absolute top-6 right-2 text-white" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"/></svg>
        </div>
    </section>
    <!-- navbar -->
   <nav class="flex items-center justify-between mb-16 max-w-[1536px] mx-auto">
            <router-link to="/">
                <img class="w-[160px]" src="/img/logo_new.png" alt="logo">
            </router-link>
            <div class="gap-10 items-center text-white text-base cursor-pointer hidden md:flex">
                <p><a href="#work">Work</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
            <div class="bg-[#F6DB06] p-1 rounded-sm md:hidden" @click="mobileFunc">
                <svg v-if="!mobileNav" class="text-white"xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
            </div>
    </nav>
</template>
<script>
import { defineComponent } from 'vue';


export default defineComponent({
    data(){
        return{
            mobileNav: false
        }
    },
    methods:{
        mobileFunc(){
            this.mobileNav = !this.mobileNav
        }
    }
})
</script>

