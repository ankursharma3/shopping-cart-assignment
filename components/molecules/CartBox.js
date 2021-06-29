import styled from 'styled-components'
import { CartIcon } from '../atom/CartIcon';
import {SignUp} from '../atom/SignUp';
import {connect} from 'react-redux';
import {incrementCounter,setInfo} from '../../redux/actions/main';
import {useState} from "react";

const CartContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:auto;
    padding:5px;
    
`;

const CartBoxStyle = styled.div`
    background-color: #eeeeee;
    margin-left:auto;
    display:flex;
    justify-content: center;
    text-align: center;
    margin-top:40px;
    padding:3px;
`;

const CartCount = styled.span`
    font-family: "Rockwell Regular";
    padding-top:5px;
    
`;


 function CartBox({userInfo,setInfo,incrementCounter}){
     console.log("user info",userInfo)
    const {name,cartCount} = userInfo;
    
    return (
      <CartContainer>
          <SignUp/>
        <CartBoxStyle>
            <CartIcon/>
            <CartCount >
                <button onClick={(e)=>{ incrementCounter(cartCount)}}>Cart Count</button>
                {cartCount} Items
            </CartCount>
        </CartBoxStyle>
      </CartContainer>  
    )
}

 const mapStateToProps = state=>({ userInfo:state.main })
 const mapDispatchToProps = {setInfo,incrementCounter} 

 export default  connect(mapStateToProps,mapDispatchToProps)(CartBox)  