import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Card, CardBody} from "reactstrap";
import ProductThumbnail from "../ProductThumbnail/ProductThumbnail";

const ProductListItem = props => {
    return (
        <Card style={{marginTop: '10px'}}>
            <CardBody>
                <ProductThumbnail image={props.image}/>
                <Link to={'/products/' + props._id}>
                    {props.title}
                </Link>
                <strong style={{marginLeft: '10px'}}>
                    {props.price} KGS
                </strong>
            </CardBody>
        </Card>
    );
};

ProductListItem.propTypes = {
    image: PropTypes.string,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default ProductListItem;
