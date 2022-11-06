// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
	//Instructions
	/* 
        Api available only in development mode 
        api json format [for simplicity the user is created using the Mongo Console]
        api is used for password hashing only 
        {
            email : "admin@shumak.com"
            password : "plainText"
        }
    
    */
	if (process.env.ENV === "development") {
		console.log("Executing for the development");
		//Only For development
		try {
			console.log(req.body.email);
			const client = await clientPromise;
			const db = client.db("service-booking-api");

			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			console.log(hashedPassword);
			const user = await db
				.collection("users")
				.findOneAndUpdate(
					{ email: req.body.email },
					{ $set: { password: hashedPassword } }
				);
			res.send(user);
		} catch (e) {
			console.error(e);
			res.send({ error: e });
		}
	} else {
		res.send({});
	}
}
