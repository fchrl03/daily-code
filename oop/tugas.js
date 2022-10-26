// No 1
class Vehicle {
  static explode = "Berhasil meledakkan kendaraan"

  constructor(isEngineActivated) {
    this.isEngineActivated = isEngineActivated
  }

  start() {
    if (this.isEngineActivated === true) {
      console.log(`Mesin berhasil menyala, ${Vehicle.explode}`)
    } else {
      console.log("Mesin gagal menyala")
    }
  }
}

let test = new Vehicle(true)
// console.log(test.start())

// No 2
class Car extends Vehicle {
  constructor(isEngineActivated, name, brand, price) {
    super(isEngineActivated)
    this.name = name
    this.brand = brand
    this.price = price
    this.isEngineActivated = isEngineActivated
  }

  start(isFuelNotEmpty) {
    if (this.isEngineActivated && isFuelNotEmpty) {
      console.log(`Mesin berhasil menyala ${Vehicle.explode}`)
    } else {
      console.log("Mesin gagal menyala")
    }
  }

  buy(money) {
    if (money > this.price) {
      console.log(`Berhasil Membeli Mobil ${this.name} dengan Brand ${this.brand}, dengan kembalian ${money - this.price}`)
    } else {
      console.log("Uang Anda Belum cukup untuk membeli mobil ini")
    }
  }
}

let coba = new Car(true, "Rush", "Toyota", 2000000)
coba.buy(2000000)

// No 3
class Product {
  constructor(id, name, price, stock, isStockReady) {
    this.#generateID() = id
    this.name = name
    this.price = price
    this.stock = stock
    this.checkIsStockReady() = isStockReady
  }

  #generateID() {
    this.id = Math.floor(Math.random() * 100)
    return this.id
  }

  checkIsStockReady() {
    if (this.stock > 0) {
      return true
    } else {
      return false
    }
  }

  getProduct() {
    console.log(this.id, this.name, this.price, this.stock, this.isStockReady())
  }
}

let ngetest = new Product("Apel", 7000, 12)
// console.log(ngetest)