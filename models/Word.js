module.exports = function(sequelize, DataTypes) {
  var Word = sequelize.define("Word", {
    word: DataTypes.STRING,
    definition: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    videoUrl: DataTypes.STRING,
    firstLetter: DataTypes.STRING
  });
  return Word;
};
