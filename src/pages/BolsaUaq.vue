<template>
    <q-page padding>
      <q-btn @click="goBack" class="bg-white fixed z-top" icon="keyboard_backspace" style="padding-right: 10px;padding-left: 10px;"/>
      <div class="text-h3 text-bold text-center q-mt-lg">Bolsa Uaq</div>
        
        <div class="row">

          <div class="col-xs-12 col-sm-12 lt-md q-pa-xl">
            <q-img src="bolsa_uaq_validar.png" />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 q-pa-xl">

            <div>
              <div class="text-h4 text-weight-medium">Information</div>
              <div class="text-subtitle1 q-mt-sm">Project Leader</div>
              <div class="text-subtitle1 q-mt-sm">Frontend</div>
              <div class="text-subtitle1 q-mt-sm">Backend</div>
              <a style="color: #0038FF;" target="_blank" href="https://www.linkedin.com/company/cdfifuaq/" class="my-custom-link q-mt-sm text-subtitle1">Centro de Desarrollo</a>

              <div class="text-subtitle1 q-mt-sm">March 2022 - September 2022</div>
            </div>
            
            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Description</div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">This is the platform that the vinculation department of the Facultad de Informática from the Universidad Autónoma de Quéretaro uses for managing the vacants that companies. Consist on two dashboards, the admin one and the user, the flow is like this: </div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">A company makes a registry request, then the admin denies or accepts this request, if accepted the company can login. When the company is on the user dashboard it can create a vacant request that the admin can approve or deny, the company can see the status of its vacants , edit them and changue the disponibility  </div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Activities</div>
              <div class="text-subtitle1 q-mt-sm">Delegation of activities to team members such as</div>
              <div class="q-pl-lg text-subtitle1 q-mt-sm">
                <lu>
                  <li>UI design/implementation</li>
                  <li>Creation of reusable components,hooks, and functions</li>
                  <li>Implementation of API endpoints, middlewares and services (upload files,
download files and images visualization)</li>
                </lu>
              </div>
              <div class="text-subtitle1 q-mt-sm">Creation of the database models through Ludichart and implementation on the
backend through a ORM (Sequelize)</div>
              <div class="text-subtitle1 q-mt-sm">UI/UIX design on Figma and UI implementation with React (css)</div>
              <div class="text-subtitle1 q-mt-sm">API endpoints functionallity</div>
              <div class="text-subtitle1 q-mt-sm">Data fetching and data display</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Challengues</div>
              <div class="text-subtitle1 q-mt-sm">Manage the team members: this was my first project in chargue and even tho i had some idea of how to do it, the real problem was knowing the team so i can correctly assign a task to the more fit team member.</div>
              <div class="text-subtitle1 q-mt-sm">Git merge issues: we were 7 team members and the project is not big so we did a bad branch managment that in many cases lead to git merge problems, yet we manage to fixed them by going to past commit and start branching correctly</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Technologies</div>
              <div class="row q-mt-sm q-gutter-md">
                <div class="col-md-1">
                  <q-img src="vue.svg" class="mini-icon"/> 
                  <div>VueJs</div>
                </div>
                <div class="col-md-1">
                  <q-img src="quasar.svg" class="mini-icon"/> 
                  <div>Quasar</div>
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
                  <q-img src="sequelize.svg" class="mini-icon"/> 
                  <div>Sequelize</div>
                </div>
              
              </div>
            </div>

              <q-btn
              no-caps
              color="black"
              label="Visit"
              class="full-width q-py-sm text-h6 q-mt-xl"
              outline
              @click="goBolsaUaq"
            />

          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 gt-sm q-pa-xl">
            <q-img src="bolsa_uaq_validar.png"  />
            <q-img src="bolsa_uaq_info.png" class="q-mt-lg"/>
            <q-img src="bolsa_uaq_empresa.png" class="q-mt-lg"/>
            <q-img src="bolsa_uaq_info2.png" class="q-mt-lg"/>
          </div>

        </div>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BolsaUaq',
  methods:{
      goBack(){
        this.$router.go(-1); 
      },
      goBolsaUaq(){
        const url = 'https://bolsa.fif-uaq.mx';
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
