const db = require("../models");
const jwt = require('jsonwebtoken');
const createUser = async (data) => {
  const method = "userService/createUser";
  console.log(`${method} - start`, data);
  const user = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email.toLowerCase(),
    password: data.password,
  };
  try {
    const result = await db.users.create(user);
    console.log(`${method} user created successfully`);
    return result;
  } catch (error) {
    console.log(`${method} error`, error);
    throw error;
  }
};

const login = async (data) => {
  const method = "userService/login";
  console.log(`${method} - start`, data);
  const user = {
    email: data.email.toLowerCase(),
    password: data?.password,
  };
  try {
    const result = await db.users.findOne({
      where: {
        email: user.email,
        password: user?.password,
      },
    });
    if (result) {
      let token = jwt.sign({ email: user.email }, "userDetails");
      console.log(`${method} user logged in successfully`);
      return {
        id: result.id,
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        token:token
      };
    } else {
      console.log(`${method} user not found`);
      return null;
    }
  } catch (error) {
    console.log(`${method} error`, error);
    throw error;
  }
};

const getUser = async (data) => {
  const method = "userService/getUser";
  console.log(`${method} - start`);
  try {
    const result = await db.users.findOne({ where: { id: data.userId } });
    console.log(`${method} successfully`);
    return result;
  } catch (error) {
    console.log(`${method} error`, error);
    throw error;
  }
};

const getAllUser = async (data) => {
  const method = "userService/getAllUser";
  console.log(`${method} - start`);
  try {
    const result = await db.users.findAll({ order: [["id", "desc"]] });
    console.log(`${method} successfully`);
    return result;
  } catch (error) {
    console.log(`${method} error`, error);
    throw error;
  }
};

const updateUser = async (data) => {
  const method = "userService/updateUser";
  console.log(`${method} - start`);
  const updateData = {
    ...(data.firstName && { firstName: data.firstName }),
    ...(data.lastName && { lastName: data.lastName }),
    ...(data.email && { email: data.email.toLowerCase() }),
  };

  try {
    const result = await db.users.update(
      { ...updateData },
      {
        where: { id: data.userId },
      }
    );
    console.log(`${method} successfully`);
    return result;
  } catch (error) {
    console.log(`${method} error`, error);
    throw error;
  }
};

const deleteUser = async (data) => {
  const method = "userService/deleteUser";
  console.log(`${method} - start`);
  try {
    const result = await db.users.destroy({ where: { id: data.userId } });
    console.log(`${method} successfully`);
    return result;
  } catch (error) {
    console.log(`${method} error`, error);
    throw error;
  }
};

module.exports = {
  createUser,
  login,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
};
