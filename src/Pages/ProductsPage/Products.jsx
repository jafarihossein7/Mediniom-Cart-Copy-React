import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { get } from '../../Services/Http'
import Product from './Product'
import loading1 from "../../Gif/loading1.gif"
import ReactPaginate from 'react-paginate';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import MoreInfo from '../../Body-Components/MoreInfo'
import BreadCrumb from '../../Body-Components/BreadCrumb'

export default function Products() {
    const [products, setproducts] = useState(null)
    const [loading, setloading] = useState(false)

    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    let { productId } = useParams()

    useEffect(() => {
        setloading(true)
        let page = searchParams.get("page") ?? 0
        get(`/item?&size=12&page=${page}`)
            .then(response => {
                setproducts(response.data)
                setloading(false)
            })
    }, [searchParams])

    const handlePageClick = (event) => {
        const currentPageNumber = event.selected
        setSearchParams({ page: currentPageNumber + 1 });
    };

    function onProductClick(itemCode) {
        productId = itemCode
        navigate(`/product/${productId}`)
    }

    let links=[{title: "صفحه اصلی",link: "/"},{title: "آگهی ها",link: "/"}]


    return (
        <Layout>
            {
                loading ?
                    <img className='mx-auto' src={loading1} />
                    :
                    <>
                        <MoreInfo title="پلتفرمی برای خرید و فروش تجهیزات پزشکی، بیمارستانی، دندانپزشکی، آزمایشگاهی، لوازم مصرفی و زیبایی و دست دوم و نو" detail="ما در مدینیوم به دنبال بهینه‌سازی فرآیند خرید و فروش انواع تجهیزات پزشکی و مصرفی هستیم. برای همین منظور این امکان را فراهم کردیم، که پزشکان عزیز و کادر درمان گرانقدر، بهترین تجهیزات پزشکی و لوازم مصرفی مورد نیازشان را از میان آگهی‌های دست دوم و یا از ویترین فروشگاه‌های ما انتخاب و تهیه نمایند؛ در این میان از مشاوره و همراهی ما برای تهیه‌ی تجهیزات جانبی، خدمات پس از فروش و گارانتی بهره‌مند شوند؛ یا اگر قصد فروش تجهیزات پزشکی قبلی خود را داشته باشند، می‌توانند به صورت رایگان آگهی فروش درج نمایند تا سایرین فرصت دیدن آگهی آن‌ها را داشته باشند. فروشندگان تجهیزات مصرفی نیز این امکان را دارند که ویترین آنلاینی برای کسب و کار خود بسازند و از تعامل با کاربران متناسب، بهره ببرند. ما متعهد هستیم که برای ارتقا دانش تخصصی سلامت و تسهیل فرآیندهای خرید تجهیزات نقشی ایفا کنیم، پس یکی از ارکان مهمی که ما در مدینیوم توجه ویژه‌ای به آن داریم، تولید محتوای جامع مرتبط به سلامت، پزشکی و تجهیزات و اخبار پزشکی می‌باشد؛ پیشنهاد می‌کنیم حتما به بلاگ مدینیوم سر بزنید. در همین راستا، به زودی راهنمای جامع خرید تجهیزات پزشکی را در مدینیوم رونمایی خواهیم نمود و امیدواریم بتوانیم رضایت شما عزیزان را جلب نماییم." />
                        <BreadCrumb links={links}/>
                        <div className="products grid grid-cols-1 lg:grid-cols-4">
                            {
                                products?.content.map((value) => {
                                    return <Product
                                        key={value.id}
                                        faName={value.faName}
                                        price={value.price}
                                        image={value.image}
                                        itemCode={value.itemCode}
                                        persianTitle={value.itemGroup.persianTitle}
                                        categoryTitle={value.categoryTitle}
                                        onProductClick={onProductClick} />
                                })
                            }
                        </div>
                        {/* <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={products?.totalPages}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        /> */}
                    </>
            }
        </Layout>
    )
}
