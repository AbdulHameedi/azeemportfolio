<template>
    <section class="overflow-hidden w-full py-20">
        <div class="bg-white">
            <div class="bg-white py-4 flex items-center gap-10 image-wrapper">
                <img class="w-[10rem]" src="../assets/client_1.png" alt="client_1">
                <img class="w-[10rem]" src="../assets/client_2.png" alt="client_2">
                <img class="w-[10rem]" src="../assets/client_3.png" alt="client_3">
                <img class="w-[10rem]" src="../assets/client_4.png" alt="client_5">
                <img class="w-[10rem]" src="../assets/client_5.png" alt="client_6">
                <img class="w-[10rem]" src="../assets/client_6.png" alt="client_7">
                <img class="w-[10rem]" src="../assets/client_7.png" alt="client_4">
                <img class="w-[10rem]" src="../assets/client_8.png" alt="client_8">
                <img class="w-[10rem]" src="../assets/client_9.png" alt="client_9">
                
            </div>
        </div>
    </section>
</template>
<script>
import { defineComponent } from 'vue';


export default defineComponent({
    data(){
        return{
            
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

