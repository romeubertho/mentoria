import data from "../data/jobs.json";
const createJob = (req, res) => res.status(200).send("hello");
const getJobs = (req, res) => res.status(200).json(data);
const deleteJob = (req, res) => res.status(200).send("hello");
const editJob = (req, res) => res.status(200).send("hello");

export default { createJob, getJobs, deleteJob, editJob };
