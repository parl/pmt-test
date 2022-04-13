<template>
    <div class="row gy-5 gx-xl-8">
        <div class="col-xxl-8">
            <TableWidget8 widget-classes="card-xxl-stretch mb-5 mb-xl-8"></TableWidget8>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TableWidget8 from "@/components/widgets/tables/Widget8.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
    name: "manage-trading-product",
    components: {
        TableWidget8,
    },
    setup() {
        onMounted(() => {
            setCurrentPageTitle("manage-trading-product");
        });
    },
});
</script>
