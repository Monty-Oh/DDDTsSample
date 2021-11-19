import mongoose, { CallbackError } from "mongoose";
import MemberRepository from "./MemberRepository";
import Sns from "../../../common/enums/Sns";
import MemberDto from "../../controller/dto/user/MemberDto";

export default class MemberMongodbRepository implements MemberRepository {
	//  Singleton
	private static instance: MemberMongodbRepository;

	private constructor() {
		this.init();
	}

	public static getInstance = () => {
		if (!this.instance) this.instance = new this();
		return this.instance;
	};

	/**
	 * user 조회
	 * @param userId
	 * @param sns
	 * @return MemberDto
	 * */
	public findUserByUserIdAndSns(userId: string, sns: Sns): MemberDto | null {
		return null;
	}

	/**
	 * MongoDB 초기화 작업
	 * */
	private init(): void {
		this.connect();

		mongoose.connection.on("error", (error: CallbackError) => {
			console.error(`MongoDB is Error: ${error}`);
		});

		mongoose.connection.on("disconnect", () => {
			console.error("MongoDB is Disconnected retry Connect MongoDB");
			this.connect();
		});
	}

	/**
	 * MongoDB 연결 작업
	 * */
	private connect(): void {
		mongoose.connect("testurl", {}, (error: CallbackError) => {
			error
				? console.error(`MongoDB is Error: ${error}`)
				: console.log("MongoDB is Connected successfully");
		});
	}
}
