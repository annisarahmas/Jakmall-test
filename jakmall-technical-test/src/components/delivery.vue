<template>
    <div class="content container">
        <a href="javascript:;" class="button_back-to-cart"><i class="fa fa-arrow-left"></i>Back to cart</a>
        <Header />
        <div class="content_left">
            <div class="test">
                <div class="details-head">
                    <h1 class="title head">Delivery Details</h1>
                    <div class="button_dropshipper">
                        <input id="checkbox-drop" class="checkbox-custom" name="checkbox-drop" type="checkbox" @click="dropshipForm()">
                        <label for="checkbox-drop" class="checkbox-custom-label">Send as dropshipper</label>
                    </div>
                </div>
                <div class="details-body">
                    <div class="details-body_details">
                        <form>
                            <div class="form-group">
                                <input type="email" id="email" class="form-control" placeholder="Email" v-model="card.email" required>
                            </div>
                            <div class="form-group">
                                <input type="text" id="phone" class="form-control" placeholder="Phone Number" v-model="card.phone" required>
                            </div>
                            <div class="form-group">
                                <input type="text" id="address" class="form-control" placeholder="Delivery Address" maxlength="120" v-model="card.address" required>
                            </div>
                        </form>
                    </div>

                    <form class="details-body_dropshipper" id="dropshipper-form" style="display: none;">
                        <div class="form-group">
                            <input type="text" id="cname" class="form-control" placeholder="Dropshipper name" v-model="card.nameDrop" required>
                        </div>
                        <div class="form-group">
                            <input type="text" id="ccnum" class="form-control" placeholder="Dropshipper phone number" v-model="card.phoneDrop" required>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <div class="content_right">
            <div class="content-right">
                <h3 class="title sub-head">Summary</h3>
                <p>10 item purchased</p>
                
                <br><br><br>
                <p>Cost of goods <span class="price">500,000</span></p>
                <p id="dropshipper-fee" style="display: none;">Dropshipping Fee <span class="price">5,900</span></p>

                <p class="total-price">Total <span class="price"><b>505,900</b></span></p>
                                    
                <button type="button" class="button" @click="validateForm()">Submit</button>

            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/header.vue";

export default {
    data() {
        return {
            card: {
                email: '',
                phone: '',
                address: '',
            },
            errors: []
        };
    },
    methods: {
        validateForm() {
            let valid = true;

            var x, y, z;
            x = this.card.email
            y = this.card.phone
            z = this.card.address
            
            if (!x.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
                valid = false;
                document.getElementById('email').classList.add("invalid")
            } else {
                document.getElementById('email').classList.remove("invalid")
            }
            if (isNaN(y) || y.length < 6 || y.length > 20) {
                valid = false;
                document.getElementById('phone').classList.add("invalid")
            } else {
                document.getElementById('phone').classList.remove("invalid")
            }
            if (!z) {
                valid = false;
                document.getElementById('address').classList.add("invalid")
            } else {
                document.getElementById('address').classList.remove("invalid")
            }
            if (valid) {
                this.createToken();
            }

        },
        createToken() {
            this.$router.push({ path: '/payments' });
        },
        dropshipForm() {
            var checkBox = document.getElementById("checkbox-drop");
            var text = document.getElementById("dropshipper-form");
            var fee = document.getElementById("dropshipper-fee");
            if (checkBox.checked == true){
                text.style.display = "block";
                fee.style.display = "block";

            } else {
                text.style.display = "none";
                fee.style.display = "none";
            }
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="stylus" scoped>
@media (max-width: 575px)
    .details-head
        flex-direction column !important
    .details-body
        flex-direction column !important
        &_dropshipper
            padding 0 !important
@media (max-width: 991px)
    .content
        display block !important
        &_right
            margin-top 50px !important
            padding-left 0 !important
            border none
@media (min-width: 992px) and (max-width: 1198px)
    .content
        &_right
            max-width 301px !important
</style>