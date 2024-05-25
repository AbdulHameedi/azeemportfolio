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
    <section class="px-4 md:px-[13%]">
        <div class="w-full bg-black p-3 md:p-6 flex gap-5 md:gap max-[1220px]:flex-col rounded-3xl items-center" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
            <div class="overflow-hidden max-[1220px]:w-full rounded-3xl">
                <img class="transition-all duration-300 hover:scale-110" src="/img/azeem_pic.png" alt="azeem pic">
            </div>
            <div class="text-white w-[75%] max-[1220px]:w-full pr-20 max-[1220px]:pr-0">
                <p class="md:text-6xl tracking-tighter mb-5 text-3xl">I am <b class="text-[#F6DB06]">Abdulazeem Akanji</b></p>
                <p class="leading-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt facere atque delectus rem, voluptatum recusandae minus qui minima temporibus voluptate modi ex corporis cum hic quam similique quibusdam placeat quod. Quasi dolores itaque tempore debitis eum non, blanditiis repudiandae!</p>
            </div>
        </div>
    </section>
</template>

