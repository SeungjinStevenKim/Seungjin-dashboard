import { defineStore } from "pinia";
import data from "../assets/data.json";
import { TABLE_COLUMNS } from '../constants';


export const useTableStore = defineStore("TableStore", {
    state: () => {
        //state
        return {
            hiddenStatus: [],
            allCheck: false,
            currentPage: 1,
            numberOfItemsPerPage: 100,
            filteringKey: '',
            filteringColumns: []
        }
    },


    getters: {
        getCurrentPage: (state) => state.currentPage,
        getHiddenStatus: (state) => state.hiddenStatus,
        getFilteringSelectedColumns: (state) => state.filteringColumns,
        getNumberOfItemsPerPage: (state) => state.numberOfItemsPerPage,
        getStatusesForAllProducts: () => {
          const statusSet = new Set();
        
          data.forEach((element) => {
            const status = element.Status;
            statusSet.add(status);
          });
        
          return [...statusSet].sort();
        },
      
        getFilteredProductLength: (state) => {
          const columns = state.filteringColumns.length > 0 ? state.filteringColumns : TABLE_COLUMNS;
          return data.filter((element) => {
            const status = element.Status;
          
            if (state.hiddenStatus.includes(status)) return false; // Hide by status

          
            if (state.filteringKey) {
              return columns.some((key) => String(element[key])
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(state.filteringKey));
            }
          
            return true;
          }).length;
        },
      
        getFilteredProductsByPage: (state) => {
          const tmp = {};
          const columns = state.filteringColumns.length > 0 ? state.filteringColumns : TABLE_COLUMNS;

        
          const filteredData = data.filter((element) => {
            const status = element.Status;
          
            if (state.hiddenStatus.includes(status)) {
              return false; // Skip hidden status
            }
          
            if (state.filteringKey) {
              const elementValues = columns.map((key) => String(element[key]).toLowerCase().replace(/\s+/g, ''));
              return elementValues.some((value) => value.includes(state.filteringKey));
            }
          
            return true;
          });
        
          for (let i = (state.currentPage - 1) * state.numberOfItemsPerPage; i < state.currentPage * state.numberOfItemsPerPage; i++) {
            const element = filteredData[i];
            if (!element) break;
          
            const status = element.Status;
            const cores = element.Cores;
          
            tmp[status] = tmp[status] || {};
            tmp[status][cores] = tmp[status][cores] || [];
            tmp[status][cores].push(element);
          }
        
          return tmp;
      },


    },
    
    actions: {
        hideShowALLstatus() {
          const isChecked = document.querySelector(".styled").checked;
          this.hiddenStatus = isChecked ? this.getStatusesForAllProducts : [];
          this.allCheck = !this.allCheck
          this.setCurrentPage(1);
          },

          hideShowStatus(status) {
            const updatedHiddenStatus = this.hiddenStatus.includes(status)
            ? this.hiddenStatus.filter((elem) => elem !== status)
            : [...this.hiddenStatus, status];
            
            this.hiddenStatus = updatedHiddenStatus;
            this.setCurrentPage(1);
          },

          setCurrentPage(page) {
            this.currentPage = page;
          },
          
          setfilteringKey(key) {
            this.filteringKey = String(key).toLowerCase().replace(/\s+/g, '');
          },
          setFilteringSelectedColumns(column) { this.filteringColumns = [...column]}
}
})