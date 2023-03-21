<script lang="ts" setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();
const date = ref();
const show = () => {
  toast.add({ severity: 'success', summary: 'Info', detail: 'Message Content', life: 3000 });
};
</script>

<template>
  <div class="py-2">
    <Toast />
    <Calendar v-model="date" />
    Page: foo
    <Toast />
    <Button label="Show" @click="show()" />
  </div>
</template>

<style scoped></style>
