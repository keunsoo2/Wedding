function copyToClipboard(number) {
    // 임시 텍스트 영역 생성
    const tempInput = document.createElement("input");
    tempInput.value = number;
    document.body.appendChild(tempInput);
    
    // 텍스트 선택 및 복사
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // 모바일 대응
    document.execCommand("copy");

    // 임시 텍스트 영역 삭제
    document.body.removeChild(tempInput);

    // 메시지 표시
    const message = document.getElementById("message");
    message.style.display = "block";
    message.innerText = `${number} copied to clipboard!`;

    // 3초 후 메시지 숨기기
    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function handlePhoneClick(number) {
    if (isMobileDevice()) {
        alert(`"${number}"로 전화 연결이 시작됩니다.`);
    } else {
        alert("전화 연결은 모바일 기기에서만 가능합니다.");
        return false;
    }
}

function handleSmsClick(number) {
    if (isMobileDevice()) {
        alert(`"${number}"로 문자 작성 화면으로 이동합니다.`);
    } else {
        alert("문자 전송은 모바일 기기에서만 가능합니다.");
        return false;
    }
}
