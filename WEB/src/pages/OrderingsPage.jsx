import { useNavigate } from 'react-router-dom';
import OrderForm from '../components/OrderForm'; // Assicurati di importare correttamente il componente OrderForm
import { createOrdering } from '../services/OrderingService';

const OrderPage = () => {
    const navigate = useNavigate();

    const onSubmit = (values) => {
        return createOrdering(values)
            .then(createdOrder => navigate(`/orders/${createdOrder.id}`)) // Redirigi alla pagina dell'ordine appena creato
            .catch(error => console.error(error));
    }

    return (
        <div>
            <OrderForm onSubmit={onSubmit} />
        </div>
    );
}

export default OrderPage;
