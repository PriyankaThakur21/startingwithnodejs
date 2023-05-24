const db = require('../util/database');
module.exports = class Product{
    constructor(id, name, price, description, imageurl){
        this.id=id,
        this.name=name,
        this.price=price,
        this.description=description,
        this.imageurl=imageurl
    }

    save(){
        return db.execute('INSERT INTO products (name, price, imageurl, description) VALUES (?,?,?,?)',
        [this.name, this.price, this.imageurl, this.description])
    }

    static fetchAll(){
        return db.execute('SELECT * FROM products');
    }

    static findById(){
        return db.execute('SELECT * FROM products WHERE id = ?', [id]);
    }
}