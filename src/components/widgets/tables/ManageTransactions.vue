<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Manage Transaction</span>
        <span class="text-muted mt-1 fw-bold fs-7"></span>
      </h3>

      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
        title="Click to add a user"
      ></div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="w-25px">
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="
                      checkedRows =
                      checkedRows.length === 6 ? [] : [0, 1, 2, 3, 4, 5]
                    "
                  />
                </div>
              </th>
              <th class="min-w-150px">Id</th>
              <th class="min-w-150px">User Name</th>
              <th class="min-w-140px">Amount</th>
              <th class="min-w-120px">Type</th>
              <th class="min-w-120px">Status</th>
              <th class="min-w-100px text-end">Option</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in transactionList" :key="index">
              <tr>
                <td>
                  <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      class="form-check-input widget-9-check"
                      type="checkbox"
                      :value="index"
                      v-model="checkedRows"
                    />
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                  >{{ item.id }}</a>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary fs-6"
                      >{{ item.accountName }}</a>
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                  >{{ item.amount }}</a>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                  >{{ item.type }}</a>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                  >{{ item.status }}</a>
                </td>

                <td class="text-end">
                  <!-- <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>-->

                  <a
                    href="#"
                    @click.prevent="deleteItem(item.id)"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="media/icons/duotune/general/gen027.svg" />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <pagination :currentPage="currentPage" :totalPage="totalPages" @changePage="setPage" />
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getTransaction } from "@/core/services/TransactionService";
import pagination from "@/components/pagination/pagination.vue";
export default defineComponent({
  name: "kt-widget-9",
  components: {
    pagination
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const checkedRows = ref([]);
    const transactionList = ref([]);
    let currentPage = ref(1);
    let totalPages = ref(1);
    const setPage = (pageNumber) => {
      currentPage.value = pageNumber;
      getPage()
    }

    const deleteItem = (id) => {
      console.log({ id })
    }
    const getPage = () => {
      getTransaction(currentPage.value, 10)
        .then((data) => {
          console.log(data.request)
          transactionList.value = data.data.transactions
          currentPage.value = data.data.metadata.currentPage
          totalPages.value = data.data.metadata.totalPages
          console.log(data.data)
        }).catch((error) => {
          console.log(error)
        })
    }
    onMounted(() => {
      getPage()
    })
    return {
      transactionList,
      checkedRows,
      currentPage,
      totalPages,
      setPage,
      deleteItem
    };
  },
});
</script>
