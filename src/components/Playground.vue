<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
import CursorEffect from './CursorEffect.vue';
import Footer from './Footer.vue';

export default defineComponent({
    data() {
        return {
        }
    },
    components: {
        NavBar,
        CursorEffect,
        Footer,
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
                        <video ref="videos" class="video w-full rounded-[15px] md:rounded-[40px]" src="https://res.cloudinary.com/doxshmcth/video/upload/v1721512722/abdulazeemportfolio/ayomide_reel_mkcsee.mp4" autoplay loop muted></video>
                        <a href="https://res.cloudinary.com/doxshmcth/video/upload/v1721512722/abdulazeemportfolio/ayomide_reel_mkcsee.mp4">
                            <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                        </a>
                    </div>
                    <div>
                        <div class="mb-[31px]">
                            <img class="w-[330px]" src="/img/playground-img.jpg" alt="img-head">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--  -->
        <section class="px-4 sm:px-[100px] py-[100px] bg-[#FFFDED]">
            <div class="max-w-[1536px] mx-auto">
                <p class="md:text-[58.35px] text-[40.32px] font-[600] text-[#2F2F2F] tracking-tightest mb-[32px]">Execution</p>
                <div class="bg-white rounded-[35.54px] p-4 md:p-[63px] mb-[32px]">
                    <div class="flex flex-col md:flex-row md:gap-[23px] gap-[10px]  mb-[24px]">
                         <!-- https://res.cloudinary.com/dt7jocfde/video/upload/v1724802325/Send_App_Flutterwave_Campaign_SIBLINGS_PERSPECTIVE1_uwydke.mp4 -->
                        <div class="relative h-[400px] md:w-[65%]">
                            <video ref="video" class=" object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725661362/00_Karafin_Tornado_Qatar_l4ljbx.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1725661362/00_Karafin_Tornado_Qatar_l4ljbx.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                        <div class="relative h-[400px] md:w-[35%]">
                            <video ref="video" class=" object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725576934/01_Barber_shop_Tornado_axx5zw.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1725576934/01_Barber_shop_Tornado_axx5zw.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row md:gap-5">
                        <div class="relative h-[400px] md:w-[44%]">
                            <video ref="video" class=" object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725491425/0_TECNO_VAMON_30_X_ATR_mgtj0t.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1725491425/0_TECNO_VAMON_30_X_ATR_mgtj0t.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                        <div class="relative h-[400px] md:w-[56%]">
                            <video ref="video" class=" object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1724802325/Send_App_Flutterwave_Campaign_SIBLINGS_PERSPECTIVE1_uwydke.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1724802325/Send_App_Flutterwave_Campaign_SIBLINGS_PERSPECTIVE1_uwydke.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                    </div>
                </div> 
                <!--  -->
                <div class="bg-white rounded-[35.54px] p-4 md:p-[63px] mb-[32px]">
                    <div class="flex flex-col md:flex-row md:gap-[23px] gap-[10px]  mb-[24px]">
                        <!-- "https://res.cloudinary.com/dt7jocfde/video/upload/v1725577319/8_EHINGBETI_SOCIAL_ehjtro.mp4 -->
                        <div class="relative h-[400px] md:w-[65%]">
                            <video ref="video" class="object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725662389/2_EAGLELINE_CONSULT_FINAL_RENDER_111_ddsqid.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1725662389/2_EAGLELINE_CONSULT_FINAL_RENDER_111_ddsqid.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                        <div class="relative h-[400px] md:w-[35%]">
                            <video ref="video" class="object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725983700/02_Tornado_Tower_yxnu65.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1725983700/02_Tornado_Tower_yxnu65.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row md:gap-[23px] gap-[10px]  mb-[24px]">
                        <!-- "https://res.cloudinary.com/dt7jocfde/video/upload/v1725577319/8_EHINGBETI_SOCIAL_ehjtro.mp4 -->
                        <div class="relative h-[400px] md:w-[35%]">
                            <video ref="video" class="object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1726050664/3_INFINIX_X_GAMRX_X_ATR_qe2vbq.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1726050664/3_INFINIX_X_GAMRX_X_ATR_qe2vbq.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                        <div class="relative h-[400px] md:w-[65%]">
                            <video ref="video" class="object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725526885/7_THE_WEALTHY_ISLET_VIdeEO_byjf9j.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1725526885/7_THE_WEALTHY_ISLET_VIdeEO_byjf9j.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="bg-white rounded-[35.54px] p-4 md:p-[63px] mb-[32px]">
                    <div class="flex flex-col md:flex-row md:gap-[23px] gap-[10px]  mb-[24px]">
                        <div class="relative h-[400px] md:w-[65%]">
                            <video ref="video" class="object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1725577319/8_EHINGBETI_SOCIAL_ehjtro.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1725577319/8_EHINGBETI_SOCIAL_ehjtro.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                        <div class="relative h-[400px] md:w-[35%]">
                            <video ref="video" class="object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1726051509/ESSENCE_FILM_gjtgjb.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1726051509/ESSENCE_FILM_gjtgjb.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row md:gap-[23px] gap-[10px]  mb-[24px]">
                        <!-- "https://res.cloudinary.com/dt7jocfde/video/upload/v1725577319/8_EHINGBETI_SOCIAL_ehjtro.mp4 -->
                        <div class="relative h-[400px] md:w-[35%]">
                            <video ref="video" class="object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1726051670/FIRST_LOOP_eyltci.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1726051670/FIRST_LOOP_eyltci.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                        <div class="relative h-[400px] md:w-[65%]">
                            <video ref="video" class="object-cover w-full h-[400px] rounded-[7px] md:rounded-[15px]" src="https://res.cloudinary.com/dt7jocfde/video/upload/v1726051766/KEYFRAME_2_urn668.mp4" autoplay loop muted></video>
                            <a href="https://res.cloudinary.com/dt7jocfde/video/upload/v1726051766/KEYFRAME_2_urn668.mp4">
                                <svg class="absolute left-[24px] md:left-[44px] bottom-[23px] md:bottom-[43px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/></svg>
                            </a>
                        </div>
                    </div>
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
