import styled from 'styled-components';
const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  padding-top: 100px;
  background: #3c31dd;

  .curve {
    position: absolute;
    height: 250px;
    width: 100%;
    bottom: 0;
    text-align: center;
  }

  .curve::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    transform: translate(85%, 60%);
    background-color: hsl(216, 21%, 16%);
  }

  .curve::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: #3c31dd;
    transform: translate(-4%, 40%);
    z-index: -1;
  }
`;

const Wave = () => {
  return (
    <Wrapper>
      <h1>Nice Curves</h1>
      <p>
        A website is like a road. The more curves it has the more interesting it
        is.
      </p>
      <div className="curve"></div>
    </Wrapper>
  );
};
export default Wave;
