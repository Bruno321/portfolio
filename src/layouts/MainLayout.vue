<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
})
</script>


<style>
.hover-effect {
  position: relative;
}

.hover-effect::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #9A8174;
  transition: width 0.5s ease;
}

.hover-effect:hover::after {
  width: 100%;
}

.active-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  width: 100%;

  background-color: #9A8174;
  transition: width 0.5s ease;
}
</style>
