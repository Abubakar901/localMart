import React, {useState, useEffect} from 'react';
import ProductCards from '../../compoenents/ProductCards/ProductCards';
import Metadata from '../../Layout/Metadata';
import {
    ProductMainContainer,
    ProductCardsContainer,
    ProductTopContainer,
    FormContainer,
    MixContainer,
    SideBarContainer,
    ResponsiveBtn,
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
import {useAlert} from 'react-alert';

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (<div role="tabpanel"
        hidden={
            value !== index
        }
        id={
            `simple-tabpanel-${index}`
        }
        aria-labelledby={
            `simple-tab-${index}`
        }
        {...other}> {
        value === index && (<Box sx={
            {p: 3}
        }>
            <Typography> {children}</Typography>
        </Box>)
    } </div>);
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
    const alert = useAlert();
    const [filterCity, setFilterCity] = useState("");
    const [typeCategory, setTypeCategory] = useState("");
    const {
        products,
        category,
        loading,
        city,
        error
    } = useSelector((state) => state.products);
    const [value, setValue] = React.useState(0);
    let [openBar, setOpenBar] = useState('none')
    let openPanel = false;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getProduct())
    }, [dispatch, error, alert])


    const checkCategory = (categoryType) => {
        if (categoryType === undefined) {
            return ""
        } else {
            setTypeCategory(categoryType)
        }
    }

    const filterCityHandler = (cityPlace) => {
        if (cityPlace === undefined) {
            return ""
        } else {
            setFilterCity(cityPlace)
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

        return (<div role="tabpanel"
            hidden={
                value !== index
            }
            id={
                `simple-tabpanel-${index}`
            }
            aria-labelledby={
                `simple-tab-${index}`
            }
            {...other}> {
            value === index && (<Box>
                <Typography> {children}</Typography>
            </Box>)
        } </div>);
    }

    const handlePanel = () => {
        openPanel = ! openPanel;
        if (openPanel) {
            setOpenBar('flex')
        } else {
            setOpenBar('none')
        }
    }


    return (<> {
        loading ? <Loader/>: (<ProductMainContainer>
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

                <ResponsiveBtn onClick={
                            () => handlePanel()
                        }>
                            <span></span>
                            <span></span>
                            <span></span>
                        </ResponsiveBtn>
                <SideBarContainer  show={openBar}>
                        
                    <Box sx={
                        {width: '100%'}
                    }>
                        <Box sx={
                            {
                                borderBottom: 1,
                                borderColor: 'divider'
                            }
                        } >
                            <Tabs value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example">
                                <Tab label="Categories" {...a11yProps(0)}
                                    style={
                                        {
                                            textTransform: 'capitalize',
                                            fontSize: '20px',
                                            fontWeight: 700
                                        }
                                    }/>
                                <Tab label="City" {...a11yProps(1)}
                                    style={
                                        {
                                            textTransform: 'capitalize',
                                            fontSize: '20px',
                                            fontWeight: 700
                                        }
                                    }/>
                            </Tabs>
                        </Box>
                        <TabPanel value={value}
                            index={0}> {
                            category && category.map((cate) => (<InnerContainer>
                                <p onClick={
                                        () => checkCategory(cate)
                                    }
                                    key={cate}> {cate} </p>
                            </InnerContainer>))
                        }
                            <InnerContainer>
                                <p onClick={
                                    () => checkCategory("")
                                }>Remove Filter</p>
                            </InnerContainer>
                        </TabPanel>
                        <TabPanel value={value}
                            index={1}> {
                            city && city.map((eachCity) => (<InnerContainer>
                                <p onClick={
                                        () => filterCityHandler(eachCity)
                                    }
                                    key={eachCity}> {eachCity} </p>
                            </InnerContainer>))
                        }
                            <InnerContainer>
                                <p onClick={
                                    () => filterCityHandler("")
                                }>Remove Filter</p>
                            </InnerContainer>
                        </TabPanel>
                    </Box>
                </SideBarContainer>
                <ProductCardsContainer> {
                    products && products.filter((product) => product.name.toLowerCase().includes(query) && product.category.includes(typeCategory) && product.shopName.city.includes(filterCity)).map(product => (<ProductCards product={product}
                        key={
                            product?._id
                        }/>))
                } </ProductCardsContainer>
            </MixContainer>
        </ProductMainContainer>)
    } </>)
}

export default Product
