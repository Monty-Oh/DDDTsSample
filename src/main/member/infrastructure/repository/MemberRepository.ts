import Sns from "../../../common/enums/Sns";
import MemberDto from "../../controller/dto/user/MemberDto";

interface MemberRepository {
	findUserByUserIdAndSns(userId: string, sns: Sns): MemberDto | null;
}

export default MemberRepository;
