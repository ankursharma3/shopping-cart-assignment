import styled from 'styled-components';
import { FetchCategory } from "../../api/FetchCategory";
import { CategoryBox } from "../molecules/CategoryBox";
import {connect} from 'react-redux';
import {setInfo} from '../../redux/actions/main';
import { fetchProductsCat,setProductsCat } from '../../redux/actions/main';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import productsService from '../../services/product.service'

const CategoryStyled = styled.div`
    width:100%;
    padding-left:150px;
    padding-right:150px;
    :nth-child(odd){
        flex-direction: row;
    }
    :nth-child(even){
        flex-direction: row-reverse;
    }   
`;

const setCat = () => {
    
}

function Category({categories}){
   
    const products = useSelector((state) => state.productCategories);
    
    let data = categories;
    
    if(!data)
        return ''
    
    return (<CategoryStyled> 
        <button onClick={()=>setCat()}>Test</button>
            {data.map((category) => (
            <CategoryBox key={category.id} data={category} />
          ))}
          </CategoryStyled> 
    );
}


Category.getInitialProps = async () => {
    
    const categories = await  productsService.getProductsCategory()
    return {categories}

}



const mapStateToProps = (state)=>({ userInfo:state.main })
const mapDispatchToProps = {setInfo:setInfo} 


export default  connect(mapStateToProps,mapDispatchToProps)(Category)  
/*export default Category*/