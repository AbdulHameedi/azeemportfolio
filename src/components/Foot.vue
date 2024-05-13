<script>
import { defineComponent } from 'vue';
import Clients from './Clients.vue';
import ContactForm from './ContactForm.vue';

export default defineComponent({
    data(){
        return{
            
        }
    },
    components: {
        Clients,
        ContactForm
    }
})
</script>
<template>
    <section>
        <Clients />
        <ContactForm />
    </section>
</template>