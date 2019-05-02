import React, {Component, Fragment} from 'react';
import {Button} from "reactstrap";
import {fetchProducts} from "../../store/actions/productsActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ProductListItem from "../../components/ProductListItem/ProductListItem";

class Products extends Component {
    componentDidMount() {
        this.props.onFetchProducts();
    }

    render() {
        return (
            <Fragment>
                <h2>
                    Products
                    {this.props.user && this.props.user.role === 'admin' &&
                        <Link to="/products/new">
                            <Button
                                color="primary"
                                className="float-right"
                            >
                                Add product
                            </Button>
                        </Link>
                    }
                </h2>

                {this.props.products.map(product => (
                    <ProductListItem
                        key={product._id}
                        _id={product._id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    onFetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
