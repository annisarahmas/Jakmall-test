<template>
    <div class="content container">
        <Header />
        <div class="content_left">
            <div class="content-finish">
                <h1 class="title head">Thank you</h1>
                <div>
                    <p><b>Order ID : {{ randomNumber }}</b></p>
                    <p>Your order will be delivered today with GO-SEND</p>
                    <br><br>
                    <a href="/" class="button_back"><i class="fa fa-arrow-left"></i>Go to homepage</a>
                </div>
            </div>
        </div>
        <div class="content_right">
            <div class="content-right">
                <h3 class="title sub-head">Summary</h3>
                <p>10 item purchased</p>
                <hr>
                <p>Delivery estimation</p>
                <p style="color: #1BD97B;">{{ shipment }}</p>

                <br><br><br>
                <p>Cost of goods <span class="price">500,000</span></p>
                <p>Dropshipping Fee <span class="price">5,900</span></p>
                <p><b>GO-SEND</b> Shipment <span class="price">5,900</span></p>

                <p class="total-price">Total <span class="price"><b>505,900</b></span></p>
                    
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/header.vue";

export default {
    data() {
        return {
            randomNumber: '',
            shipment: '',
            selectedPayment: ''
        };
    },
    mounted () {
        let randomNumber = this.rndStr(5)
        this.randomNumber = randomNumber.toUpperCase()
    },
    methods: {
        rndStr(len) {
            let text = " "
            let char = "abcdefghijklmnopqrstuvwxyz10"
        
            for( let i=0; i < len; i++ ) {
                text += char.charAt(Math.floor(Math.random() * char.length))
            }

			return text
		}
    },
    components: {
        Header
    }
}
</script>

<style lang="stylus" scoped>
.content-finish
    width 50%
    margin 15% auto
    text-align left
    .title
        margin-bottom 32px
.button_back
    color #000 !important

@media (max-width: 767px)
    .content
        display block !important
        &_right
            padding-left 0 !important
            margin-top 50px !important
            border none
    
    .content-finish
        margin auto !important
</style>