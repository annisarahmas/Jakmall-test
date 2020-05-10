<template>
    <div class="content container">
        <a href="/" class="button_back-to-cart"><i class="fa fa-arrow-left"></i>Back to delivery</a>
        <Header />

        <div class="content_left payments">
            <div class="payments_shipment">
                <h3 class="title head">Shipment</h3>
                <div class="button-payment">
                    <input type="radio" id="gosend" name="shipment" value="today by GO-SEND" v-model="shipment" required>
                    <label for="gosend" class="shipment">
                        <p>GO-SEND</p>
                        <p class="ship-price">15,000</p>
                    </label>
                    <input type="radio" id="jne" name="shipment" value="2 days by JNE" v-model="shipment" required>
                    <label for="jne" class="shipment">
                        <p>JNE</p>
                        <p class="ship-price">9,000</p>
                    </label>
                    <input type="radio" id="personal" name="shipment" value="1 days by Personal Courier" v-model="shipment" required>
                    <label for="personal" class="shipment">
                        <p>Personal Courier</p>
                        <p class="ship-price">29,000</p>
                    </label>
                </div>
            </div>
            <div class="payments_payment">
                <h3 class="title head">Payment</h3>
                <form class="button-payment" method="post">
                    <input type="radio" id="ewallet" name="selectedPayment" value="e-Wallet" v-model="selectedPayment">
                    <label for="ewallet">
                        <p>e-Wallet</p>
                        <p class="ship-price">1,500,000 left</p>
                    </label>
                    <input type="radio" id="banktransfer" name="selectedPayment" value="Bank Transfer" v-model="selectedPayment">
                    <label for="banktransfer">
                        <div>Bank Transfer</div>
                    </label>
                    <input type="radio" id="virtualaccount" name="selectedPayment" value="Virtual Account" v-model="selectedPayment">
                    <label for="virtualaccount">
                        <div>Virtual Account</div>
                    </label>
                </form>
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
                    
                <button type="submit" class="button" @click="validatePayment">Pay with {{selectedPayment}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/header.vue";

export default {
    data() {
        return {
            shipment: '',
            selectedPayment: ''
        };
    },
    methods: {
        validatePayment() {
            var checked_shipment = document.querySelector('input[name = "shipment"]:checked');
            var checked_selectedPayment = document.querySelector('input[name = "selectedPayment"]:checked');
            
            if(checked_shipment != null && checked_selectedPayment != null){  //Test if something was checked
                this.$router.push({ path: '/thankyou-page' })
            }
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="stylus" scoped>
@media (max-width: 425px)
    .button-payment
        flex-direction column !important
@media (max-width: 767px)
    .content
        display block !important
        &_right
            padding-left 0 !important
            margin-top 50px !important
            border none
@media (min-width: 768px) and (max-width: 991px)
    .content
        &_left
            width 60% !important
        &_right
            width 40% !important
            max-width 300px !important
</style>
