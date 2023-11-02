import { defineStore } from "pinia";
import data from "../assets/data.json";


export const useTableStore = defineStore("TableStore", {

    state: () => {

        //state
        return {
            hidestatus: [],
            products: data,
            allCheck: false,
        }

    },


    getters: {
        getHideState: (state) => state.hidestatus,
        productDataBystatus: (state) => {
            let tmp = {};
            let statusSet = new Set();
    
            state.products.forEach((element) => {
              let status = element.Status;
              let cores = element.Cores;
    
              // push status to set
              statusSet.add(status);
    
              if (state.hidestatus.includes(status)) return; // Hide by status
              if (!tmp[status]) tmp[status] = {};
              if (!tmp[status][cores]) tmp[status][cores] = [];
    
              tmp[status][cores].push(element);
            });
    
            // sort status in order
            const strings = new Set(statusSet);
            const sortedStringsArray = [...strings].sort();
            statusSet = new Set(sortedStringsArray);
    
            return {
              status: [...statusSet],
              data: tmp,
            };
        }
    },

    actions: {
        hideShowALLstatus() {
            if (!document.querySelector(".styled").checked) {
              this.hidestatus = [];
            }      
            if (document.querySelector(".styled").checked) {
              this.hidestatus = this.productDataBystatus.status;
            }     
            this.allCheck = !this.allCheck;
            if (this.allCheck) {
            } else {
              this.hidestatus = [];
            }
          },

          handleCheckedBox(status) {
            if (this.hidestatus.includes(status)) {
                this.hidestatus =  this.hidestatus.filter(elem => elem !== status)
            } else {
              this.hidestatus.push(status);
            }

            }
}
})