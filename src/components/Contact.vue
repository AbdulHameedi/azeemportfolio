<script>
import { defineComponent } from 'vue';


export default defineComponent({
    data(){
        return{
            
        }
    }
})
</script>
<template>
    <section class="bg-[#FFFDED] px-4 md:px-24">
        <div class="w-full bg-black p-3 md:p-8 flex gap-5 md:gap-20 max-[1220px]:flex-col rounded-3xl items-center ">
            <div class="overflow-hidden w-[35%] max-[1220px]:w-full h-[400px] rounded-3xl">
                <img class="w-full h-full transition-all duration-300 hover:scale-110" src="/img/azeem_pic.png" alt="azeem pic">
            </div>
            <div class="text-white w-[65%] max-[1220px]:w-full pr-20 max-[1220px]:pr-0">
                <p class="md:text-7xl tracking-tighter mb-5 text-4xl">I am <b class="text-[#F6DB06]">Abdulazeem Akanji</b></p>
                <p class="leading-8 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt facere atque delectus rem, voluptatum recusandae minus qui minima temporibus voluptate modi ex corporis cum hic quam similique quibusdam placeat quod. Quasi dolores itaque tempore debitis eum non, blanditiis repudiandae!</p>
            </div>
        </div>
    </section>
</template>

