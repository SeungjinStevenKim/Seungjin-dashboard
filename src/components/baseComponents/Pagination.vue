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
            @click="onClickPage(page)"
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
    setup(props, { emit }) {
        const pageCount = computed(() =>
            Math.ceil(props.noOfItems / props.itemsPerPage)
        );
        const pages = computed(() => {
            const currentPage = props.currentPage;
            const lastPage = pageCount.value;
            const maxVisiblePages = 10;

            if (lastPage <= maxVisiblePages) {
                return Array.from({ length: lastPage }, (_, i) => i + 1);
            }

            const pages = [];
            const halfVisiblePages = Math.floor(maxVisiblePages / 2);

            if (currentPage <= halfVisiblePages) {
                for (let i = 1; i <= maxVisiblePages - 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(lastPage);
            } else if (currentPage >= lastPage - halfVisiblePages) {
                pages.push(1);
                pages.push('...');
                for (let i = lastPage - maxVisiblePages + 2; i <= lastPage; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - halfVisiblePages + 2; i <= currentPage + halfVisiblePages - 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(lastPage);
            }

            return pages;
        });

        const onClickPage = (page) => {
            if(page !== '...') {
              emit('changePage', page)
            }
        }

        return {
            pageCount,
            pages,
            onClickPage
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