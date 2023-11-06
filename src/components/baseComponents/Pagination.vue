<template>
    <div class="paginationContainer">
        <button
            type="button"
             :class="[
                 'paginateButtons',
                  page === currentPage ? 'activePage' : ''
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

            // If there are fewer pages
            if (lastPage <= maxVisiblePages) {
                return Array.from({ length: lastPage }, (_, i) => i + 1);
            }

            const pages = [];
            const halfVisiblePages = Math.floor(maxVisiblePages / 2);
       
            // If the current page is within the first half of pages
            if (currentPage <= halfVisiblePages) {
                for (let i = 1; i <= maxVisiblePages - 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(lastPage);
             // If the current page is within the last half of visible pages
            } else if (currentPage >= lastPage - halfVisiblePages) {
                pages.push(1);
                pages.push('...');
                for (let i = lastPage - maxVisiblePages + 2; i <= lastPage; i++) {
                    pages.push(i);
                }
            // if the current page is in the middle of the page
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
  .paginationContainer {
    display: flex;
    column-gap: 10px;
  }
  .paginateButtons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginateButtons:hover {
    background-color: #d8d8d8;
  }
  .activePage {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .activePage:hover {
    background-color: #2988c8;
  }
</style>