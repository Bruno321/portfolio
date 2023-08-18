<template>
    <div style="width: 100%;">
      <div class="text-h3 text-bold text-center q-mt-lg">About me</div>
        
        <div class="row q-px-xl q-mt-lg">
            <div class="col-xs-12 col-sm-12 col-md-6 col-center q-mt-lg">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div style="width: 250px;height: 250px;background-color: gray;border-radius: 120px;"></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 q-mt-lg">
                    <div class="flex flex-center q-gutter-x-sm">
                        <q-icon size="30px" name="language"/>
                        <div class="text-h4">Languages</div>
                    </div>
                    <div class="q-ml-xl q-mt-sm">
                        <lu>
                            <li class="text-subtitle1">Spanish (native)</li>
                            <li class="text-subtitle1 q-mt-sm">English (B-2)</li>
                        </lu>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 q-mt-lg">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <div class="flex">
                        <div class="text-h4">Bruno Ivan Paz Martinez</div>
                        <q-separator
                            vertical
                            inset
                            size="3px"
                            color="accent"
                            class="q-mx-lg q-mx-sm q-my-none"
                        />
                        <div class="text-h5 flex flex-center">Full stack developer</div>
                    </div>
                    <p class="h6 q-mt-md">
                        {{ 
                        `During my time on Centro de Desarrollo i got the opportunity of leading some of the projects , where i faced the difficulties of managing people. At the end i learned how to manage people according to his profile (skills and preferences) to get the best of them
                         During my time on Centro de Desarrollo i got the opportunity of leading some of the projects , where i faced the difficulties of managing people. At the end i learned how to manage people according to his profile (skills and preferences) to get the best of them
                         During my time on Centro de Desarrollo i got the opportunity of leading some of the projects , where i faced the difficulties of managing people. At the end i learned how to manage people according to his profile (skills and preferences) to get the best of them
                        `    
                        }}
                    </p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <div class="flex flex-center q-gutter-x-sm" style="width: fit-content;">
                        <q-icon size="30px" name="person"/>
                        <div class="text-h4">Personal information</div>
                        
                    </div>
                    <q-separator
                        size="1px"
                        color="black"
                        class="q-mt-md"
                    />
                    <div class="row q-mt-md">
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="text-h6">Nombre:</div>
                            <div>Bruno Ivan Paz Martinez</div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="text-h6">Residencia:</div>
                            <div>México-Querétaro</div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 q-mt-md">
                            <div class="text-h6">Github:</div>
                            <div>https://github.com/Bruno321</div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 q-mt-md">
                            <div class="text-h6">Linkedin:</div>
                            <div>https://www.linkedin.com/in/bruno-ivan-paz-martinez-451827195/</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'AboutmeComp',
  })
</script>