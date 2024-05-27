import { useContext } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@mui/material';
import './WishCard.css'
import { Button } from '@mui/material';
import { WishItemsContext } from '../../../Context/WishItemsContext';

const WishCard = (props) => {

    const wishItems = useContext(WishItemsContext)

    const handelRemoveItem = () => {
        wishItems.removeItem(props.item)
    }

    const handelAddToCart = () => {
        wishItems.addToCart(props.item)
    };

    return ( 
        <div className="wishcard">
             <div className="wish__remove__item__icon">
                <IconButton>
                    <HighlightOffIcon onClick={handelRemoveItem}/>
                </IconButton>
            </div>
            <div className="wish__item__image">
                <img src={`https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww`} alt="item" className="wish__image"/>
            </div>
            <div className="wish__item__name">{props.item.name}</div>
            <div className="wish__item__price">${props.item.price}</div>
            <div className="add__to__cart">
                <Button variant='outlined' onClick={handelAddToCart} sx={[{'&:hover': { backgroundColor: '#58caec', borderColor: '#58caec', color: 'black'}, borderColor: 'black', backgroundColor: "black" , color: "#58caec"}]}>Add to cart</Button>
            </div>
        </div>
     );
}
 
export default WishCard;