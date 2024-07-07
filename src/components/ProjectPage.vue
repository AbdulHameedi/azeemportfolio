<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue'

export default defineComponent({
    data(){
        return{

        }
    },
    components: {
        NavBar
    }
})
</script>
<template>
    <section>
        <section class="py-10 bg-[#2F2F2F] w-full px-4 sm:px-[100px]">
            <NavBar />
            <div class="2xl:flex flex-col items-center">    
                <div>
                    <div class="relative mb-[4rem]" data-aos="fade-up" data-aos-duration="300" data-aos-offset="200"  data-aos-easing="ease-in-out">
                        <img class="h-[674.65px rounded-[40px] w-full" src="https://res.cloudinary.com/doxshmcth/image/upload/v1720219598/abdulazeemportfolio/reel_xnsvrs.gif" alt="">
                        <svg class="absolute left-[44px] bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                    </div>
                    <div>
                        <div class="flex items-center gap-[2rem] mb-[31px]">
                            <img src="/img/logo.png" alt="logo">
                            <p class="text-white font-[600] tracking-tightest text-[40px]">Playground</p>
                        </div>
                        <div class="flex items-center text-[16px] gap-[7rem]">
                            <div>
                                <p class="gray-50">Industry</p>
                                <p class="text-white">Growth</p>
                            </div>
                            <div>
                                <p class="gray-50">Project type</p>
                                <p class="text-white">Contract</p>
                            </div>
                            <div>
                                <p class="gray-50">Project duration</p>
                                <p class="text-white">Retainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!---<section class="px-4 sm:px-[100px] py-[100px] bg-[#FFFDED]">
            <p class="text-[58.35px] font-[600] text-[#2F2F2F] tracking-tightest">Execution</p>
            <div class="bg-white rounded-[35.54px] p-[63px]">
                <p class="mb-[38px] text-[32px] font-[500] tracking-tightest">Other animations</p>
                <div>

                </div>
            </div>
        </section>-->
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