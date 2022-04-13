<template>
    <div class="row g-5 gx-xxl-8">
        <div class="col-xxl-8">
            <TableWidget1 widget-classes="card-xxl-stretch mb-5 mb-xxl-8"></TableWidget1>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TableWidget1 from "@/components/widgets/tables/Widget1.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
    name: "manage-document-EKYC",
    components: {
        TableWidget1,
    },
    setup() {
        onMounted(() => {
            setCurrentPageTitle("manage-document-EKYC");
        });
    },
});
</script>
