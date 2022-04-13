<template>
    <div class="row gy-5 gx-xl-8">
        <div class="col-xxl-8">
            <TableWidget4 widget-classes="card-xxl-stretch mb-5 mb-xl-8"></TableWidget4>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TableWidget4 from "@/components/widgets/tables/Widget4.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
    name: "manage-user",
    components: {
        TableWidget4,
    },
    setup() {
        onMounted(() => {
            setCurrentPageTitle("manage-user");
        });
    },
});
</script>
