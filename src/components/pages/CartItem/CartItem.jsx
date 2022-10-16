import { Button, Stack } from "react-bootstrap";
import storeItems from "../../../services/items.json";
import formatCurrency from "../../../utilities/formatCurrency";
import {useShopingCart} from '../../context/shoping-cart-context/ShopingCartContext'
 
export default function CartItem({ id, quantity } ) {
  const { removeFromCart } = useShopingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted " style={{ fontSize: ".75rem" }}></div>
      </div>
          <div>{formatCurrency(item.price * quantity)}</div>
          <Button
              variant="outline-danger"
              size="sm"
              onClick={()=>removeFromCart(item.id)}
          >&times;</Button>
    </Stack>
  );
}
