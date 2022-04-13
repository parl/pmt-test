<template>
    <div class="row g-5 gx-xxl-8">
        <div class="col-xxl-8">
            <ManageTransactionTable widget-classes="card-xxl-stretch mb-5 mb-xxl-8"></ManageTransactionTable>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import ManageTransactionTable from "@/components/widgets/tables/ManageTransactions.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
    name: "manage-transactions",
    components: {
        ManageTransactionTable,
    },
    setup() {
        onMounted(() => {
            setCurrentPageTitle("manage-transactions");
        });
    },
});
</script>
