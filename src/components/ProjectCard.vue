<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            videoSource: '../assets/heroVideo.mp4',
            isHovering: false
        }
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
<template>
 <div class="bg-white rounded-[9%] p-8">
            <div class="flex justify-between items-center">
                <p class="font-bold text-5xl tracking-tighter">Deex Options</p>
                <svg class="text-[#F6DB06]"xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/></svg>
            </div>
            <p class="text-2xl tracking-tight mb-10 mt-[-12px]">A Trading Platform</p>
            <div class="w-full h-[400px]" @mouseover="playVideo" @mouseout="pauseVideo">
                <!-- <img class="w-full"src="../assets/project_img.jpeg" alt=""> -->
                <video class="rounded-2xl video" ref="video" src="../assets/heroVideo.mp4" loop muted></video>
            </div>
        </div>
</template>
<style scoped>
.video  {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
</style>

