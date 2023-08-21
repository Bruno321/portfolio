<template>
    <q-page padding>
      <q-btn @click="goBack" class="bg-white fixed z-top" icon="keyboard_backspace" style="padding-right: 10px;padding-left: 10px;"/>
      <div class="text-h3 text-bold text-center q-mt-lg">Indereq</div>
        
        <div class="row">

          <div class="col-xs-12 col-sm-12 lt-md q-pa-xl">
            <q-img src="indereq_evento.svg"  />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 q-pa-xl">

            <div>
              <div class="text-h4 text-weight-medium">Information</div>
              <div class="text-subtitle1 q-mt-sm">Project Leader</div>
              <div class="text-subtitle1 q-mt-sm">Frontend</div>
              <div class="text-subtitle1 q-mt-sm">Backend</div>
              <a style="color: #0038FF;" target="_blank" href="https://www.linkedin.com/company/cdfifuaq/" class="my-custom-link q-mt-sm text-subtitle1">Centro de Desarrollo</a>

              <div class="text-subtitle1 q-mt-sm">November 2022 - April 2023</div>
            </div>
            
            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Description</div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">This is the platform that the Instituto del Deporte y Recreación del Estado de Querétaro will use for administrate their high performance athletes and members, but the project is in test mode with the teams of the Universidad Autonóma de Querétaro, the project flow is like this: </div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">There are two mobile apps, the one for the admin and the one for the athlete, the admin that can be the coach or a coordinator registers the athletes then a QR code is given , then the athlete with his app scans the QRCode and his information is storaged on his device and he is given a QRCode, now the roll call (entry and exit) is made from the admin app scanning the athlete QRCode,there are several mesaures to make this system proof against cheating.</div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">In the admin dashboard is on the app and on the desktop , the admins can add the athletes, make a team and asign the athletes to a team, check how many training hours they have and the days, they also can make matchs , asign a roster to a match and write the score.</div>
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
              <div class="text-subtitle1 q-mt-sm">The project requierments were changing a lot through the process so modify and delete modules was very problematic and we werent implementing a correct architecture so i decided to first focus the architecture this was a challengue by its own but when we did it and a new requirment was asked , implement it was not problematic anymore.</div>
              <div class="text-subtitle1 q-mt-sm">Implement MVC and RESTful API architecture to the existing project was difficult because this was my first big project and it was in the middle of the develop process, but i manage to overcome it by assigning small tasks to the team members that later would be put togethers to form a module and at the same time others would be refactorizing the existing code.</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Technologies</div>
              <div class="row q-mt-sm q-gutter-md">
                <div class="col-md-1">
                  <q-img src="react.svg" class="mini-icon"/> 
                  <div>React</div>
                </div>
                <div class="col-md-1" >
                  <q-img src="react.svg" class="mini-icon"/> 
                  <div>React-Native</div>
                </div>
                <div class="col-md-1">
                  <q-img src="feathers.svg" class="mini-icon" fit="scale-down"/> 
                  <div>Feathers</div>
                </div>
                <div class="col-md-1">
                  <q-img src="mysql.svg" class="mini-icon" fit="scale-down"/> 
                  <div>MySQL</div>
                </div>
                <div class="col-md-1">
                  <q-img src="sequelize.svg" class="mini-icon"/> 
                  <div>Sequelize</div>
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
              @click="goIndereq"
            />

          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 gt-sm q-pa-xl">
            <q-img src="indereq_evento.svg"  />
            <div class="row">
              <div class="col">
                <q-img src="inderq_lista.svg" class="q-mt-lg"/>
              </div>
              <div class="col">
                <q-img src="indereq_scan.svg" class="q-mt-lg"/>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <q-img src="indereq_deportista.svg" class="q-mt-lg"/>
              </div>
              <div class="col">
                <q-img src="indereq_qr.svg" class="q-mt-lg"/>
              </div>
            </div>
            <q-img src="indereq_lista2.svg" class="q-mt-lg"/>
          </div>

        </div>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InderePage',
  methods:{
      goBack(){
        this.$router.go(-1); 
      },
      goIndereq(){
        const url = 'https://indirec-web.vercel.app';
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
