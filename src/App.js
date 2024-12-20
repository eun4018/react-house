import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//hashrouter /뒤에 #이 붙는다.
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}
//<Route path="/hello" element={<h1>hello</h1>} />
//:id react한테 /movie/여기 오는 id값이 뭔지 알고 싶다고 말하고 있는 것
//Switch Route를 찾고 Component을 Rendering 해준다.
////gh-pages 결과물을 github에 업로드 할 수 있게 해주는 패키지 npm run deploy 잊지말것
export default App;
