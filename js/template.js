const template = (id,description,photo,price) => {
    let t =
          ` <div class="col-lg-3 col-md-6 s-margin">
                <div id="${id}" class="card h-100">
                    <a href="#"><img class="card-img-top" src="${photo}" alt=""></a>
                    <div class="card-body">
                        <h5>$${price}</h5>
                        <p class="card-text">${description}</p>
                    </div>
                    <a href="#logo" id="${id}" class="btn btn-dark buy">Comprar</a>
                    <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div>`;
    return t;
}
const categoriesTemplate = (id,name) => {
    let t =`<a id="${id}" class="dropdown-item category col-3"  href="#">${name}</a>`;
    return t;
}

const singleProductTemplate = (price,title,photo,name) => {
    let t =`<div class="single_product_thumb clearfix container">
                <div class="row">
                    <button id="back" type="button" class="btn btn-outline-secondary">Regresar</button>
                </div>
               <div class="row">
                   <img class= "col-6 single-page "src="${photo}" alt="">
               
                    <!-- Single Product Description -->
                    <div class="single_product_desc clearfix col-5 mar">
                        <span> Id producto:</span>
                        <a href="#"><h4>${name}</h4></a>
                        <p class="product-price"> $ ${price} </p>
                        <p class="product-desc">${title}</p>
                    </div>
                </div>
            </div>    
                    `;
    return t;
}