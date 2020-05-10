<template>
    <div class="header">
        <div id="nav" class="nav-header">
            <router-link to="/"><span class="numb active" >1</span>  Delivery</router-link> <i class="fa fa-chevron-right"></i>
            <router-link to="/payments"><span class="numb">2</span> About</router-link> <i class="fa fa-chevron-right"></i>
            <router-link to="/thankyou-page"><span class="numb">3</span> Finish</router-link>
        </div>
    </div>
</template>

<script>
export default {
//   name: "Header",
//   props: {
//     msg: String
//   }
    data() {
        return {

        }
    }
};
</script>
