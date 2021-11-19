import Sns from "../../common/enums/Sns";

export default class MemberFindService {
	//  Singleton
	private static instance: MemberFindService;

	public static getInstance = () => {
		if (!this.instance) this.instance = new this();
		return this.instance;
	};

	/**
	 * userId, sns 이용해서 해당 유저 데이터 조회
	 * @params userId, sns
	 * @return UserDto
	 * */
	findUserByUserIdAndSns(userId: string, sns: number) {
		return { userId, sns: Sns[sns] };
	}
}
