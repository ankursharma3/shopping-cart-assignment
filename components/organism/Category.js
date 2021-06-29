import styled from 'styled-components';
import { FetchCategory } from "../../api/FetchCategory";
import { CategoryBox } from "../molecules/CategoryBox";
import {connect} from 'react-redux';
import {setInfo} from '../../redux/actions/main';
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
function Category({categories}){
    let data = categories;
    
    if(!data)
        return ''
    
    return (<CategoryStyled> 
            {data.map((category) => (
            <CategoryBox key={category.id} data={category} />
          ))}
          </CategoryStyled> 
    );
}


Category.getInitialProps = async () => {
    const categories = await FetchCategory();
    return {categories}
}

const mapStateToProps = (state)=>({ userInfo:state.main })
const mapDispatchToProps = {setInfo:setInfo} 

export default  connect(mapStateToProps,mapDispatchToProps)(Category)  
/*export default Category*/