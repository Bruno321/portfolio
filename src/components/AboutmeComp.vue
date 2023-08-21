<template>
    <div style="width: 100%;">
      <div class="text-h3 text-bold text-center q-mt-lg">About me</div>
        
        <div class="row q-px-xl q-mt-lg">
            <div class="col-xs-12 col-sm-12 col-md-6 col-center q-mt-lg">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <q-img style="width: 250px;height: 250px;border-radius: 120px;" src="link.jpg"/>
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
                    <div class="text-h6 q-mt-md text-weight-regular">
                       Full stack developer with 3 years of experiencie working on 
                       <a style="color: #9A8174;text-decoration:none" target="_blank" href="https://www.linkedin.com/company/cdfifuaq/" class="my-custom-link text-h6 text-weight-regular" >Centro de Desarrollo</a>
                       ,there I had the opprtunity to lead some projects, I have worked with clients ,  raised requirments and develop real projects.
                    </div>
                    <p class="text-h6 text-weight-regular">
                        I think the best way to know a developer is by reading his code and try his projects so fell free of doing that, my github is below (not all my projects are a public repo)
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
                            <div class="text-h5">Name:</div>
                            <div >Bruno Ivan Paz Martinez</div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="text-h6">Location:</div>
                            <div>México-Querétaro</div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 q-mt-md">
                            <div class="text-h6">Github:</div>
                            <a style="color: #0038FF;" target="_blank" href="https://github.com/Bruno321" class="my-custom-link">https://github.com/Bruno321</a>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 q-mt-md">
                            <div class="text-h6">Linkedin:</div>
                            <a style="color: #0038FF;" target="_blank" href="https://www.linkedin.com/in/bruno-ivan-paz-martinez-451827195/" class="my-custom-link">https://www.linkedin.com/in/bruno-ivan-paz-martinez-451827195</a>

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