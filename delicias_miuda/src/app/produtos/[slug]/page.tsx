interface IProductPage{
    params: {
        slug: string
    }
}

const ProductPage: React.FC<IProductPage> = async({params}) => {
    const {slug} = params
    
    return (
        <div>
            <p>{slug}</p>
        </div>
    )
}

export default ProductPage