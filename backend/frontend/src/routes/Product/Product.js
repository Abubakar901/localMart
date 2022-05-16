import React, {useState, useEffect} from 'react';
import ProductCards from '../../compoenents/ProductCards/ProductCards';
import Metadata from '../../Layout/Metadata';
import {
    ProductMainContainer,
    RightContainer,
    ProductCardsContainer,
    ProductTopContainer,
    FormContainer,
    MixContainer,
    SideBarContainer,
    InnerContainer
} from './ProductStyle';
import {useSelector, useDispatch} from 'react-redux';
import {getProduct} from '../../actions/productAction';
import Loader from '../../Layout/Loader/Loader';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {State, City} from 'country-state-city';

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <div role="tabpanel"
            hidden={
                value !== index
            }
            id={
                `simple-tabpanel-${index}`
            }
            aria-labelledby={
                `simple-tab-${index}`
            }
            {...other}>
            {
            value === index && (
                <Box sx={
                    {p: 3}
                }>
                    <Typography>{children}</Typography>
                </Box>
            )
        } </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`};
}


const Product = () => {

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const [state, setState] = useState()
    const [city, setCity] = useState("Mumbai");
    const [typeCategory, setTypeCategory] = useState("");
    const {products, category, loading} = useSelector((state) => state.products);
    const states = State.getStatesOfCountry("IN")
    const [value, setValue] = React.useState(0);
    let cities = City.getCitiesOfState("IN", state)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    const handleState = (stateCode) => {
        setState(stateCode)
    }

    const handleCity = (cityName) => {
        setCity(cityName)
    }

    const checkCategory = (categoryType) => {
        if (categoryType === undefined) {
            return ""
        } else {
            setTypeCategory(categoryType)
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const {
            children,
            value,
            index,
            ...other
        } = props;

        return (
            <div role="tabpanel"
                hidden={
                    value !== index
                }
                id={
                    `simple-tabpanel-${index}`
                }
                aria-labelledby={
                    `simple-tab-${index}`
                }
                {...other}>
                {
                value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )
            } </div>
        );
    }


    return (
        <> {
            loading ? <Loader/>: (
                <ProductMainContainer>
                    <Metadata title='localMart - All Products'/>
                    <ProductTopContainer>
                        <h4>Products</h4>
                        <FormContainer>
                            <input type='text' placeholder='Search Product'
                                onChange={
                                    (e) => setQuery(e.target.value)
                                }/>
                        </FormContainer>
                    </ProductTopContainer>
                    <MixContainer>

                        <SideBarContainer>

                            <Box sx={
                                {width: '100%'}
                            }>
                                <Box sx={
                                    {
                                        borderBottom: 1,
                                        borderColor: 'divider'
                                    }
                                }>
                                    <Tabs value={value}
                                        onChange={handleChange}
                                        aria-label="basic tabs example">
                                        <Tab label="Categories" {...a11yProps(0)} style={{textTransform:'capitalize', fontSize:'20px'}}/>
                                        <Tab label="City" {...a11yProps(1)} style={{textTransform:'capitalize', fontSize:'20px'}} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value}
                                    index={0}>
                                    {
                                    category && category.map((cate) => (
                                        <InnerContainer>
                                            <p onClick={
                                                    () => checkCategory(cate)
                                                }
                                                key={cate}>
                                                {cate} </p>
                                        </InnerContainer>
                                    ))
                                }
                                    <InnerContainer>
                                        <p onClick={
                                            () => checkCategory("")
                                        }>Remove Filter</p>
                                    </InnerContainer>
                                </TabPanel>
                                <TabPanel value={value}
                                    index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value}
                                    index={2}>
                                    Item Three
                                </TabPanel>
                            </Box>
                        </SideBarContainer>
                        <RightContainer>
                            <ProductCardsContainer> {
                                products && products.filter((product) => product.name.toLowerCase().includes(query) && product.category.includes(typeCategory)).map(product => (
                                    <ProductCards product={product}
                                        key={
                                            product._id
                                        }/>
                                ))
                            } </ProductCardsContainer>
                        </RightContainer>
                    </MixContainer>
                </ProductMainContainer>
            )
        } </>
    )
}

export default Product
