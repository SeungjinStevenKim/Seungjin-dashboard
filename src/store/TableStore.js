import { defineStore } from "pinia";
import data from "../assets/data.json";


export const useTableStore = defineStore("TableStore", {
    state: () => {
        //state
        return {
            hiddenStatus: [],
            allCheck: false,
            currentPage: 1,
            filteringKey: '',
        }
    },

    getters: {
        getCurrentPage: (state) => state.currentPage,
        getHiddenStatus: (state) => state.hiddenStatus,
        getStatusesForAllProducts: (state) => {
            let statusSet = new Set();
            data.forEach((element) => {
              let status = element.Status;
              // push status to set
              statusSet.add(status);
    
            });
            
            // sort status in order
            const strings = new Set(statusSet);
            const sortedStringsArray = [...strings].sort();
            statusSet = new Set(sortedStringsArray);
            return [...statusSet];
        },

        getFilteredProductLength: (state) =>{
          let sum = 0 
          let keysToIterateThrough = ["Product", "Status", "Cores", "Threads", "Lithography", "Max_Turbo_Freq", "Base_Freq"];

          data.forEach((element) => {
            let status = element.Status;

            // push status to set    
            if (state.hiddenStatus.includes(status)) return; // Hide by status
            if(state.filteringKey) {
              if(keysToIterateThrough.some((key) => String(element[key])
                                                            .toLowerCase()
                                                            .replace(/\s+/g, '')
                                                            .includes(state.filteringKey)
              )){
                sum += 1
              }
            } else {
                sum += 1
            }

          });
          return sum;
        },

        getFilteredProductsByPage: (state) => (page = 1) => {
          let tmp = {};
          let counter = 0;
          let initialIndex = (page -1) * 100;
          let end = initialIndex + 100;
          let keysToIterateThrough = ["Product", "Status", "Cores", "Threads", "Lithography", "Max_Turbo_Freq", "Base_Freq"];


          data.forEach((element) => {
            let status = element.Status;
            let cores = element.Cores;

  
            if (state.hiddenStatus.includes(status)) return; // Hide by status
            if (!tmp[status]) tmp[status] = {};
            if (!tmp[status][cores]) tmp[status][cores] = [];

            if(counter >= initialIndex  && counter < end) {
              if(state.filteringKey) {
                if(keysToIterateThrough.some((key) => String(element[key])
                                                                          .toLowerCase()
                                                                          .replace(/\s+/g, '')
                                                                          .includes(state.filteringKey)
                )){
                  tmp[status][cores].push(element);
                }
              } else {
                tmp[status][cores].push(element);
              }
            }
            counter ++;

          });
          return tmp
        }
        
    },
    actions: {
        hideShowALLstatus() {
            if (!document.querySelector(".styled").checked) {
              this.hiddenStatus = [];
            }      
            if (document.querySelector(".styled").checked) {
              this.hiddenStatus = this.getStatusesForAllProducts
            }     
            this.allCheck = !this.allCheck;
            if (this.allCheck) {
            } else {
              this.hiddenStatus = [];
            }
            this.setCurrentPage(1);
          },

          hideShowStatus(status) {
            if (this.hiddenStatus.includes(status)) {
                this.hiddenStatus =  this.hiddenStatus.filter(elem => elem !== status)
            } else {
              this.hiddenStatus.push(status);
            }
            this.setCurrentPage(1);

            
          },

          setCurrentPage(page) {
            this.currentPage = page;
          },
          
          setfilteringKey(key) {
            this.filteringKey = String(key).toLowerCase().replace(/\s+/g, '');
          }
}
})