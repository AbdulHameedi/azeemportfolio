<template>
    <div class="cursor-dot" data-cursor-dot></div>
    <div class="cursor-outline" data-cursor-outline></div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            
        }
    },
    mounted(){
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]")
        window.addEventListener("mousemove", function(e){
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {duration: 800,fill:"forwards"});
        })
    }
})
</script>
<style>
body{
    cursor: none;
}
.cursor-dot{
    width: 5px;
    height: 5px;
    background-color: black;
}
.cursor-outline{
    width: 30px;
    height: 30px;
    border: 2px solid #F6DB06;
}
.cursor-dot, .cursor-outline{
    position: fixed;
    top: -10px;
    left: -10px;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    z-index: 999;
    pointer-events: none;
}
@media screen and (max-width:425px){
    body{
        cursor: pointer;
    }
}
</style>



