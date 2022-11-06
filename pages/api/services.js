import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

import { nanoid } from "nanoid";
/* Service Schema
    {
        name: "Shumak",
        email: "shumak@dev.com",
        phone: 1990077,
        timeSlot: "test",
        serviceType: "test",
        date: "sunday 23",
    }

*/

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("service-booking-api");
	if (req.method == "POST") {
		let nanoID = nanoid(5);
		try {
			await db.collection("services").insertOne({
				...req.body,
				createdAt: Date.now(),
				serviceID: nanoID,
			});

			res.json(nanoID);
		} catch (e) {
			console.error(e);
		}
	}
	if (req.method == "GET") {
		try {
			const services = await db
				.collection("services")
				.find({})
				.sort({ createdAt: -1 })
				.toArray();
			res.json(services);
		} catch (e) {
			console.error(e);
		}
	}
	if (req.method == "DELETE") {
		console.log(req.body.serviceID);
		let id = req.body.serviceID;
		if (req.body.session.user.role === "admin") {
			const services = await db
				.collection("services")
				.deleteOne({ _id: ObjectId(id) });
			console.log(services);
		}

		res.send({});
	}
}
