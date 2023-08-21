<template>
    <q-page padding>
      <q-btn @click="goBack" class="bg-white fixed z-top" icon="keyboard_backspace" style="padding-right: 10px;padding-left: 10px;"/>
      <div class="text-h3 text-bold text-center q-mt-lg">Agenda UAQ</div>
        
        <div class="row">

          <div class="col-xs-12 col-sm-12 lt-md q-pa-xl">
            <div class="row">
              <div class="col">
                <q-img src="agenda_noti.jpg" class="q-mt-lg"/>
              </div>
              <div class="col">
                <q-img src="agenda_login.jpg" class="q-mt-lg"/>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 q-pa-xl">

            <div>
              <div class="text-h4 text-weight-medium">Information</div>
              <div class="text-subtitle1 q-mt-sm">Project leader</div>
              <div class="text-subtitle1 q-mt-sm">Frontend</div>
              <a style="color: #0038FF;" target="_blank" href="https://www.linkedin.com/company/cdfifuaq/" class="my-custom-link q-mt-sm text-subtitle1">Centro de Desarrollo</a>

              <div class="text-subtitle1 q-mt-sm">August 2021 - February 2022</div>
            </div>
            
            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Description</div>
              <div class="text-subtitle1 q-mt-sm q-mt-sm">Mobile app that shows a calendar of important events from the Univerisdad Autónoma de Qurétaro and notifies those events</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Activities</div>
              <div class="text-subtitle1 q-mt-sm">UI/UIX design on Figma and UI implementation with React Native</div>
              <div class="text-subtitle1 q-mt-sm">Data fetching and data display</div>
              <div class="text-subtitle1 q-mt-sm">Cloud Messaging configuration</div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Challengues</div>
              <div class="text-subtitle1 q-mt-sm">Configuring the cloud messaging and notification library for IOS was very problematic some libraries were coliding and we took time to realize that. Two different libraries are needed for that but one of them installs the other as a peer depedency so it dosent show on the package.json but we also needed that one instaled not as a peer dependecy so we had two versions of the same library, so we just removed the one that is installed as peer dependecy </div>
            </div>

            <div>
              <div class="text-h4 text-weight-medium q-mt-lg">Technologies</div>
              <div class="row q-mt-sm q-gutter-md">
                <div class="col-md-1" >
                  <q-img src="react.svg" class="mini-icon"/> 
                  <div>React-Native</div>
                </div>
                <div class="col-md-1" >
                  <q-img src="firebase.svg" class="mini-icon"/> 
                  <div>Firebase</div>
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
                <q-img src="agenda_noti.jpg" class="q-mt-lg"/>
              </div>
              <div class="col">
                <q-img src="agenda_login.jpg" class="q-mt-lg"/>
              </div>
            </div>
          </div>

        </div>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AgendaUaq',
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
