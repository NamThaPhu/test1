import setTitle from "../../utils/setTitle";

function News({ title }) {
    setTitle(title)

    return (
        <h1>Tin tức về sản phẩm</h1>
    );
}

export default News;