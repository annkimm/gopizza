import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {  PROFILEURL } from 'config';

interface CrewInfo {
  rank?: any,
  name?: string,
  store_name?: string,
  total_score?: number,
  average_time?: number,
  count?: number,
  completion_score?:number,
  image?:string
}

interface Props  {
  topCrew : Array<CrewInfo>,
  crew : boolean
}

const Winner:React.FC<Props> =  (props : Props ) => {
const [data, setData ] = useState(props.topCrew)
console.log(props.crew)
const changeLeft = (num:number):any => {
  if(num === 1){
    return '35%'
  } else if (num === 2){
    return '3%'
  } else {
    return '67%'
  }
}

const changeTop = (num:number):any => {
  if(num === 1){
    return '0'
  } else if (num === 2){
    return '0'
  } else {
    return '0'
  }
}

const changeMedal = (num :number) : any => {
  if(num === 1){
    return goldMedal
  } else if (num === 2){
    return silverMedal
  } else {
    return bronzeMedal
  }
}

            
        

return(
          <WinnerContainer>
          {props.topCrew.map((item:CrewInfo, index: number )=>{
               const profilePic = ( url: string | undefined ) => {
                 if( url !== null){
                   return <WinnerImg src={item.image}></WinnerImg>
                 } else {
                   return <WinnerImg src="PROFILEURL"></WinnerImg>
                 }
               }
            return(<WinnerBox>
              <MedalImage alt="#" src={changeMedal(item.rank)}></MedalImage>
             {props.crew ?       <WinnerInfoBox>
                <WinnerImgBox>
                   {profilePic(item.image)}               
                 </WinnerImgBox>
                  <WinnerName>{item.name}</WinnerName>
                  <WinnerStore>{item.store_name}</WinnerStore>
              </WinnerInfoBox> : 
              <StoreInfoBox>
                <WinnerName>{item.name}</WinnerName>
                <WinnerStore>{item.store_name}</WinnerStore>
              </StoreInfoBox>}

              <WinnerScoreBox>
                < WinnerDetailScore>Completion:{item.completion_score}</WinnerDetailScore>
                <WinnerDetailScore>Time: {item.average_time}</WinnerDetailScore>
                <WinnerDetailScore>Count:{item.count}</WinnerDetailScore>
                <WinnerTotalScore>Total Score: {item.total_score}</WinnerTotalScore>
              </WinnerScoreBox>
            </WinnerBox>
           )})}
    </WinnerContainer>)
}

export default Winner;

const WinnerContainer = styled.div`

  display: flex;
  flex-direction:row;
  width: 100%;
  border: 3px solid rgb(63,158,207, 0.7);
  border-top: 0;
  margin-bottom: 30px;
  height: 220px;
  justify-content: center;
;
`;

const WinnerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 32%;
  height: 100%;
  text-align: center;
  font: 1.2rem 'Bebas Neue', cursive;
  color: #999999;
  background-color: #fffff;
  position:relative
`;

const WinnerImgBox = styled.div`
  margin-bottom: 9px;
`;

const WinnerImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #999999;
`;

const MedalImage = styled.img`
  position: absolute;
  width: 40px;
  height: 70px;
  object-fit: cover;
  left: 0%;
  top:0px;
`;

const WinnerInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  margin-left: 15%;
`;

const WinnerTotalScore = styled.div`
  font-size: 1.4rem;
  color: #999999;
  margin-top: 10px;
`;

const WinnerDetailScore = styled.div`
  margin-bottom: 6px;
  color: #999999;
  opacity: 0.7;
`;

const WinnerScoreBox = styled.div`
  padding-left: 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  width: 100%;
  height: 100%;
`;
const WinnerName = styled.div`
  color: #333;
  font-size: 1.3rem;
`;
const WinnerStore = styled.div`
  color: gray;
  font-size: 0.7rem;
`;

const Test = styled.img`
position: absolute;
top: 50%;
width: 1090px;
height: 200px;
object-fit: over;
`
const StoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15%;`

const goldMedal: string =
  'https://images.velog.io/images/carminchameleon/post/ae473433-bf70-473c-86a2-7e4d0d119191/image.png';
const silverMedal: string =
  'https://images.velog.io/images/carminchameleon/post/b6ba17e4-7737-4af3-af34-b433dea2884c/image.png';

const bronzeMedal: string =
  'https://images.velog.io/images/carminchameleon/post/fe2c6aa9-a4a8-4a92-9d36-118e83ca26d0/image.png';
