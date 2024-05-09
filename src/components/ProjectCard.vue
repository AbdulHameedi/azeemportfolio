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
 <div class="bg-white rounded-[9%] p-8 max-[510px]:p-4">
            <div class="flex justify-between items-center">
                <p class="font-bold text-5xl tracking-tighter max-[510px]:text-2xl">Deex Options</p>
                <svg class="text-[#F6DB06] max-[510px]:h-[40px]"xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"/></svg>
            </div>
            <p class="text-2xl tracking-tight mb-10 mt-[-12px] max-[510px]:text-xl max-[510px]:mt-[-9px]">A Trading Platform</p>
            <div class="w-full h-[400px]" @mouseover="playVideo" @mouseout="pauseVideo">
                <video class="rounded-2xl video" ref="video" src="../assets/heroVideo.mp4" loop muted></video>
            </div>
        </div>
</template>
<style scoped>
.video  {
    height: 100%;
    width: 100%;
    object-fit: initial;
}
</style>

