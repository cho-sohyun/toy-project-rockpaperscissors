import "./App.css";
import Box from "./component/Box";
import Button from "./component/Button";
import { useState } from "react";
// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭 시 해당 값이 박스에 출력
// 4. 컴퓨터는 랜덤하게 값 출력
// 5. 3,4번의 결과를 가지고 승패 여부 판단
// 6. 승패 결과에 따라 박스 테두리 색상 변경 (승-초록, 패-빨강, 무-검정)

// 가위바위보 옵션
const choices = {
  rock: {
    name: "Rock",
    img: "/images/rock.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "/images/scissors.jpg",
  },
  paper: {
    name: "Paper",
    img: "/images/paper.jpg",
  },
};

function App() {
  // 사용자, 컴퓨터 선택 상태
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  // 사용자, 컴퓨터 승패 결과 상태
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  // 사용자, 컴퓨터 스코어 반영 상태
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  // 게임 실행 함수
  const play = (userChoice) => {
    const userSelection = choices[userChoice];
    setUserSelect(userSelection);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // 승패 결과 설정
    judgement(userSelection, computerChoice);
  };

  // 컴퓨터 랜덤값 함수
  const randomChoice = () => {
    let itemArray = Object.keys(choices); // 객체에 키 값만 뽑아 배열로 만들어줌
    let randomItem = Math.floor(Math.random() * itemArray.length); // 랜덤 인덱스 생성
    let final = itemArray[randomItem]; // 인덱스 번호에 맞춰서 이름으로 출력
    return choices[final]; // 최종 선택된 값
  };

  // 승패 판단 함수
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      setResult("DRAW");
      setComputerResult("DRAW");
    } else if (
      (user.name === "Rock" && computer.name === "Scissors") ||
      (user.name === "Scissors" && computer.name === "Paper") ||
      (user.name === "Paper" && computer.name === "Rock")
    ) {
      setResult("WIN!");
      setComputerResult("LOSE!");
      setUserScore((prev) => prev + 1);
    } else {
      setResult("LOSE!");
      setComputerResult("WIN!");
      setComputerScore((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
    setComputerResult("");
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">가위바위보 게임😊</h1>
      </div>

      <div className="game-board">
        <div className="game-score">My point: {userScore}</div>
        <div className="game-score">Computer Point: {computerScore}</div>
        <button className="game-reset" onClick={resetGame}>
          RESET
        </button>
      </div>
      <div className="game-box">
        <Box title="User" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>

      <div className="game-button-wrap">
        <Button text="가위" onClick={() => play("scissors")} />
        <Button text="바위" onClick={() => play("rock")} />
        <Button text="보" onClick={() => play("paper")} />
      </div>
    </div>
  );
}

export default App;
