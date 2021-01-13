import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import { HeartEmpty, HeartFull, Comment, Airplane } from "../Icons";
import FatText from "./Fat.Text";
import TextareaAutosize from 'react-autosize-textarea';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Post =styled.div`
    ${props => props.theme.whiteBox}
    width: 100%;
    max-width: 600px;
    margin-bottom: 60px;
`;

const Header =styled.div`
    padding: 15px;
    display: flex;
`; //Post Header부분

const UserColumn = styled.div`
    margin-left: 10px;
`; //name, lacation 부분

const Location = styled.div`
     display: block;
     margin-top: 5px;
     font-size: 12px;
`; //Location

const File = styled.div`
  padding-bottom: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`; //파일

const Button = styled.span`
    margin-right: 10px;
    cursor: pointer;
`;

const Meta = styled.div`
    padding: 15px;
`;

const Buttons = styled.div`
${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`; //버튼들

const Timestamp =styled.span`
    font-weight: 300;
    text-transform: uppercase;
    opacity: 0.5;
    display: block;
    font-size: 12px;
    margin: 10px 0px;
    padding-bottom: 10px;
    border-bottom: #B2B2B2 1px solid;
`; //작성 시간

const Textarea = styled(TextareaAutosize)`
        border:none;
        width: 100%;
        resize: none;
        font-size: 14px;
        &:focus {
            outline: none;
        }
`; //댓글

const NextArrow =(props) => { //사진 넘기기
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            display: "block",
            paddingRight: "60px",
            zIndex: "1"
        }}
        onClick={onClick}
      />
    );
  }
  
const PrevArrow =(props) => { //사진 뒤로
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "block",
            paddingLeft: "40px",
            zIndex: "1",
            }}
        onClick={onClick}
      />
    );
  }

const settings = { //Slider setting
    dots: true,
    infinite: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

export default ( {user: {userName, avatar}, location, files, isLiked, likeCount, createdAt, newComment,}) => (
    <Post>
        <Header>
            <Avatar size="sm" url={avatar} />
            <UserColumn>
                <FatText text={userName}/>
                <Location>{location}</Location>
            </UserColumn>
        </Header>
        
        <Slider {...settings}>
            {files && files.map(file => <File key={file.id} src={file.url}/>)} 
        </Slider>
        
        <Meta>
            <Buttons>
                <Button>{isLiked ? <HeartFull/> : <HeartEmpty/>}</Button>
                <Button><Comment/></Button>
                <Button><Airplane/></Button>
            </Buttons>
            <FatText text= { `좋아요 ${likeCount}개`} />
            <Timestamp>{createdAt}</Timestamp>
            <Textarea placeholder={"댓글 달기"}{...newComment}/>
        </Meta>
    </Post>
);