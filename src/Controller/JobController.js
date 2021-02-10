import * as fs from "fs";
import * as path from "path";
import data from "../data/jobs.json";

const createJob = (req, res) => {
  const { name = null, keywords = null, city = null } = req.body;
  if (!name || !city) {
    return res.status(400).send("Incorrect fields");
  }

  const newId =
    Math.max.apply(
      Math,
      data.jobs.map((job) => job.id)
    ) + 1;

  const newJob = {
    id: newId,
    name,
    keywords,
    city,
  };

  data.jobs.push(newJob);
  fs.writeFile(
    path.join(__dirname, "..", "data", "jobs.json"),
    JSON.stringify(data),
    "utf8",
    (err) => {
      return res.status(500);
    }
  );

  return res.status(200).json(newJob);
};
const getJobs = (req, res) => res.status(200).json(data);
const deleteJob = (req, res) => res.status(200).send("hello");
const editJob = (req, res) => res.status(200).send("hello");

export default { createJob, getJobs, deleteJob, editJob };
