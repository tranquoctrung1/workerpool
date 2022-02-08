"use strict";

const WorkerPool = require("workerpool");
const Utilities = require("../2-utilities");

// MIDDLEWARE FUNCTIONS
const bcryptHash = (password) => {
  return Utilities.bcryptHash(password);
};

const prime = (number) => {
  return Utilities.prime(number);
};

// CREATE WORKERS
WorkerPool.worker({
  bcryptHash,
  prime,
});
