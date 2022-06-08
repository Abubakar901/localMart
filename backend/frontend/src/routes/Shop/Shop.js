import React, {useState, useEffect} from 'react';
import {
    ShopMainContainer,
    ShopTopContainer,
    ShopBothContainer,
    FormContainer,
    ShopCardsContainer,
    ShopFilterMenu,
    FilterLink,
    ResponsiveBtn
} from './ShopStyle';
import ShopCard from '../../compoenents/ShopCard/ShopCard';
import Metadata from '../../Layout/Metadata';
import {getShop} from '../../actions/shopActions';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../Layout/Loader/Loader';
import {useAlert} from 'react-alert';


const Shop = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useState("");
    const [genres, setGenres] = useState("");
    let [openBar, setOpenBar] = useState('none')
  
    const alert = useAlert();

    const {loading, error, shops, category} = useSelector(state => state.shops)

    let openPanel = false;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getShop());
    }, [dispatch, error, alert])

    const searchSubmitHandler = (e) => {
        e.preventDefault();
    }

    const handleType = (shopType) => {
        if (shopType) {
            setGenres(shopType)
        } else {
            setGenres('')
        }
    }


    const handlePanel = () => {
        openPanel = ! openPanel;
        if (openPanel) {
            setOpenBar('flex')
        } else {
            setOpenBar('none')
        }
    }


    return (
        <> {
            loading ? <Loader/>: (
                <ShopMainContainer>

                    <Metadata title='localMart - All Shops'/>
                    <ShopTopContainer>
                        <h4>Shops</h4>
                        <FormContainer onSubmit={searchSubmitHandler}>
                            <input type='text' placeholder='Search Shop Name or City'
                                onChange={
                                    (e) => setQuery(e.target.value.toLowerCase())
                                }/>
                        </FormContainer>
                    </ShopTopContainer>
                    <ShopBothContainer>
                        <ResponsiveBtn onClick={
                            () => handlePanel()
                        }>
                            <span></span>
                            <span></span>
                            <span></span>
                        </ResponsiveBtn>
                        <ShopFilterMenu show={openBar}>
                            {
                            category?.map((cate) => (
                                <FilterLink onClick={
                                        () => handleType(cate)
                                    }
                                    key={cate}>
                                    {cate} </FilterLink>
                            ))
                        }

                            <FilterLink onClick={
                                () => handleType()
                            }>
                                Remove Filter
                            </FilterLink>

                        </ShopFilterMenu>


                        <ShopCardsContainer> {
                            shops && shops.filter((shop) => (shop?.city?.includes(query) || shop?.name?.includes(query)) && shop?.category?.toLowerCase().includes(genres)).map(shop => (
                                <ShopCard key={
                                        shop?._id
                                    }
                                    shop={shop}/>
                            ))
                        } </ShopCardsContainer>

                    </ShopBothContainer>
                </ShopMainContainer>
            )
        } </>
    )
}

export default Shop
