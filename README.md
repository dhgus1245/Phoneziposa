# PhoneZipSa (Frontend)

딥러닝 기반 **휴대폰 가격 분석/견적** 사이트의 프론트엔드입니다.  
휴대폰 **앞/뒤 이미지 + 기기 정보(제조사/시리즈/모델/용량)**를 입력하면, 서버에서 이미지를 분석해 **등급을 산정**하고 **데이터 기반으로 예상 가격**을 제공합니다.  
추가로 MBTI를 참고해 만든 **PBTI(휴대폰 취향 테스트)** 기능이 있습니다.

## 주요 기능

- **견적/등급 분석**
  - 제조사/시리즈/모델/용량 선택
  - 앞/뒤 이미지 업로드
  - 분석 결과: 등급 및 가격(그래프/AI 문구 포함)
- **PBTI 테스트**
  - 문항 응답 기반으로 타입 계산
  - 타입 결과/추천 정보 조회
- **반응형 UI**
  - 모바일/PC 레이아웃 대응

## 기술 스택

- **React (Create React App / react-scripts)**
- **React Router**
- **MUI (@mui/material)**
- **Recharts**
- **lucide-react**
- **CSS Modules + 일반 CSS**

## 실행 방법

```bash
npm install
npm start
```

- 기본 접속: `http://localhost:3000`
- 현재 설정: `http://localhost:3001`
- 포트 변경(선택): 루트에 `.env` 파일 생성 후

```env
PORT=3001
```

## 외부 API(백엔드) 의존

이 저장소는 **프론트엔드**이며, 실제 딥러닝 분석/가격 산정은 **외부 API**에서 수행됩니다.

- **기기 선택 메뉴**
  - `GET http://54.180.183.118:8080/phone/estimate_menu?key=...&value=...`
- **견적 분석 요청 (multipart/form-data)**
  - `POST http://54.180.183.118:8080/phone/estimate`
  - 전송 데이터(예): `frontImage`, `backImage`, `model`, `volume`
- **PBTI 결과 조회**
  - `GET http://54.180.183.118:8080/phone/pbti?pcode=...`

## 프로젝트 구조(핵심)

- `src/Router.js`: 라우팅 엔트리(현재 `/` 단일 페이지)
- `src/phonedemonium/pages/PhoneMain.jsx`: 메인 페이지(섹션 조합)
- `src/phonedemonium/components/Sections/`
  - `MainSection.jsx`: 인트로/이동 CTA
  - `EstimateSection.jsx`: 이미지 업로드 + 견적 분석
  - `PbtiSection.jsx`: PBTI 테스트
- `src/phonedemonium/styles/`: 스타일(CSS Modules 포함)
- `public/`: 이미지/비디오 정적 리소스

## 빌드

```bash
npm run build
```

`build/`에 프로덕션 번들이 생성됩니다.
