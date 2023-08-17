<template>
  <q-page padding class="column flex-center">
    <PortfolioComp/>
    <div >
      <p>Skills</p>
      <q-card flat bordered class="border-black">
        <q-card-section class="column flex-center">
          <q-icon name="settings_accessibility" size="30px" />
          <div>Leadership</div>
          <div class="text-justify" style="max-width: 500px;">During my time on Centro de Desarrollo i got the opportunity of leading some of the projects , where i faced the difficulties of managing people. At the end i learned how to manage people according to his profile (skills and preferences) to get the best of them</div>
        </q-card-section>
      </q-card>
      <q-card flat bordered class="border-black border-radius">
        <q-card-section class="flex q-gutter-md">
          <div >JavaScript</div>
          <div class="black-dot"></div>
          <div >VueJs</div>
          <div class="black-dot"></div>
          <div >ExpressJs</div>
        </q-card-section>
      </q-card>
    </div>
    <div>
      <p>About me</p>
      <div class="row" >

        <div class="q-col" style="width: 50%;">
          <div style="width: 10vw;height: 10vh;border-radius: 50px;"></div>
          <div>
            <q-icon size="30px" name="language"/>
            <p>Languages</p>
          </div>
          <div>
            <p>Spanish (native)</p>
            <p>English (B-2)</p>
          </div>
        </div>

        <div class="q-col" style="width: 50%;">
          <p>Full stack developer</p>
          <p>During my time on Centro de Desarrollo i got the opportunity of leading some of the projects , where i faced the difficulties of managing people. At the end i learned how to manage people according to his profile (skills and preferences) to get the best of them</p>
          <div>
            <q-icon size="30px" name="person"/>
            <p>Personal data</p>
          </div>
          <q-separator
            size="1px"
            color="black"
            class="q-mx-lg q-mx-sm q-my-none"
          />
          <div class="col">
            <div class="row">
              <div>
                <p>Name:</p>
                <p>Bruno Ivan Paz Martinez</p>
              </div>
              <div>
                <p>Residence:</p>
                <p>Queretaro-mexico</p>
              </div>
            </div>

            <div class="row">
              <div>
                <p>Github:</p>
                <p>www.github.com</p>
              </div>
              <div>
                <p>Linkedin:</p>
                <p>www.linkedin.com</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div>
      <q-card flat bordered class="border-black">
        <q-card-section class="column flex-center">
          <q-icon name="call" size="30px" />
          <div class="text-justify" style="max-width: 500px;">(+52) 442 669 6054</div>
        </q-card-section>
      </q-card>
      <q-card flat bordered class="border-black">
        <q-card-section class="column flex-center">
          <q-icon name="mail" size="30px" />
          <div class="text-justify" style="max-width: 500px;">brunopaz00@yahoo.com.mx</div>
        </q-card-section>
      </q-card>
    </div>
  
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import PortfolioComp from '../components/PortfolioComp.vue'

export default defineComponent({
  name: 'IndexPage',
  components:{
    PortfolioComp
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