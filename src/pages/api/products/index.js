import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { getData } from "../operations/getData";

export default async function handler(req, res) {
  const { method, query } = req;
  console.log("query:", query);

  try {
    const session = await getServerSession(req, res, authOptions)

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
