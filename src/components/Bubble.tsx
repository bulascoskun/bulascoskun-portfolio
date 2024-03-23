import styled from 'styled-components';

const Wrapper = styled.section`
  ::after {
    content: '';
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 100%;
    background-color: #0f0f10;
    height: 85%;
  }
`;

const Bubble = () => {
  return (
    <Wrapper>
      <h1>Nice Curves</h1>
      <p>
        A website is like a road. The more curves it has the more interesting it
        is.
      </p>
    </Wrapper>
  );
};
export default Bubble;
