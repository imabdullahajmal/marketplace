import storeItems from "../data/items.json"
import { Row, Col } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

export function Store(){
    return (
        <>
        <h1>Store</h1>
        <Row md={4} xs={1} lg={5} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item}/>
                </Col>
            ))}
            
        </Row>
        </>
    )
}