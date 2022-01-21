module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define('task', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    priority: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
  });

  return Task;
};
