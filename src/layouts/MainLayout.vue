<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-black" >
      <q-toolbar class="flex flex-center" >
        <!-- <q-toolbar-title class="flex">
           <div>Bruno Ivan Paz Martinez</div>
           <q-separator
            vertical
            inset
            size="3px"
            color="accent"
            class="q-mx-lg q-mx-sm q-my-none"
          />
           <div>Full stack developer</div>
        </q-toolbar-title> -->
        
          <q-btn
            stretch
            flat
            no-caps 
            label="Portfolio"
            class="hover-effect q-mx-md"
            :class="{ 'active-btn': pagePosition === 'portfolio' }"
            style="font-size:large"
          />
          <q-btn
            stretch
            flat
            no-caps 
            label="Skills"
            class="hover-effect q-mx-md"
            :class="{ 'active-btn': pagePosition  === 'skills' }"
            style="font-size:large"
          />
          <q-btn
            stretch
            flat
            no-caps 
            label="About me"
            class="hover-effect q-mx-md"
            :class="{ 'active-btn': pagePosition  === '/aboutMe' }"
            style="font-size:large"
          />
          <q-btn
            stretch
            flat
            no-caps 
            label="Contact"
            class="hover-effect q-mx-md"
            :class="{ 'active-btn': pagePosition  === 'contact' }"
            style="font-size:large"
          />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data(){
    return {
      pagePosition:'portfolio'
    }
  }
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
