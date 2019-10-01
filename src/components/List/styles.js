import styles from 'styled-components';
export const ListWrapper = styles.ul`
background-color: ${props => props.theme.backgroundSecondary};
border-radius:4px;
margin-left:auto;
margin-right:auto;
margin-bottom:20px;
display:flex;
flex-direction:column;
`