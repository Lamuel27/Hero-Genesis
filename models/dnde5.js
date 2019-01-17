module.exports = function(sequelize, DataTypes) {
    var Dnd5e = sequelize.define("Dnd5e", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      background: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      race: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      alignment: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      experience: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      personalityTraits: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      ideals: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      bonds: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      flaws: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      featuresAndTraits: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      gameType: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
          len: [1]
        } 
      }
    });

    return Dnd5e;
};