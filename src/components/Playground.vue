<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
import CursorEffect from './CursorEffect.vue';
import Footer from './Footer.vue';

export default defineComponent({
    data() {
        return {
            // Remove fullVideo state as it's not needed for automatic fullscreen
        }
    },
    components: {
        NavBar,
        CursorEffect,
        Footer
    }
});
</script>

<template>
    <CursorEffect />
    <section>
        <section class="py-10 bg-[#2F2F2F] w-full px-4 sm:px-[100px]">
            <NavBar />
            <div class="max-w-[1536px] mx-auto">    
                <div>
                    <div class="relative mb-[4rem]" data-aos="fade-up" data-aos-duration="300" data-aos-offset="200"  data-aos-easing="ease-in-out">
                        <video ref="videos" class="video w-full rounded-[15px] md:rounded-[40px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1724802325/Send_App_Flutterwave_Campaign_SIBLINGS_PERSPECTIVE1_uwydke.mp4" autoplay loop muted></video>
                        <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1724802325/Send_App_Flutterwave_Campaign_SIBLINGS_PERSPECTIVE1_uwydke.mp4">
                            <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                        </a>
                    </div>
                    <div>
                        <div class="mb-[31px]">
                            <img class="w-[330px]" src="/img/playground-img.jpg" alt="img-head">
                        </div>
                        <div class="flex md:items-center flex-col md:flex-row text-[16px] md:gap-[7rem] gap-10">
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
        <section class="px-4 sm:px-[100px] py-[100px] bg-[#FFFDED] ">
            <div class="max-w-[1536px] mx-auto">
                <p class="md:text-[58.35px] text-[40.32px] font-[600] text-[#2F2F2F] tracking-tightest mb-[32px]">Execution</p>
                <div class="bg-white rounded-[35.54px] p-4 sm:p-[63px] mb-[32px]">
                    <p class="mb-[38px] md:text-[32px] text-[33.32px] font-[500] tracking-tightest">Other animations</p>
                    <div class="flex flex-col md:flex-row md:gap-[23px] mb-[24px]">
                        <video ref="video" class="md:w-[65%] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1724802325/Send_App_Flutterwave_Campaign_SIBLINGS_PERSPECTIVE1_uwydke.mp4" autoplay loop muted></video>
                        <video ref="video" class="md:w-[35%] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725576934/01_Barber_shop_Tornado_axx5zw.mp4" autoplay loop muted></video>
                    </div>
                    <div class="flex flex-col md:flex-row md:gap-5">
                        <video ref="video" class="md:w-[44%] rounded-[7px] md:rounded-[15px] mb-6 md:mb-0" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725526885/7_THE_WEALTHY_ISLET_VIdeEO_byjf9j.mp4" autoplay loop muted></video>
                        <video ref="video" class="md:w-[56%] rounded-[7px] md:rounded-[15px] mb-6 md:mb-0" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725491425/0_TECNO_VAMON_30_X_ATR_mgtj0t.mp4" autoplay loop muted></video>
                    </div>
                </div>
                <!--  -->
                <div class="bg-white rounded-[35.54px] p-4 sm:p-[63px] mb-[32px]">
                    <div class="flex flex-col md:flex-row md:gap-[23px] mb-[24px]">
                        <video ref="video" class="md:w-[65%] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725577319/8_EHINGBETI_SOCIAL_ehjtro.mp4" autoplay loop muted></video>
                        <video ref="video" class="md:w-[35%] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/doxshmcth/video/upload/v1720304106/abdulazeemportfolio/MTE_preview_knjq7g.mp4" autoplay loop muted></video>
                    </div>
                    <div class="flex flex-col md:flex-row md:gap-5">
                        <video ref="video" class="md:w-[44%] rounded-[7px] md:rounded-[15px] mb-6 md:mb-0" src="https://res.cloudinary.com/doxshmcth/video/upload/v1721382186/abdulazeemportfolio/Ayomide_Akanji_Reel_zkn3ub.mp4" autoplay loop muted></video>
                        <video ref="video" class="md:w-[56%] rounded-[7px] md:rounded-[15px] mb-6 md:mb-0" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725491425/0_TECNO_VAMON_30_X_ATR_mgtj0t.mp4" autoplay loop muted></video>
                    </div>
                </div>
                <!--  -->
                <div class="bg-white p-4 rounded-[35.54px] sm:p-[63px] mb-[32px]">
                    <div class="relative">
                        <video ref="video" class="video w-full rounded-[15px] md:rounded-[40px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725491425/0_TECNO_VAMON_30_X_ATR_mgtj0t.mp4" autoplay loop muted></video>
                        <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1725491425/0_TECNO_VAMON_30_X_ATR_mgtj0t.mp4">
                            <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[#2F2F2F] sm:p-[100px] p-4">
            <div class="max-w-[1536px] mx-auto">
                <div class="sm:grid-cols-2 grid grid-col-1 sm:gap-0 gap-6 md:items-center border-b pb-6">
                    <p class="text-[17.22px] gray-50 font-[400] tracking-tightest">Closing Thought</p>
                    <p class="text-white leading-[34.44px] text-[19px] font-[400] tracking-tightest">Within two enchanted weeks, I wove a bundle of animations for Ellance Agency. As their motion sorcerer, I breathed life into pixels, casting spells that now dance across their website.</p>
                </div>
                <div class="sm:grid-cols-2 grid grid-col-1 sm:gap-0 gap-6 items-center border-b py-6">
                    <p class="text-[17.22px] gray-50 font-[400] tracking-tightest">Tools</p>
                    <p class="text-white text-[19px] font-[400] tracking-tightest">After effects | Figma | Illustrator</p>
                </div>
                <div class="sm:grid-cols-2 grid grid-col-1 sm:gap-0 gap-6 items-center border-b py-6">
                    <p class="text-[17.22px] gray-50 font-[400] tracking-tightest">Credits</p>
                    <p class="text-white text-[19px] font-[400] tracking-tightest">Ellance</p>
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
