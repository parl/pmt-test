<template>
    <div class="row g-5 gx-xxl-8">
        <div class="col-xxl-8">
            <TableWidget2 widget-classes="card-xxl-stretch mb-5 mb-xxl-8"></TableWidget2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TableWidget2 from "@/components/widgets/tables/Widget2.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
    name: "manage-purchase",
    components: {
        TableWidget2,
    },
    setup() {
        onMounted(() => {
            setCurrentPageTitle("manage-purchase");
        });
    },
});
</script>
