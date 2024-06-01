<template>
    <section class="overflow-hidden w-full py-20">
        <div class="bg-white">
            <div class="bg-white py-4 flex items-center gap-10 image-wrapper">
                <img v-for="(image, index) in images.concat(images)" :key="index" :class="image.class" :src="image.src" :alt="image.alt">
            </div>
        </div>
    </section>
</template>
<script>
import { defineComponent } from 'vue';


export default defineComponent({
    data(){
        return{
            images: [
                { src: '/client_1.png', alt: 'client_ 1', class:"w-[10rem]"},
                { src: '/client_2.png', alt: 'client_2', class:"w-[10rem]"},
                { src: '/client_3.png', alt: 'client_ 3', class:"w-[10rem]"},
                { src: '/client_4.png', alt: 'client_4', class:"w-[10rem]"},
                { src: '/client_5.png', alt: 'client_5', class:"w-[10rem]"},
                { src: '/client_6.png', alt: 'client_6', class:"w-[10rem]"},
                { src: '/client_7.png', alt: 'client_7', class:"w-[10rem]"},
                { src: '/client_8.png', alt: 'client_8', class:"w-[10rem]"},
                { src: '/client_9.png', alt: 'client_9', class:"w-[10rem]"}
            ],
        }
    },
    methods:{
        startScroll(){
            const container = document.querySelector('.image-wrapper');
            const containerWidth = container.scrollWidth;
            const screenWidth = window.innerWidth;
            let scrollPosition = 0;

            setInterval(() =>{
                if(scrollPosition < containerWidth - screenWidth){
                    scrollPosition++;
                }else{
                    scrollPosition = 0;
                }
                container.scrollLeft = scrollPosition;
            }, 10);
        }
    }
})
</script>
<style scoped>
.image-wrapper{
    animation: scrollAnimation 30s linear infinite;
}
@keyframes scrollAnimation{
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-100%);
    }
}
</style>
