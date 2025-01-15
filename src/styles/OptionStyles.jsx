import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    background-color: #376AED;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 16px;
    left: 32px;
    margin-bottom: 24px;
`;

export const ProfileImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
`;

export const ProfileText = styled.div`
display: flex;
flex-direction: column;
`;


export const Name = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-right: 30px;
    margin-bottom: 3px;
`;

export const Grade = styled.div`
    font-size: 14px;
    gont-weignt: bold;
    color: white;
    margin-left: 10px;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: absolute;
    bottom: 50px;
    left: 40px;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 16px;
`;

export const Label = styled.div`
    font-size: 16px;
    font-weigt: bold;
    color: white;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background: white;
    border-radius: 12px;
    width: 300px;
    padding: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ModalHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const ModalMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`;

export const ModalItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 8px 0;

    &:hover {
        color: #376AED;
    }
`;
