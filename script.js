// 음식 데이터 설정
const foodData = {
    밥: ["볶음밥", "비빔밥"],
    고기: ["오리고기", "닭고기", "돼지고기", "소고기"],
    면: ["비빔면", "국수", "볶음면", "냉면"],
    국: ["된장찌개", "부대찌개", "김치찌개", "국밥"]
};

// 룰렛 돌리기 함수
function spinRoulette() {
    const age = parseInt(document.getElementById("age").value);
    const preference = document.getElementById("preference").value;

    if (isNaN(age) || age <= 0) {
        alert("나이를 올바르게 입력해주세요.");
        return;
    }

    if (preference === "") {
        alert("취향을 선택해주세요.");
        return;
    }

    let foods = [];
    if (preference in foodData) {
        foods = foodData[preference];
    } else {
        alert("올바른 취향을 선택해주세요.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * foods.length);
    const selectedFood = foods[randomIndex];

    const resultElement = document.getElementById("foodResult");
    resultElement.textContent = `${age}세의 당신에게 추천하는 ${preference} 음식은 "${selectedFood}" 입니다!`;
}
