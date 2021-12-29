import "./App.css";
import { Reset } from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,700&display=swap');
body{

  background: #2d2d2d;
  color:#fff;
  font-family:Roboto,sans-serif;
}

Header{
  background-color:#393939;
  box-shadow: 0 3px 3px rgba(0,0,0,.3);
  display:grid;
  grid-template-columns:220px 1fr 200px;
  grid-column-gap: 20px;
}
.b{
  font-weight: normal;
  display: inline-block;
  margin-left: 2px;
}
.logo{
  color:#fff;
  text-decoration:none;
  display:inline-block;
  height: 50px;
  line-height: 50px;
  padding:0 15px;
  height: 50px;
}
span{
  dispaly:inline-block;
  padding-left: 5px;
  padding-top: 10px;
  font-size: 1.2rem;
  font-weight: 300px;
}
input{
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #777;
  background: rgba(0,0,0,.1);
  padding: 8px 10px;
  margin-top: 9px;
}
.profile{
  color: #fff;
  text-decoration: none;
  line-height: 50px;
}
.er{
  font-size: 1.8rem;
}
`;
const HeaderRow =styled.div`
display: grid;
grid-template-columns: 1fr min-content;
padding: 30px 20px;

`;

const BlueButton = styled.button`
 background-color: #378ad3;
 color: #fff;
 border: 0;
 border-radius: 5px;
 padding: 15px 10px;
`;


const QuestionStat = styled.div`
text-align: center;
display: inline-block;
font-size: 1.2rem;
color: #aaa;
margin-top: 7px;
span{
  font-size:.7rem;
  display: block;
  font-weight: 300;
  margin-top: 4px;
}

`;
const QuestionTitleArea = styled.div`
  padding: 0  30px;
`;
const Tag = styled.span`
 display: inline-block;
 margin-right: 6px;
 background-color: #3e4a52;
 color: #9cc3db;
 padding: 4px;
 border-radius: 7px;
 font-size: .9rem;
`;
const QuestionLink = styled.a`
   text-decoration: none;
   color: #3ca4ff;
   font-size: 1.1rem;
   display: block;
   margin-button: 5px;
`;
const StyledQuestionRow = styled.div`
background-color: rgba(255,255,255,.05);
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
`;
const WhoAndWhen = styled.div`
   display: inline-block;
   color: #aaa;
   font-size: .8rem;
   float: right;
   padding: 10px 0;
`;

const UserLink = styled.a`
  color:#3ca4ff;
`;

function App() {
  return (
    <div>
   <Reset />
<GlobalStyles />
      {Header()}
      <QuestionPage />
    </div>
  );

  function Header() {
    return (
      <header>
      <a className="logo" href="#">
     
       <span> Stack <b>overflowclone</b> </span>
      </a>
      <form action="" className="search">
        <input type="text" placeholder="search..." />  
      </form>
      <a className="profile" href="#">
          Ilyas
        </a>
    </header>
);
  }
};
function QuestionPage() {
  return(
    <main>
    <HeaderRow>
    <h1 class="er">Top Questions</h1>
    <BlueButton>Ask&nbsp;Question</BlueButton>
    </HeaderRow>
    <QuestionRow />
    <QuestionRow />
    <QuestionRow />
    
    </main>
  );
};
function QuestionRow() {
  return(
    <StyledQuestionRow>
    <QuestionStat>0<span>votes</span></QuestionStat>
    <QuestionStat>1<span>answer</span></QuestionStat>
    <QuestionStat>6<span>views</span></QuestionStat>
    <QuestionTitleArea>
      <QuestionLink>Getting string in quotes in javascript</QuestionLink>
      <Tag>javascript</Tag>
      <Tag>parsing</Tag>
      <Tag>quotes</Tag>
      <Tag>literals</Tag>
      <WhoAndWhen>
      asked 2 mins ago <UserLink>Dawid</UserLink>

      </WhoAndWhen>
    </QuestionTitleArea>
    </StyledQuestionRow>
  )
}

export default App;
