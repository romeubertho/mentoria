import express from "express";
import JobController from "./Controller/JobController";

const router = express.Router();

router.get("/jobs", (req, res) => JobController.getJobs(req, res));
router.post("/jobs", (req, res) => JobController.createJob(req, res));
router.delete("/jobs", (req, res) => JobController.deleteJob(req, res));
router.put("/jobs", (req, res) => JobController.editJob(req, res));

export default router;
