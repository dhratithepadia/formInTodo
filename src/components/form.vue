<template>
  <div class="container">
      <h1>Coupan Form</h1>
      <form>
          <br>
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <input class="form__input form-control" placeholder="Coupan Name" v-model.trim="$v.name.$model"/>
        </div>
        <div class="error" v-if="!$v.name.required">Field is required</div>
        <div class="error" v-if="!$v.name.maxLength">Name must have at least {{$v.name.$params.maxLength.min}} letters.</div>
          <br>

        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <input class="form__input form-control" placeholder="Coupan Price" @input.prevent="checkMobile" v-model.trim="$v.price.$model"/>
        </div>
        <div class="error" v-if="!$v.price.required">Field is required</div>
        <!-- <div class="error" v-if="!$v.price.maxLength">Name must have at least {{$v.name.$params.maxLength.min}} letters.</div> -->
        <br>
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <input class="form__input form-control" placeholder="Start Date" type="date"
        v-validate="{ date_format: 'dd/MM/yyyy'}"
        v-model.trim="$v.startDate.$model"/>
        </div> 
        <div class="error" v-if="!$v.startDate.required">Field is required</div>
        <!-- <div class="error" v-if="!$v.endDate.isAfterDate">plz fill correct value</div> -->
        <!-- <div class="error" v-if="!$v.startDate.maxLength">Name must have at least {{$v.name.$params.maxLength.min}} letters.</div> -->
        <br>
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <input class="form__input form-control" placeholder="Start Time" v-model.trim="$v.startTime.$model"/>
        </div>
        <div class="error" v-if="!$v.startTime.required">Field is required</div>
        <!-- <div class="error" v-if="!$v.startTime.maxLength">Name must have at least {{$v.name.$params.maxLength.min}} letters.</div> -->
        <br>
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <input class="form__input form-control" placeholder="End Date" type="date"
        @change="changeDate"
        v-validate="{ date_format: 'dd/MM/yyyy'}"
        v-model.trim="$v.endDate.$model"/>
        </div>
        <div class="error" v-if="!$v.endDate.required">Field is required</div>
        <!-- <div class="error" v-if="!$v.endDate.isAfterDate">plz fill correct value</div> -->
        <!-- <div class="error" v-if="!$v.endDate.maxLength">Name must have at least {{$v.name.$params.maxLength.min}} letters.</div> -->
        <br>
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <input class="form__input form-control" placeholder="End Time" 
        
        v-model.trim="$v.endTime.$model"/>
        </div>
        <div class="error" v-if="!$v.endTime.required">Field is required</div>
        <!-- <div class="error" v-if="!$v.endTime.maxLength">Name must have at least {{$v.name.$params.maxLength.min}} letters.</div> -->
        
        </form>
  </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
import { ref, withParams } from 'vuelidate/lib/validators/common.js'
export default {
    data () {
        return {
            name: '',
            price: '',
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: '',
        }
    },
//     const: isAfterDate = (value, vm) => {
//     return new Date(value).getTime() > new Date(vm.startDate).getTime();
// },
    validations: {
        name:{
            required,
            maxLength: maxLength(30)
        },
        price: {
            required,
        },
        startDate: {
            required,
        },
        startTime: {
            required
        },
        endDate: {
            required
        },
        endTime: {
            required
        }
    },
    methods: {
        formatPhoneNumber(phoneNumberString) {
            let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
            let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            return null;
        },
        checkMobile(evt) {
            let input = evt.target;
            let number = input.value.replace(/[^0-9-+()]/g, '');
            this.price = number;                      
             
        },
        changeDate () {
            if(Date.parse(this.endDate)<= Date.parse(this.startDate)){
                alert("Sorry")
            }else{
                
                alert("done")
            }
        }
    }

}
</script>

<style>
.container{
    width: 50%;
    height: 50%;
}
</style>
