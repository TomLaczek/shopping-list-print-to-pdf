<template>
    <div>
        <v-row class="justify-center align-center my-4">
            <v-col cols="12" sm="12" md="6" class="py-0">
                    <v-text-field
                        label="Insert the product"
                        single-line
                        @keydown.enter.prevent="addItem(product)"
                        v-model="product"
                        clearable
                        :disabled="this.shoppingList.length>=100"
                    ></v-text-field>
            </v-col>
        </v-row>
        <v-row class="justify-center align-center my-4">
            <v-btn text outlined rounded large color="primary" @click="addItem(product)" :disabled="this.shoppingList.length>=100">
                <span>Add Product</span>
                <v-icon right>add</v-icon>
            </v-btn>
        </v-row>
        <v-divider></v-divider>
        <v-row v-if="this.shoppingList.length!=0" class="justify-center align-center mt-4 mb-0">
            <h2>Your shopping list:</h2>
        </v-row>
        <v-row class="justify-center align-center mt-0 mb-4">
            <v-chip
                v-for="(item,index) in shoppingList" 
                :key="index" 
                class="ma-2"
                color="primary"
                outlined
                >
                <span>{{ index }}. {{ item }}</span>
                <v-icon right @click="deleteItem(index)">clear</v-icon>
            </v-chip>
        </v-row>
        <v-divider v-if="this.shoppingList.length!=0"></v-divider>
         <v-row class="justify-center align-center my-4">
            <h3>Generate PDF with your shopping list</h3>
        </v-row>
        <v-row class="justify-center align-center my-4">
            <v-btn text outlined rounded large color="secondary" @click="generatePDF" :disabled="this.shoppingList.length==0">
                <span>Generate PDF</span>
                <v-icon right>description</v-icon>
            </v-btn>
        </v-row>
        <v-snackbar v-model="snackLimit">
            {{ snackText }}
            <v-btn
                color="pink"
                text
                @click="snackLimit = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>
<script>
import jsPDF from 'jspdf';
export default {
    name:'createList',
    computed:{
        shoppingList(){
            return  this.$store.getters.shoppingList;
        }
    },
    data(){
        return{
            product:'',
            listTitle:'Yours Shopping List',
            snackText:'',
            snackLimit:false,
            logo: "data:image/png;base64,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",
        }
    },
    watch:{
        shoppingList: function(newShoppingList){
            if(newShoppingList.length >=100 ){
                this.snackText='You have reached limit (100 products)'
                this.snackLimit=true
            }            
        }
    },
    methods:{
        addItem(product){
            this.$store.dispatch('addToList',product)
            .then(()=>{
                this.product='';
            })
        },
        deleteItem(index){
            this.$store.dispatch('removeItemFromList',index)
        },
        generatePDF(){
            var doc = new jsPDF();
            var length = this.shoppingList.length;
            doc.addImage(this.logo, "JPEG", 10, 10, 20, 20);
            doc.setFont("Helvetica");
            doc.setFontSize(32);
            doc.text("Shopping List", 105, 25,null,null,"center");
            doc.setFontSize(15);
            if(length>50){
                for(var i =1; i<=50;i++){
                    let n = 40+(i*5);
                    doc.text(i+". "+this.shoppingList[i], 50, n,null,null,"left" );
                }
                for(var j =1; j<=(length-50);j++){
                    let n = 40+(j*5);
                    doc.text((j+50)+". "+this.shoppingList[j+50], 160, n,null,null,"right" );
                }
            } else {
                for(var z =1; z<=length;z++){
                    let n = 40+(z*5);
                    doc.text(z+". "+this.shoppingList[z], 105, n,null,null,"left" );
                }
            }
            doc.save('shopping-list.pdf')
            }
    }
}
</script>