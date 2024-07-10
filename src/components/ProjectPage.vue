<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue'
import CursorEffect from './CursorEffect.vue'
import Footer from './Footer.vue';

export default defineComponent({
    data(){
        return{

        }
    },
    props:{
        imgHead: String,
        width: String,
        industry: String,
        typeProject: String,
        bgFrame: String,    
        duration: String,
        frameOne: String,
        frameTwo: String,
        frameThree: String,
        frameFour: String,
        frameFive: String,
    },
    components: {
        NavBar,
        CursorEffect,
        Footer
    },
})
</script>
<template>
    <CursorEffect />
    <section>
        <section class="py-10 bg-[#2F2F2F] w-full px-4 sm:px-[100px]">
            <NavBar />
            <div class="max-w-[1536px] mx-auto">    
                <div>
                    <div class="relative mb-[4rem]" data-aos="fade-up" data-aos-duration="300" data-aos-offset="200"  data-aos-easing="ease-in-out">
                        <video ref="video" class="video w-full rounded-[40px]" :src="bgFrame" autoplay loop muted></video>
                        <svg class="absolute left-[44px] bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                    </div>
                    <div>
                        <div class="mb-[31px]">
                            <img :class="[width]" :src="imgHead" alt="img-head">
                        </div>
                        <div class="flex items-center text-[16px] gap-[7rem]">
                            <div>
                                <p class="gray-50">Industry</p>
                                <p class="text-white">{{industry}}</p>
                            </div>
                            <div>
                                <p class="gray-50">Project type</p>
                                <p class="text-white">{{ typeProject }}</p>
                            </div>
                            <div>
                                <p class="gray-50">Project duration</p>
                                <p class="text-white">{{ duration }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-4 sm:px-[100px] py-[100px] bg-[#FFFDED] ">
            <div class="max-w-[1536px] mx-auto">
                <p class="text-[58.35px] font-[600] text-[#2F2F2F] tracking-tightest mb-[32px]">Execution</p>
                <div class="bg-white rounded-[35.54px] p-4 sm:p-[63px] mb-[32px]">
                    <p class="mb-[38px] text-[32px] font-[500] tracking-tightest">Other animations</p>
                    <div class="flex gap-[23px] mb-[24px]">
                        <img class="w-[65%] rounded-[15px]" :src="frameOne" alt="frame_1">
                        <img class="w-[35%] rounded-[15px]" src="/img/frame_2_mte.gif" alt="frame_2">
                    </div>
                    <div class="flex gap-5">
                        <img class="w-[40%] rounded-[15px]" src="https://res.cloudinary.com/doxshmcth/image/upload/v1720477236/abdulazeemportfolio/BTS_ELLANCE_12_t5xpce.gif" alt="frame_3">
                        <img class="w-[60%] rounded-[15px]" src="/img/frame_4_mte.gif" alt="frame_4">
                    </div>
                </div>
                <!--  -->
                <div class="mb-[32px] bg-white rounded-[35.54px] p-4 sm:p-[63px] sm:px-[63px] lg:gap-4 gap-10 grid lg:grid-cols-2 grid-col-1 items-center">
                    <div>
                        <p class="font-[500] text-[33.32px]">Animating</p>
                        <p class="max-w-[350px] font-[400] text-[20.82px] leading-[28.11px]">Here we are talking about the process of animating it and bla bla bla </p>
                    </div>
                    <img class="rounded-[15px] w-full" src="/img/frame_5_mte.gif" alt="frame_5">
                </div>
                <!--  -->
                <div class="bg-white p-4 rounded-[35.54px] sm:p-[63px]">
                    <video ref="video" class="video w-full rounded-[40px]" src="https://res.cloudinary.com/doxshmcth/video/upload/v1716845866/abdulazeemportfolio/MTEEE_omedpy.mp4" autoplay loop muted></video>
                </div>
            </div>
        </section>
        <section class="bg-[#2F2F2F] sm:p-[100px] p-4">
            <div class="max-w-[1536px] mx-auto">
                <div class="grid grid-cols-2 items-center border-b pb-6">
                    <p class="text-[17.22px] gray-50 font-[400]">Closing Thought</p>
                    <p class="text-white leading-[34.44px] text-[19px] font-[400]">Within two enchanted weeks, I wove a bundle of animations for Ellance Agency. As their motion sorcerer, I breathed life into pixels, casting spells that now dance across their website.</p>
                </div>
                <div class="grid grid-cols-2 items-center border-b py-6">
                    <p class="text-[17.22px] gray-50 font-[400]">Tools</p>
                    <p class="text-white text-[19px] font-[400]">After effects | Figma | Illustrator</p>
                </div>
                <div class="grid grid-cols-2 items-center border-b py-6">
                    <p class="text-[17.22px] gray-50 font-[400]">Credits</p>
                    <p class="text-white text-[19px] font-[400]">Ellance</p>
                </div>
            </div>
        </section>
        <section class="pt-14">
            <Footer />
        </section>
    </section>
</template>
<style>
*{
    font-family: "Work Sans", sans-serif;
    scroll-behavior: smooth;
}
.gray-50{
    color: hsl(0, 0%, 50%);
}
</style>