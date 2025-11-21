import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import appServer from "../testApp.js"; // see note below

let mongod;
let app;
beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongod.getUri();
  // import app after setting env
  ({ app } = await appServer()); // returns { app, server } with express app exported
  await mongoose.connect(process.env.MONGO_URI);
});
afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});

test("register -> create job -> get jobs", async () => {
  const registerRes = await request(app).post("/api/auth/register").send({ name:"Test", email:"t@test.com", password:"pass", role:"employer" });
  expect(registerRes.status).toBe(201);
  const token = registerRes.body.token;

  const createJobRes = await request(app).post("/api/jobs").set("Authorization", `Bearer ${token}`).send({ title:"Dev", description:"desc" });
  expect(createJobRes.status).toBe(201);
  expect(createJobRes.body.title).toBe("Dev");

  const jobsRes = await request(app).get("/api/jobs");
  expect(jobsRes.status).toBe(200);
  expect(Array.isArray(jobsRes.body)).toBe(true);
});
