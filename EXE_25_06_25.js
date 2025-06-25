// exercise 1

function Phone(brand, model)
{
    this.brand = brand;
    this.model = model;
    this.details = function() {console.log(`brand: ${brand} model: ${model}`);
    }

}