<template>
 <div class="bg-white rounded-3xl p-4">
            <div class="flex justify-between items-center">
                <p class="font-bold text-3xl tracking-tighter">{{ projectType }}</p>
                <svg class="text-[#F6DB06]"xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/></svg>
            </div>
            <p class="text-xl tracking-tight mb-8 mt-[-7px]">{{description}}</p>
            <div class="projectCont h-[270px] overflow-hidden rounded-2xl bg-[#F9F9F9] flex items-center" @mouseover="playVideo" @mouseout="pauseVideo">
                <video class="video transiton-all duration-300 hover:scale-110" ref="video" :src="videoFile" loop muted></video>
                <img :src="imgSource" alt="projectImages" v-show="!isHovering"></img>
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
        imgSource: String
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

