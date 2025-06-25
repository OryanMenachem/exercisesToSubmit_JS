// exercise 1

function Phone(brand, model)
{
    this.brand = brand;
    this.model = model;
    this.details = function() {console.log(`brand: ${brand}. model: ${model}.`)
    }

}

const P1 = new Phone("Samsung", "S22");
P1.details()


// exercise 2

function Rectangle(width, height)
{
    this.width = width;
    this.height = height;
    this.area = function() {
        return width*height;
    }
}

const rectangle1 = Rectangle(6,8);

console.log(rectangle1.area());
