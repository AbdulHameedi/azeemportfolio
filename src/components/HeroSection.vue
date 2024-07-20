<template>
    <section class="py-10 bg-[#2F2F2F] w-full px-4 sm:px-[100px]">
      <NavBar />
      <div class="2xl:flex flex-col items-center">    
        <div>
          <div class="mb-[50px] md:mb-[139px]" data-aos="fade-up" data-aos-duration="300" data-aos-offset="200" data-aos-easing="ease-in-out">
            <p class="text-white font-[700] leading-[1] tracking-tightest text-[50px] lg:text-[96.78px] max-w-[1300px]">A motion designer with a <span class="text-[#F6DB06]">nack</span> for awesomeness</p>
          </div>
          <div class="relative" data-aos="fade-up" data-aos-duration="300" data-aos-offset="200" data-aos-easing="ease-in-out">
            <video ref="video" class="video w-full rounded-[15px] md:rounded-[40px]" src="https://res.cloudinary.com/doxshmcth/video/upload/v1721462704/abdulazeemportfolio/Reel_to_preview_kzs5ef.mp4" autoplay loop muted></video>
            <svg @click="enterFullscreen" class="absolute left-[24px] md:left-[55px] bottom-[23px] md:bottom-[43px] max-[768px]:w-[40px]" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 0C11.4169 0 0 11.4167 0 25.5C0 39.5833 11.4169 51 25.5 51C39.5831 51 51 39.5833 51 25.5C51 11.4167 39.5831 0 25.5 0ZM34.3134 26.8517L21.5634 34.8204C21.3054 34.9815 21.0121 35.0625 20.7188 35.0625C20.453 35.0625 20.1868 34.9964 19.946 34.8625C19.4394 34.5816 19.125 34.0485 19.125 33.4688V17.5312C19.125 16.9515 19.4394 16.4184 19.946 16.1375C20.4526 15.855 21.0721 15.8722 21.5634 16.1796L34.3134 24.1483C34.7792 24.4402 35.0625 24.9507 35.0625 25.5C35.0625 26.0493 34.7792 26.5599 34.3134 26.8517Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import NavBar from './NavBar.vue';
  
  export default defineComponent({
    data() {
      return {
      };
    },
    components: {
      NavBar,
    },
    methods: {
      enterFullscreen() {
            const video = this.$refs.video;
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }
            video.muted = false
            document.body.style.cursor = 'default';
        },
    },
  });
  </script>
  
  <style scoped>
  .video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  </style>
  