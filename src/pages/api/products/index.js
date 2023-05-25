import { getSession } from "next-auth/react";
import { getData } from "../operations/getData";

export default async function handler(req, res) {
  const { method, query } = req;
  console.log("query:", query);

  try {
    const session = await getSession({ req });

    if (!session) {
      // User is not authenticated
      return res.status(401).json({ message: "Unauthorized" });
    }

    // User is authenticated, proceed with the request
    const data = await getData();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to refresh data" });
  }
}
