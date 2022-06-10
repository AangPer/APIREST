const { request,response } = require("express");

const getUser = (req = request, res = response) => {
  const {q, name, apikey} = req.query

  res.status(403).json({
    msg: "get API desde controller",
    q, 
    name, 
    apikey
  });
};

const postUser = (req, res) => {
  const {name, age} = req.body;

  console.log(name, age);

  res.status(403).json({
    msg: "post API desde controller",
    name,
    age
  });
};

const putUser = (req, res) => {

  const {id} = req.params;

  res.status(403).json({
    msg: "put API desde controller",
    id
  });
};

const deleteUser = (req, res) => {
  res.status(403).json({
    msg: "delete API desde controller",
  });
};

const patchUser = (req, res) => {
  res.status(403).json({
    msg: "patch API desde controller",
  });
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
  patchUser,
};
