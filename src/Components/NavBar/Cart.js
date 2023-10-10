function Cart(props){

    function onClose(){
        props.closeCart();
    }

    return(
        <div>
            <div className="total">
                <span>Total amount</span>
                <span>$20</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={onClose}>Close</button>
                <button className="button">Order</button>
            </div>
        </div>     
    )

}

export default Cart;