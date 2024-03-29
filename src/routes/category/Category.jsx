import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/category.selector'
import './Category.scss'
import ProductCard from '../../components/productCard/ProductCard'
const Category=()=>{
	const {category}=useParams();
	const categoriesMap = useSelector(selectCategoriesMap)
	const [products,setProducts]=useState(categoriesMap[category]);

	useEffect(()=>{
		setProducts(categoriesMap[category]);

	},[category,categoriesMap])
	return(
		<div className="category-container">
			{products &&
				products.map((product)=><ProductCard key={product.id} product={product}/>)
			}
		</div>
		)
}

export default Category;