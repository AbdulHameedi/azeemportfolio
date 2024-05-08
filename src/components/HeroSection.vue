<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue'

export default defineComponent({
    data(){
        return{
            videoSource: '../assets/heroVideo.mp4',
            isPlaying: false
        }
    },
    components:{
        NavBar
    },
    methods:{
        togglePlay(){
            const video = this.$refs.video;
            if(this.isPlaying){
                video.pause();
            }else{
                video.play();
            }
            this.isPlaying =!this.isPlaying
        }
    }
})
</script>
<template>
    <main class="heroVideo relative">
        <div class="absolute top-0 bottom-0 right-0">
            <video ref="video" class="video" width="290" src="../assets/heroVideo.mp4" loop muted></video>
        </div>
        <!-- control button -->
        <div class="z-20 absolute top-[50%] left-[50%] bg-white w-fit rounded-[50%] p-4 mx-auto" @click="togglePlay">
            <svg v-if="isPlaying" class="rounded text-[#2F2F2F]" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="currentColor" d="M14 19V5h4v14zm-8 0V5h4v14z"/></svg>
            <svg v-else class="rounded text-[#2F2F2F]" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7z"/></svg>
        </div>
        
        <section class="p-8 md:px-24 py-10 absolute top-0 bottom-0">
            <NavBar />
            <div class="max-w-[90%] mb-8">
                <p class="text-white font-extrabold text-8xl tracking-tighter">A motion designer with a <b class="text-[#F6DB06]">nack</b> for awesomeness</p>
                <img class="zigzagImage" src="../assets/zigzagHero.png" alt="">
            </div>
        </section> 
    </main>
    
</template>
<style scoped>
.zigzagImage{
    animation: zigzag 8s ease-in-out infinite alternate;
    animation-delay: 4s;
}
@keyframes zigzag{
    from{
        transform: rotate(10deg);
    }to{
        transform: rotate(20deg);
    }
}
.heroVideo{
    height: calc(100vh + 250px);
}
.video{
    height: calc(100vh + 250px);
    width: 100%;
    object-fit: cover;
}
</style>

