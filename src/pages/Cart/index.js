import setTitle from "../../utils/setTitle";
import Page from "../../components/Page";
import Container from "../../components/Container";
import Group from "../../components/Group";

function Cart({ title }) {
    setTitle(title)
    return (
        <Page>
            <Container>
                <Group title="Giỏ hàng"></Group>

            </Container>
        </Page>
    );
}

export default Cart;