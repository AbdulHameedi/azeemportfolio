<script>
import { defineComponent } from 'vue';
import Clients from './Clients.vue';

export default defineComponent({
    data(){
        return{
            
        }
    },
    components: {
        Clients
    }
})
</script>
<template>
    <section>
        <Clients />
        
    </section>
</template>