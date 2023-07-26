//diarySlice

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://13.125.227.38:8080",
});

instance.interceptors.request.use((config) => {
  // 쿠키에 저장된 토큰을 꺼내는 것
  const accessToken = document.cookie
    .split(";")
    .filter((cookies) => cookies.includes("accessToken"))[0]
    ?.split("=")[1];
  //헤더에 토큰 담아서 보내기
  if (accessToken) config.headers.authorization = accessToken;
  return config;
});

instance.interceptors.request.use((config) => {
  // 쿠키에 저장된 토큰을 꺼내는 것
  const accessToken = document.cookie
    .split(";")
    .filter((cookies) => cookies.includes("accessToken"))[0]
    ?.split("=")[1];
  //헤더에 토큰 담아서 보내기
  if (accessToken) config.headers.authorization = accessToken;
  return config;
});

instance.interceptors.response.use((config) => {
  config.headers.authorization &&
    (document.cookie = `accessToken=${config.headers.authorization}; path=/;`);
  return config;
});

// Diary (1) GET - 메인페이지부분(리스트조회)
export const __getDiaryList = createAsyncThunk("getDiaryList", async () => {
  try {
    let res = await instance.get("/api/post", {
      sort: "",
      page: 1,
      size: 5,
    }); // 서버 건들고
    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
});

// Diary (1) GET - 상세페이지
export const __getDetailDiary = createAsyncThunk(
  "getDetailDiary",
  async (postId) => {
    try {
      let res = await instance.get(`/api/post/${postId}`);
      console.log(res.data); // 서버 건들고
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

// Diary (2) post
export const __postDiaryList = createAsyncThunk(
  "postDiaryList",
  async (payload) => {
    try {
      const res = await instance.post("/api/post", {
        id: 0,
        title: "title",
        image: "string",
        content: "string",
        mood: "string",
        weather: "string",
        username: "string",
        createdAt: "2023-07-19T05:59:10.804Z",
        commentList: [
          {
            id: 0,
            content: "string",
            userName: "string",
          },
        ],
        likeCount: 0,
        liked: true,
      });
      return;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

// Diary (3) Delete
export const __deleteDiaryList = createAsyncThunk(
  "deleteDiaryList",
  async (postId) => {
    try {
      const res = await axios.delete(`/api/post/${postId}`);
      return;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

// Diary (4) Patch
export const __editDiaryList = createAsyncThunk(
  "editDiaryList",
  async (payload) => {
    try {
      const res = await axios.patch(`/api/${payload.postId}`, {
        title: payload.title,
        content: payload.content,
        // mood: payload.mood,
        // weather: payload.weather,
      });
      return;
    } catch (error) {
      console.log(error.message);
      return Promise.reject(error.message);
    }
  }
);

const initialState = {
  diaryList: [],
  isLoading: false,
  isError: false,
  error: null,
};

const DiaryListSlice = createSlice({
  name: "diaryList",
  initialState,
  extraReducers: (builder) => {
    builder
      // Diary (1) GET
      .addCase(__getDiaryList.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getDiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false; // 리렌더링을 하고
        state.diaryList = [...action.payload];
      })
      .addCase(__getDiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      .addCase(__getDetailDiary.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getDetailDiary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false; // 리렌더링을 하고
        state.diaryList = [{ ...action.payload }];
      })
      .addCase(__getDetailDiary.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      // Diary (2) POST
      .addCase(__postDiaryList.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__postDiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__postDiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      // Diary (3) Delete
      .addCase(__deleteDiaryList.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__deleteDiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__deleteDiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      // Diary (4) Patch
      .addCase(__editDiaryList.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__editDiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__editDiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default DiaryListSlice.reducer;
export const selectDiary = (state) => state.DiaryListSlice;
export { instance };

//authorization

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { instance } from "./diarySlice";

// export const __postLogin = createAsyncThunk("postLogin", async (payload) => {
//   try {
//     const res = await instance.post("/api/user/login", {
//       address: "test123",
//       password: "Test123!",
//     });
//     document.cookie = `accessToken=${res.headers.AccessToken}; path=/;`;
//     return;
//   } catch (error) {
//     console.log(error.message);
//     return error.message;
//   }
// });

// export const __postCheckId = createAsyncThunk(
//   "postCheckId",
//   async (payload) => {
//     try {
//       const res = await instance.post("/api/auth/checkId", {
//         username: "username",
//       });
//       document.cookie = `accessToken=${res.headers.AccessToken}; path=/;`;
//       return;
//     } catch (error) {
//       console.log(error.message);
//       return error.message;
//     }
//   }
// );

// export const __postRegister = createAsyncThunk(
//   "postRegister",
//   async (payload) => {
//     try {
//       const res = await instance.post("/api/auth/signup", {
//         username: "jung",
//         password: "hwan12345",
//       });

//       document.cookie = `accessToken=${res.headers.AccessToken}`;
//       return;
//     } catch (error) {
//       console.log(error.message);
//       return error.message;
//     }
//   }
// );

// const initialState = {
//   isLoading: false,
//   isError: false,
//   error: null,
// };

// const authorization = createSlice({
//   name: "login",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(__postLogin.pending, (state, action) => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(__postLogin.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(__postLogin.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.error = action.payload;
//       })

//       .addCase(__postRegister.pending, (state, action) => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(__postRegister.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(__postRegister.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.error = action.payload;
//       });
//   },
// });

// export default authorization.reducer;
//-------------------------------------------------------------
//accountpage(회원가입)

// import React, { useState } from "react";
// import styled from "styled-components";
// import logo from "../images/logo.png";
// import axios from "axios";
// import { instance } from "../redux/modules/diarySlice";
// import { useNavigate } from "react-router-dom";

// // "아이디를 4~10자로 입력해주세요.(특수문자x)
// // "비밀번호를 8~15자로 입력해주세요.(특수문자o)"

// const AccountPage = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [checkPassword, setCheckPassword] = useState("");
//   const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

//   const onChangeUserName = (event) => {
//     setUsername(event.target.value);
//   };

//   const onChangePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const onChangeCheckPassword = (event) => {
//     setCheckPassword(event.target.value);
//   };

//   // 아이디 중복 버튼 눌렀을 때 통신
//   const doubleCheckOnClick = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await instance.post("/api/auth/checkId", {
//         username,
//       });
//       if (res.data.available) {
//         // Username is available
//         setUsernameErrorMessage("사용이 불가능한 아이디입니다.");
//       } else {
//         // Username is unavailable or duplicated
//         setUsernameErrorMessage("사용이 가능한 아이디입니다.");
//       }
//     } catch (error) {
//       console.log(error);
//       setUsernameErrorMessage("사용이 불가능한 아이디입니다.");
//     }
//   };

//   // 생성 버튼을 눌렀을 때 통신
//   const createOnclick = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await instance.post("/api/auth/signup", {
//         username,
//         password,
//       });
//       console.log(res);
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <EntireContainer>
//       <LogoImage src={logo} />
//       <LogInContainer>
//         <AccountTitle>회원가입</AccountTitle>
//         <AccountForm>
//           <div>아이디</div>
//           <IdInput
//             type="text"
//             onChange={onChangeUserName}
//             value={username}
//             placeholder=" 4~10자 영문 입력"
//           />
//           <RepeatCheckIdButton onClick={doubleCheckOnClick}>
//             중복확인
//           </RepeatCheckIdButton>
//           <IdErrorMsg>{usernameErrorMessage}</IdErrorMsg>
//           <br />
//           <div>비밀번호</div>
//           <PwInput
//             type="password"
//             onChange={onChangePassword}
//             value={password}
//             placeholder="영문 소문자 대문자 특수문자 포함 8~15자로 입력해주세요."
//           />
//           <br />
//           <div>비밀번호 확인</div>
//           <PwCheckInput type="password" onChange={onChangeCheckPassword} />
//           <AllButton>
//             <EnterButton onClick={createOnclick}>생성</EnterButton>
//             <AccountButton onClick={() => navigate("/")}>취소</AccountButton>
//           </AllButton>
//         </AccountForm>
//       </LogInContainer>
//     </EntireContainer>
//   );
// };

// export default AccountPage;

//----------------------------------------------------
//Loginpage(로그인 페이지)

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
// import logo from "../images/logo.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { __postLogin } from "../redux/modules/authorization";
// import { instance } from "../redux/modules/diarySlice";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [errorMsgModal, setErrorMsgModal] = useState(false);
//   const authorization = useSelector((state) => state.authorization);
//   const Cookie = document.cookie;

//   const onChangeUserName = (event) => {
//     setUsername(event.target.value);
//   };
//   const onChangePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const navigate = useNavigate();
//   // 로그인 버튼 눌렀을 때 실행
//   const LoginSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await instance.post("/api/auth/login", {
//         username,
//         password
//       });
//       console.log(res);
//       console.log("로그인 성공");

//       navigate("/MainHomePage");
//     } catch (error) {
//       console.log("로그인 실패");
//       console.log(error);
//     }
//   };

//   return (
//     <EntireContainer>
//       <LogoImage src={logo} />
//       <LogInContainer>
//         <LogInTitle>로그인</LogInTitle>
//         <LogInForm onSubmit={LoginSubmitHandler}>
//           <div>아이디</div>
//           <IdInput type="text" onChange={onChangeUserName} value={username} />

//           <br />
//           <div>비밀번호</div>
//           <PwInput
//             type="password"
//             onChange={onChangePassword}
//             value={password}
//           />
//           <br />
//           {/* {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>} */}
//           <AllButton>
//             <EnterButton>입장 버튼</EnterButton>
//             <AccountButton onClick={() => navigate("/AccountPage")}>
//               회원가입 버튼
//             </AccountButton>
//           </AllButton>
//         </LogInForm>
//       </LogInContainer>
//       {errorMsg && errorMsgModal && (
//         <div
//           style={{
//             position: "absolute",
//             top: "50vh",
//             left: "50vw",
//             transform: "translation(-50%, -50%)",
//             width: "150px",
//             height: "100px",
//             backgroundColor: "yellow",
//             fontWeight: "bold",
//           }}
//         >
//           {errorMsg}
//           <div
//             onClick={() => setErrorMsgModal(!errorMsgModal)}
//             style={{ backgroundColor: "lightcoral" }}
//           >
//             닫기
//           </div>
//         </div>
//       )}
//     </EntireContainer>
//   );
// };

//-----------------------------------------------------------------------------------
// [ 알록짤록 회원가입 - SIGNUP.JSX ]
// import React, { useState } from 'react'
// import { styled } from 'styled-components';
// import { useNavigate } from 'react-router-dom'
// import { useMutation, useQueryClient } from 'react-query';
// import { addUsers } from '../axios/api';

// function SignUp() {

//   const navigate = useNavigate(); // 이미 회원이라면 로그인 페이지로 이동을 위함
//   const [userId, setUserId] = useState(''); // 가입할 ID의 state
//   const [nickName, setNickName] = useState(''); // 가입할 닉네임의 state
//   const [pw, setPw] = useState(''); // 가입할 PW의 state
//   const [pwCheck, setPwCheck] = useState(''); // 비밀번호 재확인의 state

//   const handleUserIdChange = (event) => { // 가입할 ID의 state 감지 함수
//     setUserId(event.target.value);
//   };
//   const handleNickNameChange = (event) => { // 가입할 닉네임의 state 감지 함수
//     setNickName(event.target.value);
//   };
//   const handlePwChange = (event) => { // 가입할 PW의 state 감지 함수
//     setPw(event.target.value);
//   };
//   const handlePwCheckChange = (event) => { // 가입할 PW의 재확인 state 감지 함수
//     setPwCheck(event.target.value);
//   };
//   const queryClient = useQueryClient(); // 함수
//   const addNewUserMutation = useMutation(addUsers, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('posts');
//     }
//   });
//   const createOnclick = async (event) => {
//     event.preventDefault()
//     const newUser = {
//       loginId : userId,
//       password : pw,
//       nickname : nickName,
//       };
//       addNewUserMutation.mutate(newUser)
//       navigate('/login')
// };

//   return (
//     <JoinPageWrapper>
//         <StLogo onClick={()=>{navigate('/')}}>알록짤록</StLogo>
//     <JoinForm>
//       <JoinTitle>회원가입하기</JoinTitle>
//       <InputField type="text" placeholder="가입할 아이디 (소문자, 숫자 조합 5자리 이상)" value={userId} onChange={handleUserIdChange} />
//       <InputField type="text" placeholder="닉네임 (2자 이상)" value={nickName} onChange={handleNickNameChange}/>
//       <InputPassword type="password" placeholder="비밀번호 (소문자, 숫자 조합 8자리 이상)" value={pw} onChange={handlePwChange}/>
//       <InputPassword type="password" placeholder="비밀번호 확인" value={pwCheck} onChange={handlePwCheckChange}/>
//       <SubmitButton type="submit" onClick={createOnclick}>회원가입</SubmitButton>
//       <div>이미 알록짤록 계정이 있으신가요?</div>
//       <StLoginLink onClick={()=>{navigate('/login')}} >로그인</StLoginLink>
//     </JoinForm>
//   </JoinPageWrapper>
//   )
// }

// export default SignUp;

//------------------------------------------------------------------------------

// [ 알록짤록 로그인 - LOGIN.JSX ]

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { styled } from 'styled-components'
// import axios from 'axios';
// import { loginOn } from '../redux/modules/loginSlice';
// import { useDispatch} from 'react-redux';

// function Login() {
//     const navigate = useNavigate();

//     const [loginUserId , setLoginUserId ] = useState('');
//     const [pw, setPw] = useState('');

//     const handleLoginUserIdChange = (event) => {
//       setLoginUserId(event.target.value);
//     };
//     const handlePwChange = (event) => {
//       setPw(event.target.value);
//     };

//   const dispatch = useDispatch();

//       const LoginSubmitHandler = async (event) => {
//       event.preventDefault();
//       try {
//         const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/members/login`, {
//           loginId : loginUserId,
//           password : pw
//         });
//           console.log("로그인 성공");
//           const role = res.data.data.role
//           const token = res.headers.authorization
//           localStorage.setItem('token', token);
//           localStorage.setItem('role', role)
//           dispatch(loginOn())
//           navigate('/')
//           } catch (error) {
//           console.log("로그인 실패");
//           console.log(error.message);
//           alert("로그인에 실패했습니다.")
//           }
//       };

//   return (
//     <LoginPageWrapper>
//       <StLogo onClick={()=>{navigate('/')}}>알록짤록</StLogo>
//       <LoginForm>
//         <JoinTitle>로그인하기</JoinTitle>
//         <InputField type="text" placeholder="아이디" value={loginUserId} onChange={handleLoginUserIdChange} />
//         <InputField type="password" placeholder="비밀번호" value={pw} onChange={handlePwChange} />
//         <SubmitButton type="submit" onClick={LoginSubmitHandler}>로그인</SubmitButton>
//         <div>아직 알록짤록 계정이 없으신가요?</div>
//         <StJoinLink onClick={()=>{navigate('/signup')}}>회원가입</StJoinLink>
//       </LoginForm>
//   </LoginPageWrapper>
//   )
// }

// export default Login
