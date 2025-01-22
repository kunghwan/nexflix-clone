import { useState, useEffect } from "react";

const RandomNumber = () => {
  const initialMembers = [
    "유경환",
    "강산",
    "최한나",
    "허승이",
    "김영화",
    "이형진",
    "강찬희",
  ];
  const [members, setMembers] = useState(initialMembers);

  const [selectedMembers, setSelectedMembers] = useState([]); // 뽑힌 멤버는 배열안의 배열이 들어갑니다.

  const [teams, setTeams] = useState([]);

  const [isMakingTeam, setIsMakingTeam] = useState(false);

  const [max, setMax] = useState(0);

  const [count, setCount] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onSubmit = (event) => {
    // 모든이벤트를 가져오는거
    event.preventDefault();

    if (max <= 0) {
      return alert("팀 크기를 선택해주세요.");
    }

    if (count <= 0) {
      return alert("팀원을 모두 뽑았습니다.");
    }

    let number = Math.floor(Math.random() * members.length);
    const member = members[number];

    const found = selectedMembers[currentIndex].find((person) => {
      if (person === member) {
        return person;
      }
    });
    // 그 배열중에 항상 변하는값currentIndex 찾는다 그 배열에 잡은 맴버를 찾는걸 진행

    if (found) {
      return alert("중복된 사람입니다");
    }
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
    // 하니씩뺴준다 중복아니면

    setSelectedMembers((prev) => {
      let copy = [...prev];
      //   copy[currentIndex].push(member);
      return copy;
    });

    setTimeout(() => {
      setMembers((prev) => {
        let copy = [...prev];
        copy.splice(number, 1);
        return copy;
      });
    }, 1000);
    // setCurrentIndex(number);
  };

  const onReset = () => {
    setMax(0);
    setCount(0);
  };

  useEffect(() => {
    console.log({ members, max, count, selectedMembers });
  }, [members, max, count, selectedMembers]);

  useEffect(() => {
    if (max > 0) {
      //   console.log(selectedMembers.length);
      setCurrentIndex(selectedMembers.length);
    }
  }, [selectedMembers, max]);

  return (
    <div>
      <h1>팀짜기 프로젝트</h1>
      <h2>남은 팀원</h2>
      <ul>
        {members.map((member, index) => {
          return <li key={member}>{member}</li>;
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <select
          onChange={(e) => {
            setMax(Number(e.target.value));
            setCount(Number(e.target.value));
          }}
          value={max}
        >
          <option>팀 크기를 선택하세요.</option>
          {members.map((member, index) => {
            return (
              <option key={member} value={index + 1}>
                {index + 1}
              </option>
            );
          })}
        </select>
        <button>팀원 뽑기</button>
        <button type="button" onClick={onReset}>
          초기화
        </button>
      </form>
      {/* <h1>{currentIndex >= 0 && members[currentIndex]}</h1> */}
      <ul>
        {currentIndex >= 0 &&
          selectedMembers[currentIndex]?.map((member, index) => {
            return <li key={member}>{member}</li>;
          })}
      </ul>
    </div>
  );
};

export default RandomNumber;
