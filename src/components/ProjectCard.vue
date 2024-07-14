<template>
 <div class="bg-white rounded-[34px] p-4 h-[585px] 2xl:w-[609px]">
            <div class="flex justify-between items-center">
                <p class="font-[700] text-[38px] md:text-[48px] tracking-tightest leading-[1]">{{ projectType }}</p>
                <svg class="text-[#F6DB06] max-[640px]:w-[70px]"xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/></svg>
            </div>
            <p class="text-[24px] tracking-tightest mb-8 mt-[-17px]">{{description}}</p>
            <div class="projectCont h-[397px] 2xl:w-[553px overflow-hidden rounded-[17px] bg-[#F9F9F9] flex items-center justify-center" @mouseover="playVideo" @mouseout="pauseVideo">
                <video class="video transiton-all duration-300 hover:scale-110" ref="video" :src="videoFile" loop muted></video>
                <img :src="imgSource" :class="[width]" alt="projectImages" v-show="!isHovering"></img>
            </div>
        </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            isHovering: false
        }
    },
    props:{
        projectType: String,
        description: String,
        videoFile: String,
        imgSource: String,
        width: String
    },
    methods:{
        playVideo(){
            if(!this.isHovering){
                this.$refs.video.play();
                this.isHovering = true
            }
        },
        pauseVideo(){
            if(this.isHovering){
                this.$refs.video.pause();
                this.isHovering = false;
            }
        }           
    }
})
</script>
<style scoped>
.video{
    height: 100%;
    width: 100%;
    object-fit: initial;
    display: none;
}
.projectCont:hover video{
    display: block;
}
</style>

