import React, {Component, Fragment} from 'react';
import {Button, Card, CardBody} from "reactstrap";
import {fetchProducts} from "../../store/actions/productsActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ProductThumbnail from "../../components/ProductThumbnail/ProductThumbnail";

class Products extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return (
      <Fragment>
        <h2>
          Products
          <Link to="/products/new">
            <Button
              color="primary"
              className="float-right"
            >
              Add product
            </Button>
          </Link>
        </h2>

        {this.props.products.map(product => (
          <Card key={product._id} style={{marginTop: '10px'}}>
            <CardBody>
              <ProductThumbnail image={product.image}/>
              <Link to={'/products/' + product.id}>
                {product.title}
              </Link>
              <strong style={{marginLeft: '10px'}}>
                {product.price} KGS
              </strong>
            </CardBody>
          </Card>
        ))}

      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

const mapDispatchToProps = dispatch => ({
  onFetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
