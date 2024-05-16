<script>
import { defineComponent } from 'vue';
import Clients from './Clients.vue';
import ContactForm from './ContactForm.vue';
import Footer from './Footer.vue';

export default defineComponent({
    data(){
        return{
            
        }
    },
    components: {
        Clients,
        ContactForm,
        Footer
    }
})
</script>
<template>
    <section>
        <Clients />
        <ContactForm />
        <Footer />
    </section>
</template>