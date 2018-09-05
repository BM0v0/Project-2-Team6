module.exports = function (sequelize, DataTypes) {
  var Words = sequelize.define("Words", {
    word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    definition: {
      type: DataTypes.TEXT
    },
    videolink: {
      type: DataType.STRING,
      allowNull: false
    },
    category: {
      type: DataType.STRING,
      allowNull: false
    }
  });
  return Words;
};