const Product = require('../product.model')
const Category = require('../category.model')

Category.hasMany(Product, {
    as:"category" , 
    foreignKey:{
        name: "_categoryId",
        allowNull: false,
    }
})
Product.belongsTo(Category)

