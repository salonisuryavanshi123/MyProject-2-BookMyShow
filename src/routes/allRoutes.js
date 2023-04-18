import Home from '../pages/Home';
import MovieGrid from '../pages/MovieGrid';
import MovieDetails from '../pages/MovieDetails';
import MovieTicketPlan from '../pages/MovieTicketPlan';
import MovieSeatPlan from '../pages/MovieSeatPlan';
import MovieCheckout from '../pages/MovieCheckout';
import Popcorn from '../pages/Popcorn';
import MovieList from '../pages/MovieList';



const allPublicRoutes = [
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/movie-grid",
        element:<MovieGrid />
    },
    {
        path:"/movie-details",
        element:<MovieDetails />
    },
    {
        path:"/movie-ticket-plan",
        element:<MovieTicketPlan />
    },
    {
        path:"/movie-seat-plan",
        element:<MovieSeatPlan />
    },
    {
        path:"/movie-checkout",
        element:<MovieCheckout />
    },
    {
        path:"/popcorn",
        element:<Popcorn />
    },
    {
        path:"/movie-list",
        element:<MovieList />
    },
]
const allPrivatecRoutes = [{},{}]


export {allPublicRoutes,allPrivatecRoutes}