<template>
  <q-page padding class="column flex-center">

    <PortfolioComp/>
    <SkillsComp/>
    <AboutmeComp/>
    <ContactComp/>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import PortfolioComp from '../components/PortfolioComp.vue'
import SkillsComp from '../components/SkillsComp.vue'
import AboutmeComp from '../components/AboutmeComp.vue'
import ContactComp from '../components/ContactComp.vue'

export default defineComponent({
  name: 'IndexPage',
  components:{
    SkillsComp,
    PortfolioComp,
    AboutmeComp,
    ContactComp,
  }
})
</script>

<style>
.black-dot{
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 20px;
}
.border-black{
  border-color: black;
}
.border-radius{
  border-radius: 10px;
}
.gray-circle{
  background-color: #E4E4E4;
  width: fit-content;
  border-radius: 15px;
}
</style>