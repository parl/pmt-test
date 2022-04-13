<template>
    <div class="row g-5 gx-xxl-8">
        <div class="col-xxl-8">
            <TableWidget3 widget-classes="card-xxl-stretch mb-5 mb-xxl-8"></TableWidget3>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TableWidget3 from "@/components/widgets/tables/Widget3.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
    name: "manage-admin",
    components: {
        TableWidget3,
    },
    setup() {
        onMounted(() => {
            setCurrentPageTitle("manage-admin");
        });
    },
});
</script>
