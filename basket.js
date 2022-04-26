const products = [
    {
        id : 1,
        name : "Domates",
        photoPath : "domates.jpg",
        price : 3.99,
        quantity : 0,
        unit : "Kg"
    },
    {
        id : 2,
        name : "Çipura",
        photoPath : "cipura.jpeg",
        price : 14,
        quantity : 0,
        unit : "Adet"
    },
    {
        id : 3,
        name : "Sek Süt 1L",
        photoPath : "sek-sut.jpg",
        price : 8.2,
        quantity : 0,
        unit : "Adet"
    },
    {
        id : 4,
        name : "Pastavilla Burgu Makarna 500G",
        photoPath : "pastaVilla.jpg",
        price : 5.25,
        quantity : 0,
        unit : "Adet"
    },
    {
        id : 5,
        name : "Coca-Cola Zero Sugar 1 L",
        photoPath : "coca-cola.jpg",
        price : 4.95,
        quantity : 0,
        unit : "Adet"
    },
    {
        id : 6,
        name : "Solo Havlu 12\'Li",
        photoPath : "solo-havlu.jpg",
        price : 43.5,
        quantity : 0,
        unit : "Adet"
    }
];

let basket = [];



createProducts();
listenToButtonClicks();


function listenToButtonClicks(){ //tüm ürünler products id'li div'de.
     // #products elemanına click listener ekle( yani tüm bi karta listener ekliyor )
    let productsElement = document.querySelector('#products');
    productsElement.addEventListener('click', event => {
        let type;
        // Hangi butona tıklandığını algıla ( artıya mı? eksiye mi? )
        if(event.target.classList.contains('decrease-button')){
            type = 'decrease';
        }
        else if(event.target.classList.contains('increase-button')){
            type = 'increase';        
        }

        // Sepeti güncelle()
        updateBasketItem(type);
    });
}


function updateBasketItem(type, productElement){
    
    //Eğer işlem arttırma ise:
    if(type == "increase"){
        //Eğer ilk kez ekleniyorsa:

            //Sepete yeni satır ekle
        
        //Sepette zaten varsa:
            //ekli olan satırı güncelle
    }





    //Eğer işlem azaltma ise:
        //Eğer sepete eklenmemişse, bir şey yapma

        //Sepetteki sayıyı azalt

        //Eğer sayı 0 olursa, sepetten ürünü sil

        //Eğer sayı 0 değilse, sepetteki ürünü güncelle





    //Toplam tutarı güncelle (arttırma ve azaltma işlemlerinde ortak olarak yapılıyor.)

}


function createProducts(){
    //Template'i bul.
    let productElement = document.querySelector('#product-template').content.
    querySelector('.product');

    //Herbir ürün için:
    for(let product of products){
        //Şablondan kopya oluştur
        let newElement = productElement.cloneNode(true);


        //Kopyanın içine ürün detaylarını gir
        let imageElement = newElement.querySelector('img');
        imageElement.src = "./images/" + product.photoPath;

        let nameElement = newElement.querySelector('.product-name');
        nameElement.innerText = product.name;
       
        let priceElement = newElement.querySelector('.product-price');
        priceElement.innerText = product.price + ' TL';

        let quantityElement = newElement.querySelector('.quantity');
        quantityElement.innerText = '-';
 
        //Kopyayı web sayfasına ekle
        let productsElement = document.querySelector('#products');
        productsElement.append(newElement);


    }
}
        // Eger HTML elemanına karşılık geliyorsa 'Element' yazıyorum.
