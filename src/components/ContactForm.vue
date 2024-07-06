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
<section id="contact" class="py-6 pb-28 px-3" data-aos="fade-top" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
    <div class="text-5xl tracking-tightest font-[600] flex flex-col items-center mb-10 max-[425px]:text-3xl">
        <p>Convinced?</p>
        <p class="text-center">Fill the <span class="text-[#F6DB06]">form</span> below</p>
        <img src="/img/zigzagForm.png" alt="ZigzagImage">
    </div>
    <div class="flex flex-col items-center gap-4 text-2xl font-light mb-10">
        <input class="w-[50%] max-[843px]:w-full max-[425px]:py-3 p-5 px-8 border focus:border-[#F6DB06] outline-none transiton duration-500 rounded-lg" type="text" placeholder="Full name">
        <div class="w-[50%] max-[843px]:w-full flex items-center gap-2">
            <input class="p-5 w-[50%] max-[425px]:py-3 px-8 border focus:border-[#F6DB06] outline-none transiton duration-500 rounded-lg" type="text" placeholder="Phone Number">
            <input class="p-5 w-[50%] max-[425px]:py-3 px-8 border focus:border-[#F6DB06] outline-none transiton duration-500 rounded-lg" type="email" placeholder="Email address">
        </div>
        <textarea class="w-[50%] max-[843px]:w-full max-[425px]:py-3 p-5 px-8 border focus:border-[#F6DB06] outline-none transiton duration-500 rounded-lg" placeholder="Message (A brief about your project)" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="flex flex-col items-center">
        <button type="submit" class="bg-[#F6DB06] text-[24px] w-[307px] h-[68px] rounded-[10px] max-[425px]:px-10">Send message</button>
    </div>
</section>
</template>