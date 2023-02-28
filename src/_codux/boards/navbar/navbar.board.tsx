import { createBoard } from '@wixc3/react-board';
import Navbar from '../../../components/runback/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />
});
