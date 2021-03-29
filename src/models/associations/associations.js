const Product = require('../product.model')
const Category = require('../category.model')

Category.hasMany(Product, {
    foreignKey:{
        field:'_categoryID'
    }
})
Product.belongsTo(Category)

