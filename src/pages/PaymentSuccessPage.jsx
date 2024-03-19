import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentSuccessPage() {
    const navigate = useNavigate();

    // Logica e gestione del redirect dopo il pagamento

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate('/profile');
        }, 5000);

        return () => clearTimeout(redirectTimer);
    }, [navigate]);

    return (
        <div>
            <h2>Payment successful!</h2>
            <p>You will be redirected to your profile in 5 seconds.</p>
        </div>
    );
}

export default PaymentSuccessPage;
