<template>
    <q-page padding>
      <q-btn @click="goBack" class="bg-white fixed z-top" icon="keyboard_backspace" style="padding-right: 10px;padding-left: 10px;"/>
      <div class="text-h3 text-bold text-center q-mt-lg">Cosecha colectiva</div>
        
        <div class="row">

          <div class="col-xs-12 col-sm-12 lt-md q-pa-xl">
            <div class="row">
              <div class="col">
                <q-img src="cosecha_1.svg" class="q-mt-lg"/>
              </div>
              <div class="col">
                <q-img src="cosecha_3.svg" class="q-mt-lg"/>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 q-pa-xl">

            <div>
              <div class="text-h4 text-weight-medium">Information</div>
              <div class="text-subtitle1 q-mt-sm">Frontend</div>
              <div class="text-subtitle1 q-mt-sm">Backend</div>
              <a style="color: #0038FF;" target="_blank" href="https://www.linkedin.com/company/cdfifuaq/" class="my-custom-link q-mt-sm text-subtitle1">Centro de Desarrollo</a>

              <div class="text-subtitle1 q-mt-sm">February 2023 - July 2023</div>
            </div>
            
            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Description</div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">Mobile app for managing groups and sessions of self financed groups and review historical data of the sessions, the app does not manage the money, its to help the users to avoid mistakes and administrate better the sessions, the flow is like this: </div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">Users create an account, then they login, the user that is going to be the admin of a group creates one and share the group's code to the other members, once joined they can start a session, wich always goes trough a roll call before starting, if its the first session they make the agreements and then the actual session starts. In the session they can ask/extend loans, buy/sell actions and get penalties, pay loans/penalties , check how much money the group has and schedule the next session, if the session is a profit share type, at the begining they make again the agreements and share profits.</div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">They also con edit their personal data and in the groups they are check the actual agreements, their loans/penalties and its status, check their current profit and see the actions made by him according to a session.</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Activities</div>
              <div class="text-subtitle1 q-mt-sm">UI/UIX design on Figma and UI implementation with React Native</div>
              <div class="text-subtitle1 q-mt-sm">Data fetching and data display</div>
              <div class="text-subtitle1 q-mt-sm">API endpoints functionallity</div>
              <div class="text-subtitle1 q-mt-sm">Code modularization</div>
              <div class="text-subtitle1 q-mt-sm">Raw SQL queries</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Challengues</div>
              <div class="text-subtitle1 q-mt-sm">The clients of this projects werent familiar with technology so the communication was difficult , sometimes they ask something but they really want other thing, or some functionallity were bugs for them but it was bad use from the user, yet after some meetings i manage to understand them and from that point the communication were very clear, i could explain stuff on their terms and i could understand their requirments.</div>
              <div class="text-subtitle1 q-mt-sm">I started working in this project when it was in the middle of the development process because the two members of the front end quited, so the first challengue was to understand their code and architecture (there wasn´t any architecture and the code was filled with bad practices and a lot of repetitive code). So modyfing and implementing modules was complex, so i decied that before going forward i would re estructure everything.</div>
              <div class="text-subtitle1 q-mt-sm">The first thing i did was the re design of the user interfaces, they weren´t bad but they lacked of UX, once i finished the design i did a map of the navigation: which stack navigator contains which screens and what funcionality of that screens can be modularized, after that implement the MVC architecture was easy.</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Technologies</div>
              <div class="row q-mt-sm q-gutter-md">
                <div class="col-md-1" >
                  <q-img src="react.svg" class="mini-icon"/> 
                  <div>React-Native</div>
                </div>
                <div class="col-md-1">
                  <q-img src="express.svg" class="mini-icon" fit="scale-down"/> 
                  <div>ExpressJs</div>
                </div>
                <div class="col-md-1">
                  <q-img src="mysql.svg" class="mini-icon" fit="scale-down"/> 
                  <div>MySQL</div>
                </div>
                <div class="col-md-1">
                  <q-img src="aws.svg" class="mini-icon" fit="scale-down"/> 
                  <div>AWS</div>
                </div>
              </div>
            </div>

              <q-btn
              no-caps
              color="black"
              label="Visit"
              class="full-width q-py-sm text-h6 q-mt-xl"
              outline
              @click="goCosecha"
            />

          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 gt-sm q-pa-xl">
            <div class="row">
              <div class="col">
                <q-img src="cosecha_1.svg" class="q-mt-lg"/>
              </div>
              <div class="col">
                <q-img src="cosecha_3.svg" class="q-mt-lg"/>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <q-img src="cosecha_4.svg" class="q-mt-lg"/>
              </div>
              <div class="col">
                <q-img src="cosecha_5.svg" class="q-mt-lg"/>
              </div>
            </div>
            
          </div>

        </div>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CosechaColectiva',
  methods:{
      goBack(){
        this.$router.go(-1); 
      },
      goCosecha(){
        const url = 'https://drive.google.com/file/d/1HFFxF46D2IWu4BMJ89NLXStsumFrxu9l/view';
        window.open(url, '_blank');
      }
  },
})
</script>
<style>
.mini-icon{
  width: 45px;
  height: 45px;
}
</style>
