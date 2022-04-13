<template>
    <div class="d-flex justify-content-end">
        <ul class="pagination">
            <li class="page-item previous" :class="currentPage as any === 1 ? 'disabled' : ''">
                <button class="page-link" @click="changePage(currentPage as any - 1)">
                    <i class="previous"></i>
                </button>
            </li>
            <li
                v-for="(page, i) in pages"
                :key="i"
                class="page-item"
                :class="page.value === currentPage ? 'active' : ''"
            >
                <button class="page-link" @click="changePage(page.value)">{{ page.text }}</button>
            </li>
            <li class="page-item next" :class="currentPage === totalPage ? 'disabled' : ''">
                <button class="page-link" @click="changePage(currentPage as any + 1)">
                    <i class="next"></i>
                </button>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { number } from "yup";

export default defineComponent({
    name: "pagination",
    components: {},
    props: {
        totalPage: { type: number, required: true },
        currentPage: { type: number, required: true }
    },
    setup(props: any, { emit }) {
        const changePage = (value) => {
            if (!value) return
            emit('changePage', value)
        }
        const pages = computed(() => {
            if (props.totalPage <= 5) {
                const pages: any = []
                for (let i = 0; i < props.totalPage; i++) {
                    pages.push({ text: (i + 1).toString(), value: i + 1 })
                }
                return pages;
            } else if (props.currentPage < 4) {
                return [
                    { text: "1", value: 1 },
                    { text: "2", value: 2 },
                    { text: "3", value: 3 },
                    { text: "4", value: 4 },
                    { text: "...", value: null },
                    { text: props.totalPage.toString(), value: props.totalPage }]
            } else if (props.totalPage - props.currentPage <= 1) {
                return [
                    { text: "1", value: 1 },
                    { text: "...", value: null },

                    { text: (props.totalPage - 2).toString(), value: props.totalPage - 2 },
                    { text: (props.totalPage - 1).toString(), value: props.totalPage - 1 },
                    { text: props.totalPage.toString(), value: props.totalPage }]
            } else {
                return [
                    { text: "1", value: 1 },
                    { text: "...", value: null },
                    { text: (props.currentPage - 1).toString(), value: props.currentPage - 1 },
                    { text: props.currentPage.toString(), value: props.currentPage },
                    { text: (props.currentPage + 1).toString(), value: props.currentPage + 1 },
                    { text: "...", value: null },
                    { text: props.totalPage.toString(), value: props.totalPage }]
            }
        })
        return {
            pages,
            changePage
        }
    }
})
</script>