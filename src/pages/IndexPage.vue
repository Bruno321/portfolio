<template>
  <q-page padding class="column flex-center">
    <q-header elevated class="bg-white text-black" >
      <q-toolbar class="flex flex-center" >
          <q-btn
            stretch
            flat
            no-caps 
            label="Portfolio"
            class="hover-effect q-mx-md"
            :class="{ 'active-btn': itemShown === 'portfolio' }"
            style="font-size:large"
            @click="goSection('portfolio')"
          />
          <q-btn
            stretch
            flat
            no-caps 
            label="Skills"
            class="hover-effect q-mx-md"
            :class="{ 'active-btn': itemShown  === 'skills' }"
            style="font-size:large"
            @click="goSection('skills')"
          />
          <q-btn
            stretch
            flat
            no-caps 
            label="About me"
            class="hover-effect q-mx-md"
            :class="{ 'active-btn': itemShown  === 'about' }"
            style="font-size:large"
            @click="goSection('about')"
          />
          <q-btn
            stretch
            flat
            no-caps 
            label="Contact"
            class="hover-effect q-mx-md"
            :class="{ 'active-btn': itemShown  === 'contact' }"
            style="font-size:large"
            @click="goSection('contact')"
          />
      </q-toolbar>
    </q-header>

    <PortfolioComp id="portfolio"  
    v-intersection="portfolioIntersection"  
      @intersect="isIntersecting = true"
      @intersected="isIntersecting = false"
    />
    <SkillsComp id="skills" 
      v-intersection="skillsIntersection"  
      @intersect="isIntersecting = true"
      @intersected="isIntersecting = false"
    />
    <AboutmeComp id="about" 
      v-intersection="aboutIntersection"  
      @intersect="isIntersecting = true"
      @intersected="isIntersecting = false"
    />
    <ContactComp id="contact" 
      v-intersection="contactIntersection"  
      @intersect="isIntersecting = true"
      @intersected="isIntersecting = false"
    />

  </q-page>
</template>

<script>
import { defineComponent} from 'vue'
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
  },
  data(){
    return {
      itemShown : 'portfolio',
    }
  },
  methods: {
    contactIntersection(entry) {
      if (entry.isIntersecting) {
        this.itemShown = 'contact'
        console.log(this.itemShown)
      } 
    },
    aboutIntersection(entry) {
      if (entry.isIntersecting) {
        this.itemShown = 'about'
        console.log(this.itemShown)
      } 
    },
    skillsIntersection(entry) {
      if (entry.isIntersecting) {
        this.itemShown = 'skills'
        console.log(this.itemShown)
      } 
    },
    portfolioIntersection(entry) {
      if (entry.isIntersecting) {
        this.itemShown = 'portfolio'
        console.log(this.itemShown)
      } 
    },
    goSection(section){
      this.itemShown = section 
      document.querySelector(`#${section}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

</style>