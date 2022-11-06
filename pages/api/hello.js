// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db("sample_mflix");

		const movies = await db
			.collection("movies")
			.find({})
			.sort({ metacritic: -1 })
			.limit(10)
			.toArray();

		res.json(movies);
	} catch (e) {
		console.error(e);
	}
}
