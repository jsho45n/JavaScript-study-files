class Cart {
    constructor() {
        this.store = {};
    }

    addProduct(product) {
        this.store[product.id] = product;
    }

    getProduct(id) {
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct9({ id: 1, name: '노트북' })
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p);

/* 결과

{'1' : {id: 1, name: '노트북'}}
{id: 1, name: '노트북'}

*/
