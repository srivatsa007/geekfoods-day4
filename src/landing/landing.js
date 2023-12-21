import QuoteBox from './quotes/QuoteBox'
import List from './quotes/list.json'

const Landing = () => {

    return(
        <div className='flex flex-col align-middle justify-center self-center gap-8 p-4 lg:gap-12 max-w-7xl'>
            {
                List.map((n) => (
                    <QuoteBox text = {n.text} byline={n.byline}/>
                ))
            
            };
        </div>
    );
}

export default Landing;



