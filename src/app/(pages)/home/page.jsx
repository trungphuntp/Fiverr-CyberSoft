import Scexplore from "./(components)/scexplore";
import Scfreelance from "./(components)/scfreelance";
import Schero from "./(components)/schero";
import Scpopular from "./(components)/scpopular";
import Sctestimonials from "./(components)/sctestimonials";
import Sctrustby from "./(components)/sctrustby";

const HomePage = () => {
    return (
        <main className="mainHome">
            {/* section hero */}
            <Schero />
            {/* section trustby */}
            <Sctrustby />
            {/* section popalar */}
            <Scpopular />
            {/* section freelance */}
            <Scfreelance />
            {/* section testimonials */}
            <Sctestimonials />
            {/* section explore  */}
            <Scexplore />
        </main>
    );
};

export default HomePage;
