import { useEffect, useState } from 'react';
import classNames from 'classnames/bind'

import * as productService from '../../services/productService'
import * as categoryService from '../../services/categoryService'

import setTitle from '../../utils/setTitle';
import CategoryItem from '../../components/Category';
import ProductItem from '../../components/Product';
import Container from '../../components/Container';
import Group from '../../components/Group';
import Page from '../../components/Page';
import styles from './index.module.scss'
import Slider from '../../components/Slider';

const cx = classNames.bind(styles)

function Home({ title }) {
    setTitle(title)

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const arrayCategories = await categoryService.getCategories()
                setCategories(arrayCategories)
            } catch (e) {

            }
        }
        fetchApi()
    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const arrayProducts = await productService.getProducts()
                setProducts(arrayProducts)
            } catch (e) {

            }
        }
        fetchApi()
    }, [])

    return (
        <Page>
            <Container className={cx('container-slider')}>
                <Slider className={cx('slider')} setting={{ fade: true, autoplaySpeed: 7000, speed: 2000, }}>
                    {
                        categories.map((item, index) => (
                            <div key={index} className={cx('slide')}>
                                <img className={cx('image')} src={item.image} alt={item.name} />
                            </div>
                        ))
                    }
                </Slider>
            </Container>


            <Container>
                <Group title='top sản phẩm mới nhất' classNameTitle={cx('group-title-news')}>
                    <Slider setting={{
                        slidesToShow: 5,
                        rows: 2,
                        responsive: [
                            {
                                breakpoint: 1240,
                                settings: {
                                    slidesToShow: 4,
                                }
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            }
                        ]
                    }}>
                        {
                            products.map((item, index) => (
                                <ProductItem key={index} data={item} />
                            ))
                        }
                    </Slider>
                </Group>
            </Container>

            <Container>
                <Group title='top Sales off' column="1">
                    <Slider setting={{
                        slidesToShow: 5,
                        rows: 1,
                        autoplaySpeed: 5000,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 4,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    rows: 2,
                                    slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    rows: 2,
                                    slidesToShow: 2,
                                }
                            }
                        ]
                    }}>
                        {
                            products.map((item, index) => (
                                <ProductItem key={index} data={item} />
                            ))
                        }
                    </Slider>
                </Group>
            </Container>

            {/* <Container className={cx('container-')}>
                <Group className={cx('category-sidebar')} title='Danh mục' column="1" space="4">
                    {
                        categories.map((item, index) => (
                            <CategoryItem key={index} data={item} />
                        ))
                    }
                </Group>
                <Group className={cx('product-list')} classNameTitle={cx('title', '')} title="Gợi ý cho bạn" column="4">
                    {
                        products.map((item, index) => (
                            <ProductItem key={index} data={item} />
                        ))
                    }
                </Group>
            </Container> */}
        </Page >
    );

}

export default Home;