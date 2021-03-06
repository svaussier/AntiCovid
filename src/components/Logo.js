import styled from "styled-components";

const Logo = () => (
    <Wrapper>
        AntiCovid<span className="text-orange">.</span>
    </Wrapper>
);

const Wrapper = styled.div`
    font-weight: 900;
    font-size: 30px;
    color: white;

    @media only screen and (min-width: 768px) {
        font-weight: 900;
        font-size: 65px;
        color: inherit;
    }
    @media only screen and (min-width: 1024px) {
        font-weight: 900;
        font-size: 65px;
    }
`;

export default Logo;
