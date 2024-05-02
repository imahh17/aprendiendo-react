import { useState } from 'react'
import './Filters.css'

export function Filters (changeFilters) {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
    }
    
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" name="price" id="price" min='0' max='2000' onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}