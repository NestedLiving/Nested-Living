/*import { useEffect, useState } from 'react';
import { getHouse } from '../services/HouseService';
import HouseCard from '../components/HouseCard';


const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getHouse()
            .then((houses) => setHouses(houses))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='m'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {houses.map(house => (
                    <div key={house.id} className="col">
                        <HouseCard {...house} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Houses;*/
import { useEffect, useState } from 'react';
import { getHouse } from '../services/HouseService';
import HouseCard from '../components/HouseCard';
import { Container, Grid, makeStyles, Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
    },
    cardWrapper: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: theme.spacing(2),
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        },
    },
    cardImage: {
        width: '100%',
        height: 'auto',
    },
}));

const Houses = () => {
    const classes = useStyles();
    const [houses, setHouses] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getHouse()
            .then((houses) => {
                setHouses(houses);
                setLoaded(true);
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                {loaded && houses.map((house, index) => (
                    <Grid key={house.id} item xs={12} sm={6} md={4}>
                        <Fade in timeout={500 + index * 100} unmountOnExit>
                            <div className={classes.cardWrapper}>
                                <img src={house.images[0]} alt={house.title} className={classes.cardImage} />
                                <HouseCard {...house} />
                            </div>
                        </Fade>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Houses;
