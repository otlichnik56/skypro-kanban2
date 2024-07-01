import styled from 'styled-components';
import { topicStyles } from "../../../lib/topic";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
  color: #ffffff;
  font-weight: bold;
`;


export const PopupContainer = styled.div`
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

export const PopupBlock = styled.div`
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    text-align: left;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const TopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const Title = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`;

export const ThemeText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Theme = styled.div`
    display: inline-block;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 1;
    
    background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};

    ${ThemeText} {
        color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
    }
`;

export const Status = styled.div`
    margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
    margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;  
`;

export const StatusTheme = styled.div`
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94A6BE;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    background: #fff;
    cursor: pointer; 
    &.active-status {
        background: #94A6BE;
        color: #fff;
    }
`;

export const Wrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Form = styled.form`
    max-width: 370px;
    width: 100%;
    margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: ${({ $isEditing }) => ($isEditing ? '#FFFFFF' : '#EAEEF6')};
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    margin-top: 14px;
    height: 200px;
    color: #94A6BE;
    ::placeholder {
        color: #94A6BE;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Button03 = styled.button`
    height: 30px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 0 14px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    color: #565EEF;
    border-radius: 4px;
    background: transparent;
    outline: none;
    &.btn-browse__edit,
    &.btn-edit__edit {
        border: 0.7px solid #565EEF;
        background: transparent;
        color: #565EEF;
    }
    &.btn-browse__delete,
    &.btn-edit__delete {
        border: 0.7px solid #565EEF;
        background: transparent;
        color: #565EEF;
    }
    &.btn-browse__close,
    &.btn-edit__close {
        background: #565EEF;
        border: none;
        color: #FFFFFF;
    }
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
    }
`;

export const Button01 = styled.button`
    height: 30px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 0 14px;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    color: #FFFFFF;
    background: #565EEF;
    outline: none;
    &.btn-browse__edit,
    &.btn-edit__edit {
        border: 0.7px solid #565EEF;
        background: #565EEF;
        color: #FFFFFF;
    }
    &.btn-browse__delete,
    &.btn-edit__delete {
        border: 0.7px solid #565EEF;
        background: #565EEF;
        color: #FFFFFF;
    }
    &.btn-browse__close,
    &.btn-edit__close {
        background: #565EEF;
        border: #565EEF;
        color: #FFFFFF;
    }
    &:hover {
        background-color: #33399b;
        border: none;
        color: #FFFFFF;
    }
`;