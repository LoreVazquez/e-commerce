const template = (id,description,photo,price) => {
    let t =
          ` <div class="col-lg-5 col-md-6 s-margin">
                <div id="${id}" class="card h-100">
                    <a href="#"><img class="card-img-top" src="${photo}" alt=""></a>
                    <div class="card-body">
                        <h5>$${price}</h5>
                        <p class="card-text">${description}</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div>`;
    return t;
}
const categoriesTemplate = (id,name) => {
    let t =`<a id="${id}" class="dropdown-item ${'category'} col-3" href="#">${name}</a>`;
    return t;
}