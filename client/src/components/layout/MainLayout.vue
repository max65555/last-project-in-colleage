<template>
    <div class="bg-white w-full ">
        <HeaderRoutes/>
    </div>
    {{ currentComputed }}
    <button @click="change">Click Here</button>
</template>

<script setup>
import { computed, ref,onMounted } from 'vue';
import HeaderRoutes from './HeaderRoutes.vue';
const currentVal = ref({
    name:'test',
    age:12
})

const currentComputed = computed({
    get(){
        return currentVal;
    },
    set(data){
        currentVal.value = data;
    }
});

const change = () =>{
    let increase = currentComputed.value.value.age + 1;
    console.log('🚀 ~ file: MainLayout.vue:28 ~ change ~ currentComputed.value.age:', currentComputed.value.value.age);
    currentComputed.value = {
        name:'test changed',
        age:increase
    }
}
onMounted(()=>{
    currentComputed.value = {
        name:'test changed',
        age:21
    }
})
</script>

<style scoped>

</style>