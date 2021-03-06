import React from "react";
import {Helmet} from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/input";
import Button from "../../Components/Button";

const Wrapper =styled.div`
 min-height:80vh;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    width: 100%;
    max-width: 350px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0px;
`;
const Link = styled.span`
    color: ${props => props.theme.blueColor};
    cursor:pointer;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
         justify-content: center;
        input{
            width: 100%;
            &:not(last-child) {
                margin-bottom: 7px;
            }
        }
        button {
            margin-top: 10px;
            }
        }
`;

const AuthPresenter = ({
    action,
    setAction,
    userName,
    firstName,
    lastName,
    email,
    secret,
    onSubmit
    }) => (
        <Wrapper>
            <Form>
                { action === "Login" && (
                    <>
                        <Helmet>
                            <title>Log In | Instagram</title>
                         </Helmet>
                        <form onSubmit={onSubmit}> 
                            <Input placeholder = {"email"} {...email} type="email" />
                            <Button text={"Login"}/>
                        </form>
                    </>
                )}
                {action === "signUp" && (
                    <>
                        <Helmet>
                            <titl>Sign Up | Instagram</titl>
                        </Helmet>
                        <form onSubmit={onSubmit}>
                            <Input placeholder = {"FirstName"} {...firstName} />
                            <Input placeholder = {"LastName"} {...lastName} />
                            <Input placeholder = {"email"} {...email} type="email" />
                            <Input placeholder = {"UserName"} {...userName} />
                            <Button text = {"Sign Up"} />
                        </form> 
                    </>
                )}
                {action === "confirm" && (
                    <>
                        <Helmet>
                            <title>Confirm Secret | Instagram</title>
                        </Helmet>
                        <form onSubmit={onSubmit}>
                            <Input placeholder= {"your secret"} required {...secret} />
                            <Button text ={"Confirm"}/>
                        </form>
                    </>
                )}
            </Form>
            {action !== "confirm" && (
                <StateChanger>
                { action === "Login" ? (
                    <>
                        Don't have an account? {" "}
                        <Link onClick={ () => setAction("signUp") }>Sign Up</Link>
                    </>
                    ) : (
                    <>
                        Have an account? {" "}
                        <Link onClick={ () => setAction("Login") }>Login</Link>
                    </>
                    )
                }
            </StateChanger>
            )}
        </Wrapper>
    ) 

export default AuthPresenter;