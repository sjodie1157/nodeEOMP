<template>
    <div>
        <div class="catagoryBanner">
            <div class="row" id="catrow">
                <div class="col-2" @click="filterByCategory('Laptop')">
                    <img src="https://i.postimg.cc/QCjDqP1g/The-Asus-ROG-Zephyrus-Duo-15-SE-is-the-first-4-K-120-Hz-gaming-laptop-removebg-preview-1.png"
                        alt="lapcat">
                    <h3>Laptops</h3>
                </div>
                <div class="col-2" @click="filterByCategory('PC')">
                    <img src="https://i.postimg.cc/Qxfhr1BX/WIP-Snef-Devil-s-Eye-Asus-CES2016-Build-removebg-preview.png"
                        alt="lapcat">
                    <h3>Gaming PC'S</h3>
                </div>
                <div class="col-2" @click="filterByCategory('Console')">
                    <img src="https://i.postimg.cc/VsT29gb0/PS5-Slim-Console-Cover-Volcanic-Red-removebg-preview.png"
                        alt="cons">
                    <h3>Consoles</h3>
                </div>
            </div>
        </div>
        <div class="container">
            <h2>Items</h2>
            <div v-if="products">
                <div>
                    <div>
                        <div class="col mx-2 d-flex justify-content-lg-start justify-content-sm-center">
                            <button class="m-2" @click="sortByName">Sort By Name</button>
                            <button class="m-2" @click="sortByPrice">Sort By Price</button>
                            <form class="m-2" role="search">
                                <input class="form-control me-2" placeholder="Search" type="search" name="search"
                                    aria-label="search" v-model="searchQ" @keyup="search">
                            </form>
                        </div>
                        <div class="col my-3">
                        </div>
                    </div>
                </div>
                <CardComp :filteredProducts="filteredProducts">
                    <template #ProductName="{ product }">
                        {{ product.prodName }}
                    </template>
                    <template #ProductDesc="{ product }">
                        {{ product.prodDesc }}
                    </template>
                    <template #ProductPrice="{ product }">
                        R {{ product.price }}
                        <div class="row d-flex align-items-end my-2">
                            <div class="col">
                                <a href="#"><button type="button" class="btn btn-primary">Add</button></a>
                            </div>
                            <div class="col">
                                <router-link :to="'/product/' + product.prodID">
                                    <button type="button" class="btn btn-secondary">Details</button>
                                </router-link>
                            </div>
                        </div>
                    </template>
                </CardComp>
                <div v-if="filteredProducts.length === 0">
                    <h2 class="m-5"><span>No</span> Items Found</h2>
                </div>
            </div>
            <div v-else>
                <SpinnerComp />
            </div>
        </div>
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    components: {
        CardComp,
        SpinnerComp
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        sortedProducts() {
            if (this.products) {
                return this.products.slice().sort((a, b) => {
                    if (this.sortBy === 'name') {
                        return this.sortDirection === 'asc' ? a.prodName.localeCompare(b.prodName) : b.prodName.localeCompare(a.prodName);
                    }
                    if (this.sortBy === 'price') {
                        return this.sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
                    }
                    return 0;
                });
            } else {
                return [];
            }
        },
        filteredProducts() {
            if (!this.searchQ && !this.currentCategory) {
                return this.sortedProducts;
            } else {
                const lowerCaseQ = this.searchQ.toLowerCase();
                return this.sortedProducts.filter(product => {
                    const matchesSearch = !this.searchQ || product.prodName.toLowerCase().includes(lowerCaseQ);
                    const matchesCategory = !this.currentCategory || product.category === this.currentCategory;
                    return matchesSearch && matchesCategory;
                });
            }
        }
    },
    data() {
        return {
            sortBy: null,
            sortDirection: 'asc',
            searchQ: '',
            currentCategory: null
        };
    },
    methods: {
        sortByName() {
            this.sortBy = 'name';
            this.toggleSortDirection();
        },
        sortByPrice() {
            this.sortBy = 'price';
            this.toggleSortDirection();
        },
        toggleSortDirection() {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        },
        filterByCategory(category) {
            this.currentCategory = category;
        },
        search() { }
    },
    mounted() {
        try {
            setTimeout(() => {
                this.$store.dispatch('fetchProducts')
            }, 800).then(() => {
            }).catch(error => {
                console.error('Error fetching products:', error);
            });
        } catch (error) {
            console.error('No connection available');
        }
    }
}
</script>

<style scoped>
button {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-radius: .3pc;
    border: 2px solid red;
    color: white;
    background-color: red;
    transition: all .3s;
}

button:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    color: red;
    border-color: red;
    background-color: white;
}


input {
    min-width: 2em;
}

input:focus {
    min-width: 2em;
    border-color: red;
    box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
}

img[alt="spinner"] {
    width: 800px;
}

span {
    color: red;
}

.catagoryBanner {
    opacity: 65%;
    background-size: cover;
    overflow: hidden;
    transition: all .3s;
}

.catagoryBanner:hover {
    opacity: 100%;
}

.col-2 {
    width: 250px;
    height: 175px;
    background-image: url(https://i.postimg.cc/vTMYMxJb/Screenshot-2024-02-26-113722.png);
    background-attachment: fixed;
    border-radius: .5pc;
    color: white;
    border: 3px solid black;
    transition: all .3s;
    margin: 2em;
}

h3 {
    font-size: 30px;
}

.col-2:hover {
    color: transparent;
    border-color: red;
}

#catrow {
    display: flex;
    justify-content: space-around;
    margin: 2em 0;
}

img[alt="lapcat"] {
    position: relative;
    overflow: hidden;
    width: 200px;
    transition: all .3s;
}

img[alt="cons"] {
    position: relative;
    overflow: hidden;
    width: 140px;
    transition: all .3s;
}

img[alt="cons"]:hover {
    width: 150px;
}

img[alt="lapcat"]:hover {
    width: 220px;
}
</style>
