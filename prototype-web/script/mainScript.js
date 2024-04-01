// 보내기 버튼 클릭 시 동작
const sendData = () => {
  const model = document.getElementById("model");
  const prompt = document.getElementById("text");
  const chat = document.querySelector(".chat");
  if (prompt.value.trim().length === 0) {
    prompt.value = "";
    return;
  }
  const messageSection = document.createElement("div");
  messageSection.className = "message";

  const user = document.createElement("div");
  user.className = "user";
  user.style.opacity = 0;

  const message = document.createElement("div");
  message.className = "content";
  message.innerText = prompt.value;
  message.style.opacity = 0;

  messageSection.appendChild(user);
  messageSection.appendChild(message);
  chat.appendChild(messageSection);

  setTimeout(() => {
    user.style.transition = "opacity 0.7s";
    message.style.transition = "opacity 0.7s";
    user.style.opacity = 1;
    message.style.opacity = 1;
  }, 100);
  const selectedValue = model.options[model.selectedIndex].value;
};

// 대화 추가
const onAddConversation = () => {
  let itemIndex = localStorage.getItem("index") || 0;
  localStorage.setItem("index", Number(itemIndex) + 1);

  const historyBody = document.createElement("div");
  historyBody.className = `historyBody`;
  historyBody.id = itemIndex;

  const historyTitle = document.createElement("div");
  historyTitle.className = "historyTitle";
  historyTitle.innerText = "테스트";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = onDeleteConversation;

  historyBody.appendChild(historyTitle);
  historyBody.appendChild(deleteButton);

  document.querySelector(".history").appendChild(historyBody);
};

// 대화 전체 삭제
const onClearConversation = () => {
  const historyBody = document.querySelectorAll(".historyBody");
  historyBody.forEach((conversation) => {
    conversation.remove();
  });
  localStorage.clear();
};

// 단일 대화 삭제
const onDeleteConversation = (e) => {
  const historyBody = document.querySelectorAll(".historyBody");
  const id = Number(e.target.parentElement.id);
  historyBody[id].remove();
};
