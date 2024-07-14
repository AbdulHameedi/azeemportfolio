<template>
        <section class="py-10 bg-[#2F2F2F] w-full px-4 sm:px-[100px]">
            <NavBar />
            <div class="2xl:flex flex-col items-center">    
                <div>
                    <div class="mb-[50px] md:mb-[139px]" data-aos="fade-up" data-aos-duration="300" data-aos-offset="200"  data-aos-easing="ease-in-out">
                        <p class="text-white font-[700] leading-[1] tracking-tightest text-[50px] lg:text-[96.78px] max-w-[1300px]">A motion designer with a <span class="text-[#F6DB06]">nack</span> for awesomeness</p>
                    </div>
                    <div class="relative" data-aos="fade-up" data-aos-duration="300" data-aos-offset="200"  data-aos-easing="ease-in-out">
                            <video ref="video" class="video w-full rounded-[15px] md:rounded-[40px]" src="https://res.cloudinary.com/doxshmcth/video/upload/v1720304262/abdulazeemportfolio/Reel_Check_wqwwse.mp4" autoplay loop muted></video>
                            <!-- <img class="h-[527px] rounded-[40px] w-full" src="https://res.cloudinary.com/doxshmcth/image/upload/v1720219598/abdulazeemportfolio/reel_xnsvrs.gif" alt=""> -->
                            <svg @click="fullVideo = true" class="absolute left-[24px] md:left-[55px] bottom-[23px] md:bottom-[43px] max-[768px]:w-[40px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                    </div>
                </div>
            </div>
        </section>

        <!-- full video -->
     <section v-if="fullVideo" class="flex flex-col justify-center fixed left-0 top-0 w-full h-screen bg-[#2F2F2F] z-40 " data-aos="fade-up" data-aos-duration="300" data-aos-offset="200"  data-aos-easing="ease-in-out">
            <div class="relative max-w-[1560px] mx-auto">
                <video ref="video" class="video w-full h-full" src="https://res.cloudinary.com/doxshmcth/video/upload/v1720304262/abdulazeemportfolio/Reel_Check_wqwwse.mp4" autoplay controls></video>
                <svg @click="fullVideo = false" class="absolute  text-white top-0 right-0 max-[412px]:w-[30px]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"/></svg>
            </div>
     </section>

</template> 
<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';

export default defineComponent({
    data(){
       return{
        fullVideo: false
       }
    },
    components:{
        NavBar
    }
})
</script>
<style scoped>
.video{
    object-fit: initial;
}
</style>

