module.exports = function(sequelize, DataTypes) {
    var FateAcc = sequelize.define("FateAcc", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      highConcept: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      trouble: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      aspect3: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      aspect4: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      aspect5: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      stunts: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      }
    });

    return FateAcc;
};