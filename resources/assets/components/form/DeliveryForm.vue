<template>
    <div>
        <loader-vue :isLoading="isLoading"></loader-vue>
        <form @submit.prevent="submit">
            <input v-if="modalMode != 'add'" type="hidden" name="id" v-model="fields.id">
            <div class="row mb-6">
                <label class="col-lg-2 col-form-label fw-bold fs-6">Delivery Courier<span
                        class="text-danger">*</span></label>
                <select class="form-control selectpicker" name="courier_id" id="courier_id" v-model="fields.courier_id"
                    required autofocus>
                    <option v-for="(courier, index) in couriers" :key="index" :value="courier.id">{{
                        courier.courier_name }}</option>
                </select>
                <div class="alert alert-danger mt-5" v-if="errors && errors.courier_name">
                    {{ errors.courier_id[0] }}
                </div>
            </div>
            <div class="row mb-6">
                <label class="col-lg-2 col-form-label fw-bold fs-6">Arrival Date<span
                        class="text-danger">*</span></label>
                <div class="col-lg-10 fv-row">
                    <input type="datetime-local" name="date_to_be_delivered"
                        class="form-control form-control-lg form-control-solid" v-model="fields.date_to_be_delivered"
                        placeholder="Enter date to be delivered" required autofocus>
                </div>
                <div class="alert alert-danger mt-5" v-if="errors && errors.date_to_be_delivered">
                    {{ errors.date_to_be_delivered[0] }}
                </div>
            </div>
            <div class="row mb-6">
                <label class="col-lg-2 col-form-label fw-bold fs-6">Delivery Note<span
                        class="text-danger">*</span></label>
                <div class="col-lg-10 fv-row">
                    <input type="text" name="delivery_note" class="form-control form-control-lg form-control-solid"
                        v-model="fields.delivery_note" placeholder="Enter Delivery Note" required autofocus>
                </div>
                <div class="alert alert-danger mt-5" v-if="errors && errors.delivery_note">
                    {{ errors.delivery_note[0] }}
                </div>
            </div>
            <div class="row mb-6">
                <label class="col-lg-2 col-form-label fw-bold fs-6">Status</label>
                <div class="col-lg-10 fv-row">
                    <select class="form-control selectpicker" name="status" id="status" v-model="fields.status" required
                        autofocus>
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                </div>
                <div class="alert alert-danger mt-5" v-if="errors && errors.status">
                    {{ errors.status[0] }}
                </div>
            </div>
            <div class="form-group row mb-6">
                <button type="submit" class="btn btn-primary">
                    Submit Form
                </button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fields: {},
            errors: {},
            isLoading: false,
            couriers: {}
        }
    },

    props: {
        modalMode: {
            type: [String, Number],
            default: "add"
        },

    },
    mounted() {
        //set default select input option
        this.fields.status = "1";
        axios.get('/api/courier/courierTB', {
            params: {
                status: this.fields.status = "1"
            }
        }).then(response => {
            toastr.options = {
                closeButton: false,
                debug: false,
                newestOnTop: false,
                progressBar: false,
                positionClass: "toast-bottom-right",
                preventDuplicates: false,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                timeOut: "5000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
            };
            toastr.success(response.data.message, "Success");
            this.couriers = response.data.data;


        }).catch(error => {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-bottom-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            toastr.error("Couldn't fetch couriers", "Error");
        }).finally(() => {
            this.isLoading = false; // Set isLoading back to false after the request is complete
        });
        if (this.modalMode != 'add') {
            this.fetchForm();
        }
    },
    methods: {
        submit() {
            this.isLoading = true;
            if (this.modalMode != 'add') {
                this.isLoading = true;
                axios.post('/api/delivery/edit/' + this.modalMode, this.fields).then(response => {
                    console.log(response);
                    this.fields = {};
                    this.errors = {};
                    this.$emit('form-submit');
                    this.$emit('close-modal');
                }).catch(error => {
                    if (error.response.status == 422) {
                        this.errors = error.response.data.errors;
                    }
                    toastr.options = {
                        "closeButton": false,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-bottom-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "5000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };
                    toastr.error("Server error", "Error");
                }).finally(() => {
                    this.isLoading = false; // Set isLoading back to false after the request is complete
                });
            } else {
                axios.post('/api/delivery/add', this.fields).then(response => {
                    toastr.options = {
                        closeButton: false,
                        debug: false,
                        newestOnTop: false,
                        progressBar: false,
                        positionClass: "toast-bottom-right",
                        preventDuplicates: false,
                        onclick: null,
                        showDuration: "300",
                        hideDuration: "1000",
                        timeOut: "5000",
                        extendedTimeOut: "1000",
                        showEasing: "swing",
                        hideEasing: "linear",
                        showMethod: "fadeIn",
                        hideMethod: "fadeOut",
                    };
                    toastr.success(response.data.message, "Success");
                    this.fields = {};
                    this.fields.status = "1";
                    this.errors = {};
                    this.$emit('form-submit');
                }).catch(error => {
                    if (error.response.status == 422) {
                        this.errors = error.response.data.errors;
                    }
                    toastr.options = {
                        "closeButton": false,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-bottom-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "5000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };
                    toastr.error("Something went wrong", "Error");
                }).finally(() => {
                    this.isLoading = false; // Set isLoading back to false after the request is complete
                });
            }
        },

        fetchForm() {
            this.isLoading = true;
            axios.get('/api/delivery/get/' + this.modalMode).then(response => {
                console.log(response);
                this.fields = response.data;
                this.errors = {};
            }).catch(error => {
                toastr.options = {
                    "closeButton": false,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": false,
                    "positionClass": "toast-bottom-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                toastr.error("Server error", "Error");
            }).finally(() => {
                this.isLoading = false; // Set isLoading back to false after the request is complete
            });
        }
    },
    emits: ['close-modal', 'form-submit'],
}
</script>
