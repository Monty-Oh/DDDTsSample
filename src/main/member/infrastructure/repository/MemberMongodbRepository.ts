import mongoose from "mongoose";
import MemberRepository from "./MemberRepository";

export default class MemberMongodbRepository implements MemberRepository {
	//  Singleton
	private static instance: MemberMongodbRepository;

	private constructor() {
		this.connect();
	}

	public static getInstance = () => {
		if (!this.instance) this.instance = new this();
		return this.instance;
	};

	/**
	 * MongoDB 연결작업
	 * */
	public connect(): void {
		mongoose.connect("testurl", {}, (error) => {
			error
				? console.error(`MongoDB is Error: ${error}`)
				: console.log("MongoDB is Connected successfully");
		});

		mongoose.connection.on("disconnect", () => {
			console.error("MongoDB is Disconnected retry Connect MongoDB");
			this.connect();
		});
	}
}
