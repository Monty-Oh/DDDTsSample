import express from "express";
import MemberController from "./member/controller/MemberController";
import mocha from "mocha";

const PORT: number = Number(process.env.PORT) || 3000; //  포트번호 지정
const server: express.Application = express(); //  서버(기본 앱)

//  Controllers
const memberController: MemberController = MemberController.getInstance();

server.get("/member/test", (req, res) => res.json(memberController.getTest()));

server.listen(PORT, () => {
	console.log(`${PORT}포트로 서버 실행 중`);
});
