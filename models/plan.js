module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Plan', {
        value: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        comment: DataTypes.STRING,
        accountId: {
            type: DataTypes.INTEGER,
            references: "Account",
            referencesKey: "id"
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: "Category",
            referencesKey: "id"
        }
    });
};