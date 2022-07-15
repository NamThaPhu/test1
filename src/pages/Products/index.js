import classNames from 'classnames/bind'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

// import services
import * as categoryService from '../../services/categoryService'

import styles from './index.module.scss'
import setTitle from "../../utils/setTitle";
import CategoryItem from '../../components/Category';
import ProductItem from '../../components/Product';
import Container from '../../components/Container';
import Group from '../../components/Group';
import Page from '../../components/Page';

const cx = classNames.bind(styles)

function Products({ title }) {
    setTitle(title)

    const id = useParams().id
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
                const arrayProducts = await categoryService.getProducts(id)
                setProducts(arrayProducts)
            } catch (e) {

            }
        }
        fetchApi()
    }, [id])

    return (
        <Page>
            {/* <Container className={cx('container')}>
                <Group className={cx('category-sidebar')} title='Danh mục' column="1" space="4">
                    {
                        categories == '' ? 'Không có danh mục' : (
                            categories.map((item, index) => {
                                return (<CategoryItem key={index} data={item} />)
                            })
                        )
                    }
                </Group>
                <Group className={cx('product-list')} column="4">
                    {
                        products == '' ? 'Không có sản phẩm' : (
                            products.map((item, index) => (
                                <ProductItem key={index} data={item} />
                            ))
                        )
                    }
                </Group>
            </Container> */}
        </Page>
    );
}

export default Products;