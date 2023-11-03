<template>
    <div class="pagination-container">
        <button
            type="button"
             :class="[
                 'paginate-buttons',
                  page === currentPage ? 'active-page' : ''
            ]"
            v-for="page in pages"
            :key="page"
            @click="$emit('changePage', page)"
        >
            {{ page }}
        </button>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        noOfItems: {
            type: Number,
            required: true
        },
        itemsPerPage: {
            type: Number,
            default: 100
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    setup(props) {
        const pageCount = computed(() =>
            Math.ceil(props.noOfItems / props.itemsPerPage)
        );

        const pages = computed(() => {
        	return Array.from({ length: pageCount.value }, (_, i) => i + 1);
        });

        return {
            pageCount,
            pages
        };
    }
};
</script>


<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>