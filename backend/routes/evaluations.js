import express from "express";
import { db } from "../config/firebase";

const router = express.Router();

router.get("/finish/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const snapshot = await db
      .collection("evaluations")
      .where("sessionId", "==", sessionId)
      .get();
    const evaluations = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const totalReports = evaluations.length;

    res.json({
      success: true,
      totalReports,
      evaluations,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch report evaluations",
    });
  }
});
