import styled from 'styled-components';
//deveria ser com a tag a por que la é esperado um button com tag a
//por isso criaremos um apelido na chamada do botão pra dizer que se comportara com um tag a
//const Button = styled.a`

const Button = styled.button`
color: var(--white);
border: 1px solid var(--white);
box-sizing: border-box;
cursor: pointer;
text-align: center;
padding: 11px;
font-style: normal;
font-weight: bold;
font-size: 12px;
outline: none;
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;
height: 40px;
width: 90px;
&:hover,
&:focus {
  opacity: .5;
}
`;

export default Button;