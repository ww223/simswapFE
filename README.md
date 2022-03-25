# Sim Swap Demo

**FE Manual**

# 어떤 페이지 인가요?

---

“**Sim Swap Demo**” 는 사용자로부터 임의의 이미지&동영상을 받아서 face swap 작업을 서버에서 진행하고, 결과물을 사용자에게 전달해주는 페이지입니다.

- ~~IMAGE SWAP :  사용자에게 2개의 이미지 파일을 받은 뒤,  해당 이미지의 얼굴을 다른 이미지의 얼굴로 바꿔주는 작업을 수행합니다.~~  **(서비스 준비중)**
- **VIDEO SWAP :** 사용자에게 이미지와 동영상을 각각 받은 뒤, 동영상의 얼굴을 사용자가 선택한 이미지의 얼굴로 바꿔주는 작업을 수행합니다.

![Untitled](Sim%20Swap%20D%20a377c/Untitled.png)

<aside>
💡 **VIDEO SWAP**

</aside>

 사용자는 작업을 하고싶은 이미지와 동영상을 첨부한 뒤,  “FACE SWAP” 버튼을 클릭합니다.

사용자의 데이터가 정상적으로 넘어오면 이를 서버에 전송합니다.  데이터를 전달받은 서버에서는,

Simswap을 통해 videoswap 작업을 수행합니다. 작업이 완료되면, RESULT에 사용자가 요청한 작업의

결과물이 출력됩니다.

# 페이지 구조

---

![Untitled](Sim%20Swap%20D%20a377c/Untitled%201.png)

- **default.vue** ⇒ 모든 페이지에 배경 이미지, 툴바, 레이아웃 구조 및 css를 적용시키는 페이지입니다.  그 외 페이지들은 모두 이 페이지의 영향을 받습니다.

---

- **index.vue** ⇒ 페이지에 처음 접속했을때 가장 먼저 보이는 메인 페이지입니다.
- **videoswap.vue** ⇒ 모든 페이지에 배경 이미지, 툴바, 레이아웃 구조 및 css를 적용시키는 페이지입니다.

![Untitled](Sim%20Swap%20D%20a377c/Untitled%202.png)

# 필요 환경

---

- **vue.js**
- **nuxt.js**
- **vuetify**
- **axios**
- **node.js**

# 사용 방법

---

![Untitled](Sim%20Swap%20D%20a377c/Untitled%203.png)

```powershell
PS ~\simswap_web\web> cd front
PS ~\simswap_web\web\front> npm run dev
```

**Powershell 을 통해 해당 폴더의 위치로 이동한 뒤 npm을 통해 서버를 작동합니다.**

**그 외 코드의 기능과 설명은 주석을 참고해주세요.**
