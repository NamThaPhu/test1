import { useParams } from "react-router-dom";

import setTitle from "../../utils/setTitle";
import Container from "../../components/Container";
import Page from '../../components/Page'

function Products({ title }) {
    setTitle(title)
    const id = useParams();
    return (
        <Page>
            <Container>
                
            </Container>
        </Page>
    );
}

export default Products;